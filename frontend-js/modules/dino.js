const Human = require('../../models/Human');
const Dinosaurus = require('../../models/Dinosaurus');
const dinoData = require('./dino.json');

// Create Dino Constructor
export default class DinoCompare {
  // Select DOM elements , and keep track of any usefull data
  constructor() {
    this.form = document.querySelector('#dino-compare');
    this.grid = document.querySelector('#grid');
    this.button = document.querySelector('#btn');
    this.name = document.getElementById('name');
    this.feet = document.getElementById('feet');
    this.inches = document.getElementById('inches');
    this.weight = document.getElementById('weight');
    this.diet = document.getElementById('diet');
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

  createRows(rows, cols, humanObj) {
    // generating random dino array
    let shuffledArray = shuffle(dinoData.Dinos);

    // counter for dino objects in array
    let dinoCount = 0;

    console.log(shuffledArray)
    this.grid.style.setProperty('--grid-rows', rows);
    this.grid.style.setProperty('--grid-cols', cols);

    for(let i = 0; i < (rows * cols); i++) {
      // Create grid elements
      let cell = document.createElement("div");
      let cellSpecies = document.createElement("h3");
      let cellImage = document.createElement("img");
      let cellFact = document.createElement("h2");
      this.grid.appendChild(cell).className = "grid-item";

      if (i != 4) {
        // initialize new dino object
        let dinosaurus = new Dinosaurus(shuffledArray[dinoCount], humanObj);

        // Add dino species
        cell.appendChild(cellSpecies).innerText = dinosaurus.data.species;

        // Add image
        cellImage.setAttribute("src", dinosaurus.image);
        cellImage.setAttribute("alt", "Flower");
        cell.appendChild(cellImage);     
        this.grid.appendChild(cell);

        // Add fact
        
        cell.appendChild(cellFact).innerText = "Fact place-holder ver very very very long";

        //increase the dino counter by one
        dinoCount++;

      } else {
        let humanName = document.createElement("h3");
        cell.appendChild(humanName).innerText = humanObj.name;
        cellImage.setAttribute("src", humanObj.image);
        cellImage.setAttribute("alt", "Flower");
        cell.appendChild(cellImage);    
        this.grid.appendChild(cell);
      }
      
    }
  }
  
  buildGrid() {
    let human = new Human(
      this.name.value,
      this.feet.value, 
      this.inches.value, 
      this.weight.value, 
      this.diet.value
      )
    this.form.classList.add("hide-dino-from");
    this.createRows(3, 3, human)
  }

}

// Fisher–Yates random array shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function addImage(obj) {
  
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
