import { Link, NavLink } from "react-router-dom";
import logoimg from "../assets/Image/404/logo.png";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully");
      })
      .catch(error => {
        console.error("Logout failed", error);
      });
  };
  const navLinks = <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/allCraftItems">All Items</NavLink>
    <NavLink to="/artCraftCategory">All Craft Items</NavLink>
    <NavLink to="/addcraft">Add Crafts</NavLink>
    <NavLink to="/listItems">My List</NavLink>
    <NavLink to="/users">Users</NavLink>
  </>
  return (
    <div>
      <div className="navbar bg-[#dbbd8e] flex justify-between">
        <div className="">
          <img className=" max-h-12" src={logoimg} alt="" />
        </div>

        <div className=" p-2">
          <div className="navbar-center">
            <div className="dropdown">
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2 ">
                {navLinks}
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-3">
              {navLinks}
            </ul>
          </div>
          <div className="navbar">

          </div>

        </div>

        <div className="dropdown dropdown-end flex">
          {!user ? (
            <div className="mr-2">
              <Link className="btn" to="/singin">Login</Link>
              <Link className="btn" to="/singup">Register</Link>
            </div>
          ) : (
            <button className="btn mr-2" onClick={handleLogout}>Logout</button>
          )}
          {user && (
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
                />
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default Navbar;
