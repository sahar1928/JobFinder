using Server.Models.enums;
using System.Collections.Generic;

namespace Server.Models
{
    public class Candidate
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string EmailUrl { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DateOfBirth { get; set; }
        public Gender Gender { get; set; }
        public Resume Resume { get; set; }
        public List<SkillAndExperience> SkillAndExperience { get; set; }
        public SocialMedia SocialMedia { get; set; }
    }

}