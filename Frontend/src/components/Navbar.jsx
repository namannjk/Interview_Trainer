import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../utils/store";
import { removeUser } from "../utils/userInfoSlice";
const Navbar = () => {
  const user = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();
  return (
    <>
      <div className="navbar">
        <h2>Interview Trainer</h2>
        <ul className="menu">
          <li>
            <Link className="menuItems" to={"/"}>
              HOME
            </Link>
          </li>
          {/* <li>SERVICES</li> */}
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              SERVICES
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link to={"book/0"}>Book Now</Link>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <Link className="menuItems" to={"about"}>
              ABOUT US
            </Link>
          </li>
          <li>CONTACT US</li>
          {user.name == "" ? (
            <button className="btn btn-dark primartBtn">
              {" "}
              <Link className="white" to={"/login"}>
                Login
              </Link>{" "}
            </button>
          ) : (
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  style={{ width: "50px" }}
                  src="https://static.thenounproject.com/png/1743561-200.png"
                ></img>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to={"/"}>My Account</Link>
                </li>

                {user.IorC == 1 ?  <Link to={"/upcoming"}>Upcoming Bookings</Link> : null}

                <li>
                  <Link onClick={() => dispatch(removeUser())} to={"/"}>
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          )}

          {/* <button className="btn btn-dark primartBtn"><Link className = "white" to={"/register"}>Sign Up</Link> </button> */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
