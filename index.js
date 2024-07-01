const canvas=document.getElementById('paint');
const context=canvas.getContext('2d');
const button=document.getElementById('reset');
let painting=false;
let startX,startY;
function getRandomColor(){
    const letters='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}
function startPosition(e){
    painting=true;
    startX=e.clientX - canvas.offsetLeft;
    startY=e.clientY - canvas.offsetTop;
}
function endPosition(e){
    if(painting){
    const endX=e.clientX - canvas.offsetLeft;
    const endY=e.clientY - canvas.offsetTop;
    const radius=Math.sqrt(Math.pow(endX-startX,2)+Math.pow((endY-startY),2));

    
    context.beginPath();
    context.arc(startX,startY,radius,0,Math.PI*2);
    context.fillStyle=getRandomColor();
    context.fill();
    context.closePath();

    }
    painting=false;
}
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove',(e) => {
    if(painting){
    const currentX=e.clientX - canvas.offsetLeft;
    const currentY=e.clientY - canvas.offsetTop;
    const radius=Math.sqrt(Math.pow(currentX-startX,2)+Math.pow((currentY-startY),2));

    context.clearRect(0,0,canvas.width,canvas.height);
    context.beginPath();
    context.arc(startX,startY,radius,0,Math.PI*2);
    context.strokeStyle=getRandomColor();
    context.stroke();
    context.closePath();
    }

});
button.addEventListener('click',() =>{
    context.clearRect(0,0,canvas.width,canvas.height);
});

