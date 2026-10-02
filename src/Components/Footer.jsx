import { Calendar, Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <footer id="aboutUs" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Calendar className="w-7 h-7 text-purple-600" />

              <h2 className="text-2xl font-bold">
                Event<span className="text-purple-600">Nexus</span>
              </h2>
            </div>

            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Discover amazing events, connect with people,
              and create unforgettable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400 text-sm">
              <a href="#home" className="hover:text-purple-400 transition">
                Home
              </a>

              <a href="#events" className="hover:text-purple-400 transition">
                Events
              </a>

              <a href="#categories" className="hover:text-purple-400 transition">
                Categories
              </a>

              <a href="#about" className="hover:text-purple-400 transition">
                About Us
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Categories
            </h3>

            <div className="flex flex-col gap-3 text-gray-400 text-sm">
              <span>Technology</span>
              <span>Music & Concerts</span>
              <span>Sports</span>
              <span>Arts & Culture</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Contact Us
            </h3>

            <div className="flex flex-col gap-4 text-gray-400 text-sm">

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>hello@eventnexus.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Bhopal, India</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-gray-500 text-sm">
            © 2026 EventNexus. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Made with ❤️ for event lovers
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;