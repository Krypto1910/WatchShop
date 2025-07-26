// stores/app.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAppStore = defineStore("app", () => {
  const cart = ref(JSON.parse(localStorage.getItem("cart")) || []);

  const cartAmount = computed(() =>
    cart.value.reduce((sum, i) => sum + (i.Quantity || 1), 0)
  );

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

  return { cart, cartAmount, addToCart, updateCart, removeCartItem, increaseQuantity, decreaseQuantity, clearCart };
});
