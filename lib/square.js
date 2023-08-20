// import parent Shape class
const Shape = require('./shapes.js')

class Square extends Shape {
    render() {
        return `<rect x="70" y="30" width="160" height="160" fill="${this.shapeColor}"/>`
    }

    renderText() {
        return `<text x="150" y="130" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = Square;