// LinkedIn authorization
window.addEventListener("load", function () {
    // console.log("document loaded");

    // Opens a new window to linkedin auth page and puts it in focus.
    const windowTrigger = (url,windowName) => {
        let newwindow = open(url, windowName,'height=550,width=400');
        if (window.focus) {
           newwindow.focus();
        };
    };

    // This checks to see if there is already a token available in the local storage.
    // If so, it is deleted. The function then opens the linkedin auth page.
    const checkforToken = () => {
        const uri_Redirect = ['http://localhost:9090/success'];
        const scope = 'r_basicprofile';
        const linkedinWindow = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78k0z5io5whh5e&redirect_uri=${uri_Redirect[0]}&scope=${scope}&response_type=token`;
        if (!localStorage.getItem("linkedinAPItoken") === null) {
            localStorage.removeItem("linkedinAPItoken");
            localStorage.removeItem("linkedinExpiresIn");
        };
        windowTrigger(linkedinWindow, "linkedinAPIAuth");
    };

    // Starts linkedin auth process
    document.getElementById('signIn').addEventListener('click', ()=>{
        checkforToken();
    });

});