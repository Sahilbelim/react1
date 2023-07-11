import React, { Component } from 'react'
import { Link, Outlet } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="menu-mobile">
          <ul className="topbar-mobile">
            <li>
              <div className="left-top-bar">
                Free shipping for standard order over $100
              </div>
            </li>

            <li>
              <div className="right-top-bar flex-w h-full">
                <a href="#" className="flex-c-m p-lr-10 trans-04">
                  Help & FAQs
                </a>

                <a href="#" className="flex-c-m p-lr-10 trans-04">
                  My Account
                </a>

                <a href="#" className="flex-c-m p-lr-10 trans-04">
                  EN
                </a>

                <a href="#" className="flex-c-m p-lr-10 trans-04">
                  USD
                </a>
              </div>
            </li>
          </ul>

          <ul className="main-menu-m">
            <li>
              <a href="index.html">Home</a>
              <ul className="sub-menu-m">
                <li>
                  <a href="index.html">Homepage 1</a>
                </li>
                <li>
                  <a href="home-02.html">Homepage 2</a>
                </li>
                <li>
                  <a href="home-03.html">Homepage 3</a>
                </li>
              </ul>
              <span className="arrow-main-menu-m">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </span>
            </li>

            <li>
              <a href="product.html">Shop</a>
            </li>

            <li>
              <a href="shoping-cart.html" className="label1 rs1" data-label1="hot">
                Features
              </a>
            </li>

            <li>
              <a href="blog.html">Blog</a>
            </li>

            <li>
              <a href="about.html">About</a>
            </li>

            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
        <div className="mt-5"></div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
          <div className="container-fluid">
            <img
              src={`${process.env.PUBLIC_URL}/project/themewagon.github.io/cozastore/images/icons/logo-01.png`}
              alt="IMG-LOGO"
            />
            {/* <Link className="navbar-brand" to="/">
              Navbar
            </Link> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
            <div
              className="collapse navbar-collapse ms-5"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-5 ">
                <li className="nav-item ms-3 ">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>

                <li className="nav-item  ms-3">
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item  ms-3">
                  <Link className="nav-link" to="/features">
                    Features
                  </Link>
                </li>
                <li className="nav-item  ms-3">
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item  ms-3">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item  ms-3">
                  <Link className="nav-link" to="/contect">
                    Contact
                  </Link>
                </li>

                <li className="nav-item dropdown ms-3">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Login
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/user_login">
                        User Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/brand_login">
                        Brand Login
                      </Link>
                    </li>
                  </ul>
                  <Outlet />
                </li>
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
              {/* <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
        
      </div>
    );
  }
}
