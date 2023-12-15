class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        throw new Error('Input render method');
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="25,0 50,50 0,50" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="40" height="40" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="100" r="50" fill="${this.color}" />`;
    }
}

export { Triangle, Circle, Square }; 