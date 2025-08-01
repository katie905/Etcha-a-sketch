const canvas = document.getElementById('pad');
const ctx = canvas.getContext('2d');

let centerX = canvas.width / 2;
let centerY = canvas.height / 2;
const step = 4;

ctx.strokeStyle = 'black';
ctx.fillStyle = 'black';
ctx.lineWidth = 4;
ctx.lineCap = 'round';

ctx.beginPath();
ctx.arc(centerX, centerY, 2, 0, Math.PI * 2); 
ctx.fill();

ctx.beginPath();
ctx.moveTo(centerX, centerY);

document.addEventListener('keydown', (event) => {
let newX = centerX;
let newY = centerY;

if (event.key === 'ArrowUp') centerY -= step;
else if (event.key === 'ArrowDown') centerY += step;
else if (event.key === 'ArrowLeft') centerX -= step;
else if (event.key === 'ArrowRight') centerX += step;
else return;


ctx.lineTo(centerX, centerY);
ctx.stroke();

});