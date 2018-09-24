// LinkedIn authorization and LinkedIn api calls


// Link to linkedin's auth page
const linkedinWindow = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78k0z5io5whh5e&redirect_uri=http://localhost:9090/success&state=remberthisstring&scope=r_basicprofile%20r_emailaddress`;

// Opens a new window to linkedin auth page and makes sure it's in focus.
const windowTrigger = (url, windowName) => {
    const newWindow = open(url, windowName, 'height=550px width=400px');
    if (window.focus) {
        newWindow.focus();
    }
};

// Starts linkedin auth process
document.getElementById('signIn').addEventListener('click', ()=>{
    windowTrigger(linkedinWindow, 'LinkedIn Auth');
});

// LinkedIn API test
document.getElementById('API').addEventListener('click', ()=>{
    linkedinAPI();
});


// =====================================================================


// LinkedIn API Call

// Was told to keep it in vanilla js as to not interfere with Vue. 
// That's why the api calls are much more complex than they need to be.


// Creates new API request
const request = new XMLHttpRequest();

// Retrieves information from LinkedIn
const linkedinAPI = function() {
    // Opens request to linkedin's api
    request.open('GET', 'https://cors-escape.herokuapp.com/https://api.linkedin.com/v1/people/~:(id,first-name,last-name,picture-url,headline,summary,email-address)?format=json', true);
    
    // Sets the header with the required Access Token --> Still need to store this in the database once that is up and running.
    request.setRequestHeader("Authorization", `Bearer ${localStorage.getItem('Access_token')}`, "Connection", "Keep-Alive", "Content-type", "application/json");
    
    // Gets information back from LinkedIn
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200) {
            // Parses out the response into usable JSON
            const response = JSON.parse(request.responseText);

            // ********Do something here with the response*********
            // Probably store it in the database to have written onto the page
            console.log(response);

        }else if (request.status === 401) {
            // If the Access Token is Expired, Then this will retrigger the auth process.
            windowTrigger(linkedinWindow, 'LinkedIn Auth');
        };
    };

    // Sends API request
    // Null because it is a GET request. If you POST, you put your information as the send() argument.
    request.send(null);
};