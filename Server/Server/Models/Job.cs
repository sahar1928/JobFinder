using Server.Models.enums;
using System;
using System.Collections.Generic;

namespace Server.Models
{
    public class Job
    {
        public int Id { get; set; }
        public string JobTitle { get; set; }
        public Uri EmailUrl { get; set; }
        public string Location { get; set; }
        public JobType JobType { get; set; }
        public JobCategory JobCategory { get; set; }
        public decimal ExpectedSalary { get; set; }
        public int SalaryMin { get; set; }
        public int SalaryMax { get; set; }
        public List<SkillAndExperience> SkillAndExperience { get; set; }
        public Company Company { get; set; }
    }



}