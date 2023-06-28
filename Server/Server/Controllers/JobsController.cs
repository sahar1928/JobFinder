using System;
using System.Configuration;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Newtonsoft.Json;
using Server.Models;

namespace Server.Controllers
{
    public class JobsController : ApiController
    {
        [HttpPost]
        public async Task<IHttpActionResult> CreateJob(Job job)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                // Save the job and get the job ID
                int jobId = await SaveJob(job);

                if (jobId > 0)
                {
                    return Ok();
                }
                else
                {
                    return InternalServerError(new Exception("Failed to save job details."));
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetJob(int jobId)
        {
            try
            {
                var job = await RetrieveJob(jobId);

                if (job != null)
                {
                    return Ok(job);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpPut]
        public async Task<IHttpActionResult> UpdateJob(int jobId, Job job)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var updatedJob = await ModifyJob(jobId, job);

                if (updatedJob != null)
                {
                    return Ok(updatedJob);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpDelete]
        public async Task<IHttpActionResult> DeleteJob(int jobId)
        {
            try
            {
                bool deleted = await RemoveJob(jobId);

                if (deleted)
                {
                    return Ok();
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        private async Task<int> SaveJob(Job job)
        {
            // Prepare the job data and send the request to the server
            using (var client = new HttpClient())
            {
                var apiUrl = ConfigurationManager.AppSettings["DBConnectionString"];
                var response = await client.PostAsJsonAsync(apiUrl + "job", job);

                if (response.IsSuccessStatusCode)
                {
                    // Parse the response to get the job ID
                    var responseBody = await response.Content.ReadAsStringAsync();
                    var jobId = int.Parse(responseBody);
                    return jobId;
                }
                else
                {
                    return 0;
                }
            }
        }

        private async Task<Job> RetrieveJob(int jobId)
        {
            using (var client = new HttpClient())
            {
                var apiUrl = ConfigurationManager.AppSettings["DBConnectionString"];
                var response = await client.GetAsync(apiUrl + "job/" + jobId);

                if (response.IsSuccessStatusCode)
                {
                    var responseBody = await response.Content.ReadAsStringAsync();
                    var job = JsonConvert.DeserializeObject<Job>(responseBody);
                    return job;
                }
                else
                {
                    return null;
                }
            }
        }

        private async Task<Job> ModifyJob(int jobId, Job job)
        {
            using (var client = new HttpClient())
            {
                var apiUrl = ConfigurationManager.AppSettings["DBConnectionString"];
                var response = await client.PutAsJsonAsync(apiUrl + "job/" + jobId, job);

                if (response.IsSuccessStatusCode)
                {
                    var responseBody = await response.Content.ReadAsStringAsync();
                    var updatedJob = JsonConvert.DeserializeObject<Job>(responseBody);
                    return updatedJob;
                }
                else
                {
                    return null;
                }
            }
        }

        private async Task<bool> RemoveJob(int jobId)
        {
            using (var client = new HttpClient())
            {
                var apiUrl = ConfigurationManager.AppSettings["DBConnectionString"];
                var response = await client.DeleteAsync(apiUrl + "job/" + jobId);

                if (response.IsSuccessStatusCode)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
    }
}
