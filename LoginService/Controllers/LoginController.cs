using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace LoginService.Controllers
{
    [Route("api/login")]
    public class LoginController : ControllerBase
    {
        public LoginController(IConfiguration configuration)
        {
            this.Configuration = configuration;
        }
        
        private IConfiguration Configuration { get; set; }

        [HttpGet]
        [ProducesResponseType(typeof(string), 200)]
        public IActionResult CreateAccessToken()
        {
            DateTime now = DateTime.UtcNow;
            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, "CommunityHubUser"),
                new Claim(JwtRegisteredClaimNames.Jti,
                    Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat,
                    new DateTimeOffset(now).ToUnixTimeSeconds().ToString())
            };

            var tokenExpirationMins =
                Configuration.GetValue<int>
                    ("Auth:Jwt:TokenExpirationInMinutes");
            var issuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(Configuration["Auth:Jwt:Key"]));

            var token = new JwtSecurityToken(
                issuer: Configuration["Auth:Jwt:Issuer"],
                audience: Configuration["Auth:Jwt:Audience"],
                claims: claims,
                notBefore: now,
                expires: now.Add(TimeSpan.FromMinutes(tokenExpirationMins)),
                signingCredentials: new SigningCredentials(
                    issuerSigningKey, SecurityAlgorithms.HmacSha256)
            );

            return Ok(new JwtSecurityTokenHandler().WriteToken(token));
        }
    }
}
