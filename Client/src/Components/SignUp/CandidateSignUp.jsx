import React, { useState } from "react";
import { toast } from "react-toastify";
import { URL } from "../../Data/URL";
import { skills, professionalTitles, locations } from "../../Data/JobsData";

const CandidateSignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailUrl, setEmailUrl] = useState("");
  const [professionalTitle, setProfessionalTitle] = useState("");
  const [location, setLocation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [resumeCategory, setResumeCategory] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [availableSkills, setAvailableSkills] = useState(skills);
  const [selectedExperienceAndSkill, setSelectedExperienceAndSkill] = useState(
    []
  );
  const [linkedinURL, setLinkedinURL] = useState("");
  const [facebookURL, setFacebookURL] = useState("");
  const [pinterestURL, setPinterestURL] = useState("");
  const [instagramURL, setInstagramURL] = useState("");
  const [twitterURL, setTwitterURL] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [institutionName, setInstitutionName] = useState("");
  const [qualification, setQualification] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [experienceStartDate, setExperienceStartDate] = useState("");
  const [experienceEndDate, setExperienceEndDate] = useState("");
  const [resumeFile, setResumeFile] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("ho");
    if (
      !username ||
      !password ||
      !confirmPassword ||
      !firstName ||
      !lastName ||
      !emailUrl ||
      !professionalTitle ||
      !location ||
      !dateOfBirth ||
      !resumeCategory ||
      !selectedSkills ||
      !photoFile ||
      !institutionName ||
      !qualification ||
      !startDate ||
      !endDate ||
      !employerName ||
      !jobTitle ||
      !experienceStartDate ||
      !experienceEndDate ||
      !resumeFile
    ) {
      if (!username) console.log("username is null");
      if (!password) console.log("password is null");
      if (!confirmPassword) console.log("confirmPassword is null");
      if (!firstName) console.log("firstName is null");
      if (!lastName) console.log("lastName is null");
      if (!emailUrl) console.log("email is null");
      if (!professionalTitle) console.log("professionalTitle is null");
      if (!location) console.log("location is null");
      if (!dateOfBirth) console.log("dateOfBirth is null");
      if (!resumeCategory) console.log("resumeCategory is null");
      if (!selectedSkills) console.log("selectedSkills is null");
      if (!photoFile) console.log("photoFile is null");
      if (!institutionName) console.log("institutionName is null");
      if (!qualification) console.log("qualification is null");
      if (!startDate) console.log("startDate is null");
      if (!endDate) console.log("endDate is null");
      if (!employerName) console.log("employerName is null");
      if (!jobTitle) console.log("jobTitle is null");
      if (!experienceStartDate) console.log("experienceStartDate is null");
      if (!experienceEndDate) console.log("experienceEndDate is null");
      if (!resumeFile) console.log("resumeFile is null");

      toast.error("Please fill all the required fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const dateTimeOfBirth = new Date(dateOfBirth).toISOString();
    const educationStartDate = new Date(startDate).toISOString();
    const educationEndDate = new Date(endDate).toISOString();
    const expStartDate = new Date(experienceStartDate).toISOString();
    const expEndDate = new Date(experienceEndDate).toISOString();
    console.log(dateTimeOfBirth);
    try {
      const reader = new FileReader();

      reader.onload = async () => {
        const photoData = new Uint8Array(reader.result);
        const resumeData = new Uint8Array(reader.result);

        const Resume = {
          FullName: firstName + " " + lastName,
          Email: emailUrl,
          professionalTitle,
          location,
          Date: dateTimeOfBirth,
          resumeCategory,
          skills: selectedSkills,
          socialMedia: {
            linkedinURL,
            twitterURL,
            facebookURL,
            pinterestURL,
            instagramURL,
          },
          photoFile: Array.from(photoData),
          educations: [
            {
              institutionName,
              qualification,
              StartDate: educationStartDate,
              EndDate: educationEndDate,
            },
          ],
          experiences: [
            {
              employerName,
              jobTitle,
              StartDate: expStartDate,
              EndDate: expEndDate,
            },
          ],
          resumeFile: Array.from(resumeData),
        };

        const candidate = {
          username,
          password,
          emailUrl,
          firstName,
          lastName,
          DateOfBirth: dateTimeOfBirth,
          gender,
          Resume,
          professionalTitle,
          socialMedia: {
            linkedinURL,
            twitterURL,
            facebookURL,
            pinterestURL,
            instagramURL,
          },
        };

        try {
          const response = await fetch(URL + "Candidates", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(candidate),
          });

          console.log(candidate);

          if (response.ok) {
            toast.success("Resume created successfully");
            // Reset the form
            setUsername("");
            setPassword("");
            setConfirmPassword("");
            setEmailUrl("");
            setProfessionalTitle("");
            setLocation("");
            setDateOfBirth("");
            setResumeCategory("");
            setSelectedSkills([]);
            setAvailableSkills(skills);
            setLinkedinURL("");
            setFacebookURL("");
            setPhotoFile(null);
            setInstitutionName("");
            setQualification("");
            setStartDate("");
            setEndDate("");
            setEmployerName("");
            setJobTitle("");
            setExperienceStartDate("");
            setExperienceEndDate("");
            setResumeFile(null);
          } else {
            toast.error("Failed to create resume");
          }
        } catch (error) {
          toast.error("An error occurred");
        }
      };

      if (photoFile) {
        reader.readAsArrayBuffer(photoFile);
      } else if (resumeFile) {
        reader.readAsArrayBuffer(resumeFile);
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  const handleAddSkill = (skill) => {
    const selectedSkill = {
      id: skill.id,
      name: skill.name,
      experienceRanges: skill.experienceRanges,
    };

    setSelectedSkills([...selectedSkills, selectedSkill]);
    setAvailableSkills(availableSkills.filter((item) => item.id !== skill.id));
  };

  const handleRemoveSkill = (skill) => {
    const updatedSelectedSkills = selectedSkills.filter(
      (item) => item.id !== skill.id
    );
    const updatedAvailableSkills = [
      ...availableSkills,
      {
        id: skill.id,
        name: skill.name,
        experienceRanges: skill.experienceRanges,
      },
    ];

    setSelectedSkills(updatedSelectedSkills);
    setAvailableSkills(updatedAvailableSkills);
  };

  const handleExperienceChange = (skillId, experienceRange) => {
    const updatedSelectedExperienceAndSkill = selectedSkills.map((skill) => {
      if (skill.id === skillId) {
        return {
          id: skill.id,
          name: skill.name,
          minExperience: experienceRange[0],
          maxExperience: experienceRange[1],
        };
      }
      return skill;
    });
    console.log(updatedSelectedExperienceAndSkill);
    setSelectedExperienceAndSkill(updatedSelectedExperienceAndSkill);
  };

  return (
    <div className="jm-post-job-area pt-95 pb-60">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-xl-8">
            <div className="jm-create-new-section mb-20">
              <h4 className="jm-job-sign-text d-inline-block">
                Already Have an account?
              </h4>
              <a href="/signIn" className="jm-job-acc mr-15">
                Sign-in
              </a>
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
              type="text"
              placeholder="Your Email"
              value={emailUrl}
              onChange={(e) => setEmailUrl(e.target.value)}
              className="form-control"
              style={{ border: "1px solid black" }}
            />
          </div>
          <div className="col-xl-6 col-md-6">
            <select
              placeholder="Professional Title"
              className="jm-job-select form-control"
              value={professionalTitle}
              onChange={(e) => setProfessionalTitle(e.target.value)}
              style={{ border: "1px solid black" }}
            >
              <option value="" disabled>
                Professional Title
              </option>
              {professionalTitles.map((title, index) => (
                <option key={index} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>
          <div className="col-xl-6 col-md-6">
            <select
              placeholder="Location"
              className="jm-job-select form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={{ border: "1px solid black" }}
            >
              <option value="" disabled>
                Location
              </option>
              {locations.map((location) => (
                <option key={location.id} value={location.name}>
                  {location.name}
                </option>
              ))}
            </select>
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
            <select
              className="jm-job-select form-control"
              value={resumeCategory}
              onChange={(e) => setResumeCategory(e.target.value)}
              style={{ border: "1px solid black" }}
            >
              <option>Resume Category</option>
              <option value="HTML">HTML</option>
              <option value="TEXT">TEXT</option>
            </select>
          </div>
          <div className="col-xl-6 col-md-6">
            <select
              placeholder="Gender Selection"
              className="jm-job-select form-control"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={{ border: "1px solid black" }}
            >
              <option value="">Gender Selection</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
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
              {availableSkills.map((skill) => (
                <option key={skill.id} value={skill.name}>
                  {skill.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-xl-12 col-md-12">
            <h4 className="jm-have-account-title">Selected Skills: </h4>
            <div className="jm-create-new-section mb-40">
              {selectedSkills.map((skill) => (
                <div key={skill.id}>
                  <span className="ml-10 mb-30">{skill.name}</span>
                  {skill.experienceRanges.map((range, index) => (
                    <div key={index}>
                      <label>
                        <input
                          type="radio"
                          name={`experience-${skill.id}`}
                          value={`${range[0]},${range[1]}`}
                          checked={
                            range[0] ===
                              selectedExperienceAndSkill.find(
                                (item) => item.id === skill.id
                              )?.minExperience &&
                            range[1] ===
                              selectedExperienceAndSkill.find(
                                (item) => item.id === skill.id
                              )?.maxExperience
                          }
                          onChange={() =>
                            handleExperienceChange(skill.id, range)
                          }
                        />
                        {`${range[0]}-${range[1]} years of experience`}
                      </label>
                    </div>
                  ))}
                  <button
                    className="jm-job-acc ml-10"
                    onClick={() => handleRemoveSkill(skill)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6 col-md-6">
              <b>Linkedin URL</b>
              <input
                type="url"
                placeholder="https://www.linkedin.com/in/profile"
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
                value={facebookURL}
                onChange={(e) => setFacebookURL(e.target.value)}
                className="form-control"
                style={{ border: "1px solid black" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <b>twitterURL</b>
              <input
                type="url"
                placeholder="https://Twitter.com/"
                value={twitterURL}
                onChange={(e) => setTwitterURL(e.target.value)}
                className="form-control"
                style={{ border: "1px solid black" }}
              />
            </div>
            <div className="col-xl-6 col-md-6">
              <b>Instagram URL</b>
              <input
                type="url"
                placeholder="https://www.instagram.com/"
                value={instagramURL}
                onChange={(e) => setInstagramURL(e.target.value)}
                className="form-control"
                style={{ border: "1px solid black" }}
              />
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
            <b>Pinterest URL</b>
            <input
              type="url"
              placeholder="https://www.instagram.com/"
              value={pinterestURL}
              onChange={(e) => setPinterestURL(e.target.value)}
              className="form-control"
              style={{ border: "1px solid black" }}
            />
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
          </div>

          <div className="col-xl-6">
            <h4 className="jm-job-acc-title">Work Experience</h4>
            <input
              type="text"
              placeholder="Company Name"
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
