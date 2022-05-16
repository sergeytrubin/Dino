// Dino object
let  Dinosaurus = function (data, human) {
    this.data = data;
    this.facts = [];
    this.image = `images/${data.species.toLowerCase()}.png`;
}

// Dino method to create facts array
Dinosaurus.prototype.getFact = function(human) {
    this.facts.push(compareNames(this.data.species, human.name));
    this.facts.push(compareWeight(this.data.weight, human.weight));
    this.facts.push(compareHeight(this.data.height, human.height));
    this.facts.push(compareDiet(this.data.diet, human.diet));
    this.facts.push(`I am first apeared in ${this.data.when} period.`);
    this.facts.push(`I lived in ${this.data.where}`);

    this.facts.push(this.data.fact);
    return this.facts;
}

// Functions to compare name, height, weight and diet
function compareNames(dinoSpecies, humanName) {
    if (!humanName || humanName === "") {
        return `My name is ${dinoSpecies}`;
    }
    if (dinoSpecies.length > humanName.length) {
        return "My name is longer than yours!";
    } else if (dinoSpecies.length < humanName.length) {
        return "You have very long name!";
    } else {
        return "Our names are of the same length.";
    }
}

function compareWeight(dinoWeight, humanWeight) {
    if (!humanWeight || humanWeight === 0) {
        return `My weight is ${dinoWeight}`;
    }
    if (dinoWeight > humanWeight) {
        return `I am ${(dinoWeight / humanWeight).toFixed(1)} times  heavier than you`;
    } else if (dinoWeight < humanWeight) {
        return "You are heavier than me";
    } else {
        return "Our weight is equal.";
    }
}

function compareHeight(dinoHeight, humanHeight) {
    if (!humanHeight || humanHeight === 0) {
        return `My height is ${dinoHeight}`;
    }
    if (dinoHeight > humanHeight) {
        return `I am ${(dinoHeight / humanHeight).toFixed(1)} times  higher than you`;
    } else if (dinoHeight < humanHeight) {
        return "You are very high!";
    } else {
        return "We have the same height.";
    }
}

function compareDiet(dinoDiet, humanDiet) {
    if (dinoDiet === humanDiet) {
        return `We are both ${humanHeight}s`;
    } else {
        return `We don't have the same diet. I am ${dinoDiet}`;
    }
}

module.exports =  Dinosaurus;