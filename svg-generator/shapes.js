{/* <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><circle cx="50" cy="50" r="50" fill="none" stroke="black" />
<polygon points="0,0 100,0 50,100" fill="none" stroke="black" />
<rect x="0" y="0" width="80" height="80" fill="none" stroke="black" />
</svg> */}



class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Shape is an abstract class and cannot be instantiated directly.");
    }
  }

  toSVG() {
    throw new Error("The toSVG method must be implemented in derived classes.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  toSVG() {
    return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="none" stroke="black" />`;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  toSVG() {
    return `<polygon points="0,0 ${this.base},0 ${this.base / 2},${this.height}" fill="none" stroke="black" />`;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  toSVG() {
    return `<rect x="0" y="0" width="${this.side}" height="${this.side}" fill="none" stroke="black" />`;
  }
}

class SVG {
  constructor(shapes) {
    this.shapes = shapes;
  }

  toSVG() {
    const shapeSVGs = this.shapes.map(shape => shape.toSVG()).join('\n');
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">${shapeSVGs}</svg>`;
  }
}

const circle = new Circle(50);
const triangle = new Triangle(100, 100);
const square = new Square(80);

const svgDocument = new SVG([circle, triangle, square]);
console.log(svgDocument.toSVG());





// class SVG {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
// }

// // Circle class
// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.calculateArea = function () {
//   return Math.PI * this.radius ** 2;
// };

// Circle.prototype.render = function () {
//   console.log(`Drawing a circle with radius ${this.radius}`);
//   // You can render the circle using a graphics library or HTML canvas here
// };

// // Square class
// function Square(sideLength) {
//   this.sideLength = sideLength;
// }

// Square.prototype.calculateArea = function () {
//   return this.sideLength ** 2;
// };

// Square.prototype.render = function () {
//   console.log(`Drawing a square with side length ${this.sideLength}`);
//   // You can render the square using a graphics library or HTML canvas here
// };

// function Triangle(sideLength) {
//   this.sideLength = sideLength;
// }

// Triangle.prototype.calculateArea = function () {
//   return this.sideLength ** 2;
// };

// Triangle.prototype.render = function () {
//   console.log(`Drawing a triangle with side length ${this.sideLength}`);
//   // You can render the square using a graphics library or HTML canvas here
// };

// // Create instances of Circle and Square
// const circle = new Circle(5);
// const square = new Square(4);
// const triangle = new Triangle(4);

// // Calculate and render shapes
// console.log("Circle - Area:", circle.calculateArea());
// circle.render();

// console.log("Square - Area:", square.calculateArea());
// square.render();

// console.log("Triangle - Area:", triangle.calculateArea());
// triangle.render();








// class Circle {
//     constructor(width, height) {
//       this.width = width;
//       this.height = height;
//     }
// }
//     const myCircle = new Circle(300, 200)
//     return

// class Triangle {
//       constructor(width, height) {
//         this.width = width;
//         this.height = height;
//       }
//   }
//       const myTriangle = new Triangle(300, 200)
//         return

// class Square {
//         constructor(width, height) {
//           this.width = width;
//           this.height = height;
//         }
//     }
//         const mySquare = new Square(300, 200)
//         return



//         // Circle class
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }

//   // Method to calculate the area of the circle
//   calculateArea() {
//     return Math.PI * this.radius ** 2;
//   }

//   // Method to calculate the perimeter (circumference) of the circle
//   calculatePerimeter() {
//     return 2 * Math.PI * this.radius;
//   }
// }

// // Triangle class
// class Triangle {
//   constructor(base, height, side1, side2, side3) {
//     this.base = base;
//     this.height = height;
//     this.side1 = side1;
//     this.side2 = side2;
//     this.side3 = side3;
//   }

//   // Method to calculate the area of the triangle
//   calculateArea() {
//     return (this.base * this.height) / 2;
//   }

//   // Method to calculate the perimeter of the triangle
//   calculatePerimeter() {
//     return this.side1 + this.side2 + this.side3;
//   }
// }

// // Create instances of Circle and Triangle
// const circle = new Circle(5);
// const triangle = new Triangle(6, 8, 10, 10, 10);

// // Calculate and display the area and perimeter
// console.log("Circle - Radius:", circle.radius);
// console.log("Circle - Area:", circle.calculateArea());
// console.log("Circle - Perimeter:", circle.calculatePerimeter());

// console.log("Triangle - Base:", triangle.base);
// console.log("Triangle - Height:", triangle.height);
// console.log("Triangle - Area:", triangle.calculateArea());
// console.log("Triangle - Perimeter:", triangle.calculatePerimeter());
//In this example:

// The Circle class has properties for the radius and methods to calculate the area and perimeter of a circle.

// The Triangle class has properties for the base, height, and three sides, along with methods to calculate the area and perimeter of a triangle.

// You can create instances of these classes and then use their methods to calculate and display the area and perimeter for circles and triangles.






//     drawCircle(x, y, radius) {
//       // "circle" may be any tag name
// var shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// // Set any attributes as desired
// shape.setAttribute("cx", x);
// shape.setAttribute("cy", y);
// shape.setAttribute("r",  radius);
// shape.setAttribute("fill", "green");
// // Add to a parent node; document.documentElement should be the root svg element.
// // Acquiring a parent element with document.getElementById() would be safest.
// document.documentElement.appendChild(shape);
    //   // Code to draw a circle
    //   const generateSVG = (userInput) => {
    //    // const draw = SVG().size(300, 200);
    //     const shape = draw[userInput.shape]().fill(userInput.shapeColor);
      
    //     shape.size(100, 100).center(150, 100);
    //     draw.text(userInput.text).move(125, 90).font({ fill: userInput.textColor });
      
    //     draw.save('logo.svg');
    //     //fs.writeFileSync('().svg', draw.svg());
    //     console.log('Generated logo.svg');
    //   };
      
//       const main = async () => {
//         const userInput = await promptUser();
//         generateSVG(userInput);
//       };
      
//       main();
//     }
  
//     drawRect(x, y, width, height) {
//       // Code to draw a rectangle
//       const generateSVG = (userInput) => {
//         const draw = SVG().size(300, 200);
//         const shape = draw[userInput.shape]().fill(userInput.shapeColor);
      
//         shape.size(100, 100).center(150, 100);
//         draw.text(userInput.text).move(125, 90).font({ fill: userInput.textColor });
      
//         draw.save('logo.svg');
//         //fs.writeFileSync('().svg', draw.svg());
//         console.log('Generated logo.svg');
//       };
      
//       const main = async () => {
//         const userInput = await promptUser();
//         generateSVG(userInput);
//       };
      
//       main();
//     }
    
//     drawTriangle(x,y, width, height) {
//         const generateSVG = (userInput) => {
//             const draw = SVG().size(300, 200);
//             const shape = draw[userInput.shape]().fill(userInput.shapeColor);
          
//             shape.size(100, 100).center(150, 100);
//             draw.text(userInput.text).move(125, 90).font({ fill: userInput.textColor });
          
//             draw.save('logo.svg');
//             //fs.writeFileSync('().svg', draw.svg());
//             console.log('Generated logo.svg');
//           };
          
//           const main = async () => {
//             const userInput = await promptUser();
//             generateSVG(userInput);
//           };
          
//           main();
//     }
//     // Other methods for drawing SVG elements
  
//     // You can also add other methods and properties to your SVG class
//   }
  
//   // Export the SVG class
 module.exports = Circle;
 module.exports = Triangle;
 module.exports = Square;

 module.exports = SVG;


// // const SVG = require('./your-svg-file.js'); // Replace with the actual file path
// // const mySVG = new SVG(500, 300);
// // mySVG.drawCircle(100, 100, 50);
// // mySVG.drawRect(200, 200, 100, 50);