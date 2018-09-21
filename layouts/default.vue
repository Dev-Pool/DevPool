<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-vue
      </h1>
      <h2 class="subtitle">
        Hello {{myName}}
      </h2>
      <button @click="test"> Click for Test</button>
      <span v-if="buttonPressed">{{x}}</span>
      <span v-else> Another test to practice </span>
    </div>
  </section>
</template>

<script>
let x =  "This is a test to see if this greeting will pop up"
let buttonPressed = false
export default {
  components: {
  },
  data () {
    return {
      myName: "DevPool",
      x: x,
      buttonPressed: buttonPressed
    }
  },
  methods: {
    test: function() {
      this.buttonPressed = true
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

