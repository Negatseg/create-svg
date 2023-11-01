class SVG {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}




class circle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
}
    const myCircle = new circle(300, 200)

class triangle {
      constructor(width, height) {
        this.width = width;
        this.height = height;
      }
  }
      const myTriangle = new circle(300, 200)


class square {
        constructor(width, height) {
          this.width = width;
          this.height = height;
        }
    }
        const mySquare = new circle(300, 200)


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
 module.exports = circle;
 module.exports = triangle;
 module.exports = square;

 module.exports = SVG;


// // const SVG = require('./your-svg-file.js'); // Replace with the actual file path
// // const mySVG = new SVG(500, 300);
// // mySVG.drawCircle(100, 100, 50);
// // mySVG.drawRect(200, 200, 100, 50);