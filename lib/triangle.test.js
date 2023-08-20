const Triangle = require('./triangle.js');

// A testing suite for Arithmetic is created.
describe('Triangle', () => {
    // Check that render() returns the correct SVG shape element.
    describe('render', () => {
        it('should render the correct SVG shape element', () => {
            const shape = new Triangle();
            shape.setShapeColor("green");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
        });
    });

    // Check that renderText() returns the correct text element.
    describe('renderText', () => {
        it('should render the correct text element', () => {
            const shape = new Triangle();
            shape.setText("MK");
            shape.setTextColor("white");
            expect(shape.renderText()).toEqual('<text x="150" y="140" font-size="45" text-anchor="middle" fill="white">MK</text>');
        });
    });

    // Check that renderSvg() creates svg template for shape.
    describe('renderSvg', () => {
        it('should create svg template for shape object', () => {
            const shape = new Triangle();
            shape.setShapeColor("black");
            shape.setTextColor("white");
            shape.setText("MK");
            expect(shape.renderSvg()).toEqual('<svg xmlns="http://www.w3.org/2000/svg" version="1.1">\n\t<polygon points="150, 18 244, 182 56, 182" fill="black" />\n\t<text x="150" y="140" font-size="45" text-anchor="middle" fill="white">MK</text>\n</svg>');
        });
    });
});

