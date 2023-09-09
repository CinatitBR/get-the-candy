import { Sprite } from './sprite.js';

function main() {
    const container = new Sprite("#container");
    const ant = new Sprite(".ant");

    document.body.appendChild(container.node);
    container.node.appendChild(ant.node);
    ant.setPosition(container.node.clientWidth, 300);

    function draw() {
        requestAnimationFrame(draw);
    
        ant.move(-2, 0);
    }

    requestAnimationFrame(draw);
}

main();