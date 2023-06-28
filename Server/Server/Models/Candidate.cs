using Server.Models.enums;
using System;

namespace Server.Models
{
    public class Candidate
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public Gender Gender { get; set; }
        public ProfessionalTitle CandidateType { get; set; }
        public Resume Resume { get; set; }
        public SocialMedia SocialMedia { get; set; }
    }

}