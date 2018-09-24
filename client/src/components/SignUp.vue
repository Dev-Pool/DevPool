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
                <input id="name" type="text" placeholder="John Doe">


                <label for="email">Your Email</label>
                <input id="email" type="email" placeholder="john.doe@gmail.com">

                <label for="password">Your Password</label>
                <input id="password" type="password" placeholder="Example12#">

                <button type="submit" class="pure-button">Submit</button>
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
  export default {
    data() {
      return {

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
