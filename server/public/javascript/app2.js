// Exchanges LinkedIn auth code for an access token
window.addEventListener('load', function () {
    // Targets the auth code given by the linkedin confirmation.
    const authCode = window.location.search.substr(1);

    // Passes auth code thru to linkedin url to get access token.
    const tokenURL = `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&${authCode}&redirect_uri=http://localhost:9090&client_id=78k0z5io5whh5e&client_secret=rhqY2Mgy6OhOnS0Q`;

    // Ajax call to linkedin for access token.
    $.ajax({
        url: tokenURL,
        method: 'POST',
        Type: 'application/x-www-form-urlencoded',
        dataType: 'json'
    }).then((res)=>{
        console.log(res);
    })

    // Will need to store the tokens somewhere for easy access.


    // =======================================================

    // Closes window once everything is done.
    // window.close();

});