// import parent Shape class
const Shape = require('./shapes.js')

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }

    renderText() {
        return `<text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }

    renderSvg() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1">\n\t${this.render()}\n\t${this.renderText()}\n</svg>`
    }
}

module.exports = Triangle;