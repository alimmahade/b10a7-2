import { useEffect, useState } from "react";
import SelectedP from "./SelectedP";

const AvailableP = ({handleChoosePlayer}) => {
    
       const [cards, setCards]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <>
        <div>
            <h1 className="text-3xl">Available Players</h1>
        </div>
        <div className="grid">
                <div className="grid grid-cols-3 gap-4">
                    {
                        cards.map((card,i)=><div key={i} className="card bg-base-100 w-auto border">
                        <figure className="px-10 pt-10">
                          <img
                            src={card.image}
                            alt="Pimg"
                            className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                          <h2 className="card-title">{card.name}</h2>
                          <div className="flex justify-around gap-8">
                          <p>Country: {card.country}</p>
                          <p>Role: {card.role}</p>
                          </div>
                          <p>Rating</p>
                          <div className="flex justify-around gap-8">
                          <p>Country: {card.battingType}</p>
                          <p>Role: {card.bowlingType}</p>
                          </div>
                          <div className="card-actions grid items-center">
                            <p>Price:$ {card.biddingPrice}</p>
                            <button onClick={()=>handleChoosePlayer(card)} className="btn btn-primary">Choose Plyer</button>
                          </div>
                        </div>
                      </div>)
                    }
                </div>
        </div>
        
        </>
    );
};

export default AvailableP;