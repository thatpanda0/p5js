/*
------
30 June 2025
Decidotron Assignment, DigiPen Intro to Computer Science

Assignment content: "For this assignment, you will be making a mini BuzzFeed type quiz with at least 4 "questions" that you store the answers in variables of some kind. The variables can be Boolean values or numbers."

Quiz type: Foods you should try
*/

function setup() {
  // Setup variables function
  // do you like sugary foods?
  var sugar = true;
  // do you like salty foods?
  var salt = true;
  // do you like spicy foods?
  var spicy = false;
  // do you like sour foods?
  var sour = false;
  
  if (sugar) {
    if (salt) {
      console.log("Orange chicken");
    }
    else if(spicy) {
      console.log("Candied Jalapeno");
    }
    else if(sour) {
      console.log("Sour Patch Gummies");
    }
    else {
      console.log("Fruit(s)");
    }
  }
  else {
    if (salt) {
      console.log("Pretzels");
    }
    else if(spicy) {
      console.log("Takis");
    }
    else if(sour) {
      console.log("Pickles");
    }
    else {
      console.log("Soup");
    }
  }
}
