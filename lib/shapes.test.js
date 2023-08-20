const Shape = require('./shapes.js');

// A testing suite for Arithmetic is created.
describe('Shape', () => {
    // Check that setText() sets the text to the object.
    describe('setText', () => {
        it('should set text to the shape object', () => {
            const shape = new Shape();
            shape.setText("MK");
            expect(shape.text).toEqual('MK');
        });
    });

    // Check that setTextColor() sets the text color to the object.
    describe('setTextColor', () => {
        it('should set text color to the shape object', () => {
            const shape = new Shape();
            shape.setTextColor("white");
            expect(shape.textColor).toEqual('white');
        });
    });

    // Check that setShape() sets shape to the object.
    describe('setShape', () => {
        it('should set shape to the shape object', () => {
            const shape = new Shape();
            shape.setShape("triangle");
            expect(shape.shape).toEqual('triangle');
        });
    });

    // Check that setShapeColor() sets shape color to the object.
    describe('setShapeColor', () => {
        it('should set shape color to the shape object', () => {
            const shape = new Shape();
            shape.setShapeColor("white");
            expect(shape.shapeColor).toEqual('white');
        });
    });
});

