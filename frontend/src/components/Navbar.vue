<template>
  <!--Header-->
  <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top shadow-sm"
       style="background-color: #004225 !important; padding: 0.5rem 0px !important;">
    <div class="container-fluid" style="padding-right: 0px;">
      <div class="row w-100 align-items-center">

        <!-- Logo bên trái -->
        <div class="col-4 d-flex align-items-center" style="padding: 0.1% 0 0.3% 5%;">
          <img id="logo-img-nav" class="logo me-2" :src="logoUrl" alt="NeoStyle Logo"
               style="width: 3.4rem; height: 3.2rem; background-color: white;" />
          <router-link tag="a" id="brand" class="brand mb-0" to="/"
                       style="text-decoration: none; color: white; font-size: 1.8rem; font-weight: 600;">
            NeoStyle
          </router-link>
        </div>

        <!-- Search box giữa -->
        <div class="col-4 d-flex justify-content-center">
          <div class="position-relative w-100" style="margin-left: 15%;">
            <form class="d-flex" @submit.prevent style="width: 100%;">
              <div class="search-icon" type="button"
                   style="padding-top: 0 !important; padding-bottom: 0.2rem !important; padding-left: 0.88rem; color: rgba(0, 0, 0, 0.8); font-size: 1.2rem; cursor: auto;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="currentColor" class="bi bi-search"
                     viewBox="0 0 16 16">
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>

              <input class="form-control me-2"
                     type="search"
                     placeholder="Search"
                     aria-label="Search"
                     v-model="searchQuery"
                     @input="onSearchInput"
                     style="font-size: 1rem; padding-top: 0.1rem !important; padding-bottom: 0.1rem !important;" />
            </form>

            <!-- Gợi ý dropdown -->
            <ul v-if="suggestions.length"
                class="list-group position-absolute w-100 shadow-sm"
                style="z-index: 1000;">
              <li v-for="product in suggestions"
                  :key="product.ProductID"
                  class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                  @click="goToProduct(product.ProductID)"
                  style="cursor: pointer;">
                <span>{{ product.Name }}</span>
                <img :src="`/images/${product.Image}`" alt="" width="40" height="40" />
              </li>
            </ul>
          </div>
        </div>

        <!-- Nav links bên phải -->
        <div class="col-4" style="padding-right: 5%;">
          <div class="d-flex justify-content-end">
            <ul class="navbar-nav align-items-center gap-1 flex-row mb-0">
              <li class="nav-item d-flex gap-1">
                <router-link tag="a" class="nav-link d-flex align-items-center" to="/cart"
                             style="padding: 10px 16px;">
                  <svg style="font-size: 2rem;" xmlns="http://www.w3.org/2000/svg" height="20"
                       viewBox="0 0 576 512" fill="currentColor">
                    <path
                      d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l45.5 0c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5L488 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-288.3 0c-11.5 0-21.4-8.2-23.6-19.5L170.7 288l288.5 0c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32l-411 0C111 12.8 91.6 0 69.5 0L24 0zM131.1 80l389.6 0L482.4 222.2c-2.8 10.5-12.3 17.8-23.2 17.8l-297.6 0L131.1 80zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
                  </svg>
                  <span v-if="cartAmount" class="cart-amount">{{ cartAmount }}</span>
                  <span>Cart</span>
                </router-link>

                <router-link tag="a" class="nav-link" to="/account" style="padding: 10px 16px;">
                  <i class="fas fa-user"></i>
                  <span v-if="customer">{{ customer.Name }}</span>
                  <span v-else>Account</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </nav>
</template>


<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import logoUrl from '@/assets/logo_removebg.png'
import axios from 'axios'
import { useAppStore } from '@/stores/app'

const router = useRouter()
const store = useAppStore()
const logo = logoUrl
const customer = computed(() => store.customer)
const cartAmount = computed(() => store.cartAmount)
const searchQuery = ref('')
const suggestions = ref([])
const debounceTimeout = ref(null)


const onSearchInput = () => {
  clearTimeout(debounceTimeout.value)
  debounceTimeout.value = setTimeout(async () => {
    if (!searchQuery.value) {
      suggestions.value = []
      return
    }

    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URI}/products/search?query=${searchQuery.value}`)
      suggestions.value = res.data.data.products
    } catch (err) {
      console.error('Live search error:', err)
    }
  }, 300)
}

const goToProduct = (productId) => {
  searchQuery.value = ''
  suggestions.value = []
  router.push({ name: 'SingleProduct', params: { id: productId } })
}
</script>

<style scoped>
.navbar {
  position: fixed ;
  top: 0;
  width: 100%;
}

#brand:hover {
    background-color: transparent !important;
}

.navbar-nav .nav-link {
    white-space: nowrap;
    position: relative;
}

.navbar .btn {
    color: white;
    border: 2px solid white;
    font-weight: 600;
}


.navbar .nav-link span {
    font-weight: 500;
    font-size: 1rem;
}

.site-footer {
    background-color: #1a1a1a;
    color: white;
    padding: 20px;
    text-align: center;
    width: 100%;
}

/*search box*/
.navbar input[type="search"] {
    border-radius: 30px;
    border: none;
    outline: none;

    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin: 0px !important;
    width: 80%;
}

.navbar .search-icon {
    background-color: white;
    border-radius: 30px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: 5px solid white;
    padding: 5px 0px 8px 15px;
}

.navbar {
    padding: 20px 0 !important;
}
input:focus {
  outline: none;
  box-shadow: none;
}

.cart-amount {
    position: absolute;
    top: 0;
    right: 49%;
    background: white;
    color: black;
    padding: 1px 6px;
    border-radius: 50%;
    font-size: 12px !important;
}

@media (max-width: 1024px) {
    #logo-img-nav {
        width: 2.3rem !important; 
        height: 2.1rem !important;
    }

    #brand {
        font-size: 1.2rem !important;
    }

    .nav-link span {
        font-size: 0.95rem !important;
    }



}

</style>
