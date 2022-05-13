const Human = require('../../models/Human');
const Dinosaurus = require('../../models/Dinosaurus');
const dinoData = require('./dino.json');

const dinosArray = [{
  species: 'Pigeon',
  weight: 0.5,
  height: 9,
  diet: 'herbavor',
  where: 'World Wide',
  when: 'Holocene',
  fact: 'All birds are living dinosaurs.'
}]


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
  createRows(rows, cols) {
    this.grid.style.setProperty('--grid-rows', rows);
    this.grid.style.setProperty('--grid-cols', cols);
    for(let i = 0; i < (rows * cols); i++) {
      let cell = document.createElement("div");
      cell.innerText = (i + 1);
      this.grid.appendChild(cell).className = "grid-item";
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
    
    let dinosaurus = new Dinosaurus(dinoData.Dinos[1], human);
    let nameFact = dinosaurus.compareNames(human.name);
    console.log(human)
    alert(`
    ${human.name}
    ${human.height} ${typeof(human.height)} 
    ${human.weight} ${typeof(human.weight)} 
    ${human.diet}
    ${nameFact}
    ${this.grid}
    `)
    this.form.classList.add("hide-dino-from");
    //this.grid.injectHTML()
    this.createRows(3, 3)
  }

  injectHTML(el) {
    el.insertAdjacentHTML('beforeend', `<div>${human.name}</div>`);
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
