const shapeForm = document.getElementById('shapeForm');
const shapeContainer = document.getElementById('shapeContainer');

shapeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const color = document.getElementById('color').value;
    const shapeType = document.getElementById('shape').value;

    if (width && height) {
        const shape = document.createElement('div');
        shape.style.width = width + 'px';
        shape.style.height = height + 'px';
        shape.style.backgroundColor = color;
        shape.classList.add('shape');

        if (shapeType === 'circle') {
            shape.classList.add('circle');
        }

        shapeContainer.appendChild(shape);
        shapeForm.reset();
    } else {
        alert('Пожалуйста, заполните ширину и высоту фигуры.');
    }
});