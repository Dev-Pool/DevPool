console.log("window loaded")


const newURL = new URL(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&${localStorage.getItem('linkedinAPIauthcode')}&redirect_uri=http://localhost:9090&client_id=78k0z5io5whh5e&client_secret=rhqY2Mgy6OhOnS0Q`);

const tokenExpiry = newURL.searchParams.get("expires_in");

console.log(tokenExpiry);