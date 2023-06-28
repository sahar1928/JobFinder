import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import VideoTab from '../Video Area/VideoTab';
import { UserContext } from "../../Context/UserContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { user,setUser, setIsLoggedIn, setBalance, rememberMe, setRememberMe } =
    useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(rememberMe);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRemember(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation
    if (!username || !password) {
      toast.error("Please fill all the required fields");
      return;
    }

    // Handle form submission
    // Add your logic to submit the form data

    setUser(user);
    setBalance(user.UserBalance.Balance);
    setIsLoggedIn(true);
    setRememberMe(remember);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("rememberMe", JSON.stringify(remember));
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h1 className="mt-3 mb-4">Sign In</h1>
          </div>
          <div className="form-group">
            <label htmlFor="username" className="fw-bold">
              Username
            </label>
            <input
              type="username"
              name="username"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
              required
              className="border-0 bg-light form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="fw-bold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="border-0 bg-light form-control"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="remember-me"
              checked={remember}
              onChange={handleRememberMeChange}
            />
            <label className="form-check-label" htmlFor="remember-me">
              <span className="fw-bold">Remember me</span>
            </label>
          </div>
          <button type="submit" className="jm-job-acc mr-15">
            <i className="fa fa-user" aria-hidden="true"></i>
            Sign in
          </button>
          <div className="mt-3 text-center">
            <p className="jm-job-sign-text d-inline-block">
              Don`t have an account?
              <VideoTab/>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
