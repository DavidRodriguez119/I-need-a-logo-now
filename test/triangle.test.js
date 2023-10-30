const Triangle = require(`../lib/Triangle`);

const answer = `<svg version="1.1"width="300" height="200"xmlns="http://www.w3.org/2000/svg">
<triangle cx="150" cy="100" r="80" fill="darkblue" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">DSR</text>
</svg>`;

describe(`Triangle class`, () => {
    it(`returns the svg code with the arguments of the new Triangle`, () => {
        expect(new Triangle(`DSR`,`white`, `darkblue`).svgCode()).toBe(answer)
    });
});