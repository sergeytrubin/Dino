const Human = require('../../models/Human');
const dinoData = require('../../dino.json');

// Create Dino Constructor
export default class DinoCompare {
  // Select DOM elements , and keep track of any usefull data
  constructor() {
    //this.injectHTML();
    //this.allFields = document.querySelectorAll("#dino-compare .form-control");
    this.form = document.querySelector("#dino-compare");
    this.button = document.querySelector("#btn");
    this.name = document.getElementById('name');
    this.feet = document.getElementById('feet');
    this.inches = document.getElementById('inches');
    this.weight = document.getElementById('weight');
    this.diet = document.getElementById('diet');
    this.height = parseInt(this.feet);
    //this.human = new Human(req.body);
    this.events();
  }

  // Events
  events() {
    this.button.addEventListener("click", (e) => {
      e.preventDefault(); 
      this.buildGrid();
    });
  }

  // Methods
  
  buildGrid() {
    this.form.classList.add("hide-dino-from")
    alert(`
    ${this.name.value} ${typeof(this.name.value)}
    ${this.feet.value} ${typeof(this.feet.value)}
    ${this.inches.value} ${typeof(this.inches.value)}
    ${this.weight.value} ${typeof(this.weight.value)}
    ${this.diet.value} ${typeof(this.diet.value)}
    ${parseInt(this.height)} ${typeof(this.height)}
    `)
  }

  injectHTML() {
    document.body.insertAdjacentHTML('beforeend', `<div>${this.name}</div>`);
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
