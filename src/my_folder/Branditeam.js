import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Temp from "./temp";
export default class Branditeam extends Component {
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
    axios({
      method: "post",
      url: "http://localhost:5000/brand_products",
      responseType:'json',
      data: {
        brandid: 1,
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

  render() {
    
   const { products } = this.state;
    

    return (
     <Temp/>
    );
  }
}
