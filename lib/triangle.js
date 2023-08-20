// import parent Shape class
const Shape = require('./shapes.js')

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }

    renderText() {
        return `<text x="150" y="140" font-size="45" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = Triangle;