import React, { Component } from 'react'

export default class BrandSingleiteam extends Component {
  render() {
    return (
      <div className="card mb-2 border border-0">
        <div className="row g-0 sh-14 sh-md-10">
          <div className="col-auto">
            <a href="Products.Detail.html">
              <img
                src="img/product/small/product-3.webp"
                alt="alternate text"
                className="card-img card-img-horizontal sw-11"
              />
            </a>
          </div>
          <div className="col">
            <div className="card-body pt-0 pb-0 h-100">
              <div className="row g-0 h-100 align-content-center">
                <div className="col-12 col-md-9 d-flex align-items-center mb-2 mb-md-0">
                  <a href="Products.Detail.html">Good Glass Teapot</a>
                </div>
                <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-end text-muted text-medium">
                  4.024 Sales
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
