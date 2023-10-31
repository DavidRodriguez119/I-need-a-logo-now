const Circle = require(`../lib/circle`);

const answer = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="100" fill="darkblue" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">DSR</text>
</svg>`;

describe(`Circle class`, () => {
    it(`returns the svg code with the arguments of the new Circle`, () => {
        expect(new Circle(`DSR`,`white`, `darkblue`).svgCode()).toBe(answer)
    });
});