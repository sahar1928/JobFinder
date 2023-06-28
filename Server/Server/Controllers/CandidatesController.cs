using Server.Models;
using System;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web.Http;

namespace LastOne.Controllers
{
    public class CandidatesController : ApiController
    {
        [HttpPost]
        public async Task<IHttpActionResult> CreateResume(Resume resume)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                // Save the resume and get the resume ID
                int resumeId = await SaveResume(resume);

                if (resumeId > 0)
                {
                    // Save the social media links
                    int socialMediaId = await SaveSocialMedia(resume.SocialMedia);

                    // Save the candidate
                    await SaveCandidate(resume, resumeId, socialMediaId);

                    // Save education and experience
                    await SaveEducation(resume, resumeId);
                    await SaveExperience(resume, resumeId);

                    return Ok();
                }
                else
                {
                    return InternalServerError(new Exception("Failed to save resume details."));
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        private async Task<int> SaveResume(Resume resume)
        {
            // Prepare the form data
            var formData = new MultipartFormDataContent();
            formData.Add(new StringContent(resume.FullName), "fullName");
            formData.Add(new StringContent(resume.Email.ToString()), "email");
            formData.Add(new StringContent(resume.ProfessionalTitle), "professionalTitle");
            formData.Add(new StringContent(resume.Location), "location");
            formData.Add(new StringContent(resume.Date.ToString()), "date");
            formData.Add(new StringContent(resume.VideoURL.ToString()), "videoURL");
            formData.Add(new StringContent(resume.ResumeCategory.ToString()), "resumeCategory");
            formData.Add(new StringContent(resume.ResumeContent), "resumeContent");

            // Add the photo file if selected
            if (resume.PhotoFile != null)
            {
                var photoContent = new StreamContent(new MemoryStream(resume.PhotoFile));
                photoContent.Headers.ContentDisposition = new ContentDispositionHeaderValue("form-data")
                {
                    Name = "photoFile",
                    FileName = "photo.jpg"
                };
                formData.Add(photoContent);
            }

            // Add the resume file if selected
            if (resume.ResumeFile != null)
            {
                var resumeContent = new StreamContent(new MemoryStream(resume.ResumeFile));
                resumeContent.Headers.ContentDisposition = new ContentDispositionHeaderValue("form-data")
                {
                    Name = "resumeFile",
                    FileName = "resume.pdf"
                };
                formData.Add(resumeContent);
            }

            // Send the request to the server
            using (var client = new HttpClient())
            {
                var apiUrl = ConfigurationManager.AppSettings["DBConnectionString"]; // Replace with your API endpoint URL
                var response = await client.PostAsync(apiUrl + "resume", formData);

                if (response.IsSuccessStatusCode)
                {
                    // Parse the response to get the resume ID
                    var responseBody = await response.Content.ReadAsStringAsync();
                    var resumeId = int.Parse(responseBody);
                    return resumeId;
                }
                else
                {
                    return 0;
                }
            }
        }

        private async Task<int> SaveSocialMedia(SocialMedia socialMedia)
        {
            // Prepare the social media data
            var socialMediaData = new
            {
                linkedinURL = socialMedia.LinkedinURL?.ToString(),
                twitterURL = socialMedia.TwitterURL?.ToString(),
                facebookURL = socialMedia.FacebookURL?.ToString(),
                pinterestURL = socialMedia.PinterestURL?.ToString(),
                instagramURL = socialMedia.InstagramURL?.ToString()
            };

            // Send the request to the server
            using (var client = new HttpClient())
            {
                var apiUrl = ConfigurationManager.AppSettings["DBConnectionString"]; // Replace with your API endpoint URL
                var response = await client.PostAsJsonAsync(apiUrl + "socialmedia", socialMediaData);

                if (response.IsSuccessStatusCode)
                {
                    // Parse the response to get the social media ID
                    var responseBody = await response.Content.ReadAsStringAsync();
                    var socialMediaId = int.Parse(responseBody);
                    return socialMediaId;
                }
                else
                {
                    return 0;
                }
            }
        }

        private async Task SaveCandidate(Resume resume, int resumeId, int socialMediaId)
        {
            // Prepare the candidate data
            var candidateData = new
            {
                fullName = resume.FullName,
                email = resume.Email.ToString(),
                professionalTitle = resume.ProfessionalTitle,
                location = resume.Location,
                date = resume.Date.ToString(),
                videoURL = resume.VideoURL.ToString(),
                resumeCategory = resume.ResumeCategory.ToString(),
                resumeId = resumeId,
                socialMediaId = socialMediaId
            };

            // Send the request to the server
            using (var client = new HttpClient())
            {
                var apiUrl = ConfigurationManager.AppSettings["DBConnectionString"]; // Replace with your API endpoint URL
                var response = await client.PostAsJsonAsync(apiUrl + "candidate", candidateData);

                if (!response.IsSuccessStatusCode)
                {
                    throw new Exception("Failed to save candidate details.");
                }
            }
        }

        private async Task SaveEducation(Resume resume, int resumeId)
        {
            // Prepare the education data
            var educationData = resume.Educations.Select(e => new
            {
                resumeId = resumeId,
                institutionName = e.InstitutionName,
                qualification = e.Qualification,
                startDate = e.StartDate.ToString(),
                endDate = e.EndDate.ToString(),
                notes = e.Notes
            });

            // Send the request to the server
            using (var client = new HttpClient())
            {
                var apiUrl = ConfigurationManager.AppSettings["DBConnectionString"]; // Replace with your API endpoint URL
                var response = await client.PostAsJsonAsync(apiUrl + "education", educationData);

                if (!response.IsSuccessStatusCode)
                {
                    throw new Exception("Failed to save education details.");
                }
            }
        }

        private async Task SaveExperience(Resume resume, int resumeId)
        {
            // Prepare the experience data
            var experienceData = resume.Experiences.Select(exp => new
            {
                resumeId = resumeId,
                employerName = exp.EmployerName,
                jobTitle = exp.JobTitle,
                startDate = exp.StartDate.ToString(),
                endDate = exp.EndDate.ToString(),
                notes = exp.Notes
            });

            // Send the request to the server
            using (var client = new HttpClient())
            {
                var apiUrl = ConfigurationManager.AppSettings["DBConnectionString"]; // Replace with your API endpoint URL
                var response = await client.PostAsJsonAsync(apiUrl + "experience", experienceData);

                if (!response.IsSuccessStatusCode)
                {
                    throw new Exception("Failed to save experience details.");
                }
            }
        }
    }
}
