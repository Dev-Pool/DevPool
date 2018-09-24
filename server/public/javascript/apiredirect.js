// Exchanges LinkedIn auth code for an access token
$(document).ready(()=>{
    // Targets the auth code given by the linkedin confirmation.
    const authCode = window.location.search.substr(1);

    // Passes auth code thru to linkedin url to get access token.
    const tokenURL = `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&${authCode}&redirect_uri=http://localhost:9090/success&client_id=78k0z5io5whh5e&client_secret=rhqY2Mgy6OhOnS0Q`;

    // Ajax call to linkedin for access token.
    // Fixed CORS issues by prepending the url line
    $.ajax({
        method: 'POST',
        url: `https://cors-escape.herokuapp.com/${tokenURL}`,
        headers: {
            "Allow-Control-Access-Origin": "*"
        }
    }).then((res)=>{
        // console.log(res.access_token, res.expires_in);
        console.log(res);

        // Will need to store the tokens somewhere for easy access.
        // As of right now, they are stored in localStorage below. But that isn't safe.
        // We need to place them in the database or somewhere on the server.

        localStorage.setItem('Access_token', res.access_token);
        localStorage.setItem('Expires_in', res.expires_in);

        // =======================================================

        // Closes window once everything is done.
        window.close();
    });

});