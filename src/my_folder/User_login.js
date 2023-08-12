import React, { Component } from "react";
import axios from "axios";
const FormData = require("form-data");

export default class User_login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
  Login() {
    alert("call");
    let status;
    let email = document.getElementById("email").value;
    let password = document.getElementById("Password").value;
    const form = new FormData();
    form.append("email", email);
    form.append("password", password);
    console.log(form);

    const jsonObject = {};
    form.forEach((value, key) => {
      jsonObject[key] = value;
    });
    console.log(jsonObject);

    axios
      .post("http://localhost:5000/User_login", jsonObject)
      .then((response) => {
        console.log("API response:", response.data);
        var data = response.data;
        console.log("API response:", data.result[0]["id"]);
        document.cookie = `userid=${response.data.result[0].id}`;
        var cookies = this.getCookie("userid");
        console.log(cookies);
        // Handle the response as needed
        status = response.data.status;
        if (status === 700) {
          console.log("status is", status);
           window.location.href = "/home";
        }
      })
      .catch((error) => {
        console.error("Error calling API:", error);
        // Handle the error as needed
      });
  }

  render() {
    // const { ms } = this.state;
    // console.log(ms);
    return (
      <div>
        <div>
          <div className="container my-5">
            <div className="row my-5">
              <div className="col-12 text-center h1 text-uppercase">
                user login
              </div>

              <div className="col-6 offset-3 mt-5">
                <div className="card">
                  <div className="card-body">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control mb-3"
                        id="Password"
                        placeholder="Password"
                      />
                      <label htmlFor="Password">Password</label>
                    </div>
                    <button
                      type="button"
                      onClick={() => this.Login()}
                      className="btn btn-primary"
                    >
                      save
                    </button>
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
