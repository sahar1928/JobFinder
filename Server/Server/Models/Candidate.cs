using Server.Models.enums;
using System;
using System.Collections.Generic;

namespace Server.Models
{
    public class Candidate
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public Uri EmailUrl { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public Gender Gender { get; set; }
<<<<<<< HEAD
        public ProfessionalTitle CandidateType { get; set; }
=======
>>>>>>> 6d14a2367e103237d4bdcf22bfe854b1581f0ec6
        public Resume Resume { get; set; }
        public List<SkillAndExperience> SkillAndExperience { get; set; }
        public SocialMedia SocialMedia { get; set; }
    }

}