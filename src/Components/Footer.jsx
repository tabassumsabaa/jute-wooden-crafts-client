import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="
        bg-[#2b2118]
        dark:bg-[#0f172a]
        text-gray-200
        mt-10
      "
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Woodsy
              <span className="text-amber-400">
                Wonders
              </span>
            </h2>

            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Discover handcrafted jute and wooden creations
              made with natural materials, creativity, and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-amber-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/all-crafts"
                  className="hover:text-amber-400 transition"
                >
                  All Crafts
                </Link>
              </li>

              <li>
                <Link
                  to="/add-craft"
                  className="hover:text-amber-400 transition"
                >
                  Add Craft
                </Link>
              </li>

              <li>
                <Link
                  to="/my-crafts"
                  className="hover:text-amber-400 transition"
                >
                  My Crafts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>

            <div className="space-y-2 text-sm text-gray-400">
               <a
                href="mailto:sabihatabassum0511@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition"
              >
                📧 sabihatabassum0511@gmail.com
              </a>
              <p>📍 Crafted with nature in mind, Germany</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h3>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/sabiha.tabassum.792?"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10
                  flex items-center justify-center
                  rounded-full
                  bg-white/10
                  hover:bg-amber-500
                  transition
                "
              >
                f
              </a>

              <a
                href="https://www.linkedin.com/in/sabiha-tabassum-saba/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10
                  flex items-center justify-center
                  rounded-full
                  bg-white/10
                  hover:bg-amber-500
                  transition
                "
              >
                in
              </a>

              <a
                href="https://github.com/tabassumsabaa"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10
                  flex items-center justify-center
                  rounded-full
                  bg-white/10
                  hover:bg-amber-500
                  transition
                "
              >
                git
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            border-t
            border-white/10
            mt-10
            pt-6
            text-center
            text-sm
            text-gray-500
          "
        >
          © {new Date().getFullYear()} Woodsy Wonders. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;