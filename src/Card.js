import { useEffect, useState } from 'react';
import './Card.css';

const Card = ({img}) => {
    const [style, setStyle] = useState(
        {
            position: 'absolute',
            transform: `rotate(${randInt(-37, 36)}deg)`,
            top: `calc(${randInt(355-100,355+50)}px/2 - 5em)`,
            left: `calc(50vw - ${randInt(388-100,388+100)}px/3)`
        }
    )

    function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return (
        <div className='Card'>
            <img src={img} style={style}></img>
        </div>
    )
};

export default Card;