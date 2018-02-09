using Newtonsoft.Json;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Api.Auth
{
    public class JwtHelpers
    {
        public static class JwtClaimIdentifiers
        {
            public const string Rol = "rol", Id = "id";
        }

        public static class JwtClaims
        {
            public const string ApiAccess = "api_access";
        }

        public static async Task<string> GenerateJwt(ClaimsIdentity identity, IJwtFactory jwtFactory, string userName, JwtIssuerOptions jwtOptions, JsonSerializerSettings serializerSettings)
        {
            var response = new
            {
                id = identity.Claims.Single(c => c.Type == "id").Value,
                auth_token = await jwtFactory.GenerateEncodedToken(userName, identity),
                expires_in = (int)jwtOptions.ValidFor.TotalSeconds
            };

            return JsonConvert.SerializeObject(response, serializerSettings);
        }
    }
}
