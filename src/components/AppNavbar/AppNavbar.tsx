import './AppNavbar.css'
import { Link } from "react-router-dom";

export const AppNavbar = () => {

    return (
        <nav className="space-between-row-center-flex">
          <ul className="space-between-row-center-flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
    )
}

