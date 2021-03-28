const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const eraseEl = document.getElementById('eraser');

const ctx = canvas.getContext('2d');

let size = 1;
let isPressed = false;
let color = 'black';
let x;
let y;
let bErasing = false;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    bErasing = false;

    x = e.offsetX;
    y = e.offsetY;
    console.log(isPressed,x,y);
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    bErasing = false;

    x = undefined;
    y = undefined;
    console.log(isPressed,x,y);
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
    if(bErasing){
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        circleEraser(x2, y2);
        eraser(x, y, x2, y2);
        x = x2;
        y = y2;
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size+size;
    ctx.stroke();
}

function eraser(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = '#f5f5f5';
    ctx.lineWidth = 20;
    ctx.stroke();
}

function circleEraser(x, y){
    ctx.beginPath();
    ctx.arc(x,y,10,0,Math.PI*2);
    ctx.fillStyle = '#f5f5f5';
    ctx.fill();
}

increaseBtn.addEventListener('click', () => {
    size++;
    if(size > 50){
        size = 50;
    }
    sizeEl.innerText = size;
})

decreaseBtn.addEventListener('click', () => {
    size--;
    if(size<1){
        size = 1;
    }
    sizeEl.innerText = size;
})

clearEl.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

colorEl.addEventListener('change', (e) => {
    color = e.target.value;
})

eraseEl.addEventListener('click', () => {
    bErasing = true;
})