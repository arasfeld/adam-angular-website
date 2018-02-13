﻿using Api.Validation;
using FluentValidation.Attributes;

namespace Api.Auth
{
    public class Registration
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Location { get; set; }
    }
}