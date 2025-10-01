let animationId = null;

export function animate({ duration, timing, draw }) {
  // Отмена предыдущей запущенной анимации
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  const start = performance.now();

  function frame(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    const progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      animationId = requestAnimationFrame(frame);
    } else {
      animationId = null;
    }
  }

  animationId = requestAnimationFrame(frame);
}
