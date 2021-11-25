const squareArea = (side) => {
  let result = side * side;
  return result
};
const squarePerimeter = (side) => {
  let result = side * 4;
  return result
};

const rectangleArea = (base, height) => {
  let result = base * height;
  return result;
};
const rectangleP = (base, height) => {
  let result = base + height + base + height;
  return result;
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
  let result = Math.PI * radius ** 2;
  return parseInt(result)
};
const circlePerimeter = (radius) => {
  let result = 2 * Math.PI * radius;
  return parseInt(result)
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

const rectangleResults = () => {
  var inputBase = document.getElementById("rectangleEntryB");
  var inputHeight = document.getElementById("rectangleEntryH");
  var values = [inputBase.value, inputHeight.value];
  var area = rectangleArea(values[0], values[1]);
  var perimeter = rectangleP(Number(values[0]), Number(values[1]));

  let writerS = document.getElementById("rectangleP");
  writerS.innerText = perimeter + "cm"
  let writerA = document.getElementById("rectangleAreaC");
  writerA.innerText = area + "cm2";
}



const triangleCalcArea = () => {
  var inputB = document.getElementById("triangleEntryB");
  var inputH = document.getElementById("triangleEntryH");
  var values = [inputB.value, inputH.value]
  var area = triangleArea(values[0], values[1]);
  
  const writerA = document.getElementById("triangleAreaC");
  writerA.innerText = area + " cm2"
};
const triangleCalcPerimeter = () => {
  var inputA = document.getElementById("triangleSideA");
  var inputB = document.getElementById("triangleSideB");
  var inputC = document.getElementById("triangleSideC");
  var sides = [inputA.value, inputB.value, inputC.value];
  var perimeter = trianglePerimeter(Number(sides[0]), Number(sides[1]), Number(sides[2]));

  const writerP = document.getElementById("trianglePerimeterC")
  writerP.innerText = perimeter
}

const circleResults = () => {
  var input = document.getElementById("circleEntry");
  var value = input.value;
  var area = circleArea(value);
  var perimeter = circlePerimeter(value);

  var writerA = document.getElementById("circleAreaC");
  writerA.innerText = area + "cm2";
  var writerP = document.getElementById("circlePerimeterC");
  writerP.innerText = perimeter + "cm";
};