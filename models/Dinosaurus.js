let  Dinosaurus = function (data) {
    this.data = data;
    this.image = `images/${data.species.toLowerCase()}.png`;
}

Dinosaurus.prototype.compareNames = function(name) {
    if (this.data.species > name) {
        return "My name is longer than yours!";
    } else if (this.data.species < name) {
        return "You have very long name!";
    } else {
        return "Our names are of the same length."
    }
}

Dinosaurus.prototype.print = function() {
    alert(`${this.data.species}`)
}

module.exports =  Dinosaurus;