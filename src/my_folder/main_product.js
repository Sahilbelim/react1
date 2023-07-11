import React, { Component } from 'react'
import "../index.css";
import Navbar from './Navbar';
import axios from "axios";


export default class Main_product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      productid:null
    };
  }
 getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

  componentDidMount() {
    var url = new URL(window.location.href);
    var CurrentPage = url.href;
      
   var Productid = CurrentPage.substring(CurrentPage.lastIndexOf("/") + 1);
    console.log(CurrentPage);
    console.log(Productid);
    axios
      .get(`http://localhost:5000/product/${Productid}`)
      .then((response) => {
        // Handle the API response
        this.setState({
          product: response.data[0],
        });
        this.setState({
          productid: Productid,
        });
        // console.log("API response:", response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error("Error calling API:", error);
      });
  }
  AddToCart() {
    let userid = this.getCookie("userid");
    console.log(userid);
    if (userid === null)
    {
      window.location.href = "/user_login";
    }
    else
    {
      alert("AddToCart");
      console.log(this.state.productid);
      let Productid = this.state.productid;

      let quantity = document.getElementById("quantity").value;
      // console.log(Productid);
      // console.log(userid);
      const form = new FormData();
      form.append("Productid", Productid);
      form.append("userid", userid);
      form.append("quantity", quantity);
      // console.log(form);
      const jsonObject = {};
      form.forEach((value, key) => {
        jsonObject[key] = value;
      });
      console.log(jsonObject);
      axios
        .post("http://localhost:5000/add_to_cart", jsonObject)
        .then((response) => {
          console.log("API response:", response.data);

          // Handle the response as needed
        })
        .catch((error) => {
          console.error("Error calling API:", error);
          // Handle the error as needed
        });
    }
  }

  render() {
    const { product } = this.state;
    console.log(product);
    return (
      <>
        <Navbar />
        <div>
          <div className=" ">
            <div className="container mt-5">
              <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                <button className="how-pos3 hov3 trans-04 js-hide-modal1">
                  <img src="" alt="CLOSE" />
                </button>

                <div className="row">
                  <div className="col-md-6 col-12 col-lg-7 p-b-30">
                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                      <div className="wrap-slick3 flex-sb flex-w">
                        <div className="wrap-slick3-dots"></div>
                        <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>
                        <div
                          id="carouselExample"
                          className="carousel slide carousel-fade"
                        >
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img
                                src={product.photo1}
                                className="d-block w-100 "
                                alt="IMG-PRODUCT"
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src={product.photo2}
                                className="d-block w-100"
                                alt="IMG-PRODUCT"
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src={product.photo3}
                                className="d-block w-100"
                                alt="IMG-PRODUCT"
                              />
                            </div>
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-5 p-b-30">
                    <div className="p-r-50 p-t-5 p-lr-0-lg">
                      <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                        {product.title}
                      </h4>

                      <span className="mtext-106 cl2">${product.price}</span>

                      <p className="stext-102 cl3 p-t-23">{product.description}</p>

                      {/* <!--  --> */}
                      <div className="p-t-33">
                        <div className="flex-w flex-r-m p-b-10 form-floating">
                          <div className="size-203 flex-c-m respon6">Size</div>

                          <div className="size-204 respon6-next ">
                            <div className="rs1-select2 bor8 bg0">
                              <select
                                className="js-select2 form-select"
                                name="time"
                              >
                                <option>Choose an option</option>
                                <option>Size S</option>
                                <option>Size M</option>
                                <option>Size L</option>
                                <option>Size XL</option>
                              </select>
                              <div className="dropDownSelect2"></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex-w flex-r-m p-b-10 form-floating">
                          <div className="size-203 flex-c-m respon6">Color</div>

                          <div className="size-204 respon6-next">
                            <div className="rs1-select2 bor8 bg0 ">
                              <select
                                className="js-select2 form-select"
                                name="time"
                              >
                                <option>
                                  <h4>Choose an option</h4>
                                </option>
                                <option>Red</option>
                                <option>Blue</option>
                                <option>White</option>
                                <option>Grey</option>
                              </select>
                              <div className="dropDownSelect2"></div>
                            </div>
                          </div>
                        </div>

                        <div className="flex-w flex-r-m p-b-10">
                          <div className="size-204 flex-w flex-m respon6-next">
                            <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                              <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                <i className="fs-16 zmdi zmdi-minus"></i>
                              </div>

                              <input
                                className="mtext-104 cl3 txt-center num-product"
                                type="number"
                                name="num-product"
                                id="quantity"
                              />

                              <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                <i className="fs-16 zmdi zmdi-plus"></i>
                              </div>
                            </div>

                            <button
                              onClick={() => this.AddToCart()}
                              className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* <!--  --> */}
                      <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                        <div className="flex-m bor9 p-r-10 m-r-11">
                          <a
                            href="/"
                            className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                            data-tooltip="Add to Wishlist"
                          >
                            <i className="zmdi zmdi-favorite"></i>
                          </a>
                        </div>

                        <a
                          href="/"
                          className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                          data-tooltip="Facebook"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>

                        <a
                          href="/"
                          className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                          data-tooltip="Twitter"
                        >
                          <i className="fa fa-twitter"></i>
                        </a>

                        <a
                          href="/"
                          className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                          data-tooltip="Google Plus"
                        >
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
