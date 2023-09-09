export class Ant {
    // HTML node related to this object.
    node;

    constructor() {
        // Create html node
        this.node = document.createElement("div");
        this.node.classList.add("ant");
    }

    // Return DOMRect top and left positions.
    getPosition() {
        const left = this.node.getBoundingClientRect().left;
        const top = this.node.getBoundingClientRect().top;

        return { left, top }
    }

    // Set node position.
    setPosition(left, top) {
        this.node.style.left = left + "px";
        this.node.style.top = top + "px";
    }

    // Move object by a offset: x and y
    move(x, y) {
        const pos = this.getPosition();

        this.setPosition(pos.left + x, pos.top + y);
    }
}