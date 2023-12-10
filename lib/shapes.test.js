// importing Triangle, Square, and Circle classes fomr ./shapes.js
const {Triangle, Square, Circle} = require('./shapes.js');

//testing for a triangle with a green background to render 

describe('Triangle test', () => {
    test('test for a triangle with a green background', () => {
        const shape = new Triangle();
        shape.setColor('green');
        expect(shape.render()).toEqual(
            '<polygon points"150, 18 244, 182 56, 182" fill="green" />'
        );
    });
});


//testing for a square with a blue background to render

describe('Square test', () => {
    test('test for a square with a blue background', () => {
        const shape = new Square();
        shape.setColor('blue');
        expect(shape.render()).toEqual(
            '<rect x="73" y="40" width="160" height="160" fill="blue" />'
        );
    });
});

