import Logo from "../Images/logo.png";
import Cart from "../Images/cart.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
       <Link className="custom-link" to= "/"><img className="logo" src={Logo} /></Link>
      </div>
      <div className="app-name">
        <Link className="custom-link-appname" to= "/"><h1>🍔FOODIE RAMPUR 🍔</h1></Link>
      </div>
      <div className="nav-item">
        <ul>
          <li><Link className="custom-link" to= "/">Home</Link></li>
          <li><Link className="custom-link" to= "/about">About US</Link></li>
          <li><Link className="custom-link" to= "/contact">Contact US</Link></li>
          <li>
            <img className="cart" src={Cart} />
          </li>
          <li>
            <button
              className="login"
              onClick={() => {
                loginBtn === "login"
                  ? setLoginBtn("logout")
                  : setLoginBtn("login");
              }}
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
