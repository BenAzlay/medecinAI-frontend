<template>
  <div id="app" class="bg-gray-300 h-screen">
    <nav-bar v-if="displayNavBar" class="mb-4" />

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

const routesWithNoNavBar = [null, 'Login', 'Error']

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data () {
    return {
    }
  },
  watch: {
  },
  created () {
  },
  computed: {
    displayNavBar () {
      return !routesWithNoNavBar.includes(this.$route.name)
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
