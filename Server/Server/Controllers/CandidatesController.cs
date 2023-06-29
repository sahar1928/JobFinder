using Server.Models;
using System;
using System.Configuration;
using System.Data.SqlClient;
using System.IO;
using System.Web;
using System.Web.Http;

namespace Server.Controllers
{
    public class CandidatesController : ApiController
    {
        [HttpPost]
        public IHttpActionResult CreateResume(Candidate candidate)
        {
            try
            {

                int socialMediaId = SaveSocialMedia(candidate.SocialMedia);


                int resumeId = SaveResume(candidate.Resume, socialMediaId);


                SaveCandidate(candidate, resumeId, socialMediaId);

                SaveEducation(candidate.Resume, resumeId);
                SaveExperience(candidate.Resume, resumeId);

                return Ok();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        private int SaveSocialMedia(SocialMedia socialMedia)
        {
            var connectionString = ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString;
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();
                using (var command = new SqlCommand("INSERT INTO SocialMedia (LinkedinURL, TwitterURL, FacebookURL, PinterestURL, InstagramURL) " +
                                                    "VALUES (@LinkedinURL, @TwitterURL, @FacebookURL, @PinterestURL, @InstagramURL);" +
                                                    "SELECT SCOPE_IDENTITY()", connection))
                {
                    command.Parameters.AddWithValue("@LinkedinURL", socialMedia.LinkedinURL);
                    command.Parameters.AddWithValue("@TwitterURL", socialMedia.TwitterURL);
                    command.Parameters.AddWithValue("@FacebookURL", socialMedia.FacebookURL);
                    command.Parameters.AddWithValue("@PinterestURL", socialMedia.PinterestURL);
                    command.Parameters.AddWithValue("@InstagramURL", socialMedia.InstagramURL);

                    return Convert.ToInt32(command.ExecuteScalar());
                }
            }
        }

        private int SaveResume(Resume resume, int socialMediaId)
        {
            var connectionString = ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString;
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                using (var command = connection.CreateCommand())
                {
                    command.CommandText = "INSERT INTO Resume (FullName, Email, ProfessionalTitle, Location, Date, ResumeCategory, SocialMediaId, PhotoFile, ResumeFile) " +
                                          "VALUES (@FullName, @Email, @ProfessionalTitle, @Location, CONVERT(date, @Date, 103), @ResumeCategory, @SocialMediaId, @PhotoFile, @ResumeFile);" +
                                          "SELECT SCOPE_IDENTITY()";

                    command.Parameters.AddWithValue("@FullName", resume.FullName);
                    command.Parameters.AddWithValue("@Email", resume.Email);
                    command.Parameters.AddWithValue("@ProfessionalTitle", resume.ProfessionalTitle);
                    command.Parameters.AddWithValue("@Location", resume.Location);
                    command.Parameters.AddWithValue("@Date", DateTime.Parse(resume.Date));
                    command.Parameters.AddWithValue("@ResumeCategory", resume.ResumeCategory);
                    command.Parameters.AddWithValue("@SocialMediaId", socialMediaId);
                    command.Parameters.AddWithValue("@PhotoFile", resume.PhotoFile);
                    command.Parameters.AddWithValue("@ResumeFile", resume.ResumeFile);

                    return Convert.ToInt32(command.ExecuteScalar());
                }
            }
        }

        private int SaveCandidate(Candidate candidate, int resumeId, int socialMediaId)
        {
            var connectionString = ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString;
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                using (var command = connection.CreateCommand())
                {
                    command.CommandText = "INSERT INTO Candidate (Username, Password, EmailUrl, FirstName, LastName, DateOfBirth, Gender, ResumeId, SocialMediaId) " +
                                          "VALUES (@Username, @Password, @EmailUrl, @FirstName, @LastName, @DateOfBirth, @Gender, @ResumeId, @SocialMediaId)";

                    command.Parameters.AddWithValue("@Username", candidate.Username);
                    command.Parameters.AddWithValue("@Password", candidate.Password);
                    command.Parameters.AddWithValue("@EmailUrl", candidate.EmailUrl);
                    command.Parameters.AddWithValue("@FirstName", candidate.FirstName);
                    command.Parameters.AddWithValue("@LastName", candidate.LastName);
                    command.Parameters.AddWithValue("@DateOfBirth", DateTime.Parse(candidate.DateOfBirth));
                    command.Parameters.AddWithValue("@Gender", candidate.Gender);
                    command.Parameters.AddWithValue("@ResumeId", resumeId);
                    command.Parameters.AddWithValue("@SocialMediaId", socialMediaId);

                    return command.ExecuteNonQuery();
                }
            }
        }

        private void SaveEducation(Resume resume, int resumeId)
        {
            var connectionString = ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString;
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                foreach (var education in resume.Educations)
                {
                    using (var command = connection.CreateCommand())
                    {
                        command.CommandText = "INSERT INTO Education (InstitutionName, Qualification, StartDate, EndDate, ResumeId) " +
                                              "VALUES (@InstitutionName, @Qualification, @StartDate, @EndDate, @ResumeId)";

                        command.Parameters.AddWithValue("@InstitutionName", education.InstitutionName);
                        command.Parameters.AddWithValue("@Qualification", education.Qualification);
                        command.Parameters.AddWithValue("@StartDate", DateTime.Parse(education.StartDate));
                        command.Parameters.AddWithValue("@EndDate", DateTime.Parse(education.EndDate));
                        command.Parameters.AddWithValue("@ResumeId", resumeId);

                        command.ExecuteNonQuery();
                    }
                }
            }
        }

        private void SaveExperience(Resume resume, int resumeId)
        {
            var connectionString = ConfigurationManager.ConnectionStrings["DBConnectionString"].ConnectionString;
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();

                foreach (var experience in resume.Experiences)
                {
                    using (var command = connection.CreateCommand())
                    {
                        command.CommandText = "INSERT INTO Experience (EmployerName, JobTitle, StartDate, EndDate, ResumeId) " +
                                              "VALUES (@EmployerName, @JobTitle, @StartDate, @EndDate, @ResumeId)";

                        command.Parameters.AddWithValue("@EmployerName", experience.EmployerName);
                        command.Parameters.AddWithValue("@JobTitle", experience.JobTitle);
                        command.Parameters.AddWithValue("@StartDate", DateTime.Parse(experience.StartDate));
                        command.Parameters.AddWithValue("@EndDate", DateTime.Parse(experience.EndDate));
                        command.Parameters.AddWithValue("@ResumeId", resumeId);

                        command.ExecuteNonQuery();
                    }
                }
            }
        }

        private byte[] GetFileBytes(HttpPostedFileBase file)
        {
            byte[] fileBytes;
            using (var binaryReader = new BinaryReader(file.InputStream))
            {
                fileBytes = binaryReader.ReadBytes(file.ContentLength);
            }
            return fileBytes;
        }
    }
}
