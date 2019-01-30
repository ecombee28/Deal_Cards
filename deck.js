class Deck {
    constructor() {
        this.masterDeck = [];
        this.deck = [];
        this.dealt = [];
        this.discard = [];
        this.suites = [];
        this.values = [];
        this.currentCard;
        var x = 0;

        this.suits = ['S', 'H', 'C', 'D'];
        this.values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        /*The loop runs backwards since this.deck is First In Last Out*/
        for (var i = this.suits.length - 1; i >= 0; i--) {
            for (var j = this.values.length - 1; j >= 0; j--) {
                this.deck[x] = (`images/${this.values[j]}${this.suits[i]}.png`);
                this.masterDeck[x] = (`images/${this.values[j]}${this.suits[i]}.png`);
                x++;
            }
        }

        x == 0;
    }

    shuffle() {
        var deck = this.deck;
        let m = deck.length,
            i;

        while (m) {
            i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
        }

        return this.deck;
    }
    shuffleDiscard(list) {
        let m = list.length,
            i;

        while (m) {
            i = Math.floor(Math.random() * m--);

      [list[m], list[i]] = [list[i], list[m]];
        }

        return list;
    }


    disCard(x) {
        this.discard.push(x);
    }
    dealCard() {
        var elem = document.createElement("img");

        elem.setAttribute("src", deck.deal());
        elem.setAttribute("height", "90");
        elem.setAttribute("width", "90");
        elem.setAttribute("draggable", "true");
        elem.setAttribute("ondragstart", "drag(event)")
        elem.setAttribute("id", deck.lastCard());

        return document.getElementById("cardLayout").appendChild(elem);


    }
    deal() {
        var currCard = this.deck.pop();
        this.dealt.push(currCard);
        this.currentCard = currCard;
        return currCard;
    }

    cut(cut) {

        var hold = [];

        for (var i = cut - 1; i >= 0; i--) {
            hold[i] = this.deck.pop();
        }
        /*This combines the two arrays and puts the bottom half
         on top of the top half*/
        this.deck = hold.concat(this.deck);
    }

    /*This takes the current deck and compares it the
       master deck and if the current deck has not dealt a cards
       that is in the master deck copy it to the holdDeck. Then
       copy holdDeck to the deck.*/
    reOrder() {
        var holdDeck = [];
        var x = 0;
        for (var i = 0; i < this.masterDeck.length; i++) {
            for (var j = 0; j < this.deck.length; j++) {
                if (this.masterDeck[i] == this.deck[j]) {
                    holdDeck.push(this.deck[j]);
                }
            }
        }

        this.deck = holdDeck;
        holdDeck = [];
        return this.deck;

    }

    repackDeck() {
        $('#dealBtn').prop('disabled', false);
        $('#cutBtn').prop('disabled', false);
        $('#orderBtn').prop('disabled', false);
        $('#discardLayout').empty();
        $('#cardLayout').empty();
        document.getElementById("dealBtn").setAttribute("src", "images/deck1.png");
        shuffledList = [];
        discardList = [];
        listOfCards = [];
        cardCtr = 0;
        this.deck = this.masterDeck;
        this.dealt = [];
        this.discard = [];
        this.currentCard = "";
    }

    lastCard() {
        return this.currentCard;
    }
    countCards() {
        return this.deck.length;
    }
    discardCount() {
        return this.discard.length;
    }

}
