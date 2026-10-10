import React from 'react';
import { ArrowRight } from 'lucide-react';
import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="w-full bg-gradient-to-br from-blue-500 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Left Content */}
        <div className="text-center md:text-left">

          <button className="bg-white/50 backdrop-blur-xl text-black px-4 sm:px-5 py-2 rounded-full font-bold mb-4 text-sm sm:text-base">
            Make Every Event Memorable
          </button>

          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-purple-500 mb-1">
            Explore. Connect.
          </h1>

          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
            Celebrate.
          </h1>

          <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-6 max-w-xl mx-auto md:mx-0">
            EventNexus is your all-in-one platform to discover,
            manage and participate in amazing event around you.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">

            <a href="#event" className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition w-full sm:w-auto">
              <span>Explore Events</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </a>

            <a href="#aboutUs" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold border border-white text-black px-6 py-3 rounded-lg hover:bg-slate-200 hover:text-black transition w-full sm:w-auto">
              Learn More..
            </a>

          </div>
        </div>

        {/* Right Image */}
        <div className="w-full flex justify-center md:justify-end">
          <img
            src={hero}
            alt="hero-image"
            className="w-full max-w-lg h-auto rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;