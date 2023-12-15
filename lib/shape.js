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
        return `<polygon points="150,40 230,160 70,160" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

export { Triangle, Circle, Square }; 