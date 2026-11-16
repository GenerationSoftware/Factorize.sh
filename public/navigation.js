document.addEventListener('click', (event) => {
  document.querySelectorAll('.platform-nav[open]').forEach((dropdown) => {
    if (!dropdown.contains(event.target)) dropdown.removeAttribute('open');
  });
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  document.querySelectorAll('.platform-nav[open]').forEach((dropdown) => {
    dropdown.removeAttribute('open');
    dropdown.querySelector('summary').focus();
  });
});
