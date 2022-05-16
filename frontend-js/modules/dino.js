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

    // Grid style
    this.grid.style.setProperty('--grid-rows', rows);
    this.grid.style.setProperty('--grid-cols', cols);

    // Create grid elements
    for(let i = 0; i < (rows * cols); i++) {
      let cell = document.createElement("div");
      let cellSpecies = document.createElement("h3");
      let cellImage = document.createElement("img");
      let cellFact = document.createElement("h3");
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
        if (dinosaurus.data.species === "Pigeon") {
          cell.appendChild(cellFact).innerText = "All birds are living dinosaurs.";
        } else {
          cell.appendChild(cellFact).innerText = getRandomFact(dinosaurus.getFact(humanObj));
        }       

        //increase the dino counter by one
        dinoCount++;
      
      // Add human tile
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
    // initialize new human object and storinh the user input
    let human = new Human(
      this.name.value,
      this.feet.value, 
      this.inches.value, 
      this.weight.value, 
      this.diet.value
      )

    // hide the form
    this.form.classList.add("hide-dino-from");

    // Create grid
    this.createRows(3, 3, human);
  }
}

// shuffle the elements of array.
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// random fact
function getRandomFact(facts) {
  shuffle(facts);
  return facts[0];
}