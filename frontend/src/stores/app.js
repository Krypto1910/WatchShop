// stores/app.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useAppStore = defineStore("app", () => {
  const cart = ref(JSON.parse(localStorage.getItem("cart")) || []);
  const customer = ref(JSON.parse(localStorage.getItem('customer')) || null);
  const isLoaded = ref(true);
  const cartAmount = computed(() =>
    cart.value.reduce((sum, i) => sum + (i.Quantity || 1), 0)
  );

  const productsByCategory = ref({
        fashion: [],
        classic: [],
        luxury: []
    });

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart.value));
  }

  /** Add or update one item */
  function addToCart(item) {
    const idx = cart.value.findIndex((p) => p.ProductID === item.ProductID);
    if (idx !== -1) {
      cart.value[idx].Quantity += item.Quantity;
    } else {
      cart.value.push(item);
    }
    saveCart(); // persist once
  }

    function removeCartItem(id) {
        cart.value = cart.value.filter((item) => item.ProductID !== id);
        saveCart();
    }

  function updateCart(newCart) {
    cart.value = newCart;
    saveCart();
  }

  function setCustomer(newCustomer) {
        customer.value = newCustomer;
        localStorage.setItem('customer', JSON.stringify(newCustomer));
        console.log('Pinia Store: customer state updated to:', customer.value);
  }

  function removeCustomer() {
      customer.value = null;
      localStorage.removeItem('customer');
  }

  function clearCart() {
    cart.value = [];
    saveCart();
  }

  function increaseQuantity(id) {
        const item = cart.value.find((p) => p.ProductID === id);
        if (item) {
            item.Quantity++;
            saveCart();
        }
    }

  function decreaseQuantity(id) {
        const item = cart.value.find((p) => p.ProductID === id);
        if (item && item.Quantity > 1) {
            item.Quantity--;
            saveCart();
        }
    }

  async function fetchProductsByCategory(category) {
        
        if (productsByCategory.value[category] && productsByCategory.value[category].length > 0) {
            // console.log(`Using cached data for category: ${category}`);
            return;
        }
        
        
        // console.log(`Fetching data for category: ${category}`);
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URI}/products?category=${category}`);
            productsByCategory.value[category] = response.data.data.products;
        } catch (error) {
            console.error(`Error fetching ${category} products:`, error);
        }
    }

  async function fetchAllCategories() {
        await fetchProductsByCategory('fashion');
        await fetchProductsByCategory('classic');
        await fetchProductsByCategory('luxury');
    }

  return { cart, cartAmount, customer, isLoaded, productsByCategory, fetchAllCategories, fetchAllCategories, addToCart, updateCart, removeCartItem, increaseQuantity, decreaseQuantity, clearCart, setCustomer, removeCustomer };
});
