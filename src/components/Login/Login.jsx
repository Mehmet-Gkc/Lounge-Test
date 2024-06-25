import React from "react";

function Login() {
  return (
    <main className="login-main">
      <div className="login-box">
        <h1>LOUNGEME</h1>
        <button className="login-facebook">LOG IN WITH FACEBOOK</button>
        <form>
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Password" required />
          <a href="/" className="forgot-password">
            Forgot Password?
          </a>
          <button type="submit" className="login-btn">
            LOG IN
          </button>
        </form>
        <div className="login-footer">
          <p>Already have a LoungeMe account?</p>
          <p>
            You can view your account by simply entering your registered e-mail
            address and password.
          </p>
          <p>
            If you don't have an account yet, <a href="/">click here</a> to
            create one now.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
