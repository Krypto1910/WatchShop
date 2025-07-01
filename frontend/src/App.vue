<template>
  <Navbar />
  <router-view />
  <PageFooter />
</template>


<script>
// import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import PageFooter from './components/PageFooter.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    PageFooter
  }
}
</script>
