import React, { Component } from 'react'
import axios from 'axios';

export default class Temp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  getCookie(name) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }
  ProductApi() {
    var id = this.getCookie("brandid")
    console.log(id);
    if (id == null)
    {
      window.location.href="/brand_login"
    }
    
    axios({
      method: "post",
      url: "http://localhost:5000/brand_products",
      responseType: "json",
      data: {
        brandid: id,
      },
    })
      .then((response) => {
        console.log("API response:", response.data);
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.error("Error calling API:", error);
      });
  }

  componentDidMount() {
    this.ProductApi();
  }
  render() {var {products}=this.state
    return (
      <div className="col-xl-6 mb-5">
        <h2 className="small-title">Top Selling Items</h2>
        <div className="scroll-out mb-n2">
          <div className="scroll-by-count" id="pro" data-count="4"></div>
          {products.map(function (product) {
            console.log(product);
            return (
              <>
                {/* <div>
                  <div>{product.id}</div>
                  <div>{product.title}</div>
                  <div>{product.price}</div>
                  <div>{product.photo1}</div>
                  <div>{product.photo2}</div>
                  <div>{product.photo3}</div>
                  <div>{product.photo4}</div>
                  <div>{product.description}</div>
                  <div>{product.stock}</div>
                </div> */}
                <div className="card mb-2 border border-0">
                  <div className="row g-0 sh-14 sh-md-10">
                    <div className="col-auto">
                      <a href="Products.Detail.html">
                        <img
                          src={product.photo1}
                          alt="alternate text"
                          className="card-img card-img-horizontal sw-11"
                        />
                      </a>
                    </div>
                    <div className="col">
                      <div className="card-body pt-0 pb-0 h-100">
                        <div className="row g-0 h-100 align-content-center">
                          <div className="col-12 col-md-9 d-flex align-items-center mb-2 mb-md-0">
                            <a>{product.title}</a>
                          </div>
                          <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-end text-muted text-medium">
                            {product.stock} stock
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
       
       
  }
}
