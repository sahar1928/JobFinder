﻿namespace Server.Models
{
    public class Company
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string EmailUrl { get; set; }
        public string Name { get; set; }
        public string Website { get; set; }
        public SocialMedia SocialMedia { get; set; }
        public string Description { get; set; }
        public byte[] Logo { get; set; }
    }
}