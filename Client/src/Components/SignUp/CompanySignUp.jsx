import React, { useState } from "react";
import { toast } from "react-toastify";

const CompanySignUpForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyVideoUrl, setCompanyVideoUrl] = useState("");
  const [linkedinUsername, setLinkedinUsername] = useState("");
  const [twitterUsername, setTwitterUsername] = useState("");
  const [facebookUsername, setFacebookUsername] = useState("");
  const [pinterestUsername, setPinterestUsername] = useState("");
  const [instagramUsername, setInstagramUsername] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (
      !companyName ||
      !companyWebsite ||
      !companyDescription ||
      !username ||
      !password ||
      !confirmPassword
    ) {
      toast.error("Please fill all the required fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Handle form submission
    // Add your logic to submit the form data

    // Reset form fields
    setCompanyName("");
    setCompanyWebsite("");
    setCompanyVideoUrl("");
    setLinkedinUsername("");
    setTwitterUsername("");
    setFacebookUsername("");
    setPinterestUsername("");
    setInstagramUsername("");
    setCompanyDescription("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");

    toast.success("Company signed up successfully");
  };

  return (
    <>
      <div className="row align-items-center justify-content-center text-center">
        <div className="col-xl-8">
          <div className="jm-create-new-section mb-20">

            <p className="jm-job-sign-text d-inline-block">
            <h4 className="jm-have-account-title"> Already Have an account?</h4>
              <a href="/signIn" className="jm-job-acc mr-15">
               Sign-in
              </a>
            </p>
          </div>
        </div>
      </div>
      <form>
        <div className="jm-post-job-wrapper mb-40">
          <h4 className="jm-job-acc-title">Account informations</h4>
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="col-xl-6 col-md-6">
              <input
                type="text"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="jm-post-job-wrapper mb-40">
          <h4 className="jm-job-acc-title">Company informations</h4>
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <input
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="col-xl-6 col-md-6">
              <input
                type="text"
                placeholder="Company Website"
                value={companyWebsite}
                onChange={(e) => setCompanyWebsite(e.target.value)}
              />
            </div>
            <div className="col-xl-6 col-md-6">
              <input
                type="text"
                placeholder="Company Video URL"
                value={companyVideoUrl}
                onChange={(e) => setCompanyVideoUrl(e.target.value)}
              />
            </div>
            <div className="col-xl-6 col-md-6">
              <input
                type="text"
                placeholder="Linkedin Username"
                value={linkedinUsername}
                onChange={(e) => setLinkedinUsername(e.target.value)}
              />
            </div>
            <div className="col-xl-6 col-md-6">
              <input
                type="text"
                placeholder="Twitter Username"
                value={twitterUsername}
                onChange={(e) => setTwitterUsername(e.target.value)}
              />
            </div>
            <div className="col-xl-6 col-md-6">
              <input
                type="text"
                placeholder="Facebook Username"
                value={facebookUsername}
                onChange={(e) => setFacebookUsername(e.target.value)}
              />
            </div>
            <div className="col-xl-6 col-md-6">
              <input
                type="text"
                placeholder="Pinterest Username"
                value={pinterestUsername}
                onChange={(e) => setPinterestUsername(e.target.value)}
              />
            </div>
            <div className="col-xl-6 col-md-6">
              <input
                type="text"
                placeholder="Instagram Username"
                value={instagramUsername}
                onChange={(e) => setInstagramUsername(e.target.value)}
              />
            </div>
            <div className="col-xl-12">
              <textarea
                placeholder="Company description"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="col-xl-12">
              <div className="choose-file">
                <label htmlFor="upload1">
                  Company Logo <span>(Optional)</span>
                </label>
                <br />
                <input type="file" id="upload1" />
                <br />
                <span className="jm-file-size">Maximum file size: 2 MB</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-md-12">
          <div className="jm-info-buttons mt-25">
            <button
              type="submit"
              className="jm-post-job-btn jm-theme-btn"
              onChange={(e) => handleSubmit(e)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CompanySignUpForm;
