function noisyClick(message) {
  alert(message || 'This mouse-only control fired. It is intentionally inaccessible.');
}

document.addEventListener('DOMContentLoaded', () => {
  const silentStatus = document.querySelector('[data-silent-status]');
  if (silentStatus) {
    setTimeout(() => {
      silentStatus.textContent = 'Saved, but this update is not in a live region.';
    }, 1200);
  }

  const fakeDraggable = document.querySelector('[data-fake-draggable]');
  if (fakeDraggable) {
    fakeDraggable.addEventListener('mousedown', () => {
      fakeDraggable.textContent = 'Dragged with mouse only';
    });
  }
});
