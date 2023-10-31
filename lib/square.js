const Shapes = require(`../lib/shapes`);

class Square extends Shapes {
    constructor (innerText, textColor, shapeColor){
        super(innerText, textColor, shapeColor);
    };
    svgCode () {
        return `<svg version="1.1"width="300" height="300"xmlns="http://www.w3.org/2000/svg">
<polygon points="30,30 30,270 270,270 270,30 " fill="${this.shapeColor}"/>
<text x="150" y="170" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.innerText}</text>
</svg>`
    }; 
};

module.exports = Square