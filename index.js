// factory function
// function createCircle(radius) {
//   return {
//     radius: radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }

// const circle = createCircle(1);
// circle.draw();

// // constructor funtion
// // note in naming functiopn of object consturctor is that
// // the firstname should be in capital letter
// // note every object in JS have a constructor fnction,
// // which revers to the property or functio n use in creating the function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// Circle.call({}, 1);

// const another = new Circle(1);

// the premitive data type and refrence data type
// PREMITIVE DATA
// let x = 10;
// let y = x;

// x = 20;
// y = x;

// console.log(x);
// console.log(y);
// REFRENCE DATA
let x = { value: 10 };
let y = x;

// x = 20;
// y = x;

console.log(x.value);
console.log(y);
