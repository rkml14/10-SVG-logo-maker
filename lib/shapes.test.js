const Shape = require('./shape');
const Square = require('./square');
const Triangle = require('./triangle');
const Circle = require('./circle');


describe('Triangle',() => {
    it('should create triangle logo', () => {
        const triangle = new Triangle("YYY", "white", "blue");
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="white">YYY</text>');

    });
});




// const { describe } = require('yargs');
// const Shape = require('./shape');
// const Triangle = require('./triangle');

// describe('shape', () => {
//     it('should accept give logo color & name', () => {
//         shape.shapeColor("blue");
//         shape.textColor("white");
//         shape.text = ('YYY');
//         expect(shape.)
//     })
// })


// describe('triangle',() => {
//     it('should create triangle logo', () => {
//         const triangle = new Triangle();
//         expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>');

//     });
// });


/// example test (given to us)
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


// describe('invalid', () => {
//     it('should return false for empty password', () => {
//       const str = '';

//       const result = new Validate().isPassword(str);

//       expect(result).toEqual(false);
//     });
//   });
// });


// describe('Arithmetic', () => {
//     // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
//     // This test checks to see if 2 % 2 has a remainder of 0 and returns 0.
//     describe('modulus', () => {
//       it('should calculate 2 % 2 and return 0 as the remainder', () => {
//         const total = 0;
//         const arithmetic = new Arithmetic();
//         expect(arithmetic.modulus(2, 2)).toEqual(total);
//       });
//     });
//   });

// from mini project:
// const Component = require('../lib/component.js');

// describe('Component', () => {
//   test('should throw error if render() is called', () => {
//     const component = new Component();
//     const err = new Error('Child class must implement a render() method.')
//     expect(component.render).toThrow(err);
//   });
// });

// test('testing the creation of the triangle log'), () => {
//     const shape = new Triangle();
//     shape.shapeColor("blue");
//     expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// }


