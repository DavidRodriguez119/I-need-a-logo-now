const Triangle = require(`../lib/Triangle`);

const answer = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150,0 0,200 300,200" fill="darkblue"/>
<text x="150" y="150" font-size="60" text-anchor="middle" fill="white">DSR</text>
</svg>`;

describe(`Triangle class`, () => {
    it(`returns the svg code with the arguments of the new Triangle`, () => {
        expect(new Triangle(`DSR`,`white`, `darkblue`).svgCode()).toBe(answer)
    });
});