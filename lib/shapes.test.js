

/// example test (given to us) 
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// from mini project: 
const Component = require('../lib/component.js');

describe('Component', () => {
  test('should throw error if render() is called', () => {
    const component = new Component();
    const err = new Error('Child class must implement a render() method.')
    expect(component.render).toThrow(err);
  });
});


