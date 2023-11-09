// Add your code here

myArray = ["Chicken", "Turkey", "Duck"];
myArray[0] = "Goose ";
myArray[1] = "Bird ";
myArray.unshift("Hen ");

// Don't edit the code below here!

section.innerHTML = " ";
let para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;

section.appendChild(para1);
