import { Triangle, Circle, Square } from './lib/shape.js'; 

describe('Shape Classes', () => {
    describe('Triangle', () => {
        it('should render correct SVG for Triangle', () => {
            const triangle = new Triangle('blue');
            const expectedSVG = '<polygon points="25,0 50,50 0,50" fill="blue" />';
            expect(triangle.render()).toEqual(expectedSVG);
        });
    });

    describe('Square', () => {
        it('should render correct SVG for Square', () => {
            const square = new Square('red');
            const expectedSVG = '<rect x="10" y="10" width="40" height="40" fill="red" />';
            expect(square.render()).toEqual(expectedSVG);
        });
    });

    describe('Circle', () => {
        it('should render correct SVG for Circle', () => {
            const circle = new Circle('green');
            const expectedSVG = '<circle cx="25" cy="25" r="25" fill="green" />';
            expect(circle.render()).toEqual(expectedSVG);
        });
    });
});