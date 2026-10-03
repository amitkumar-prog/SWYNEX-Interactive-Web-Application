import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import events from "../data/events";
import { MapPin, Calendar1 } from "lucide-react";

function EventDetails() {

  const { id } = useParams();
  const event = events.find((event) => event.id === Number(id));

  const navigate = useNavigate();

  return (
    <section className="min-h-screen w-full bg-gradient-to-l from-blue-600 to-green-600 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10 sm:py-16">

      <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 rounded-xl shadow-lg bg-white/20 backdrop-blur-lg p-5 sm:p-6 md:p-8 hover:-translate-y-2 transition-all duration-300">

        {/* Event Details */}
        <div className="w-full md:w-1/2 px-2 sm:px-3 py-2 lg:py-10">

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 px-2 sm:px-4 py-4">

            <p className="bg-purple-600 px-5 py-1 font-bold text-white rounded-2xl">
              {event.category}
            </p>

            <p className="flex items-center gap-1 text-sm sm:text-md">
              <Calendar1 className="size-5" />
              {event.date}
            </p>

          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-3 px-2 sm:px-4 font-bold">
            {event.title}
          </h1>

          <p className="flex items-center gap-1 text-base sm:text-lg px-2 sm:px-4 mb-3">
            <MapPin className="size-5 text-red-500" />
            {event.location}
          </p>

          <p className="text-gray-600 px-2 sm:px-4 mb-6">
            {event.description}
          </p>

          <div className="px-2 sm:px-4">
            <button onClick={() => navigate(`/registrations/${event.id}`)} className="w-full bg-purple-600 px-6 py-2 rounded-lg font-bold text-white hover:bg-purple-900 transition duration-500">
              Register Now
            </button>
          </div>

        </div>

        {/* Event Image */}
        <div className="w-full md:w-1/2">
          <img
            src={event.image}
            alt={event.title}
            className="object-cover w-full h-56 sm:h-64 md:h-72 lg:h-100  rounded-xl"
          />
        </div>

      </div>

    </section>
  );
}

export default EventDetails;