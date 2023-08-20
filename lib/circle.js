// import parent Shape class
const Shape = require('./shapes.js')

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="120" r="80" fill="${this.shapeColor}"/>`
    }

    renderText() {
        return `<text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = Circle;