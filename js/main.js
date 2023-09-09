import { Ant } from './ant.js';

function main() {
    const container = document.querySelector("#container");
    const ant = new Ant();

    container.appendChild(ant.node);
    ant.setPosition(container.getBoundingClientRect().right, 300);

    ant.move(50, -50);
}

main();