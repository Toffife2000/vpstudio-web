"use client";

import { useEffect, useRef } from "react";

const vertexShader = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

mat2 rotate2d(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float ring(vec2 uv, float radius, float width) {
  float d = abs(length(uv) - radius);
  return smoothstep(width, 0.0, d);
}

float petal(vec2 uv, float angle, float reach, float width, float fold, float time) {
  vec2 p = rotate2d(angle) * uv;
  p.x += 0.03 * sin(time + p.y * 7.0);
  float r = length(p);
  float a = atan(p.y, p.x);
  float blade = exp(-pow(abs(a) / width, 2.0));
  float edge = smoothstep(0.02, 0.12, r) * (1.0 - smoothstep(reach * 0.74, reach, r));
  float rib = sin(r * 34.0 - time * 1.8 + fold) * 0.5 + 0.5;
  return blade * edge * (0.72 + rib * 0.28);
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);

  float t = u_time;
  float desktopShift = smoothstep(720.0, 980.0, u_resolution.x);
  uv.x -= 0.22 * desktopShift;
  uv.y += 0.03;

  float breathe = 1.0 + sin(t * 0.85) * 0.045;
  vec2 bloomUv = rotate2d(sin(t * 0.22) * 0.04) * uv / breathe;
  float r = length(bloomUv);
  float a = atan(bloomUv.y, bloomUv.x);

  float bloom = 0.0;
  for (int i = 0; i < 18; i++) {
    float fi = float(i);
    float angle = fi * 0.34906585 + sin(t * 0.18 + fi) * 0.08;
    float reach = 0.56 + 0.14 * sin(fi * 1.7 + t * 0.35);
    float width = 0.095 + 0.035 * sin(fi * 2.1);
    bloom += petal(bloomUv, angle, reach, width, fi * 0.6, t) * (0.45 + 0.55 * sin(fi * 1.3 + t * 0.28) * 0.5 + 0.5);
  }

  float veins = abs(sin(a * 18.0 + r * 26.0 - t * 1.4));
  veins = smoothstep(0.94, 1.0, veins) * smoothstep(0.1, 0.5, r) * (1.0 - smoothstep(0.72, 0.92, r));

  float halo = exp(-dot(bloomUv, bloomUv) * 2.2) * 0.28;
  float core = exp(-dot(bloomUv, bloomUv) * 34.0) * (0.9 + sin(t * 2.4) * 0.1);
  float outer = ring(rotate2d(t * 0.08) * bloomUv, 0.58 + sin(t * 0.4) * 0.02, 0.018);

  float particles = 0.0;
  for (int i = 0; i < 16; i++) {
    float fi = float(i);
    float orbit = 0.34 + mod(fi, 4.0) * 0.095;
    float pa = t * (0.24 + fi * 0.012) + fi * 0.73;
    vec2 p = vec2(cos(pa), sin(pa) * 0.66) * orbit;
    particles += 0.006 / max(0.008, length(bloomUv - p));
  }

  float grain = noise(st * vec2(160.0, 90.0) + t * 0.2) * 0.05;
  float cinematicMask = smoothstep(0.96, 0.14, length(uv + vec2(0.05, 0.0)));
  float sideShade = smoothstep(0.0, 0.55, st.x) * (1.0 - smoothstep(0.92, 1.0, st.x));

  vec3 blackGreen = vec3(0.005, 0.02, 0.012);
  vec3 lime = vec3(0.72, 1.0, 0.25);
  vec3 emerald = vec3(0.08, 0.92, 0.46);
  vec3 cyan = vec3(0.1, 0.84, 1.0);
  vec3 white = vec3(0.92, 1.0, 0.88);

  vec3 color = blackGreen * 0.42;
  color += emerald * bloom * 0.16;
  color += lime * bloom * bloom * 0.06;
  color += white * core * 0.74;
  color += lime * veins * 0.22;
  color += cyan * outer * 0.18;
  color += emerald * halo;
  color += lime * particles * 0.2;
  color += grain;
  color *= cinematicMask * sideShade;

  float alpha = clamp(max(max(color.r, color.g), color.b) * 1.28, 0.0, 0.96);
  gl_FragColor = vec4(color, alpha);
}
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function drawFallback(ctx: CanvasRenderingContext2D, width: number, height: number, time: number) {
  ctx.clearRect(0, 0, width, height);
  const cx = width * 0.5;
  const cy = height * 0.48;
  const base = Math.min(width, height) * 0.35;
  const pulse = 1 + Math.sin(time * 0.0022) * 0.08;

  const glow = ctx.createRadialGradient(cx, cy, base * 0.08, cx, cy, base * 1.45);
  glow.addColorStop(0, "rgba(236,253,245,0.32)");
  glow.addColorStop(0.24, "rgba(190,242,100,0.2)");
  glow.addColorStop(0.54, "rgba(34,197,94,0.1)");
  glow.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(cx, cy, base * 1.55, 0, Math.PI * 2);
  ctx.fill();

  for (let i = 0; i < 28; i += 1) {
    const angle = time * 0.001 + (i / 28) * Math.PI * 2;
    const x1 = cx + Math.cos(angle) * base * 0.35;
    const y1 = cy + Math.sin(angle) * base * 0.35;
    const x2 = cx + Math.cos(angle) * base * 1.35;
    const y2 = cy + Math.sin(angle) * base * 1.35;
    ctx.strokeStyle = "rgba(190,242,100,0.16)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  ctx.save();
  ctx.shadowColor = "rgba(190,242,100,0.95)";
  ctx.shadowBlur = 42;
  ctx.strokeStyle = "rgba(190,242,100,0.92)";
  ctx.lineWidth = width < 700 ? 10 : 18;
  ctx.beginPath();
  ctx.arc(cx, cy, base * pulse, time * 0.001, time * 0.001 + Math.PI * 1.72);
  ctx.stroke();
  ctx.restore();
}

export function HeroNeonSystem() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let gl: WebGLRenderingContext | null = null;
    let fallback: CanvasRenderingContext2D | null = null;
    let program: WebGLProgram | null = null;
    let resolutionLocation: WebGLUniformLocation | null = null;
    let timeLocation: WebGLUniformLocation | null = null;

    const initWebgl = () => {
      gl = canvas.getContext("webgl", {
        alpha: true,
        antialias: true,
        depth: false,
        premultipliedAlpha: false
      });

      if (!gl) return false;
      const vertex = createShader(gl, gl.VERTEX_SHADER, vertexShader);
      const fragment = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);
      if (!vertex || !fragment) return false;

      program = gl.createProgram();
      if (!program) return false;
      gl.attachShader(program, vertex);
      gl.attachShader(program, fragment);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return false;

      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

      const position = gl.getAttribLocation(program, "position");
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

      resolutionLocation = gl.getUniformLocation(program, "u_resolution");
      timeLocation = gl.getUniformLocation(program, "u_time");
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
      return true;
    };

    const hasWebgl = initWebgl();
    if (!hasWebgl) {
      fallback = canvas.getContext("2d", { alpha: true });
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      if (fallback) fallback.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (gl) gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = (time: number) => {
      if (gl && program && resolutionLocation && timeLocation) {
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(program);
        gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
        gl.uniform1f(timeLocation, time * 0.001);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      } else if (fallback) {
        drawFallback(fallback, width, height, time);
      }

      frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full opacity-100 mix-blend-screen"
    />
  );
}
