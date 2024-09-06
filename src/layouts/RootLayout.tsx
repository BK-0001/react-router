import { NavLink, Outlet } from "react-router-dom";
import "./RootLayout.css";

export function RootLayout() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activated" : "")}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/* equivalent to children but it is for React Router */}
        <Outlet />
      </main>
    </div>
  );
}
