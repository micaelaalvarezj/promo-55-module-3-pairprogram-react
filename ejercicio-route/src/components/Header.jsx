import "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <ul>
            <li><Link to="/">Overview</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/people">People</Link></li>
        </ul>
    )
}

export default Header;