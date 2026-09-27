(() => {
  const canvas = document.getElementById("hero-canvas");
  const hero = document.querySelector(".hero");
  const context = canvas?.getContext("2d", { alpha: false });
  if (!canvas || !hero || !context) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointer = { x: 0, y: 0 };
  const stars = [];
  let width = 0;
  let height = 0;
  let visible = true;
  let frame = 0;
  let start = performance.now();

  // Fixed seed keeps the composition stable across resizes and refreshes.
  let seed = 61837;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let i = 0; i < 145; i += 1) {
    stars.push({ x: random(), y: random(), radius: 0.35 + random() * 1.25, phase: random() * Math.PI * 2, tint: random() });
  }

  function resize() {
    const rect = hero.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    const ratio = Math.min(window.devicePixelRatio || 1, 1.6);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    draw((performance.now() - start) / 1000);
  }

  function glow(x, y, radius, inner, outer) {
    const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, inner);
    gradient.addColorStop(1, outer);
    context.fillStyle = gradient;
    context.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  }

  function ellipsePoint(cx, cy, rx, ry, angle, rotation) {
    const x = Math.cos(angle) * rx;
    const y = Math.sin(angle) * ry;
    return {
      x: cx + x * Math.cos(rotation) - y * Math.sin(rotation),
      y: cy + x * Math.sin(rotation) + y * Math.cos(rotation),
    };
  }

  function orbit(cx, cy, rx, ry, rotation, time, intensity, front) {
    context.save();
    context.globalCompositeOperation = "screen";
    const light = context.createLinearGradient(cx - rx, cy - ry, cx + rx, cy + ry);
    light.addColorStop(0, `rgba(105, 218, 236, ${0.58 * intensity})`);
    light.addColorStop(0.34, `rgba(165, 227, 236, ${0.17 * intensity})`);
    light.addColorStop(0.6, `rgba(255, 124, 95, ${0.55 * intensity})`);
    light.addColorStop(1, `rgba(255, 209, 149, ${0.76 * intensity})`);

    context.beginPath();
    context.ellipse(cx, cy, rx, ry, rotation, front ? 0 : Math.PI, front ? Math.PI : Math.PI * 2);
    context.strokeStyle = light;
    context.lineWidth = front ? 2.2 : 1.25;
    context.shadowColor = front ? "#ff7658" : "#7ecce2";
    context.shadowBlur = front ? 22 : 13;
    context.stroke();
    context.shadowBlur = 0;

    if (front) {
      for (let i = 0; i < 3; i += 1) {
        const angle = (time * (0.2 + i * 0.06) + i * 2.2) % (Math.PI * 2);
        if (angle > Math.PI) continue;
        const point = ellipsePoint(cx, cy, rx, ry, angle, rotation);
        glow(point.x, point.y, 10 + i * 3, i === 1 ? "rgba(255,218,172,.7)" : "rgba(116,217,235,.55)", "rgba(0,0,0,0)");
        context.beginPath();
        context.arc(point.x, point.y, i === 1 ? 2.2 : 1.5, 0, Math.PI * 2);
        context.fillStyle = i === 1 ? "#ffe2bd" : "#bbf3f5";
        context.fill();
      }
    }
    context.restore();
  }

  function draw(time) {
    if (!width || !height) return;
    const mobile = width < 700;
    const cx = width * (mobile ? 0.55 : 0.66) + pointer.x * (mobile ? 5 : 18);
    const cy = height * (mobile ? 0.38 : 0.46) + pointer.y * (mobile ? 4 : 13);
    const radius = Math.min(width * (mobile ? 0.36 : 0.255), height * (mobile ? 0.285 : 0.38));
    const pulse = 0.5 + 0.5 * Math.sin(time * 0.55);

    const backdrop = context.createLinearGradient(0, 0, width, height);
    backdrop.addColorStop(0, "#080d14");
    backdrop.addColorStop(0.48, "#080b10");
    backdrop.addColorStop(1, "#110d14");
    context.fillStyle = backdrop;
    context.fillRect(0, 0, width, height);

    context.save();
    context.globalCompositeOperation = "screen";
    glow(cx - radius * 0.55, cy - radius * 0.4, radius * 2.3, `rgba(20,89,117,${0.16 + pulse * 0.03})`, "rgba(0,0,0,0)");
    glow(cx + radius * 0.8, cy + radius * 0.65, radius * 2.2, `rgba(131,45,31,${0.16 + (1 - pulse) * 0.04})`, "rgba(0,0,0,0)");
    context.restore();

    stars.forEach((star) => {
      const opacity = 0.12 + (0.12 + 0.13 * Math.sin(time * 0.6 + star.phase)) * (star.radius / 1.6);
      context.fillStyle = star.tint > 0.85 ? `rgba(244,151,115,${opacity})` : `rgba(181,211,229,${opacity})`;
      context.beginPath();
      context.arc(star.x * width, star.y * height, star.radius, 0, Math.PI * 2);
      context.fill();
    });

    // A faint horizon and broad accretion glow give the form scale.
    context.save();
    context.globalCompositeOperation = "screen";
    const horizon = context.createLinearGradient(cx - radius * 2.8, 0, cx + radius * 2.8, 0);
    horizon.addColorStop(0, "rgba(75,192,221,0)");
    horizon.addColorStop(0.28, "rgba(89,199,228,.16)");
    horizon.addColorStop(0.52, "rgba(255,191,149,.09)");
    horizon.addColorStop(0.76, "rgba(255,117,87,.18)");
    horizon.addColorStop(1, "rgba(255,117,87,0)");
    context.fillStyle = horizon;
    context.fillRect(cx - radius * 2.8, cy - 1, radius * 5.6, 2);
    glow(cx, cy, radius * 1.4, "rgba(255,155,117,.13)", "rgba(0,0,0,0)");
    context.restore();

    const rotation = -0.34 + Math.sin(time * 0.12) * 0.045;
    orbit(cx, cy, radius * 1.5, radius * 0.48, rotation, time, 0.62, false);
    orbit(cx, cy, radius * 1.32, radius * 0.38, rotation + 0.18, time, 0.5, false);
    orbit(cx, cy, radius * 1.02, radius * 1.44, 0.52 + time * 0.018, time, 0.34, false);

    // The central dark body masks the rear orbits.
    context.save();
    context.shadowColor = "rgba(255,135,96,.27)";
    context.shadowBlur = 45;
    context.beginPath();
    context.arc(cx, cy, radius, 0, Math.PI * 2);
    context.fillStyle = "#05070a";
    context.fill();
    context.restore();

    const body = context.createRadialGradient(cx - radius * 0.38, cy - radius * 0.42, radius * 0.06, cx + radius * 0.16, cy + radius * 0.1, radius * 1.2);
    body.addColorStop(0, "#273643");
    body.addColorStop(0.3, "#151e29");
    body.addColorStop(0.68, "#090e15");
    body.addColorStop(1, "#020406");
    context.beginPath();
    context.arc(cx, cy, radius, 0, Math.PI * 2);
    context.fillStyle = body;
    context.fill();

    context.save();
    context.globalCompositeOperation = "screen";
    context.beginPath();
    context.arc(cx, cy, radius + 0.5, -2.58, -0.1);
    context.lineWidth = Math.max(2, radius * 0.028);
    context.strokeStyle = "rgba(143,224,239,.62)";
    context.shadowColor = "#74cde5";
    context.shadowBlur = 25;
    context.stroke();
    context.beginPath();
    context.arc(cx, cy, radius + 0.5, -0.08, 1.42);
    context.lineWidth = Math.max(2, radius * 0.022);
    context.strokeStyle = "rgba(255,138,99,.73)";
    context.shadowColor = "#ff674d";
    context.shadowBlur = 23;
    context.stroke();
    context.restore();

    orbit(cx, cy, radius * 1.5, radius * 0.48, rotation, time, 0.88, true);
    orbit(cx, cy, radius * 1.32, radius * 0.38, rotation + 0.18, time + 1.7, 0.58, true);
    orbit(cx, cy, radius * 1.02, radius * 1.44, 0.52 + time * 0.018, time, 0.42, true);

    context.save();
    context.globalCompositeOperation = "screen";
    glow(cx + radius * 0.98, cy + radius * 0.1, radius * 0.45, `rgba(255,118,82,${0.11 + pulse * 0.07})`, "rgba(0,0,0,0)");
    glow(cx - radius * 0.82, cy - radius * 0.44, radius * 0.35, `rgba(94,210,233,${0.1 + (1 - pulse) * 0.06})`, "rgba(0,0,0,0)");
    context.restore();
  }

  function animate(now) {
    frame = 0;
    if (!visible || document.hidden) return;
    draw(reduceMotion.matches ? 0 : (now - start) / 1000);
    if (!reduceMotion.matches) frame = requestAnimationFrame(animate);
  }

  function resume() {
    if (frame) cancelAnimationFrame(frame);
    if (!visible || document.hidden) return;
    frame = requestAnimationFrame(animate);
  }

  hero.addEventListener("pointermove", (event) => {
    if (reduceMotion.matches) return;
    const rect = hero.getBoundingClientRect();
    pointer.x = (event.clientX - rect.left) / rect.width - 0.5;
    pointer.y = (event.clientY - rect.top) / rect.height - 0.5;
  }, { passive: true });
  hero.addEventListener("pointerleave", () => { pointer.x = 0; pointer.y = 0; });
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    resume();
  });
  observer.observe(hero);
  const resizer = new ResizeObserver(resize);
  resizer.observe(hero);
  document.addEventListener("visibilitychange", resume);
  reduceMotion.addEventListener("change", resume);
  resize();
  resume();
})();
