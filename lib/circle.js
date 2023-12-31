// import parent Shape class
const Shape = require('./shapes.js')

class Circle extends Shape {
    constructor(properties) {
        super(properties);
    }
    
    render() {
        return `<circle cx="150" cy="120" r="80" fill="${this.shapeColor}"/>`
    }

    renderText() {
        return `<text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }

    // renderSvg() {
    //     return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">\n\t${this.render()}\n\t${this.renderText()}\n</svg>`
    // }
}

module.exports = Circle;