// import parent Shape class
const Shape = require('./shapes.js')

class Square extends Shape {
    // constructor(text, textColor, shape, shapeColor) {
    //     this.text = text;
    //     this.textColor = textColor;
    //     this.shape = shape;
    //     this.shapeColor = shapeColor;
    // }

    render() {
        return `<rect width="100" height="100" fill=${this.shapeColor}/>`
    }

    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.text}</text>`
    }

    renderSvg() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            ${this.render()}
            ${this.renderText()}
        </svg>
        `
    }
}

module.exports = Square;