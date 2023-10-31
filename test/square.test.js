const Square = require(`../lib/square`);

const answer = `<svg version="1.1"width="300" height="300"xmlns="http://www.w3.org/2000/svg">
<polygon points="30,30 30,270 270,270 270,30 " fill="darkblue"/>
<text x="150" y="170" font-size="60" text-anchor="middle" fill="white">DSR</text>
</svg>`;

describe(`Square class`, () => {
    it(`returns the svg code with the arguments of the new Square`, () => {
        expect(new Square(`DSR`,`white`, `darkblue`).svgCode()).toBe(answer)
    });
});