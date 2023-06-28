import React, { useState } from "react";
import { toast } from "react-toastify";
import { URL } from "../../Data/URL";
import { skills } from "../../Data/JobsData";

const CandidateSignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [professionalTitle, setProfessionalTitle] = useState("");
  const [location, setLocation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [resumeCategory, setResumeCategory] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [availableSkills, setAvailableSkills] = useState([...skills]);
  const [linkedinURL, setLinkedinURL] = useState("");
  const [facebookURL, setFacebookURL] = useState("");
  const [resumeContent, setResumeContent] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [institutionName, setInstitutionName] = useState("");
  const [qualification, setQualification] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notes, setNotes] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [experienceStartDate, setExperienceStartDate] = useState("");
  const [experienceEndDate, setExperienceEndDate] = useState("");
  const [experienceNotes, setExperienceNotes] = useState("");
  const [resumeFile, setResumeFile] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      !username ||
      !password ||
      !confirmPassword ||
      !firstName ||
      !lastName ||
      !email ||
      !professionalTitle ||
      !location ||
      !dateOfBirth ||
      !videoURL ||
      !resumeCategory ||
      !selectedSkills ||
      !resumeContent ||
      !photoFile ||
      !institutionName ||
      !qualification ||
      !startDate ||
      !endDate ||
      !notes ||
      !employerName ||
      !jobTitle ||
      !experienceStartDate ||
      !experienceEndDate ||
      !resumeFile
    ) {
      toast.error("Please fill all the required fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const resumeData = {
        firstName,
        lastName,
        email,
        professionalTitle,
        location,
        dateOfBirth,
        videoURL,
        resumeCategory,
        skills: selectedSkills,
        socialMedia: {
          linkedinURL,
          facebookURL,
        },
        resumeContent,
        photoFile,
        educations: [
          {
            institutionName,
            qualification,
            startDate,
            endDate,
            notes,
          },
        ],
        experiences: [
          {
            employerName,
            jobTitle,
            startDate: experienceStartDate,
            endDate: experienceEndDate,
            notes: experienceNotes,
          },
        ],
        resumeFile,
      };
      
      const candidate = {
        username,
        password,
        email,
        firstName,
        lastName,
        dateOfBirth,
        gender,
        candidateType,
        resumeData,
        socialMedia: {
          linkedinURL,
          facebookURL,
        }
      }

      const response = await fetch(URL + "Candidates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resumeData),
      });

      if (response.ok) {
        toast.success("Resume created successfully");
        // Reset the form
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setEmail("");
        setProfessionalTitle("");
        setLocation("");
        setDateOfBirth("");
        setVideoURL("");
        setResumeCategory("");
        setSelectedSkills("");
        setAvailableSkills("");
        setLinkedinURL("");
        setFacebookURL("");
        setResumeContent("");
        setPhotoFile(null);
        setInstitutionName("");
        setQualification("");
        setStartDate("");
        setEndDate("");
        setNotes("");
        setEmployerName("");
        setJobTitle("");
        setExperienceStartDate("");
        setExperienceEndDate("");
        setExperienceNotes("");
        setResumeFile(null);
      } else {
        toast.error("Failed to create resume");
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  const handleAddSkill = (skill) => {
    const updatedAvailableSkills = availableSkills.filter(
      (item) => item.id !== skill.id
    );
    const updatedSelectedSkills = [...selectedSkills, skill];

    setSelectedSkills(updatedSelectedSkills);
    setAvailableSkills(updatedAvailableSkills);
  };

  const handleRemoveSkill = (skill) => {
    const updatedSelectedSkills = selectedSkills.filter(
      (item) => item.id !== skill.id
    );
    const updatedAvailableSkills = [...availableSkills, skill];

    setSelectedSkills(updatedSelectedSkills);
    setAvailableSkills(updatedAvailableSkills);
  };

  return (
    <div className="jm-post-job-area pt-95 pb-60">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-xl-8">
            <div className="jm-create-new-section mb-20">
              <p className="jm-job-sign-text d-inline-block">
                <h4 className="jm-have-account-title">
                  {" "}
                  Already Have an account?
                </h4>
                <a href="/signIn" className="jm-job-acc mr-15">
                  Sign-in
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="jm-post-job-wrapper mb-40">
          <div className="jm-post-job-wrapper mb-40">
            <h4 className="jm-job-acc-title">Account informations</h4>
            <div className="row">
              <div className="col-xl-6 col-md-12">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                  minLength="8"
                  style={{ border: "1px solid black" }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  minLength="8"
                  style={{ border: "1px solid black" }}
                />
              </div>
              <div className="col-xl-6 col-md-6">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-control"
                  style={{ border: "1px solid black" }}
                />
              </div>
            </div>
          </div>
          <h4 className="jm-job-acc-title">
            Create your resume and put it online.
          </h4>
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="form-control"
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="col-xl-6 col-md-6">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="form-control"
                style={{ border: "1px solid black" }}
              />
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="col-xl-6 col-md-6">
            <input
              type="text"
              placeholder="Professional Title"
              value={professionalTitle}
              onChange={(e) => setProfessionalTitle(e.target.value)}
              className="form-control"
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="col-xl-6 col-md-6">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="col-xl-6 col-md-6">
            <b>Date of Birth : </b>
            <input
              type="date"
              placeholder="Date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="form-control"
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="col-xl-6 col-md-6">
            <input
              type="url"
              placeholder="Video URL"
              value={videoURL}
              onChange={(e) => setVideoURL(e.target.value)}
              className="form-control"
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="col-xl-6 col-md-6">
            <select
              className="jm-job-select form-control"
              value={resumeCategory}
              onChange={(e) => setResumeCategory(e.target.value)}
              style={{ border: "1px solid black" }}
            >
              <option>Resume Category</option>
              <option>HTML</option>
              <option>TEXT</option>
            </select>
          </div>

          <div className="col-xl-12 col-md-12">
            <select
              className="jm-job-select form-control"
              value=""
              onChange={(e) =>
                handleAddSkill(
                  availableSkills.find((skill) => skill.name === e.target.value)
                )
              }
              style={{ border: "1px solid black" }}
            >
              <option value="Select a skill" disabled>
                Select a skill
              </option>
              {availableSkills.map((skill, key) => (
                <option key={key} value={skill.name}>
                  {skill.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-xl-12 col-md-12">
            <h4 className="jm-have-account-title">Selected Skills: </h4>
            <div className="jm-create-new-section mb-40">

                {selectedSkills && 
                  selectedSkills.map((skill, key) => (
                    <span className="ml-10 mb-30" key={key}>
                      {skill.name}
                      <button
                        className="jm-job-acc ml-10 "
                        onClick={() => handleRemoveSkill(skill)}
                      >
                        Remove
                      </button>
                    </span>
                  ))}

            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <b>Linkedin URL</b>
              <input
                type="url"
                placeholder="https://linkedin.com/in/profile"
                pattern="https://linkedin.com/in/*"
                value={linkedinURL}
                onChange={(e) => setLinkedinURL(e.target.value)}
                className="form-control"
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="col-xl-6 col-md-6">
              <b>Facebook URL</b>
              <input
                type="url"
                placeholder="https://www.facebook.com/profile"
                pattern="http://www\.facebook\.com\/(.+)|https://www\.facebook\.com\/(.+)"
                value={facebookURL}
                onChange={(e) => setFacebookURL(e.target.value)}
                className="form-control"
                style={{ border: "1px solid black" }}
              />
            </div>
          </div>
          <div className="col-xl-12 col-md-6">
            <textarea
              placeholder="Resume Content"
              value={resumeContent}
              onChange={(e) => setResumeContent(e.target.value)}
              className="form-control"
              style={{ border: "1px solid black" }}
            ></textarea>
          </div>
          <div className="col-xl-12">
            <div className="choose-file">
              <label htmlFor="upload">
                Your Photo <span>(Optional)</span>
              </label>{" "}
              <br />
              <input
                type="file"
                id="upload"
                onChange={(e) => setPhotoFile(e.target.files[0])}
              />{" "}
              <br />
              <span className="jm-file-size">Maximum file size: 2 MB</span>
            </div>
          </div>
        </div>
      </div>
      <div className="jm-post-job-wrapper mb-40">
        <div className="row">
          <div className="col-xl-6">
            <h4 className="jm-job-acc-title">Education</h4>
            <input
              type="text"
              placeholder="Institution Name"
              value={institutionName}
              onChange={(e) => setInstitutionName(e.target.value)}
              className="form-control"
              style={{ border: "1px solid black" }}
            />
            <input
              type="text"
              placeholder="Qualification"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              className="form-control"
              style={{ border: "1px solid black" }}
            />
            <b>Start Date :</b>
            <input
              type="date"
              placeholder="Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="form-control"
              style={{ border: "1px solid black" }}
            />
            <b>End Date :</b>
            <input
              type="date"
              placeholder="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="form-control"
              style={{ border: "1px solid black" }}
            />
            <textarea
              placeholder="Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="form-control"
              style={{ border: "1px solid black" }}
            ></textarea>
          </div>

          <div className="col-xl-6">
            <h4 className="jm-job-acc-title">Work Experience</h4>
            <input
              type="text"
              placeholder="Employer Name"
              value={employerName}
              onChange={(e) => setEmployerName(e.target.value)}
              className="form-control"
              style={{ border: "1px solid black" }}
            />
            <input
              type="text"
              placeholder="Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="form-control"
              style={{ border: "1px solid black" }}
            />
            <b>Start Date :</b>
            <input
              type="date"
              placeholder="Start Date"
              value={experienceStartDate}
              onChange={(e) => setExperienceStartDate(e.target.value)}
              className="form-control"
              style={{ border: "1px solid black" }}
            />
            <b>Start Date :</b>
            <input
              type="date"
              placeholder="End Date"
              value={experienceEndDate}
              onChange={(e) => setExperienceEndDate(e.target.value)}
              className="form-control"
              style={{ border: "1px solid black" }}
            />
            <textarea
              placeholder="Notes"
              value={experienceNotes}
              onChange={(e) => setExperienceNotes(e.target.value)}
              className="form-control"
              style={{ border: "1px solid black" }}
            ></textarea>
          </div>

          <div className="col-xl-12">
            <div className="choose-file">
              <label htmlFor="resume-upload">
                Upload Resume <span>(Optional)</span>
              </label>
              <br />
              <input
                type="file"
                id="resume-upload"
                onChange={(e) => setResumeFile(e.target.files[0])}
              />
              <br />
              <span className="jm-file-size">Maximum file size: 2 MB</span>
            </div>
          </div>

          <div className="col-xl-12">
            <div className="jm-info-buttons mt-25">
              <button
                className="jm-post-job-btn jm-theme-btn"
                type="submit"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CandidateSignUp;
