// Human object
let Human = function (name, feet, inches, weight, diet) {
    this.name = name;
    this.feet = parseInt(feet);
    this.inches = parseInt(inches);
    this.height = this.calcHeight(this.feet, this.inches);
    this.weight = parseInt(weight);
    this.diet = diet;
    this.image = "images/human.png";
}

// Calculating the total human height 
Human.prototype.calcHeight = (feet, inches) => 12 * feet + inches;

module.exports = Human;