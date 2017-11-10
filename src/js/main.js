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




var deck = new Deck();
deck.deckRandom();
var count = 0;

var firstCard;
var secondCard;

var firstIdCard;
var secondIdCard;

var Cards = (function Cards () {

	for (var i = 0; i < 20; i++) {
		var li = document.createElement('li');
		li.id = 'show-' + deck.cards[i] + '-card'
		li.classList.add('card', 'back-cards', 'show-' + deck.cards[i] + '-card')
		cardsContainer.appendChild(li);
	}

	var li = document.getElementsByClassName('card');
	for (var i = 0; i < li.length; i++) {
		li[i].addEventListener('click', function () {
			
			count++;
			if (count === 1) {
				this.classList.remove('back-cards');
				firstIdCard = this.id;
				firstCard = this;

			} else if (count === 2 ) {
				this.classList.remove('back-cards');
				secondIdCard = this.id;
				secondCard = this;
				setTimeout(function () {
					if (firstIdCard == secondIdCard) {

						console.log('true');
						firstCard.classList.add('matched');
						secondCard.classList.add('matched');
						count = 0;
					} else {
						console.log('false');
						firstCard.classList.add('back-cards');
						secondCard.classList.add('back-cards');
						count = 0;
					}
				},5000)
					
			}

		})
	}
})()
