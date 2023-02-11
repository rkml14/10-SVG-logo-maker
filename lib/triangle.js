//pulling in the parent class of Shape from shapes.js
const Shape = require('./shape');

//construction class Circle extending Shape
class Triangle extends Shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);  //super is pulling these parameters from Shape
    }
    
    //renders the html code to create the circle
    render(){
        return `<svg height="200" width="300">
        <polygon points="150, 18 244, 182 56, 182" fill=${this.shapeColor}/> 
        <text x="150" y="160" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    }

}

module.exports=Triangle;

