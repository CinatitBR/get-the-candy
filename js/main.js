import { Sprite } from './sprite.js';

function main() {
    const container = new Sprite("#container");
    const ant = new Sprite(".ant");
    
    document.body.appendChild(container.node);
    document.body.appendChild(ant.node);
    ant.setPosition(container.getPosition().right, 300);

    function draw() {
        requestAnimationFrame(draw);
    
        ant.move(-2, 0);
    }

    // ant.move(50, -50);
    // requestAnimationFrame(draw);
}

main();