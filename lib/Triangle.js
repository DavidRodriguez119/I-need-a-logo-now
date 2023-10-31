const Shapes = require(`../lib/shapes`);

class Triangle extends Shapes {
    constructor (innerText, textColor, shapeColor){
        super(innerText, textColor, shapeColor);
    };
    svgCode () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150,0 0,200 300,200" fill="${this.shapeColor}"/>
<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.innerText}</text>
</svg>`
    }; 
};

module.exports = Triangle