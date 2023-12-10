//Shape class utilizes constructor to define what it means to be a shape 
class Shape {
    constructor() {
        this.color ='';
    }

    //shape class take in setColor function
    setColor(colorVar){
        this.color=colorVar;
    }
}

//Triangle class inherits properties defined in the shape class 
class Triangle extends Shape {
    render() {
        //returns a polygon shape with color input 
        return `<polygon points= '150, 18 244, 182 56, 182' fill='${this.color}' />`;
    }
}

