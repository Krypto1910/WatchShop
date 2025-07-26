<template>
  <div id="app">
    <Navbar v-if="isStoreLoaded" />

    <router-view />
    <PageFooter />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import PageFooter from './components/PageFooter.vue'
import { useAppStore } from './stores/app'

export default {
  name: 'App',
  components: {
    Navbar,
    PageFooter
  },
  computed: {
    isStoreLoaded() {
      const store = useAppStore();
      const loadedStatus = store.isLoaded;
      return loadedStatus;
    }
  }
}
</script>