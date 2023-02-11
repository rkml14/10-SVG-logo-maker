class Shape {
    constructor(text, textColor, shapeColor){
        if (!text){
            throw new Error ("Logo text cannot be blank!")
        }
        if (text.length > 3) {
            throw new Error("Text cannot be more then THREE characters!");
        } 
         // throw error if text colour is empty 
         if (!textColor) {
            throw new Error("You must input a text colour!")
        }

        // throw error if shape background colour is empty 
        if (!shapeColor) {
            throw new Error("You must input a shape background colour!")
        }
        this.text = text; 
        this.textColor = textColor; 
        this.shapeColor = shapeColor; 
    }

// Complete 1st Error Check 

    render() {
    }
}


module.exports = Shape; 