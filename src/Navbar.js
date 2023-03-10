import { Link  } from 'react-router-dom';

function Navbar  () {
    return (
        <nav className="nav-bar">
            <h1> The Dojo Blog</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
} 


export default Navbar