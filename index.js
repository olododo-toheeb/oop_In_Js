// factory function
function createCircle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);
circle.draw();

// constructor funtion
// note in naming functiopn of object consturctor is that
// the firstname should be in capital letter
// note every object in JS have a constructor fnction,
// which revers to the property or functio n use in creating the function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);
