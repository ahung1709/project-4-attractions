import { Link } from 'react-router-dom';
// import * as userService from '../../utilities/users-service';
import "./SideBar.css"

export default function SideBar() {
    return (
        
        <div className="SideBar">
            <h1>SideBar</h1>
            <Link className="Pad" to="/attractions">My Attraction</Link>
        </div>
        
    )
}

