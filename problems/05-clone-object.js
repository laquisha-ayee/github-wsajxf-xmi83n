/*
Given `obj` below, use a combination of the spread and rest operator in a single
statement to create a clone `objClone` that removes the `green` key-value pair
and adds a `yellow` key with value `pentagon`.

Hint: As a side effect, you will end up creating a `green` variable with value
"hexagon".
*/

const obj = {
  red: "circle",
  blue: "square",
  green: "hexagon"
}

// Your code here 

const objClone = Object.assign({}, obj);

const green = objClone.green;

delete objClone.green;

objClone.yellow = "pentagon";



console.log(objClone);  // { red: "circle", blue: "square", yellow: "pentagon" }
console.log(green);     // hexagon


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = {
    obj,
    objClone,
    green,
  };
} catch {}
