// Inquirer (node package manager) import
const inquirer = require('inquirer');

//file system module import
const fs = require('fs');

// importing classes fomr ./lib/shapes directory
const {Triangle, Square, Circle } = require('./lib/shapes')

// Function writes the SVG file using user answers from inquirer prompts
function writeToFile(fileName, answers) {
    // File starts as an empty string
    let svgString = "";
    // Sets width and height of logo container
    svgString =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    // <g> tag wraps <text> tag so that user font input layers on top of polygon -> not behind
    svgString += "<g>";
    // Takes user input for shape choice and inserts it into SVG file
    svgString += `${answers.shape}`;

// Conditional check 
let shapeChoice;
if (answers.shape === 'Triangle') {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
} else if (answers.shape === 'Square') {
    shapeChoice = new Square();
    svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
} else {
    shapeChoice = new Circle();
    svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
}  


}    