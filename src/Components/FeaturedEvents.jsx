import React from 'react';
import { SearchIcon } from "lucide-react";
import { useState } from 'react'

import events from "../data/events";
import EventCard from "./EventCard";

function FeaturedEvents() {

  const [searchTerm, setSearchTerm] = useState("");
  
  const [selectedCategory, setSelectedCategory] = useState("");
    

  const filteredEvents = events.filter((event)=>{
    return event.title.toLowerCase().includes(searchTerm.toLowerCase())
    &&
    (selectedCategory === "" || event.category === selectedCategory)
  });



  return (
    <section id="event" className="bg-slate-200 px-4 sm:px-6 py-8 sm:py-10 w-full">

      {/* Section Heading */}
      <div className="text-center mb-8">
        <p className="text-purple-600 font-bold text-sm sm:text-base">
          FEATURED EVENTS
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold mt-1">
          Upcoming Events You Can't Miss
        </h1>
      </div>

      <div className="flex">
        <div className="flex gap-2 bg-white w-fit px-4 py-2 rounded-md mx-auto">
          <input type="text" placeholder=" Search Event " className=" outline-none bg-transparent " value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <SearchIcon className="size-5 text-gray-400"/>
        </div>

         <div className="flex gap-2 bg-white w-fit px-4 py-2 rounded-md mx-auto">
          <select type="text" placeholder=" Search Event " value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}  className=" outline-none bg-transparent text-gray-400 ">
            <option value="" >Select Your Event Category</option>
            <option value="technology" className="text-black">Technology</option>
            <option value="workshop" className="text-black">Workshop</option>
            <option value="cultural" className="text-black">Cultural</option>
            <option value="sports" className="text-black">Sports</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-2 my-5">

        {filteredEvents.length === 0 ? (
          <div className="col-span-full text-center py-10">
            <h2 className="text-xl font-bold text-gray-600">
              No Events Found
            </h2>
            <p className="text-gray-500 mt-2">
              Try another search or category.
            </p>
          </div>
        ) : (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        )}

      </div>

    </section>
  );
}

export default FeaturedEvents;