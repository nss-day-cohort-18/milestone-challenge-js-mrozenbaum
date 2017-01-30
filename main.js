"use-strict";
// variable for tree OBJ
var pineTree = {
  "height":0,
  "character":0
};
//////////////-- RECIEVING USER INPUT--/////////////////
// variable for input field for height in html
var height = document.getElementById("height");
// variable for input field for character in html
var char = document.getElementById("char");
// variable for button in html
var growTree = document.getElementById("growTree");
// adding event listeners to enter-key + button
// growTree.addEventListener("click", checkInput);
height.addEventListener("keypress", pressed);
char.addEventListener("keypress", pressed);

// function for enter-key. making sure both input fields are filled in.
function pressed(event) {
  console.log(event);
  if (event.keyCode === 13 && height.value === "") {
    alert("Enter height");

} else if (event.keyCode === 13 && char.value === "") {
    alert("Select a character");
// if both input fields are filled, tree grows.
} else {
    console.log("tree", pineTree);
    treeMaker(pineTree);
  }
};

// function to check if user entered something into input field
// of height and character
function checkInput() {
if (height.value === "") {
  alert("Enter height");

} else if (char.value === "") {
  alert("Select a character");

} else {
  console.log(pineTree);
  treeMaker(pineTree);
  }
};
// checking if event listeners are working properly (connected to keys of OBJ)
console.log("height", pineTree.height);
console.log("char", pineTree.character);
// Function for growing tree + connecting values to main variable
function treeMaker(pineTree){
  console.log("", pineTree);
  pineTree.height = height.value;
  pineTree.char = char.value;
  console.log("", pineTree);
  var spaceCalc = pineTree.height - 1;
  var charCalc = 1;

  for (i = 0; i < pineTree.height; i ++) {
    var spaces = " ".repeat(spaceCalc);
    var chars = pineTree.char.repeat(charCalc);
    var treeGrow = spaces + chars;
    console.log(treeGrow);
    spaceCalc -= 1;
    charCalc += 2;
  };
};