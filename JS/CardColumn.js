class CardColumn{

}
cardColumn = [];
function addToCardColumn(card) {
    cardColumn.add(card);
}

function changeCards(cards, cardIndex, i) {
    cards[cardIndex] = cardColumn.get(i);
    cardColumn.remove(i);
    cardIndex++;

}
function getBottomCard(){
    if (cardColumn.length == 0) {
        return null;
    }
    bottomCard = cardColumn[cardColumn.length - 1];
    cardColumn.remove[cardColumn.length - 1];
    if (cardColumnlength != 0) {
        cardColumn[cardColumn.length - 1].setFlipped(true);
    }
    return bottomCard;
}
    function getCard(index) {
    if (cardColumn.length != 0) {
        return cardColumn[index];
    }
    else {
        return null;
    }
}
    function getColSize(){
    return cardColumn.length;
}
export{changeCards}