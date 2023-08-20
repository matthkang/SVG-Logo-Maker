const Circle = require('./circle.js');

// A testing suite for Arithmetic is created.
describe('Circle', () => {
    // Check that render() returns the correct SVG shape element.
    describe('render', () => {
        it('should render the correct SVG shape element', () => {
            const shape = new Circle();
            shape.setShapeColor("green");
            expect(shape.render()).toEqual('<circle cx="150" cy="120" r="80" fill="green"/>');
        });
    });

    // Check that renderText() returns the correct text element.
    describe('renderText', () => {
        it('should render the correct text element', () => {
            const shape = new Circle();
            shape.setText("MK");
            shape.setTextColor("white");
            expect(shape.renderText()).toEqual('<text x="150" y="140" font-size="60" text-anchor="middle" fill="white">MK</text>');
        });
    });

    // Check that renderSvg() creates svg template for shape.
    describe('renderSvg', () => {
        it('should create svg template for shape object', () => {
            const shape = new Circle();
            shape.setShapeColor("black");
            shape.setTextColor("white");
            shape.setText("MK");
            expect(shape.renderSvg()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">\n\t<circle cx="150" cy="120" r="80" fill="black"/>\n\t<text x="150" y="140" font-size="60" text-anchor="middle" fill="white">MK</text>\n</svg>');
        });
    });
});

