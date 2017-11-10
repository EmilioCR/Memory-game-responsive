var cardsContainer = document.getElementById('cards');

function Deck (){

	this.cards = [];

	//Card values
	var names = ["beemo-detective", "beemo-detective", "beemo", "beemo", "lemon", "lemon", "jake-angry", "jake-angry", "pingu", "pingu", "grumosa", "grumosa", "finn", "finn", "fionna", "fionna", "fire-princess", "fire-princess", "marceline", "marceline"];

	//Create All Cards
    for (var n = 0; n < names.length; n++) {
    	this.cards.push(names[n])
    }
}

Deck.prototype = {
	contructor : Deck,

	//Create Ramdom Deck 
	deckRandom : function() {
		Deck();
		this.randomDeck = new Array();
		var empty = false;

		while(!empty){
			var randomIndex = Math.floor(Math.random()*this.cards.length);
			this.randomDeck.push(this.cards[randomIndex]);
			this.cards.splice(randomIndex, 1);
			if(this.cards.length <=0) empty = true;
		}

		for(var i=0; i<this.randomDeck.length; i++){
			this.cards[i] = this.randomDeck[i];
		}
	},
	
};




var Cards = (function Cards () {
	var deck = new Deck();
	deck.deckRandom();
	console.log(deck);

	for (var i = 0; i <= cards.length; i++) {
		var li = document.createElement('li');
		console.log(deck[i])
		li.id = 'show-' + cards[i] + '-card'
		cardsContainer.appendChild(li);
	}


})()
