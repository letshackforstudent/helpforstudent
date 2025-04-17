const copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    const successful = navigator.clipboard.writeText(value);

    if (successful) {
      console.log('Code copied successfully!');
    } else {
      alert('Failed to copy code to clipboard.');
    }
  });
});
