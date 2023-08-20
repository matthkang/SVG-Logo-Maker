// import parent Shape class
const Shape = require('./shapes.js')

class Square extends Shape {
    render() {
        return `<rect x="70" y="30" width="160" height="160" fill="${this.shapeColor}"/>`
    }

    renderText() {
        return `<text x="150" y="130" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }

    renderSvg() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1">\n\t${this.render()}\n\t${this.renderText()}\n</svg>`
    }
}

module.exports = Square;