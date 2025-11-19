const canvas = document.getElementById("neonCanvas");
const ctx = canvas.getContext("2d");

function resize(){
 canvas.width = window.innerWidth - 260;
 canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

function draw(){
 ctx.clearRect(0,0,canvas.width,canvas.height);

 let g = ctx.createLinearGradient(0,0,canvas.width,0);
 g.addColorStop(0, c1.value);
 g.addColorStop(0.33, c2.value);
 g.addColorStop(0.66, c3.value);
 g.addColorStop(1, c4.value);

 ctx.lineWidth = 20;
 ctx.strokeStyle = g;

 let type = document.getElementById("borderType").value;

 if(type === "line"){
    ctx.beginPath();
    ctx.moveTo(0,10);
    ctx.lineTo(canvas.width,10);
    ctx.stroke();
 }
 else if(type === "rectangle"){
    ctx.strokeRect(10,10,canvas.width-20, canvas.height-20);
 }
 else if(type === "ellipse"){
    ctx.beginPath();
    ctx.ellipse(canvas.width/2, canvas.height/2, canvas.width/3, canvas.height/3, 0, 0, Math.PI*2);
    ctx.stroke();
 }
}

setInterval(draw, 20);

function copyOBS(){
 navigator.clipboard.writeText(window.location.href);
 alert("Copiado!");
}
