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
    <!--This is the first section of the layout and will be essentially the landing page -->
    <div class="splash-container">
      <div class="splash">
        <h1 class="splash-head">Welcome to the DevPool</h1>
        <p class="splash-subhead">
          A helpful app for current developer jobs.
        </p>
        <p>
          <router-link to="Jobs">
          <a class="pure-button pure-button-primary">Dive In!</a>
          </router-link>
        </p>
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
    name: 'Main',
    data() {
      return {

      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
