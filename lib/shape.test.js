import { Triangle, Circle, Square } from './shape.js'; 

describe('Shape Classes', () => {
    describe('Triangle', () => {
        it('should render correct SVG for Triangle', () => {
            const triangle = new Triangle('blue');
            const expectedSVG = '<polygon points="150,40 230,160 70,160" fill="blue" />';
            expect(triangle.render()).toEqual(expectedSVG);
        });
    });

    describe('Square', () => {
        it('should render correct SVG for Square', () => {
            const square = new Square('red');
            const expectedSVG = '<rect x="70" y="20" width="160" height="160" fill="red" />';
            expect(square.render()).toEqual(expectedSVG);
        });
    });

    describe('Circle', () => {
        it('should render correct SVG for Circle', () => {
            const circle = new Circle('green');
            const expectedSVG = '<circle cx="150" cy="100" r="80" fill="green" />';
            expect(circle.render()).toEqual(expectedSVG);
        });
    });
});