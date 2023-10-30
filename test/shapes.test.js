// Jest tests for shapes
const Shapes = require(`../lib/shapes`);

describe(`Shapes class`, () => {
    it(`set the first argument as the innerText property`, () => {
        expect(new Shapes(`DSR`,`white`, `darkblue`).innerText).toBe(`DSR`);
    })
    it(`set the second argument as the textColor property`, () => {
        expect(new Shapes(`DSR`,`white`, `darkblue`).textColor).toBe(`white`);
    })
    it(`set the third argument as the shapeColor property`, () => {
        expect(new Shapes(`DSR`,`white`, `darkblue`).shapeColor).toBe(`darkblue`);
    })
});