import React, { useState } from "react";

export const Register = () => {
  const [selectedOption, setSelectedOption] = useState("");

  // Step 2: Add state to manage form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    securityCode: "",
  });

  // Step 3: Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 4: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // Optionally, you can send this data to a server using fetch or axios
    // fetch('your-api-endpoint', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch((error) => console.error('Error:', error));
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
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
                <div className="col-lg-6 col-md-8">
                  <div className="login_wrap widget-taber-content background-white">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h1 className="mb-5">Create an Account</h1>
                        <p className="mb-30">
                          Already have an account?{" "}
                          <a href="page-login.html">Login</a>
                        </p>
                      </div>
                      <form method="post" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            required=""
                            name="username"
                            placeholder="Username"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            required=""
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            required=""
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            required=""
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            value={formData.confirmPassword}
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
                        <div className="payment_option mb-50">
                          <div className="custome-radio">
                            <input
                              className="form-check-input"
                              required=""
                              type="radio"
                              name="payment_option"
                              id="exampleRadios3"
                              checked={selectedOption === "customer"}
                              onChange={handleOptionChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios3"
                              data-bs-toggle="collapse"
                              data-target="#bankTranfer"
                              aria-controls="bankTranfer"
                            >
                              I am a customer
                            </label>
                          </div>
                          <div className="custome-radio">
                            <input
                              className="form-check-input"
                              required=""
                              type="radio"
                              name="payment_option"
                              id="exampleRadios4"
                              checked={selectedOption === "vendor"}
                              onChange={handleOptionChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios4"
                              data-bs-toggle="collapse"
                              data-target="#checkPayment"
                              aria-controls="checkPayment"
                            >
                              I am a vendor
                            </label>
                          </div>
                        </div>
                        <div className="login_footer form-group mb-50">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="checkbox"
                                id="exampleCheckbox12"
                                value=""
                              />
                              <label
                                className="form-check-label"
                                for="exampleCheckbox12"
                              >
                                <span>I agree to terms &amp; Policy.</span>
                              </label>
                            </div>
                          </div>
                          <a href="page-privacy-policy.html">
                            <i className="fi-rs-book-alt mr-5 text-muted"></i>
                            Learn more
                          </a>
                        </div>
                        <div className="form-group mb-30">
                          <button
                            type="submit"
                            className="btn btn-fill-out btn-block hover-up font-weight-bold"
                            name="login"
                          >
                            Submit &amp; Register
                          </button>
                        </div>{" "}
                        <p className="font-xs text-muted">
                          <strong>Note:</strong>Your personal data will be used
                          to support your experience throughout this website, to
                          manage access to your account, and for other purposes
                          described in our privacy policy
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 pr-30 d-none d-lg-block">
                  <div className="card-login mt-115">
                    <a href="#" className="social-login facebook-login">
                      <img
                        src="assets/imgs/theme/icons/logo-facebook.svg"
                        alt=""
                      />
                      <span>Continue with Facebook</span>
                    </a>
                    <a href="#" className="social-login google-login">
                      <img
                        src="assets/imgs/theme/icons/logo-google.svg"
                        alt=""
                      />
                      <span>Continue with Google</span>
                    </a>
                    <a href="#" className="social-login apple-login">
                      <img
                        src="assets/imgs/theme/icons/logo-apple.svg"
                        alt=""
                      />
                      <span>Continue with Apple</span>
                    </a>
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
