import React from 'react'
import AddCard from './AddCard';
import IndivitualCards from './IndivitualCards';
import './_card.scss';

const Card = ({card,setCard}) => { 
    return (
        <div className='card-wrapper'>
           {card.map((indi)=>{
               return <IndivitualCards id={indi.id} heading={indi.heading} text={indi.text} date={indi.date} setCard={setCard} card={card} />
           })}
           <AddCard setCard={setCard} card={card}/>
        </div>
    )
}

export default Card
