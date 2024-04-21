const button = document.getElementById('changeColorButton');
const heading = document.querySelector('h1');
const draggable = document.getElementById('draggable');
const dropzone = document.getElementById('dropzone');

dropzone.addEventListener('drop', (event) => {
  event.preventDefault();
  if (event.dataTransfer.getData('text/plain') === 'drag') {
    dropzone.classList.remove('active');
    console.log('Item dropped successfully!');
    // Remove the draggable element from its original position
    draggable.style.display = 'none';
  }
});

dropzone.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropzone.classList.add('active');
});

dropzone.addEventListener('dragleave', () => {
  dropzone.classList.remove('active');
});

draggable.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', 'drag');
});

button.addEventListener('click', () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  heading.style.color = randomColor;
});

