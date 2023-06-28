using System;
using System.Configuration;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Server.Models;
using Newtonsoft.Json;

namespace Server.Controllers
{
    public class CandidatesController : ApiController
    {
        [HttpPost]
        public async Task<IHttpActionResult> CreateResume(Candidate candidate)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                // Save the resume and get the resume ID
                int resumeId = await SaveResume(candidate.Resume);

                if (resumeId > 0)
                {
                    // Save the social media links
                    int socialMediaId = await SaveSocialMedia(candidate.SocialMedia);

                    // Save the candidate
                    await SaveCandidate(candidate, resumeId, socialMediaId);

                    // Save education and experience
                    await SaveEducation(candidate.Resume, resumeId);
                    await SaveExperience(candidate.Resume, resumeId);

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
            // Prepare the form data and send the request to the server
            using (var client = new HttpClient())
            {
                var apiUrl = ConfigurationManager.AppSettings["DBConnectionString"];
                var response = await client.PostAsJsonAsync(apiUrl + "resume", resume);

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
            // Prepare the social media data and send the request to the server
            using (var client = new HttpClient())
            {
                var apiUrl = ConfigurationManager.AppSettings["DBConnectionString"];
                var response = await client.PostAsJsonAsync(apiUrl + "socialmedia", socialMedia);

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

        private async Task SaveCandidate(Candidate candidate, int resumeId, int socialMediaId)
        {
            // Prepare the candidate data and send the request to the server
            using (var client = new HttpClient())
            {
                var apiUrl = ConfigurationManager.AppSettings["DBConnectionString"];
                var response = await client.PostAsJsonAsync(apiUrl + "candidate", new
                {
                    candidate.Id,
                    candidate.Username,
                    candidate.Password,
                    candidate.EmailUrl,
                    candidate.FirstName,
                    candidate.LastName,
                    candidate.DateOfBirth,
                    candidate.Gender,
                    ResumeId = resumeId,
                    SocialMediaId = socialMediaId
                });

                if (!response.IsSuccessStatusCode)
                {
                    throw new Exception("Failed to save candidate details.");
                }
            }
        }

        private async Task SaveEducation(Resume resume, int resumeId)
        {
            // Prepare the education data and send the request to the server
            using (var client = new HttpClient())
            {
                var apiUrl = ConfigurationManager.AppSettings["DBConnectionString"];
                var response = await client.PostAsJsonAsync(apiUrl + "education", new
                {
                    ResumeId = resumeId,
                    resume.Educations
                });

                if (!response.IsSuccessStatusCode)
                {
                    throw new Exception("Failed to save education details.");
                }
            }
        }

        private async Task SaveExperience(Resume resume, int resumeId)
        {
            // Prepare the experience data and send the request to the server
            using (var client = new HttpClient())
            {
                var apiUrl = ConfigurationManager.AppSettings["DBConnectionString"];
                var response = await client.PostAsJsonAsync(apiUrl + "experience", new
                {
                    ResumeId = resumeId,
                    resume.Experiences
                });

                if (!response.IsSuccessStatusCode)
                {
                    throw new Exception("Failed to save experience details.");
                }
            }
        }
    }
}
