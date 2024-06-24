import React from "react";
import "./login.css";

export default function Login() {
  return (
    <section className="container forms">
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <form action="#">
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>

            <div className="field input-field">
              <input
                type="password"
                placeholder="Password"
                className="password"
              />
              <i className="bx bx-hide eye-icon"></i>
            </div>

            <div className="form-link">
              <a
                href="registration-form\Nest website\nest-frontend-v6.netlify.app\blog-category-fullwidth.html"
                className="forgot-pass"
              >
                Forgot password?
              </a>
            </div>

            <div className="field button-field">
              <button>Login</button>
            </div>
          </form>

          <div className="form-link">
            <span>
              Don't have an account?{" "}
              <a
                href="Nest website/nest-frontend-v6.netlify.app"
                className="link signup-`link"
              >
                Signup
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
