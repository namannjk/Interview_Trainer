import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(
        <>
          <div className="navbar">
            <h2>Interview Trainer</h2>
            <ul className="menu">
              <li><Link className = "menuItems" to={"/"}>HOME</Link></li>
              <li>SERVICES</li>
              <li>ABOUT US</li>
              <li>CONTACT US</li>
              <button className="btn btn-dark primartBtn"> <Link className = "white" to={"/login"}>Login</Link> </button>
              <button className="btn btn-dark primartBtn"><Link className = "white" to={"/register"}>Sign Up</Link> </button>
            </ul>
          </div>
        </>
    );
}

export default Navbar;