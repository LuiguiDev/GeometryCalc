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

const squareResults = () => {
  var input = document.getElementById("squareEntry");
  var value = input.value;
  var area = squareArea(value);
  var perimeter = squarePerimeter(value);
  
  const writerA = document.getElementById("squareAreaC");
  writerA.innerText = area + " cm2"
  const writerB = document.getElementById("squarePerimeterC");
  writerB.innerText = perimeter + " cm"
};

const triangleResults = () => {
  var input = document.getElementById("triangleEntry");
  var value = input.value;
  var area = triangleArea(value);
  var perimeter = trianglePerimeter(value);
  
  const writerA = document.getElementById("triangleAreaC");
  writerA.innerText = area + " cm2"
  const writerB = document.getElementById("trianglePerimeterC");
  writerB.innerText = perimeter + " cm"
};