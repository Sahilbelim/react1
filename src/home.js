import React, { Component } from "react";
import Navbar from "./my_folder/Navbar";
import Footer from "./my_folder/footer";
import Products from "./my_folder/products";

export default class Home extends Component {
  render() {
    return (
      <div >
        {/* <!-- Header --> */}
          <Navbar />
        

        {/* <!-- Cart --> */}
        <div class="wrap-header-cart js-panel-cart">
          <div class="s-full js-hide-cart"></div>

          <div class="header-cart flex-col-l p-l-65 p-r-25">
            <div class="header-cart-title flex-w flex-sb-m p-b-8">
              <span class="mtext-103 cl2">Your Cart</span>

              <div class="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                <i class="zmdi zmdi-close"></i>
              </div>
            </div>

            <div class="header-cart-content flex-w js-pscroll">
              <ul class="header-cart-wrapitem w-full">
                <li class="header-cart-item flex-w flex-t m-b-12">
                  <div class="header-cart-item-img">
                    <img
                      src={`${process.env.PUBLIC_URL}/project/themewagon.github.io/cozastore/images/item-cart-01.jpg`}
                      alt="IMG"
                    />
                  </div>

                  <div class="header-cart-item-txt p-t-8">
                    <a
                      href="/"
                      class="header-cart-item-name m-b-18 hov-cl1 trans-04"
                    >
                      White Shirt Pleat
                    </a>

                    <span class="header-cart-item-info">1 x $19.00</span>
                  </div>
                </li>

                <li class="header-cart-item flex-w flex-t m-b-12">
                  <div class="header-cart-item-img">
                    <img
                      src={`${process.env.PUBLIC_URL}/project/themewagon.github.io/cozastore/images/item-cart-02.jpg`}
                      alt="IMG"
                    />
                  </div>

                  <div class="header-cart-item-txt p-t-8">
                    <a
                      href="/"
                      class="header-cart-item-name m-b-18 hov-cl1 trans-04"
                    >
                      Converse All Star
                    </a>

                    <span class="header-cart-item-info">1 x $39.00</span>
                  </div>
                </li>

                <li class="header-cart-item flex-w flex-t m-b-12">
                  <div class="header-cart-item-img">
                    <img
                      src={`${process.env.PUBLIC_URL}/project/themewagon.github.io/cozastore/images/item-cart-03.jpg`}
                      alt="IMG"
                    />
                  </div>

                  <div class="header-cart-item-txt p-t-8">
                    <a
                      href="/"
                      class="header-cart-item-name m-b-18 hov-cl1 trans-04"
                    >
                      Nixon Porter Leather
                    </a>

                    <span class="header-cart-item-info">1 x $17.00</span>
                  </div>
                </li>
              </ul>

              <div class="w-full">
                <div class="header-cart-total w-full p-tb-40">
                  Total: $75.00
                </div>

                <div class="header-cart-buttons flex-w w-full">
                  <a
                    href="shoping-cart.html"
                    class="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
                  >
                    View Cart
                  </a>

                  <a
                    href="shoping-cart.html"
                    class="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10"
                  >
                    Check Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div
          id="carouselExampleInterval"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval={`10000`}>
              <img
                // src="../public/project/themewagon.github.io/cozastore/images/slide-01.jpg"
                src={`${process.env.PUBLIC_URL}/project/themewagon.github.io/cozastore/images/slide-01.jpg`}
                class="d-block w-100"
                alt="..."
              />{" "}
              {/* <div class="carousel-caption d-none d-md-block">
            <h5 data-aos="fade-down">First slide label</h5>

            <div>
              {" "}
              <span class="ltext-101 cl2 respon2">Women Collection 2018</span>
            </div>
          </div> */}
            </div>
            <div class="carousel-item" data-bs-interval="10000">
              <img
                src={`${process.env.PUBLIC_URL}/project/themewagon.github.io/cozastore/images/slide-02.jpg`}
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item" data-bs-interval="10000">
              <img
                src={`${process.env.PUBLIC_URL}/project/themewagon.github.io/cozastore/images/slide-03.jpg`}
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        {/* <!-- Banner --> */}
        <div class="sec-banner bg0 p-t-80 p-b-50">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                {/* <!-- Block1 --> */}
                <div class="block1 wrap-pic-w">
                  <img
                    src={`${process.env.PUBLIC_URL}/project/themewagon.github.io/cozastore/images/banner-01.jpg`}
                    alt="IMG-BANNER"
                  />

                  <a
                    href="product.html"
                    class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                  >
                    <div class="block1-txt-child1 flex-col-l">
                      <span class="block1-name ltext-102 trans-04 p-b-8">
                        Women
                      </span>

                      <span class="block1-info stext-102 trans-04">
                        Spring 2018
                      </span>
                    </div>

                    <div class="block1-txt-child2 p-b-4 trans-05">
                      <div class="block1-link stext-101 cl0 trans-09">
                        Shop Now
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                {/* <!-- Block1 --> */}
                <div class="block1 wrap-pic-w">
                  <img
                    src={`${process.env.PUBLIC_URL}/project/themewagon.github.io/cozastore/images/banner-02.jpg`}
                    alt="IMG-BANNER"
                  />

                  <a
                    href="product.html"
                    class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                  >
                    <div class="block1-txt-child1 flex-col-l">
                      <span class="block1-name ltext-102 trans-04 p-b-8">
                        Men
                      </span>

                      <span class="block1-info stext-102 trans-04">
                        Spring 2018
                      </span>
                    </div>

                    <div class="block1-txt-child2 p-b-4 trans-05">
                      <div class="block1-link stext-101 cl0 trans-09">
                        Shop Now
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                {/* <!-- Block1 --> */}
                <div class="block1 wrap-pic-w">
                  <img
                    src={`${process.env.PUBLIC_URL}/project/themewagon.github.io/cozastore/images/banner-03.jpg`}
                    alt="IMG-BANNER"
                  />

                  <a
                    href="product.html"
                    class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                  >
                    <div class="block1-txt-child1 flex-col-l">
                      <span class="block1-name ltext-102 trans-04 p-b-8">
                        Accessories
                      </span>

                      <span class="block1-info stext-102 trans-04">
                        New Trend
                      </span>
                    </div>

                    <div class="block1-txt-child2 p-b-4 trans-05">
                      <div class="block1-link stext-101 cl0 trans-09">
                        Shop Now
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Product --> */}
       <Products/>

        {/* <!-- Footer --> */}
        <Footer/>

        {/* <!-- Back to top --> */}
        <div class="btn-back-to-top" id="myBtn">
          <span class="symbol-btn-back-to-top">
            <i class="zmdi zmdi-chevron-up"></i>
          </span>
        </div>

        {/* <!-- Modal1 --> */}
        <div class="wrap-modal1 js-modal1 p-t-60 p-b-20">
          <div class="overlay-modal1 js-hide-modal1"></div>

          <div class="container">
            <div class="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
              <button class="how-pos3 hov3 trans-04 js-hide-modal1">
                <img
                  src={`${process.env.PUBLIC_URL}/project/themewagon.github.io/cozastore/images/icons/icon-close.png`}
                  alt="CLOSE"
                />
              </button>

              <div class="row">
                <div class="col-md-6 col-lg-7 p-b-30">
                  <div class="p-l-25 p-r-30 p-lr-0-lg">
                    <div class="wrap-slick3 flex-sb flex-w">
                      <div class="wrap-slick3-dots"></div>
                      <div class="wrap-slick3-arrows flex-sb-m flex-w"></div>

                      <div class="slick3 gallery-lb">
                        <div
                          class="item-slick3"
                          data-thumb="images/product-detail-01.jpg"
                        >
                          <div class="wrap-pic-w pos-relative">
                            <img
                              src={`${process.env.PUBLIC_URL}/project/themewagon.github.io/cozastore/images/product-detail-01.jpg`}
                              alt="IMG-PRODUCT"
                            />

                            <a
                              class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                              href="images/product-detail-01.jpg"
                            >
                              <i class="fa fa-expand"></i>
                            </a>
                          </div>
                        </div>

                        <div
                          class="item-slick3"
                          data-thumb="images/product-detail-02.jpg"
                        >
                          <div class="wrap-pic-w pos-relative">
                            <img
                              src={`${process.env.PUBLIC_URL}/project/themewagon.github.io/cozastore/images/product-detail-02.jpg`}
                              alt="IMG-PRODUCT"
                            />

                            <a
                              class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                              href="images/product-detail-02.jpg"
                            >
                              <i class="fa fa-expand"></i>
                            </a>
                          </div>
                        </div>

                        <div
                          class="item-slick3"
                          data-thumb="images/product-detail-03.jpg"
                        >
                          <div class="wrap-pic-w pos-relative">
                            <img
                              src={`${process.env.PUBLIC_URL}/project/themewagon.github.io/cozastore/images/product-detail-03.jpg`}
                              alt="IMG-PRODUCT"
                            />

                            <a
                              class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                              href="images/product-detail-03.jpg"
                            >
                              <i class="fa fa-expand"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-6 col-lg-5 p-b-30">
                  <div class="p-r-50 p-t-5 p-lr-0-lg">
                    <h4 class="mtext-105 cl2 js-name-detail p-b-14">
                      Lightweight Jacket
                    </h4>

                    <span class="mtext-106 cl2">$58.79</span>

                    <p class="stext-102 cl3 p-t-23">
                      Nulla eget sem vitae eros pharetra viverra. Nam vitae
                      luctus ligula. Mauris consequat ornare feugiat.
                    </p>

                    {/* <!--  --> */}
                    <div class="p-t-33">
                      <div class="flex-w flex-r-m p-b-10">
                        <div class="size-203 flex-c-m respon6">Size</div>

                        <div class="size-204 respon6-next">
                          <div class="rs1-select2 bor8 bg0">
                            <select class="js-select2" name="time">
                              <option>Choose an option</option>
                              <option>Size S</option>
                              <option>Size M</option>
                              <option>Size L</option>
                              <option>Size XL</option>
                            </select>
                            <div class="dropDownSelect2"></div>
                          </div>
                        </div>
                      </div>

                      <div class="flex-w flex-r-m p-b-10">
                        <div class="size-203 flex-c-m respon6">Color</div>

                        <div class="size-204 respon6-next">
                          <div class="rs1-select2 bor8 bg0">
                            <select class="js-select2" name="time">
                              <option>Choose an option</option>
                              <option>Red</option>
                              <option>Blue</option>
                              <option>White</option>
                              <option>Grey</option>
                            </select>
                            <div class="dropDownSelect2"></div>
                          </div>
                        </div>
                      </div>

                      <div class="flex-w flex-r-m p-b-10">
                        <div class="size-204 flex-w flex-m respon6-next">
                          <div class="wrap-num-product flex-w m-r-20 m-tb-10">
                            <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                              <i class="fs-16 zmdi zmdi-minus"></i>
                            </div>

                            <input
                              class="mtext-104 cl3 txt-center num-product"
                              type="number"
                              name="num-product"
                              value="1"
                            />

                            <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                              <i class="fs-16 zmdi zmdi-plus"></i>
                            </div>
                          </div>

                          <button class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* <!--  --> */}
                    <div class="flex-w flex-m p-l-100 p-t-40 respon7">
                      <div class="flex-m bor9 p-r-10 m-r-11">
                        <a
                          href="/"
                          class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                          data-tooltip="Add to Wishlist"
                        >
                          <i class="zmdi zmdi-favorite"></i>
                        </a>
                      </div>

                      <a
                        href="/"
                        class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                        data-tooltip="Facebook"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>

                      <a
                        href="/"
                        class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                        data-tooltip="Twitter"
                      >
                        <i class="fa fa-twitter"></i>
                      </a>

                      <a
                        href="/"
                        class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                        data-tooltip="Google Plus"
                      >
                        <i class="fa fa-google-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
