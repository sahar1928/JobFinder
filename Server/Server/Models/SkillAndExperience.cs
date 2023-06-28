using Server.Models.enums;
using System.Collections.Generic;

namespace Server.Models
{
    public class SkillAndExperience
    {
        public int PreviousExperienceMin { get; set; }
        public int PreviousExperienceMax { get; set; }
        public ProfessionalTitle professionalTitle { get; set; }
    }
}