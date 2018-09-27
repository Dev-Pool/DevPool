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
        console.log(res);

        // LinkedIn API Call

        // Condensed down some code. When more time allows, all code afterwards needs to be
        // in an ajax request... Was told to keep it in vanilla js as to not interfere with Vue, but this shouldn't interfere at all.

        // Creates new API request
        const request = new XMLHttpRequest();

        // Opens request to linkedin's api
        request.open('GET', 'https://cors-escape.herokuapp.com/https://api.linkedin.com/v1/people/~:(id,first-name,last-name,picture-url,headline,summary,email-address)?format=json', true);
            
        // Sets the header with the required Access Token --> Still need to store this in the database once that is up and running.
        request.setRequestHeader("Authorization", `Bearer ${res.access_token}`, "Connection", "Keep-Alive", "Content-type", "application/json");
            
        // Gets information back from LinkedIn
        request.onreadystatechange = ()=>{
            if(request.readyState === 4 && request.status === 200) {
                // Parses out the response into usable JSON
                const response = JSON.parse(request.responseText);

                // Sends info from LI to DB
                // console.log(response);
                const name = `${response.firstName} ${response.lastName}`;
                const email = response.emailAddress;
                const password = response.id;
                const imageURL = response.pictureUrl;
                const user = {
                    name: name,
                    email: email,
                    password: password,
                    imageURL: imageURL
                };

                $.post('/api/user', user);

                // ==========================================

            }else if (request.status === 401) {
                // If the Access Token is Expired, Then this will retrigger the auth process.
                windowTrigger(linkedinWindow, 'LinkedIn Auth');
            };
        };

        // Sends API request
        // Null because it is a GET request. If you POST, you put your information as the send() argument.
        request.send(null);

        // Closes window once everything is done.
        window.close();
    });

});