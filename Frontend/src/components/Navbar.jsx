import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../utils/store";
import { removeUser } from "../utils/userInfoSlice";
import "../index.css";

const Navbar = () => {
  const user = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();
  return (
    <div className="w-full border shadow-md py-2 flex justify-center bg-white ">
      <div className="w-11/12 flex justify-between">
        <h2 className="py-3 font-mono text-3xl text-blue-500">Interview Trainer</h2>
        <ul className="w-1/2 flex justify-between items-center py-3 font-serif text-[18px]">
          <li className="">
            <Link className="hover:text-blue-400 " to={"/"}>
              HOME
            </Link>
          </li>
          {/* <li>SERVICES</li> */}
          <li class="nav-item dropdown hover:text-blue-400 ">
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
            <Link className="hover:text-blue-400 " to={"about"}>
              ABOUT US
            </Link>
          </li>
          <li className="hover:text-blue-400 cursor-pointer">CONTACT US</li>
          {user.name == "" ? (
            <button className="btn btn-dark primartBtn">
              {" "}
              <Link className="white" to={"/login"}>
                Login
              </Link>{" "}
            </button>
          ) : (
            <li class="nav-item dropdown" className="">
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
    </div>
  );
};

export default Navbar;
