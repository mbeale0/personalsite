//////////////////////////////////////////////////////////////////////////////////////

class Suit {

    static Spades = new Suit("Spade");
    static Hearts = new Suit("Hearts");
    static Clubs = new Suit("Clubs");
    static Diamonds = new Suit("Diamonds");

    constructor(name) {
        name = name;
    }
    toString() {
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
class Card {

    constructor(number, newcardSuit) {
        const cardNum = number;
        const cardSuit = newcardSuit;
        if (cardSuit == Suit.Spades || cardSuit == Suit.Clubs) {
            const color = "BLACK";
        }
        else {
            const color = "RED";
        }
        this.movable = false;

    }
    set Movable(movable) {
        this.movable = movable;
    }
    set setIsFlipped(isFlipped) {
        this.isFlipped = isFlipped;
    }
    get getIsFlipped() {
        return this.isFlipped;
    }
    get getCardColor() {
        return this.color;
    }
    get getCardNumber() {
        return cardNum;
    }
}

//import { changeCards, getCard, getBottomCard, getColSize } from './CardColumn.js';
var drawPileLoc = -1;
var hasWon = false;
var initialDeck = [52];
var cardFoundations = [4];
var cardColumns = [7];
var drawPile = new Stack();


/*class GameLogic{
    GameLogic(){
        CreateInitialDeck();        
    }
    
}*/

function CreateInitialDeck() {
    console.log("Creatting deck");
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
function CreateDrawPile(){
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
    getCards(cardColumns[fromCol-1], numCards, cardsToMove);
    addCards(cardColumns[toCol-1], numCards, cardsToMove);
    
}
function getCards(cardColumn, numCards, cardsToMove) {
    for (i = 0; i < numCards; i++) {
        cardsToMove[i] = getBottomCard(cardColumn);
    }
}
function addCards(cardColumn, numCards, cardsToMove) {
    for (i = numCards - 1; i >= 0; i--) {
        cardColumn[cardsToMove[i]];
    }
}
function moveCardFromDrawToCol(toCol){

    toCardToCheck = cardColumns[toCol - 1].length - 1;
    if (this.cardColumns[toCol - 1].getColSize() == 0 && this.drawPile.get(this.posInDrawPile).getCardNumber() != 13) {
        System.out.println("Invalid move");
        
    }
    else {
        moveCardToCol(cardColumns[toCol - 1]);
    }

}

function MoveCardToFoundation(fromCol, toFoundation){
    cardToMove = getBottomCard(cardColumns[fromCol - 1]);
    cardFoundations[toFoundation - 1] = cardToMove;
}

function LogicUseDrawPile(){
    drawPileLoc += 3;
    if (drawPileLoc >= drawPile.size()) {

        this.posInDrawPile = -1;
    }
    document.getElementById("RowOne").innerHTML = "0 0 0 0           5&#10084;";
}

function moveDrawCardToCol(cardColumn) {
    cardToMove = drawPile[drawPileLoc];
    cardToMove.setIsFlipped(true);
    cardColumn[cardColumn.length] = cardToMove;
    drawPile[drawPileLoc] = null;
    tempPile = Stack[drawPile.size()-1];
    for(i = 0; i < drawPile.size()-2; i++){
        if(drawPile[i] != null){
            tempPile[i] = drawPile[i];
        }
        
    }
    drawPile = tempPile;

}
function moveDrawToFoundation(toFoundation){
    if (ableToMoveFromDrawToFoundation(toFoundation) == true) {
        moveCardToTop(toFoundation);
    }

}
function MoveColToFoundation(fromCol,toFoundation){
    fromCardToCheck = cardColumns[fromCol - 1].length;
    if (canMoveColToFoundation(cardColumns[fromCol - 1], fromCardToCheck, toFoundation) == true) {
        cardToMove = cardColumns[fromCol - 1].getBottomCard();
        cardFoundations[toFoundation - 1] = cardToMove;
    }
  
}
function moveCardToTop(toFoundation) {
    cardToMove = drawPile.get[drawPileLoc];
    cardToMove.setIsFlipped(true);
    cardFoundations[toFoundation - 1] = cardToMove;
    resizeDrawPile();
}

function resizeDrawPile() {
    drawPile[drawPileLoc] = null;
    tempPile = Stack[drawPile.size() - 1];
    for (i = 0; i < drawPile.size() - 2; i++) {
        if (drawPile[i] != null) {
            tempPile[i] = drawPile[i];
        }

    }
    drawPile = tempPile;
}
function ableToMoveCardsFromColToCol(fromCol, toCol, fromCardToCheck, toCardToCheck) {
    areNumbersInOrder;
    areDifferentSuits;
    isAbleToMove = false;

    if (getCard(fromCol[fromCardToCheck]).getCardNumber() == 13 && toCol.getColSize() == 0) {
        return true;
    }
    areNumbersInOrder = checkAreNumbersInOrder(getCard(toCol[toCardToCheck]), getCard(fromCol[fromCardToCheck]));
    areDifferentSuits = checkAreDifferentSuits(toCol, toCardToCheck, getCard(fromCol[fromCardToCheck]));
    if (areNumbersInOrder == true && areDifferentSuits == true) {
        isAbleToMove = true;
    }
    else {
        console.log("Invalid move");
    }
    return isAbleToMove;
}
function ableToMoveCardsFromDrawToCol(toCol, toCardToCheck) {
    areNumbersInOrder;
    areDifferentSuits;
    isAbleToMove = false;

    areNumbersInOrder = checkAreNumbersInOrder(getCard(toCol[toCardToCheck]), drawPile[drawPileLoc]);
    areDifferentSuits = checkAreDifferentSuits(toCol, toCardToCheck, drawPile[drawPileLoc]);
    if (toCol.length == 0 && drawPile[drawPileLoc].getCardNumber() == 13) {
        isAbleToMove = true;
    }
    else if (areNumbersInOrder == true && areDifferentSuits == true) {
        isAbleToMove = true;
    }
    else {
        console.log("Invalid move");
    }
    return isAbleToMove;
}
function ableToMoveFromDrawToFoundation(toFoundationToCheck) {
    isAbleToMove = false;
    isAbleToMove = checkAbleToMove(toFoundationToCheck, isAbleToMove);
    return isAbleToMove;
}
function canMoveColToFoundation(cardColumn, fromCardToCheck, toFoundationToCheck) {
    areNumbersInOrder;
    areSameSuit;
    isAbleToMove = false;
    if (cardFoundations[toFoundationToCheck - 1] != null) {
        areNumbersInOrder = checkAreNumbersInOrder(getCard(cardColumn[fromCardToCheck]), cardFoundations[toFoundationToCheck - 1]);
        areSameSuit = checkAreSameSuit(toFoundationToCheck, getCard(cardColumn[fromCardToCheck]));

        if (areNumbersInOrder == true && areSameSuit == true) {
            isAbleToMove = true;
        }
    }
    else if (cardColumn.getCard(fromCardToCheck).getCardNumber() == 1) {
        isAbleToMove = true;
    }
    else {
        console.log("Invalid move");
    }
    return isAbleToMove;
}
function checkAbleToMove(toFoundationToCheck,isAbleToMove) {
    areSameSuit;
    areNumbersInOrder;
    if (cardFoundations[toFoundationToCheck - 1] != null) {
        areNumbersInOrder = checkAreNumbersInOrder(drawPile[drawPileLoc], cardFoundations[toFoundationToCheck - 1]);
        areSameSuit =checkFoundationSameSuit(toFoundationToCheck, card);

        if (areNumbersInOrder == true && areSameSuit == true) {
            return true;
        }
        else {
            console.log("Invalid move");
        }
    }
    else if (drawPile[drawPileLoc].getCardNumber() == 1) {
        return true;
    }
    else {
        console.log("Invalid move");
    }
    return false;
}

function checkFoundationSameSuit(toFoundationToCheck, card) {
    if (card.getCardColor() == cardFoundations[toFoundationToCheck - 1].getCardColor()) {
        return true;
    }
    return false;
}

function checkAreNumbersInOrder(card, card2) {
    if (card.getCardNumber() - card2.getCardNumber() == 1) {
        return true;
    }
    return false;
}
function checkAreDifferentSuits(toCol, toCardToCheck, card) {
    if (card.getCardColor() != getCard(toCol[toCardToCheck]).getCardColor()) {
        return true;
    }
    return false;
}
function checkWin(){
    foundationSum = 0;
    for (i = 0; i < 4; i++) {
        if (this.cardFoundation[i] != null) {
            foundationSum += this.cardFoundation[i].getCardNumber();
        }
    }
    if (foundationSum == 52) {
        hasWon = true;
    }
}

//might not need depending on way display works
/*public int getMaxColLength(){
        int maxColLength = 0;

    for (int i = 0; i < this.cardColumns.length - 1; i++) {
        if (this.cardColumns[i].getColSize() < this.cardColumns[i + 1].getColSize()) {
            maxColLength = this.cardColumns[i + 1].getColSize();
        }
    }
    return maxColLength;
}*/


