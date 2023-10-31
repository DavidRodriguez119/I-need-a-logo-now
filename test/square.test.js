const Square = require(`../lib/square`);

const answer = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="10,10 10,190 190,190 190,10 " fill="darkblue"/>
<text x="100" y="120" font-size="60" text-anchor="middle" fill="white">DSR</text>
</svg>`;

describe(`Square class`, () => {
    it(`returns the svg code with the arguments of the new Square`, () => {
        expect(new Square(`DSR`,`white`, `darkblue`).svgCode()).toBe(answer)
    });
});