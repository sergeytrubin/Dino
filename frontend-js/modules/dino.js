const Human = require('../../models/Human');
const dinoData = require('../../dino.json');

// Create Dino Constructor
export default class DinoCompare {
  constructor() {
    alert("executed")
    this.form = document.querySelector("#dino-compare");
    console.log(this.form);
    this.human = new Human(req.body);
    this.events();
  }

  // Events
  events() {
    this.form.addEventListener("click", () => {
      alert("I am here!");
    });
  }

}


    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
