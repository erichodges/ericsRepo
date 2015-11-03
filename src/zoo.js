/**
 * Do not remove the comments on lines 6, 7, 
 * and 29. Some cohorts will require them.
 */ 

// do not remove this line...you're going to need it for your addAnimal method
// var Animal = require("./animal");


function Zoo(name, location, status, array) {
 // write code here
 this.name = name;
 this.location = location;
 this.status = status;
 this.animals = array;
};


Zoo.prototype.changeLocation = function() {
	this.location = location;
}
Zoo.prototype.open = function() {
	return this.status = "open";
}
Zoo.prototype.close = function() {
	return this.status = "closed";
}
Zoo.prototype.isOpen = function() {
	if (this.status === "open") {
		return true;	
	}	else {
		return false;
	}
};
Zoo.prototype.addAnimal = function(animal) {
	if (this.status === "closed") {
		return "Zoo is closed";
	}
	for (var i = 0; i < array.length; i++) { 
		if (this.animals[i].kind === animal.name) {
		return "Already Exists"; 
	}
	this.animals.push(animal);
};

}
Zoo.prototype.removeAnimal = function() {
	if (this.status === "closed") {
		return "Zoo is closed";
	} else {
		array.splice();
	}
}




// var arr = ["horse", "pig"]
// arr.splice(1,1)





















// module.exports=Zoo;