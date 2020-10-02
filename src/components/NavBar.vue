<template>
  <div
    id="nav-bar"
    class="flex bg-green-600 border-t border-gray-500 border-solid h-12 z-10">
    <div
      v-for="option in leftOptions"
      :key="option.view"
      class="flex flex-col
      content-center justify-center items-center
      px-4 py-2
      text-center text-white font-bold text-md"
      :class="{'border-b-2 border-white': activeView === option.view}"
      @click="changeOption(option.view)">
      <!-- TAB ICON -->
      <!-- <img
        :src="option.icon"
        class="mx-2 my-2 h-8 w-8"> -->
      {{ option.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {},
  data () {
    return {
      activeView: null,
    }
  },
  computed: {
    leftOptions () {
        return [
            {
                view: 'Home',
                // icon: require('../assets/images/home.png'),
                title: 'Home'
            },
            {
                view: 'Upload',
                // icon: require('../assets/images/upload.png'),
                title: 'Upload MRI'
            },
            {
                view: 'PatientResults',
                // icon: require('../assets/images/results.png'),
                title: 'Results'
            }
        ]
    }
  },
  mounted () {
    this.activeView = this.$route.name
  },
  watch: {
    '$route.name' () {
      this.activeView = this.$route.name
    }
  },
  methods: {
    changeOption (view) {
      if (this.activeView === view) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      } else {
        this.$router.push({ name: view }) // So no option disappears
      }
    }
  }
}
</script>

<style scoped>
</style>
