export class Sprite {
    // HTML node related to this object.
    node;

    // Numbers: the left and top css values.
    left;
    top;

    /*
        string selector: the element selector, might be a .class or #id.
    */
    constructor(selector) {
        // Create html node
        this.node = document.createElement("div");

        // Might be a class (.) or id (#)
        const type = selector[0];
        const selectorName = selector.substring(1);

        if (type === ".")
            this.node.classList.add(selectorName);
        else if (type === "#")
            this.node.id = selectorName;
    }

    // Return DOMRect positions.
    getPosition() {
        return this.node.getBoundingClientRect();
    }

    // Set node position.
    setPosition(left, top) {
        this.left = left;
        this.top = top;

        this.node.style.left = left + "px";
        this.node.style.top = top + "px";
    }

    // Move object by a offset: x and y
    move(x, y) {
        this.setPosition(this.left + x, this.top + y);
    }
}