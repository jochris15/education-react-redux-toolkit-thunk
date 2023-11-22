import { NavLink } from "react-router-dom";

const NavBar = () => {
  let activeClassName = "text-sky-600 underline pointer-events-none";
  let inactiveClassName = "text-sky-400 hover:text-sky-600 hover:underline";

  return (
    <nav className="flex flex-row items-center justify-between rounded bg-gray-100 p-4">
      <section>
        <p className="text-3xl font-semibold">Belajar Redux</p>
      </section>
      <ul className="flex flex-row justify-end gap-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
          >
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/table"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassName
            }
          >
            DataTable
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
