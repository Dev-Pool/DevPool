window.addEventListener("load", ()=>{
    console.log("document loaded");

    const linkedinWindow = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78k0z5io5whh5e&redirect_uri=https://github.com/Dev-Pool&state=987654321&scope=r_basicprofile&response_type=token`

    const windowTrigger = (url,windowName) => {
        window.open(url,windowName,'height=550,width=400');
        // if (window.focus) {newwindow.focus()}
    }

    windowTrigger(linkedinWindow, "APIAuth");

    const newURL = new URL(`https://github.com/Dev-Pool${window.location.hash}`);

    const token = newURL.searchParams;
    console.log(token);


    // const tokenExpiry = newURL.searchParams.get("expires_in");

    // console.log("API token:", token);

    // $("").click(() => {
    //     if (!localStorage.getItem("APItoken") === null) {
    //         localStorage.removeItem("APItoken");
    //     }
    //     windowTrigger(linkedinWindow, "APIAuth");
    // });


});