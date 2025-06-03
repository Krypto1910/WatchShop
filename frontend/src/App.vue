<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-grow">
      <RouterView />
    </main>
    <PageFooter />
  </div>
</template>


<script>
import Navbar from './components/Navbar.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    PageFooter
  }
}
</script>
