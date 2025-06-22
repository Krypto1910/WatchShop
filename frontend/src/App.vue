 <template>
  <div id="app" class="flex flex-col min-h-screen">
    <Navbar />
    <router-view />
    <PageFooter />
  </div>
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
    PageFooter,
   
  }
}
</script>
