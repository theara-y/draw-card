import { useState, useEffect } from "react";
import axios from "axios";
import Card from './Card';
import './Deck.css';

const Deck = () => {
    const [shuffling, setShuffling] = useState(false);
    const [deck, setDeck] = useState([]);
    const [cardPile, setCardPile] = useState([]);

    useEffect(() => {
        async function getDeck() {
            const deckIdRes = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
            const cardsRes = await axios.get(`https://deckofcardsapi.com/api/deck/${deckIdRes.data.deck_id}/draw/?count=52`)
            setDeck(cardsRes.data.cards.map(card => card.image))
            setShuffling(false);
        }
        getDeck();
    }, [shuffling])

    const drawCard = () => {
        const [firstCard, ...rest] = deck
        setDeck(rest);
        setCardPile(cards => {
            return [...cards, firstCard]
        });
    };

    const shuffle = () => {
        setDeck(() => [])
        setCardPile(() => []);
        setShuffling(true);
    }

    return (
        <div className="Deck">
            <div className="Message">
                {deck.length == 0 && !shuffling ? "No cards remaining" : ""}
            </div>
            <div className="CardPile">
                {
                    cardPile.map(card => <Card img={card} />)
                }
            </div>
            <div className="BtnArea">
                <button onClick={drawCard}>Draw Card</button>
                <button onClick={shuffle}>Shuffle</button>
            </div>
        </div>
    );
};

export default Deck;