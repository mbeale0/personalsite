import{changeCards} from './CardColumn.js';
var drawPileLoc = -1;
var hasWon = false;
var initialDeck = [52];
var cardFoundations = [4];
var cardColumns = [7];
var drawPile = new Stack();


class GameLogic{
    GameLogic(){
        CreateInitialDeck();        
    }
    
}

function CreateInitialDeck() {
    for(var i = 1; i <= 13; i++){
        this.initialDeck.push(new Card(i, Suit.Clubs));
        this.initialDeck.push(new Card(i, Suit.Hearts));
        this.initialDeck.push(new Card(i, Suit.Diamonds));
        this.initialDeck.push(new Card(i, Suit.Spades));
    }
}
function ManageDeal(index, column, card){
    column.push(card);

    if(index > -1){
        initialDeck.splice(index, 1);
    }
}
function CreatedDrawPile(){
    var cardsAdded = 0;
    var remaingCards = initialDeck.length;
    while (cardsAdded < remaingCards){
        var index = Math.floor(Math.random() * initialDeck.length);
        drawPile.push(initialDeck[index]);
        initialDeck.splice(index, 1);
        cardsAdded++;
    }
}
function moveCardFromColToCol(fromCol, toCol, numCards){
    cardsToMove = new Card[numCards];
    
function getCards(cardColumn, numCards, cardsToMove) {
    for (i = 0; i < numCards; i++) {
        cardsToMove[i] = GetBottomCard();
    }
}
/*private boolean checkAreDifferentSuits(CardColumn toCol, int toCardToCheck, Card card) {
    if (card.getCardColor() != toCol.getCard(toCardToCheck).getCardColor()) {
        return true;
    }
    return false;
}*/

class Suit{

    static Spades = new Suit("Spade");
    static Hearts = new Suit("Hearts");
    static Clubs = new Suit("Clubs");
    static Diamonds = new Suit("Diamonds");

    constructor(name){
        name = name;
    }
    toString(){
        return this.name;
    }
}

class Stack {
    #items = []
    push = (element) => this.#items.push(element)
    pop = () => this.#items.pop()
    isempty = () => this.#items.length === 0
    empty = () => (this.#items.length = 0)
    size = () => this.#items.length
}
class Card{
    
    constructor(number, newcardSuit){
        const cardNum = number;
        const cardSuit = newcardSuit;
        if(cardSuit == Suit.Spades || cardSuit == Suit.Clubs){
            const color = "BLACK";
        }
        else{
            const color = "RED";
        }
        this.movable = false;

    }
    set Movable(movable){
        this.movable = movable;
    }
    
}
}