import React from "react";
import { Calendar1, MapPin, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom'

function EventCard({ event }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-2 transition duration-300">

      <div className="h-48 bg-slate-200">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">

        <div className="flex justify-between items-center mb-3">
          <span className="px-3 py-1 bg-purple-400 rounded-full text-sm text-white font-semibold">
            {event.category}
          </span>

          <span className="flex items-center gap-1 text-sm">
            <Calendar1 className="size-4" />
            {event.date}
          </span>
        </div>

        <h3 className="font-bold text-lg mb-2">
          {event.title}
        </h3>

        <p className="flex items-center gap-1 text-gray-500 mb-4">
          <MapPin className="size-4" />
          {event.location}
        </p>

        <Link to={`/events/${event.id}`} className="flex items-center gap-1 text-purple-600 font-bold hover:text-purple-900" >
          View Details
          <ArrowRight className="size-5" />
        </Link>

      </div>
    </div>
  );
}

export default EventCard;