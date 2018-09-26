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

    <!-- This will where we can populate the jobs at-->
    <div class="content-wrapper">
      <div class="content">
        <h2 class="content-head is-center">Available Jobs Near You</h2>

        <div class="pure-g">
          <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">

            <h3 class="content-subhead">
              <i class="fa"></i>
              Job#1 Company Name
            </h3>
            <p>
              Job#1 Description
            </p>
          </div>
          <!-- <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <h3 class="content-subhead">
              <i class="fa"></i>
              This can be other stuff
            </h3>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
            </p>
          </div> -->
          <!-- <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <h3 class="content-subhead">
              <i class="fa"></i>
              Dang Ole More Stuff
            </h3>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
            </p>
          </div> -->
          <!-- <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <h3 class="content-subhead">
              <i class="fa"></i>
              There's so much room for activities!!!
            </h3>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
            </p>
          </div> -->
        </div>
      </div>
    </div>
    <div class="footer l-box is-center">
      DevPool ©opyright 2018.
    </div>

  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: 'Jobs',
    data() {
      return {

      }

    },

    created() {
      axios.get('http://localhost:9090/dangit').then(res => {
        console.log(res)
      });
    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
