// separate the data and logic from the interface
var printPrice = function(price, label) {
	var node = document.createElement("li");
	var textnode = document.createTextNode(label+' price: $'+price);
	node.appendChild(textnode);
	document.getElementById('products 2').appendChild(node);
}
// create function objects for each type of coffee
var columbian = function(){
	this.name = 'columbian';
	this.basePrice = 5;
};
var frenchRoast = function(){
	this.name = 'french roast';
	this.basePrice = 8;
};
var decaf = function(){
	this.name = 'decaf';
	this.basePrice = 6;
};
var peruvian = function(){
	this.name = 'peruvian';
	this.basePrice = 11;
};
// create object literals for the different sizes
var small = {
	getPrice: function(){return this.basePrice + 2},
	getLabel: function(){return this.name + ' small'}
};
var medium = {getPrice: function(){return this.basePrice + 4},
	getLabel: function(){return this.name + ' medium'}
};
var large = {
	getPrice: function(){return this.basePrice + 6},
	getLabel: function(){return this.name + ' large'}
};
var extraLarge = {
	getPrice: function(){return this.basePrice + 10},
	getLabel: function(){return this.name + ' extra large'}
};
// put all the coffee types and sizes into arrays
var coffeeTypes = [columbian, frenchRoast, decaf];
var coffeeSizes = [small, medium, large];
// build new objects that are combinations of the above
// and put them into a new array
coffeeTypes.push(Peruvian);
coffeeSizes.push(extraLarge);
var coffees = coffeeTypes.reduce(function(previous, current) {
	var newCoffee = coffeeSizes.map(function(mixin) {
// `plusmix` function for functional mixins, see Ch.7
var newCoffeeObj = plusMixin(current, mixin);
return new newCoffeeObj();
});
	return previous.concat(newCoffee);
},[]);
// we've now defined how to get the price and label for each
// coffee type and size combination, now we can just print them
coffees.forEach(function(coffee){
	printPrice(coffee.getPrice(),coffee.getLabel());
});
coffeeTypes.reduce(function(previous, current) {
	var newCoffee = coffeeSizes.map(function(mixin) {
	 // `plusMixin` function for functional mixins, see Ch.7
	 	var newCoffeeObj = plusMixin(current, mixin);
		return new newCoffeeObj();
	});
	return previous.concat(newCoffee);
},[]).forEach(function(coffee) {
	printPrice(coffee.getPrice(),coffee.getLabel());
});