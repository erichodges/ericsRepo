/**
 * Do not remove the comments on lines 15. 
 * Some cohorts require them.
 */ 


function Animal(name, age, kind, awake){
  // write code here
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
};

Animal.prototype.speak = function(){
	var sounds = {
		"pig": "oink",
		"lion": "Rawwwrr",
		"dog": "bark"
	}
	return sounds[this.kind] || "I'm talking";
};

Animal.prototype.growUP = function(){
	return this.age += 1;
};

Animal.prototype.feed = function(){
	if (animal === awake) {
	return "Nom Nom Nom"
}
};
Animal.prototype.wakeUP = function(){
	return this.awake = true;
};
Animal.prototype.sleep = function(){
	return this.awake = false;
};


// module.exports=Animal;


