import { NavLink } from "react-router-dom";
import CustomContext from "../../CustomContext/CustomContext";

const Navbar = () => {
  const { user, logOut } = CustomContext();
  const handleLogOut = () => {
    logOut();
    
  };
  const buttons = (
    <>
      <li>
        <NavLink
          to="/"
          className="btn text-xl font-bold mr-4 bg-purple-900 text-purple-200 hover:bg-purple-700"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className="btn text-xl font-bold mr-4 bg-purple-900 text-purple-200 hover:bg-purple-700"
        >
          Register
        </NavLink>
      </li>
      
        <li>
          <NavLink
            to="/signIn"
            className="btn text-xl font-bold mr-4  bg-purple-900 text-purple-200 hover:bg-purple-700"
          >
            SignIn
          </NavLink>
        </li>
  
      {user && (
        <li>
          <NavLink
            to="/products"
            className="btn text-xl font-bold mr-4 bg-purple-900 text-purple-200 hover:bg-purple-700"
          >
            Products
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="bg-purple-200">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {buttons}
            </ul>
          </div>
          <a className="ml-10 font-extrabold normal-case text-2xl text-purple-950">
            Instyle-Boutique
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{buttons}</ul>
        </div>
        <div className="navbar-end mr-10">
          {user && (
            <p className=" text-lg font-semibold mr-4">{user.displayName}</p>
          )}
          {user && (
            <div className="rounded-full w-8 h-8 overflow-hidden mr-10 ">
              <img
                src="pic.png"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          )}
          <button
            onClick={handleLogOut}
            className="btn bg-purple-950 text-purple-200 text-xl font-bold hover:text-black"
          >
            SignOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
