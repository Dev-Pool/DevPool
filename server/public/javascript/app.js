// LinkedIn authorization
window.addEventListener("load", function () {
    // console.log("document loaded");

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
});