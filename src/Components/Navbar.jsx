import React from "react";
import { Menu, Calendar } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full px-4 sm:px-6 py-4 sm:py-5 bg-black shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />

          <h1 className="text-xl sm:text-2xl font-bold text-slate-200">
            Event<span className="text-purple-600">Nexus</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="#hero"
            className="text-slate-200 hover:text-purple-600 transition"
          >
            Home
          </a>

          <a
            href="#event"
            className="text-slate-200 hover:text-purple-600 transition"
          >
            Events
          </a>

          <a
            href="#categories"
            className="text-slate-200 hover:text-purple-600 transition"
          >
            Categories
          </a>

          <a
            href="#aboutUs"
            className="text-slate-200 hover:text-purple-600 transition"
          >
            About Us
          </a>
        </div>

        {/* Register + Mobile Menu */}
        <div className="flex items-center">

          {/* Desktop Button */}
          <a
            href="#event"
            className="hidden md:block bg-purple-600 text-white px-4 lg:px-5 py-2.5 rounded-lg hover:bg-purple-700 transition"
          >
            Register Now
          </a>

          {/* Mobile Menu */}
          <button className="md:hidden p-1">
            <Menu className="w-6 h-6 text-slate-100" />
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;