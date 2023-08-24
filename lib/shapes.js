class Shape {
    constructor({text, textColor, shape, shapeColor} = {}) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    setText(text) {
        this.text = text;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
    setShape(shape) {
        this.shape = shape;
    }
    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    render() {
        console.log("should be defined in child class");
    }
    renderText() {
        console.log("should be defined in child class");
    }

    renderSvg() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">\n\t${this.render()}\n\t${this.renderText()}\n</svg>`
    }
}

module.exports = Shape;