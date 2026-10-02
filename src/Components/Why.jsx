import React from 'react'
import {
  Binoculars,
  UserCheck,
  FaceSlightlySmiling
} from 'lucide-react'

function Why() {
  return (
    <section className="bg-blue-100 px-4 sm:px-6 py-8 sm:py-10 w-full">

      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Why EventNexus ?
        </h1>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

        {/* Discover Events */}
        <div className="flex items-center gap-4 p-4 sm:p-5 bg-white/50 rounded-2xl">

          <div className="bg-purple-700 p-4 rounded-full shrink-0">
            <Binoculars className="w-6 h-6 text-white hover:text-black transition duration-200" />
          </div>

          <div>
            <h2 className="font-bold text-lg sm:text-xl text-purple-600">
              Discover Events
            </h2>

            <p className="text-gray-500 text-sm sm:text-base">
              Find events that match your interests.
            </p>
          </div>

        </div>


        {/* Register Easily */}
        <div className="flex items-center gap-4 p-4 sm:p-5 bg-white/50 rounded-2xl">

          <div className="bg-purple-700 p-4 rounded-full shrink-0">
            <UserCheck className="w-6 h-6 text-white hover:text-black transition duration-200" />
          </div>

          <div>
            <h2 className="font-bold text-lg sm:text-xl text-purple-600">
              Register Easily
            </h2>

            <p className="text-gray-500 text-sm sm:text-base">
              Quick and simple event registration.
            </p>
          </div>

        </div>


        {/* Attend & Enjoy */}
        <div className="flex items-center gap-4 p-4 sm:p-5 bg-white/50 rounded-2xl">

          <div className="bg-purple-700 p-4 rounded-full shrink-0">
            <FaceSlightlySmiling className="w-6 h-6 text-white hover:text-black transition duration-200" />
          </div>

          <div>
            <h2 className="font-bold text-lg sm:text-xl text-purple-600">
              Attend & Enjoy
            </h2>

            <p className="text-gray-500 text-sm sm:text-base">
              Have an amazing experience.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Why