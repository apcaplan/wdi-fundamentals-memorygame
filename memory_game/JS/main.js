var cards = [
{rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var createBoard = function(){
	for (i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i)
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var cardsInPlay = []

var gamesPlayed = 0
var gamesWon = 0

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
		gamesPlayed++
		gamesWon++
	}else{
		alert("Sorry, try again");
		gamesPlayed++
	}
}

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2){
		setTimeout(checkForMatch, 60);
		setTimeout(newGame, 80);
}
}
    
createBoard();

var newGame = function(){
	alert("Games won: " + gamesWon + "\nGames played: " + gamesPlayed);
   	if (confirm("Would you like to play again?")){
		cardsInPlay.length = 0;
		 var card = document.getElementsByTagName('img');
    	for (i = 0; i < cards.length; i++) {
        	if (card[i].getAttribute('src') != 'images/back.png') {
            	card[i].setAttribute('src', 'images/back.png');
        }
    }
	}else{
		alert("Thank you for playing. Here is your final score:" + "\nGames won: " + gamesWon + "\nGames played: " + gamesPlayed);
	}
}