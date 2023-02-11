//pulling in the parent class of Shape from shapes.js
const Shape = require('./shape');

//construction class Circle extending Shape.  super is pulling the parameters from Shape
class Circle extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor); 
    }
    
    //renders the html code to create the circle
    render(){
        return `<svg height="200" width="300">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/> 
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }
}

module.exports=Circle;

