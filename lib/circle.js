const Shapes = require(`../lib/shapes`);

class Circle extends Shapes {
    constructor (innerText, textColor, shapeColor){
        super(innerText, textColor, shapeColor);
    };
    svgCode () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.innerText}</text>
</svg>`
    }; 
};

module.exports = Circle