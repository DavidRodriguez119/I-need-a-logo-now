const Shapes = require(`../lib/shapes`);

class Square extends Shapes {
    constructor (innerText, textColor, shapeColor){
        super(innerText, textColor, shapeColor);
    };
    svgCode () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="10,10 10,190 190,190 190,10 " fill="${this.shapeColor}"/>
<text x="100" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.innerText}</text>
</svg>`
    }; 
};

module.exports = Square