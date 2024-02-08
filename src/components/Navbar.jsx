import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className=" text-white text-base h-20 w-screen p-6 ">
      <ul className=" flex space-x-5 content-center justify-evenly">
        <li>
          <NavLink to="/spaceAndPlanets">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="Info">Info</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
