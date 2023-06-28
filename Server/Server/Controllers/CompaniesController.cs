using System;
using System.Collections.Generic;
using System.Configuration;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Newtonsoft.Json;
using Server.Models;

namespace Server.Controllers
{
    public class CompaniesController : ApiController
    {
        [HttpPost]
        public async Task<IHttpActionResult> CreateCompany(Company company)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                // Save the company and get the company ID
                int companyId = await SaveCompany(company);

                if (companyId > 0)
                {
                    return Ok();
                }
                else
                {
                    return InternalServerError(new Exception("Failed to save company details."));
                }
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetCompany(int companyId)
        {
            try
            {
                var company = await RetrieveCompany(companyId);

                if (company != null)
                {
                    return Ok(company);
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
        public async Task<IHttpActionResult> UpdateCompany(int companyId, Company company)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var updatedCompany = await ModifyCompany(companyId, company);

                if (updatedCompany != null)
                {
                    return Ok(updatedCompany);
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
        public async Task<IHttpActionResult> DeleteCompany(int companyId)
        {
            try
            {
                bool deleted = await RemoveCompany(companyId);

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

        private async Task<int> SaveCompany(Company company)
        {
            // Prepare the company data and send the request to the server
            using (var client = new HttpClient())
            {
                var apiUrl = ConfigurationManager.AppSettings["DBConnectionString"];
                var response = await client.PostAsJsonAsync(apiUrl + "company", company);

                if (response.IsSuccessStatusCode)
                {
                    // Parse the response to get the company ID
                    var responseBody = await response.Content.ReadAsStringAsync();
                    var companyId = int.Parse(responseBody);
                    return companyId;
                }
                else
                {
                    return 0;
                }
            }
        }

        private async Task<Company> RetrieveCompany(int companyId)
        {
            using (var client = new HttpClient())
            {
                var apiUrl = ConfigurationManager.AppSettings["DBConnectionString"];
                var response = await client.GetAsync(apiUrl + "company/" + companyId);

                if (response.IsSuccessStatusCode)
                {
                    var responseBody = await response.Content.ReadAsStringAsync();
                    var company = JsonConvert.DeserializeObject<Company>(responseBody);
                    return company;
                }
                else
                {
                    return null;
                }
            }
        }

        private async Task<Company> ModifyCompany(int companyId, Company company)
        {
            using (var client = new HttpClient())
            {
                var apiUrl = ConfigurationManager.AppSettings["DBConnectionString"];
                var response = await client.PutAsJsonAsync(apiUrl + "company/" + companyId, company);

                if (response.IsSuccessStatusCode)
                {
                    var responseBody = await response.Content.ReadAsStringAsync();
                    var updatedCompany = JsonConvert.DeserializeObject<Company>(responseBody);
                    return updatedCompany;
                }
                else
                {
                    return null;
                }
            }
        }

        private async Task<bool> RemoveCompany(int companyId)
        {
            using (var client = new HttpClient())
            {
                var apiUrl = ConfigurationManager.AppSettings["DBConnectionString"];
                var response = await client.DeleteAsync(apiUrl + "company/" + companyId);

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
