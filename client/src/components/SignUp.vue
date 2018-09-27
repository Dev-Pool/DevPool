<template>
  <div>
    <!--This is the header with buttons for "Available Jobs", "Sign Up", etc.-->
    <div class="header">
      <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">

        <router-link to="/">
          <a class="pure-menu-heading">Dev-Pool</a>
        </router-link>

        <ul class="pure-menu-list">

          <router-link to="/">
            <li class="pure-menu-item pure-menu-selected"><a class="pure-menu-link">Home</a></li>
          </router-link>

          <router-link to="Jobs">
            <li class="pure-menu-item"><a class="pure-menu-link">Available Jobs</a></li>
          </router-link>

          <router-link to="SignUp">
            <li class="pure-menu-item"><a class="pure-menu-link">Sign Up</a></li>
          </router-link>

        </ul>
      </div>
    </div>

    <!-- form for user signing up for app -->
    <div class="content-wrapper">
      <div class="content">
        <h2 class="content-head is-center">Enter Your Info Below To Get Started!</h2>

        <div class="pure-g">
          <div class="l-box-lrg pure-u-1 pure-u-md-2-5">
            <form class="pure-form pure-form-stacked">
              <fieldset>

                <label for="name">Your Name</label>
                <input id="name" type="text" placeholder="John Doe" required />


                <label for="email">Your Email</label>
                <input id="email" type="email" placeholder="john.doe@gmail.com" required />

                <label for="password">Your Password</label>
                <input id="password" type="password" placeholder="Example12#" required />

                <button type="submit" class="pure-button" id="submitBtn" v-on:click="post()">Submit</button>

                <div id="LIButton">
                  <!-- <img v-on:click="imgActive(), windowTrigger('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78k0z5io5whh5e&redirect_uri=http://localhost:9090/success&state=remberthisstring&scope=r_basicprofile%20r_emailaddress', 'linkedinAuth')" v-on:mouseover="imgHoverOn()" v-on:mouseleave="imgHoverOff()" id="LISignIn" src='https://user-images.githubusercontent.com/37916145/46070629-e7c1af80-c143-11e8-9e7c-fb4c85e0b7ff.png' data-default='https://user-images.githubusercontent.com/37916145/46070629-e7c1af80-c143-11e8-9e7c-fb4c85e0b7ff.png' data-active='https://user-images.githubusercontent.com/37916145/46070701-0de74f80-c144-11e8-8936-3476e5f2c67e.png' data-hover='https://user-images.githubusercontent.com/37916145/46070728-1e97c580-c144-11e8-977f-d8b19182fa87.png' alt="LinkedIn Sign In"> -->
                </div>
              </fieldset>
            </form>
          </div>

        <!--contact us info if we need it-->
          <div class="l-box-lrg pure-u-1 pure-u-md-3-5">
            <h4>Contact Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>

            <h4>More Information</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>

 <!--this is the footer-->
    <div class="footer l-box is-center">
      DevPool ©opyright 2018.
    </div>
  </div>

</template>

<script>
  import axios from "axios"
  export default {
    data() {
      return {

      }
    },
    methods: {
      // Targets form values to add to database.
      post: (event)=>{
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        console.log(name, email, password);
        
        // Adds form values to DB
        axios.post('http://localhost:9090/api/user', {
          name: name,
          email: email,
          password: password
        }).then((response) => {
          // console.log(response);
        });
      },
      // Opens Window for LinkedIn Auth.
      windowTrigger: (url, windowName) => {
        open(url, windowName, 'height=550px width=400px');
      },
      // Changes Linkedin Button Img src when hovered over.
      imgHoverOn: ()=>{
        const img = document.getElementById("LISignIn");
        const hover = img.getAttribute("data-hover");
        const state = img.setAttribute("src", hover);
      },
      // Changes back Linkedin button img src when hover stops.
      imgHoverOff: ()=>{
        const img = document.getElementById("LISignIn");
        const hover = img.getAttribute("data-default");
        const state = img.setAttribute("src", hover);
      },
      // Changes Linkedin Button Img src when active.
        imgActive: ()=>{
        const img = document.getElementById("LISignIn");
        const active = img.getAttribute("data-active");
        const state = img.setAttribute("src", active);
      }
    }
  };


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
