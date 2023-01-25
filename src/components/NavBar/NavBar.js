import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css"

export default function NavBar({ user, setUser }) {
    // Add the following function
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
    }

    return (
        <nav className="NavBar">
            <div className="FloatLeft Pad">
                <Link className="Pad" to="/attractions">Home</Link>
                <Link className="Pad" to="/attractions/all">World attractions</Link>
            </div>
            <div className="FloatRight Pad">
                <Link className="Pad" to="/orders">Order History</Link>
                &nbsp; | &nbsp;
                <Link className="Pad" to="/orders/new">New Order</Link>
                &nbsp;&nbsp;<span className="Pad">Welcome! {user.name}</span>
                &nbsp;&nbsp;<Link className="Pad" to="" onClick={handleLogOut}>Log Out</Link>
            </div>
        </nav>
    )
}