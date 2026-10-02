import React from "react";
import { useParams } from 'react-router-dom'
import events from "../data/events"

function EventDetails() {

    const { id } = useParams();
    const event = events.find((event) => event.id === Number(id));
    
  return (
    
    <section className="min-h-screen w-full">
               
        <div className="w-fit rounded-lg mx-auto my-10  bg-slate-400">
            <img src={event.image} alt={event.title} className="w-full h-80 object-cover rounded-2xl" />
        
        
            <h1>{event.title}</h1>
            <p>{event.category}</p>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>

            <button>Register Now</button>

        </div>
       
    </section>
  );
}

export default EventDetails;