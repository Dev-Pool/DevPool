window.addEventListener("load", function () {
    // console.log("document loaded");

    // Exchanges auth code for access token, posts access token to local storage
    // const exchange = () =>{
        // const url = `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&${localStorage.getItem('linkedinAPIauthcode')}&redirect_uri=http://localhost:9090&client_id=78k0z5io5whh5e&client_secret=rhqY2Mgy6OhOnS0Q`
        // window.open(url, 'authToken','height=550,width=400');

        // const newURL = new URL(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&${localStorage.getItem('linkedinAPIauthcode')}&redirect_uri=http://localhost:9090&client_id=78k0z5io5whh5e&client_secret=rhqY2Mgy6OhOnS0Q`)

        // const token = newURL
        // const tokenExpiry = newURL.searchParams.get("expires_in");

        // localStorage.setItem("linkedinAPItoken", token);
        // localStorage.setItem("linkedinExpiresIn", tokenExpiry);
        
    // };

    // Targets the auth code given by the linkedin confirmation,
    // passes the code to linkedin for an access token.
    // const controlWindow = function() {
    //     newwindow.console.log('window loaded')
    //     const authCode = window.location.search;
    //     localStorage.setItem("linkedinAPIauthcode", authCode.substring(1));

    //     exchange();
    //     window.close();  
    // };

    // Opens a new window to linkedin auth page and puts it in focus.
    const windowTrigger = (url,windowName) => {
        let newwindow = open(url, windowName,'height=550,width=400');
        if (window.focus) {
           newwindow.focus();
        };
        // newwindow.addEventListener('load', ()=>{
        //     controlWindow();
        // });
    };



    // This checks to see if there is already a token available in the local storage.
    // If so, it is deleted. The function then opens the linkedin auth page.
    const checkforToken = () => {
        const linkedinWindow = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78k0z5io5whh5e&redirect_uri=http://localhost:9090&scope=r_basicprofile&response_type=token`;
        if (localStorage.getItem("linkedinAPItoken") === !null || this.localStorage.getItem("linkedinExpiresIn") === !null) {
            localStorage.removeItem("linkedinAPItoken");
            localStorage.removeItem("linkedinExpiresIn");
        };
        windowTrigger(linkedinWindow, "linkedinAPIAuth");
    };



    // Buttons to activate the steps as I target everything for the linkedin call. Once everything is finished,
    // this will be condenced to a single "sign in" button.
    document.getElementById('button').addEventListener('click', ()=>{
        checkforToken();
    });

    document.getElementById('button2').addEventListener('click', ()=>{
        controlWindow();
    });

});