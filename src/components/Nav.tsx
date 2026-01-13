import { Link } from "react-router-dom";
import "./nav.css"
import { UserIcon } from "./ui/icons";

export default function Nav(){
    return(
        <nav className="nav-bar">
            <ul>
                <li>
                    <span><UserIcon /></span>
                    <Link className="nav-link" to="/">Usuarios</Link>
                </li>
            </ul>
        </nav>
    );
}