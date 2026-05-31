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

float ring(vec2 uv, float radius, float width) {
  float d = abs(length(uv) - radius);
  return smoothstep(width, 0.0, d);
}

float arc(vec2 uv, float radius, float width, float start, float end) {
  float a = atan(uv.y, uv.x);
  if (a < 0.0) a += 6.28318530718;
  float mask = smoothstep(start - 0.08, start, a) * (1.0 - smoothstep(end, end + 0.08, a));
  return ring(uv, radius, width) * mask;
}

mat2 rotate2d(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
  uv.y += 0.035;

  float t = u_time;
  float pulse = 1.0 + sin(t * 1.55) * 0.055;
  vec2 spin = rotate2d(t * 0.26) * uv;
  vec2 counter = rotate2d(-t * 0.18) * uv;

  float mainRing = ring(spin, 0.39 * pulse, 0.017);
  float outerGlow = ring(spin, 0.54 + sin(t * 0.9) * 0.025, 0.01);
  float innerRing = ring(counter, 0.255 / pulse, 0.008);
  float a1 = arc(spin, 0.42, 0.022, 0.15, 4.95);
  float a2 = arc(counter, 0.30, 0.012, 1.15, 5.7);

  float rays = 0.0;
  float angle = atan(uv.y, uv.x);
  float rayPattern = abs(sin(angle * 22.0 + t * 2.2));
  rays = smoothstep(0.986, 1.0, rayPattern) * smoothstep(0.12, 0.62, length(uv)) * (1.0 - smoothstep(0.88, 1.02, length(uv)));
  rays *= 0.32 + sin(t * 2.5 + angle * 6.0) * 0.18;

  float energy = 0.0;
  for (int i = 0; i < 8; i++) {
    float fi = float(i);
    float orbit = 0.29 + mod(fi, 3.0) * 0.07;
    float a = t * (0.55 + fi * 0.035) + fi * 0.785;
    vec2 p = vec2(cos(a), sin(a) * 0.72) * orbit;
    energy += 0.012 / max(0.008, length(uv - p));
  }
  energy *= 0.07;

  float core = exp(-dot(uv, uv) * 9.0) * (0.48 + sin(t * 2.8) * 0.13);
  float scan = smoothstep(0.015, 0.0, abs(uv.y - sin(uv.x * 7.0 + t * 1.2) * 0.035)) * 0.08;

  vec3 lime = vec3(0.74, 1.0, 0.22);
  vec3 emerald = vec3(0.12, 0.95, 0.47);
  vec3 cyan = vec3(0.18, 0.85, 1.0);
  vec3 white = vec3(0.92, 1.0, 0.9);

  vec3 color = vec3(0.0);
  color += lime * mainRing * 1.45;
  color += emerald * outerGlow * 0.72;
  color += cyan * innerRing * 0.52;
  color += white * a1 * 1.25;
  color += lime * a2 * 0.9;
  color += emerald * rays;
  color += lime * energy;
  color += white * core * 0.34;
  color += cyan * scan;

  float vignette = 1.0 - smoothstep(0.52, 1.05, length(uv));
  color *= vignette;

  float alpha = clamp(max(max(color.r, color.g), color.b) * 1.45, 0.0, 0.95);
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
