// Exchanges LinkedIn auth code for an auth token
window.addEventListener('load', function () {
    // console.log("window loaded");

    // Targets the auth code given by the linkedin confirmation,
    // Saves the code in the localStorage
    const authCode = window.location.search;
    localStorage.setItem("linkedinAPIauthcode", authCode.substring(1));

    // Uses authorization code to get access token from Linkedin
    const newURL = window.location.replace(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&${localStorage.getItem('linkedinAPIauthcode')}&redirect_uri=http://localhost:9090/success&client_id=78k0z5io5whh5e&client_secret=rhqY2Mgy6OhOnS0Q`);


    // trying to target codes to store in local storage
    // const newURL = new URL(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&${localStorage.getItem('linkedinAPIauthcode')}&redirect_uri='http://localhost:9090/success'&client_id=78k0z5io5whh5e&client_secret=rhqY2Mgy6OhOnS0Q`);

    // const token = newURL.search;
    // const tokenExpiry = window.json

    // localStorage.setItem("linkedinAPItoken", token);
    // localStorage.setItem("linkedinExpiresIn", tokenExpiry);

    // console.log(token);

    // window.close();

});