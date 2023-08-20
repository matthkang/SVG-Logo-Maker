class Shape {
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

    renderSvg() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1">\n\t${this.render()}\n\t${this.renderText()}\n</svg>`
    }
}

module.exports = Shape;