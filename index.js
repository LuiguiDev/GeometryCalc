const squareArea = (side) => {
  let result = side * side;
  return result
};

const squarePerimeter = (side) => {
  let result = side * 4;
  return result
};

const triangleArea = (base, height) => {
  let result = base * height /2;
  return result
};

const trianglePerimeter = (side1, side2, side3) => {
  let result = side1 + side2 + side3;
  return result
};

const circleArea = (radius) => {
  let result = radius * Math.PI * 2;
  return result
};

const circlePerimeter = (radius, pi) => {
  let result = 2 * Math.PI * radius;
  return result
};

const getInput = () => {
  var input = document.getElementById("entry");
  var value = input.value;
  var area = squareArea(value);
  var perimeter = squarePerimeter(value);
  
  const writerA = document.getElementById("areaContainer");
  writerA.innerText = area + " cm2"
  const writerB = document.getElementById("perimeterContainer");
  writerB.innerText = perimeter + " cm"
};