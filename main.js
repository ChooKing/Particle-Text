import {Particle} from "./particle.js";
const WIDTH = 300;
const HEIGHT = 200;
const PARTICLE_SIZE = 4;
const canvas = document.getElementById("canvas");
canvas.width = WIDTH * PARTICLE_SIZE;
canvas.height = HEIGHT * PARTICLE_SIZE;
const ctx = canvas.getContext("2d");
const particles = [];
function init(){

    const offScreenCanvas = document.createElement("canvas");
    offScreenCanvas.width = 800;
    offScreenCanvas.height = 400;
    const offScreenCTX = offScreenCanvas.getContext("2d");
    offScreenCTX.font = "bold 24px serif";
    offScreenCTX.fillText("Hello world", 0, 20);
    const imageData = offScreenCTX.getImageData(0, 0, 800, 400);

    for (let i = 0; i < imageData.data.length; i += 4){
        const x = (i % 3200) /4;
        const y = Math.floor(i / 3200);
        const randX = Math.random() > 0.5 ? Math.floor(- Math.random() * WIDTH): Math.floor(Math.random() * WIDTH);
        const randY = Math.random() > 0.5 ? Math.floor(- Math.random() * HEIGHT): Math.floor(Math.random() * HEIGHT);

        const alpha = imageData.data[i + 3];
        if(alpha > 64){
            particles.push(new Particle(x , y, randX * PARTICLE_SIZE, randY * PARTICLE_SIZE));
        }
    }


}
function animate(t){
    ctx.fillStyle = "yellow";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update(t);
        particle.draw(ctx);
    });

    requestAnimationFrame(animate);
}
init();
animate(0);