// Declare variables below to save the different divs of your story.

let storyOpeningScreen = document.querySelector(".story-opening");
let optionOneButton = document.querySelector(".option-one");
let optionTwoButton = document.querySelector(".option-two");

let optionOneScreen = document.querySelector( ".option-one-screen");
let optionTwoScreen = document.querySelector( ".option-two-screen");






// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


optionOneButton.addEventListener('click', function(){
  optionOneScreen.style.display = "block";
  optionTwoScreen.style.display = "none";
  storyOpeningScreen.style.display = "none";
  optionOneButton.style.display = "none";
  optionTwoButton.style.display = "none";
});

optionTwoButton.addEventListener('click', function(){
  optionOneScreen.style.display = "none";
  optionTwoScreen.style.display = "block";
  optionTwoButton.style.display = "none";
  optionOneButton.style.display = "none";
});


// INSERT_VARIABLE.addEventListener('click', function(){

// });