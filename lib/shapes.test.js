const Shape = require('./shape');
const Square = require('./square');
const Triangle = require('./triangle');
const Circle = require('./circle');

describe('Shape', () => {
    it('should test logo color for Shape', () => {
        const shape = new Shape("YYY", "white", "blue");
        expect(shape.text).toEqual("YYY");
    });
    it('should test text color for Shape', () => {
        const shape = new Shape("YYY", "white", "blue");
        expect(shape.textColor).toEqual("white");
    });
    it('should test shape color for Shape', () => {
        const shape = new Shape("YYY", "white", "blue");
        expect(shape.shapeColor).toEqual("blue");
    });
});

describe('Triangle', () => {
    it('should create triangle shape', () => {
        const triangle = new Triangle("YYY", "white", "blue");
        expect(triangle.render()).toEqual(`<svg height="200" width="300">
        <polygon points="150, 18 244, 182 56, 182" fill="blue"/> 
        <text x="150" y="160" font-size="60" text-anchor="middle" fill="white">YYY</text>
        </svg>
        `)
    });
});

describe('Circle', () => {
    it('should create triangle shape', () => {
        const circle = new Circle("YYY", "white", "blue");
        expect(circle.render()).toEqual(`<svg height="200" width="300">
        <circle cx="150" cy="100" r="80" fill="blue"/> 
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">YYY</text>
        </svg>
        `)
    });
});

describe('Square', () => {
    it('should create square shape', () => {
        const square = new Square("YYY", "white", "blue");
        expect(square.render()).toEqual(`<svg height="200" width="300">
        <rect x="50" y="20" width="150" height="150" fill="blue"/> 
        <text x="125" y="115" font-size="60" text-anchor="middle" fill="white">YYY</text>
        </svg>
        `)
    });
});

