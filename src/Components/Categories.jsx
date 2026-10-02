import React from 'react';
import {
  Laptop,
  Drama,
  Volleyball,
  GraduationCap,
  BriefcaseBusiness,
  Music
} from 'lucide-react';

function Categories() {
  return (
    <section
      id="categories"
      className="bg-slate-200 px-4 sm:px-6 py-8 sm:py-10 w-full"
    >

      {/* Section Heading */}
      <div className="text-center mb-8">
        <p className="text-purple-600 font-bold mb-1 text-sm sm:text-base">
          EVENT CATEGORIES
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold">
          Explore Events by Categories
        </h1>
      </div>


      {/* Category Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">

        {/* Technology */}
        <div className="px-3 sm:px-5 py-5 sm:py-6 bg-white rounded-2xl text-center shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">

          <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4 hover:bg-purple-300 transition-colors duration-300">
            <Laptop className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>

          <h3 className="font-bold text-sm sm:text-base">
            Technology
          </h3>

        </div>


        {/* Cultural */}
        <div className="px-3 sm:px-5 py-5 sm:py-6 bg-white rounded-2xl text-center shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">

          <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-orange-100 text-purple-600 mb-4 hover:bg-orange-300 transition-colors duration-300">
            <Drama className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>

          <h3 className="font-bold text-sm sm:text-base">
            Cultural
          </h3>

        </div>


        {/* Sports */}
        <div className="px-3 sm:px-5 py-5 sm:py-6 bg-white rounded-2xl text-center shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">

          <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-blue-100 text-purple-600 mb-4 hover:bg-blue-300 transition-colors duration-300">
            <Volleyball className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>

          <h3 className="font-bold text-sm sm:text-base">
            Sports
          </h3>

        </div>


        {/* Workshops */}
        <div className="px-3 sm:px-5 py-5 sm:py-6 bg-white rounded-2xl text-center shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">

          <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-green-100 text-purple-600 mb-4 hover:bg-green-300 transition-colors duration-300">
            <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>

          <h3 className="font-bold text-sm sm:text-base">
            Workshops
          </h3>

        </div>


        {/* Business */}
        <div className="px-3 sm:px-5 py-5 sm:py-6 bg-white rounded-2xl text-center shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">

          <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-yellow-100 text-purple-600 mb-4 hover:bg-yellow-300 transition-colors duration-300">
            <BriefcaseBusiness className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>

          <h3 className="font-bold text-sm sm:text-base">
            Business
          </h3>

        </div>


        {/* Music */}
        <div className="px-3 sm:px-5 py-5 sm:py-6 bg-white rounded-2xl text-center shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">

          <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-pink-100 text-purple-600 mb-4 hover:bg-pink-300 transition-colors duration-300">
            <Music className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>

          <h3 className="font-bold text-sm sm:text-base">
            Music
          </h3>

        </div>

      </div>

    </section>
  );
}

export default Categories;