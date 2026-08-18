import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // Logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Active / Normal NavLink Style
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-amber-600 dark:text-amber-400 font-semibold bg-amber-50 dark:bg-white/10"
      : "text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-white/10";

  // Main Navigation Links
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={linkStyle}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/all-crafts" className={linkStyle}>
          All Crafts
        </NavLink>
      </li>

      <li>
        <NavLink to="/add-craft" className={linkStyle}>
          Add Craft
        </NavLink>
      </li>

      <li>
        <NavLink to="/my-crafts" className={linkStyle}>
          My Crafts
        </NavLink>
      </li>
    </>
  );

  return (
    <nav
      className="
        sticky top-0 z-50
        border-b border-amber-100 dark:border-white/10
        bg-white/90 dark:bg-slate-900/90
        backdrop-blur-xl
        shadow-sm
      "
    >
      <div className="navbar max-w-7xl mx-auto px-3 md:px-6">

        {/* ================= LEFT SIDE ================= */}
        <div className="navbar-start">

          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">

            {/* Hamburger Button */}
            <div
              tabIndex={0}
              role="button"
              className="
                btn btn-ghost btn-circle
                text-gray-700 dark:text-gray-200
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            {/* Mobile Menu */}
            <ul
              tabIndex={0}
              className="
                menu menu-sm dropdown-content
                mt-3
                w-64
                p-3
                rounded-2xl
                bg-white dark:bg-slate-800
                shadow-xl
                border border-gray-100 dark:border-white/10
                z-[100]
              "
            >
              {/* Main Links */}
              {navLinks}

              {/* Divider */}
              <div
                className="
                  my-2
                  border-t
                  border-gray-200
                  dark:border-white/10
                "
              ></div>

              {/* Mobile Login/Register OR User/Logout */}

              {user ? (
                <>
                  {/* User Info */}
                  <li>
                    <div className="flex items-center gap-3">

                      {user?.photoURL && (
                        <img
                          src={user.photoURL}
                          alt={user?.displayName || "User"}
                          className="
                            w-9 h-9
                            rounded-full
                            object-cover
                            ring-2 ring-amber-400
                          "
                        />
                      )}

                      <div>
                        <p className="font-semibold">
                          {user?.displayName || "User"}
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {user?.email}
                        </p>
                      </div>

                    </div>
                  </li>

                  {/* Logout */}
                  <li>
                    <button
                      onClick={handleLogout}
                      className="
                        mt-1
                        text-red-500
                        hover:bg-red-50
                        dark:hover:bg-red-500/10
                      "
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  {/* Login */}
                  <li>
                    <NavLink
                      to="/login"
                      className={linkStyle}
                    >
                      Login
                    </NavLink>
                  </li>

                  {/* Register */}
                  <li>
                    <NavLink
                      to="/register"
                      className={linkStyle}
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              )}

            </ul>
          </div>


          {/* ================= LOGO ================= */}

          <Link
            to="/"
            className="flex items-center gap-2"
          >
            {/* Logo Icon */}
            <span className="text-2xl md:text-3xl">
              🌿
            </span>

            {/* Website Name */}
            <div className="leading-tight">

              <h1
                className="
                  text-base sm:text-lg md:text-xl
                  font-bold
                  text-gray-900 dark:text-white
                "
              >
                Woodsy
                <span className="text-amber-600 dark:text-amber-400">
                  Wonders
                </span>
              </h1>

              <p
                className="
                  hidden sm:block
                  text-[9px] md:text-[10px]
                  tracking-[0.18em]
                  uppercase
                  text-gray-500 dark:text-gray-400
                "
              >
                Jute & Wooden Crafts
              </p>

            </div>
          </Link>

        </div>


        {/* ================= DESKTOP CENTER ================= */}

        <div className="navbar-center hidden lg:flex">

          <ul
            className="
              menu menu-horizontal
              gap-1
              font-medium
            "
          >
            {navLinks}
          </ul>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="navbar-end gap-1 sm:gap-2">

          {/* Theme Toggle */}
          <ThemeToggle />


          {/* Logged In */}
          {user ? (
            <>

              {/* User Photo */}
              <div
                className="
                  tooltip tooltip-bottom
                  hidden sm:block
                "
                data-tip={user?.displayName || "User"}
              >

                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user?.displayName || "User"}
                    className="
                      w-9 h-9
                      rounded-full
                      object-cover
                      ring-2 ring-amber-400
                    "
                  />
                ) : (
                  <div
                    className="
                      w-9 h-9
                      rounded-full
                      bg-amber-500
                      text-white
                      flex items-center
                      justify-center
                      font-bold
                    "
                  >
                    {user?.displayName?.charAt(0) || "U"}
                  </div>
                )}

              </div>


              {/* Desktop Logout */}
              <button
                onClick={handleLogout}
                className="
                  hidden sm:inline-flex
                  btn btn-sm
                  border-none
                  bg-amber-600
                  hover:bg-amber-700
                  text-white
                "
              >
                Logout
              </button>

            </>
          ) : (
            <>

              {/* Desktop Login */}
              <Link
                to="/login"
                className="
                  hidden sm:inline-flex
                  btn btn-sm btn-ghost
                  text-gray-700
                  dark:text-gray-200
                "
              >
                Login
              </Link>


              {/* Desktop Register */}
              <Link
                to="/register"
                className="
                  hidden sm:inline-flex
                  btn btn-sm
                  border-none
                  bg-amber-600
                  hover:bg-amber-700
                  text-white
                "
              >
                Register
              </Link>

            </>
          )}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;