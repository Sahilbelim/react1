import React, { Component } from "react";
import axios from "axios";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      price: "",
      stock: "",
      description: "",
      photo1: null,
      photo2: null,
      photo3: null,
      photo4: null,
    };
  }

  handleImageUpload = (event, imageType) => {
    const file = event.target.files[0];
    this.setState({
      [imageType]: file,
    });
  };
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
  handleSubmit = async (event) =>
  {
    var brandid = this.getCookie("brandid");
    console.log(brandid);
    if (brandid == null)
    {
      window.location.href = "/home";
    }
    else
    {
      event.preventDefault();

      const {
        title,
        price,
        stock,
        description,
        photo1,
        photo2,
        photo3,
        photo4,
      } = this.state;

      const formData = new FormData();
      formData.append("brandid", brandid);
      formData.append("title", title);
      formData.append("price", price);
      formData.append("stock", stock);
      formData.append("description", description);
      formData.append("photo1", photo1);
      formData.append("photo2", photo2);
      formData.append("photo3", photo3);
      formData.append("photo4", photo4);
      console.log(formData);
      const jsonObject = {};
      formData.forEach((value, key) => {
        jsonObject[key] = value;
      });
      console.log(jsonObject);

      try {
        const response = await axios.post(
          "http://localhost:5000/add_product",
          formData
        );
        console.log("Data inserted successfully", response.data);
      } catch (error) {
        console.error("Error inserting data:", error);
      }
    }
  };

  render() {
    const { title, price, stock, description } = this.state;

    return (
      <div className="col-12 col-xxl-auto mb-5">
        <h2 className="small-title">Tips</h2>
        <div className="card h-100-card">
          <div className="card-body row g-0">
            <form
              encType="multipart/form-data"
              className="row g-3 needs-validation"
              noValidate
              onSubmit={this.handleSubmit}
            >
              <div className="col-md-4">
                <label htmlFor="validationCustom01" className="form-label">
                  Product Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  required
                  value={title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="validationCustom02" className="form-label">
                  Product Price in $
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="validationCustom02"
                  required
                  value={price}
                  onChange={(e) => this.setState({ price: e.target.value })}
                />
              </div>
              <div className="col-md-4">
                <label
                  htmlFor="validationCustomUsername"
                  className="form-label"
                >
                  Stock
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                    value={stock}
                    onChange={(e) => this.setState({ stock: e.target.value })}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="floatingTextarea" className="form-label">
                  Product Details
                </label>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                    value={description}
                    onChange={(e) =>
                      this.setState({ description: e.target.value })
                    }
                  ></textarea>
                  <label htmlFor="floatingTextarea">Description</label>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="formFile" className="form-label">
                  Select Product Banner Image
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={(e) => this.handleImageUpload(e, "photo1")}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="formFile" className="form-label">
                  Select Product Slider Image 1
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={(e) => this.handleImageUpload(e, "photo2")}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="formFile" className="form-label">
                  Select Product Slider Image 2
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={(e) => this.handleImageUpload(e, "photo3")}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="formFile" className="form-label">
                  Select Product Slider Image 3
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={(e) => this.handleImageUpload(e, "photo4")}
                />
              </div>

              <div className="col-12 mt-5">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;
