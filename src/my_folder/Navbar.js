import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import './mystyle.css';
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  componentDidCatch() {
    this.setState({
      userid: this.getCookie("userid"),
    });
  }
  Logout()
  {
    Cookies.set('userid', null);
    var id = Cookies.get("userid"); 
    console.log(id)
  }

  render() {
    var userid = Cookies.get("user+id"); 
    return (
      <div>
        <div className="mt-5"></div>
        <nav className="navbar  navbar-expand-lg bg-body-tertiary fixed-top ">
          <div className="container-fluid">
            <img
              src={`${process.env.PUBLIC_URL}/project/themewagon.github.io/cozastore/images/icons/logo-01.png`}
              alt="IMG-LOGO"
            />
            {/* <Link className="navbar-brand" to="/">
              Navbar
            </Link> */}
            <button
              className="navbar-toggler m-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon">
                
              <i className="fa-solid fa-bars"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse ms-5"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-5 ">
                <li className="nav-item m-2 ms-3 ">
                  <Link className="nav-link" to="/home">
                    <button>Home</button>
                  </Link>
                </li>

                <li className="nav-item m-2 ms-3">
                  <Link className="nav-link" to="/shop">
                    <button>Shop</button>
                  </Link>
                </li>
                <li className="nav-item m-2 ms-3">
                  <Link className="nav-link" to="/features">
                    <button>Features</button>
                  </Link>
                </li>
                <li className="nav-item m-2 ms-3">
                  <Link className="nav-link text-lg" to="/blog">
                    <button>Blog</button>
                  </Link>
                </li>
                <li className="nav-item m-2 b  ms-3">
                  <Link className="nav-link" to="/about">
                    <button> About</button>
                  </Link>
                </li>
                <li className="nav-item m-2 b ms-3">
                  <Link className="nav-link" to="/contect">
                    <button>Contact</button>
                  </Link>
                </li>

                {userid == "null" ? (
                  <li>
                    <div class="dropdown m-2">
                      <button>Login</button>
                      <div class="dropdown-options">
                        <a href="user_login"> User </a>
                        <a href="/brand_login">Brand </a>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li>
                    <button onClick={()=>this.Logout()} className=" btn btn-warning mt-4">
                      Logout
                    </button>
                  </li>
                )}
                <Outlet />
              </ul>
              <div className="wrap-icon-header flex-w flex-r-m">
                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                  <i className="zmdi zmdi-search"></i>
                </div>
                <Link to="/addtocart">
                  <div
                    className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                    data-notify="2"
                  >
                    <i className="zmdi zmdi-shopping-cart"></i>
                  </div>
                </Link>
                <a
                  href="/"
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                  data-notify="0"
                >
                  <i className="zmdi zmdi-favorite-outline"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
