import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    securityCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Form Data:", formData);

    axios
      .post("http://localhost:3001/login", formData)
      .then((response) => {
        console.log("Login successful:", response.data);
      })
      .catch((error) => {
        console.error("Login failed:", error.response.data);
      });
  };

  return (
    <main className="main pages">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <a href="index.html" rel="nofollow">
              <i className="fi-rs-home mr-5"></i>Home
            </a>
            <span></span> Pages <span></span> My Account
          </div>
        </div>
      </div>
      <div className="page-content pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
              <div className="row">
                <div className="col-lg-6 pr-30 d-none d-lg-block">
                  <img
                    className="border-radius-15"
                    src="assets/imgs/page/login-1.png"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 col-md-8">
                  <div className="login_wrap widget-taber-content background-white">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h1 className="mb-5">Login</h1>
                        <p className="mb-30">
                          Don't have an account?{" "}
                          <a href="page-register.html">Create here</a>
                        </p>
                      </div>
                      <form method="post" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            required=""
                            name="email"
                            // placeholder="Username or Email *"
                            placeholder="Email *"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            required=""
                            type="password"
                            name="password"
                            placeholder="Your password *"
                            value={formData.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="login_footer form-group">
                          <div className="chek-form">
                            <input
                              type="text"
                              required=""
                              name="securityCode"
                              placeholder="Security code *"
                              value={formData.securityCode}
                              onChange={handleChange}
                            />
                          </div>
                          <span className="security-code">
                            <b className="text-new">8</b>
                            <b className="text-hot">6</b>
                            <b className="text-sale">7</b>
                            <b className="text-best">5</b>
                          </span>
                        </div>
                        <div className="login_footer form-group mb-50">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="checkbox"
                                id="exampleCheckbox1"
                                value=""
                              />
                              <label
                                className="form-check-label"
                                for="exampleCheckbox1"
                              >
                                <span>Remember me</span>
                              </label>
                            </div>
                          </div>
                          <a className="text-muted" href="#">
                            Forgot password?
                          </a>
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-heading btn-block hover-up"
                            name="login"
                          >
                            Log in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
