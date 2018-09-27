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
        <br>
        <br>
        <div class="content is-center">
          <div class="l-box pure-u-1" id="jobPosts">
        
            <h3 id="companyName" class="content-subhead is-center">
              <i class="fa"></i>
            </h3>
            <h3 id='title' class="content-subhead">
              <i class="fa"></i>
            </h3>
            <p id='jobDescription'>
            </p>
             <!-- dis here buttons for yes'in or no'in bruh -->
            <button v-on:click='nextJob()' class="button-success pure-button" id="no">Nah</button>
            <button v-on:click='nextJob()' class="button-success pure-button" id="yes">Apply!</button>
          </div>
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
    // On load this will display the info for the first company,
    // After every click it will display next job
    created() {
      // Loads first company
      let job = 0;
      axios.get('http://localhost:9090/api/jobs/:id').then(res => {
        // console.log(company, title, body);
        let company = res.data[job].company;
        let title = res.data[job].title;
        let body = res.data[job].body;

        // Displays first company in divs
        document.getElementById('companyName').appendChild(document.createTextNode(company));
        document.getElementById('title').appendChild(document.createTextNode(title));
        document.getElementById('jobDescription').appendChild(document.createTextNode(body));
        
        // Displays next job on yes button click... Needs to also change applied to true in DB.
        document.getElementById("yes").addEventListener('click', (event)=>{
          // Adds one to the current job
          job++
          // Reassigns variables to the current job
          company = res.data[job].company;
          title = res.data[job].title;
          body = res.data[job].body;

          // console.log(company,'\n', title,'\n', body);
          // Replaces text with new company
          document.getElementById('companyName').innerHTML = company;
          document.getElementById('title').innerHTML = title;
          document.getElementById('jobDescription').innerText = body;
        });

        // Displays next job on no button click... Needs to also change applied to false in DB.
        document.getElementById("no").addEventListener('click', (event)=>{
          // Adds one to the current job
          job++
          // Reassigns variables to the current job
          company = res.data[job].company;
          title = res.data[job].title;
          body = res.data[job].body;

          // Replaces text with new company
          document.getElementById('companyName').innerHTML = company;
          document.getElementById('title').innerHTML = title;
          document.getElementById('jobDescription').innerText = body;
        });

      });
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .button-success {
    color: white;
    border-radius: 4px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }

  #yes {
    background: rgb(28, 184, 65);
    /* this is a green */
  }

  #no {
    background: rgb(202, 60, 60);
    /* this is a maroon */
  }
  #jobPosts {
    margin-top: 5%;
  }

</style>
