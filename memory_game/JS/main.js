console.log("Up and running!");

/* 
cardOne = "queen";
cardTwo = "queen";
cardThree = "king";
cardFour = "king";


console.log("User flipped" + " " + cardOne + " and " + cardTwo);
*/

var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = []
var cardOne = []
var cardTwo = [] 
cardOne[0] = cards[0];
cardTwo[0] = cards[2];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay[0]);
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert('You found a match!');
	}else{
		alert("Sorry, try again");
	}
	
	}
