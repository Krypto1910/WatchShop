<template>
    <!--Cart-->
    <section class="cart container my-5 py-5">
        <div class="container mt-3" style="padding-left: 0;">
            <h2 class="font-weight-bold">Your Cart</h2>
            <hr>
        </div>
        <div v-if="!productCart.length">
            <span style="font-size: 1.2rem; font-weight: 400; color: rgb(155, 155, 155); padding: 0.5rem 0 0 0;">No
                selected items</span>
        </div>
        <div v-if="productCart.length">
            <table class="mt-5 pt-5">
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                <!--1-->
                <tr v-for="product in productCart" :key="product.ProductID">
                    <td>
                        <div class="product-info">
                            <img :src="`/images/${product.Image}`" alt="">
                            <div>
                                <p>{{ product.Name }}</p>
                                <small><span>$</span>{{ product.Price }}</small>
                                <br>
                                <span class="remove-btn" @click="removeCartItem(product.ProductID)">Remove</span>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left">
                        <div class="quantity-control">
                            <div class="quantity-control">
                                <button @click="decreaseQuantity(product)">−</button>

                                <input type="text" :value="product.Quantity" disabled
                                    style="width: 50px; text-align: center; padding: 2px;" />

                                <button @click="increaseQuantity(product)">+</button>
                            </div>

                        </div>

                    </td>

                    <td>
                        <span>$</span>
                        <span class="product-price">{{ (product.Quantity * +product.Price).toFixed(2) }}</span>
                    </td>
                </tr>

            </table>

            <!--subtotal-->
            <div class="cart-total">
                <table>
                    <tr>
                        <td>Total</td>
                        <td>${{ cartTotal }}</td>
                    </tr>
                </table>
            </div>

            <div class="checkout-container">
                <button  @click="handleCheckout" class="btn checkout-btn">Checkout</button>
            </div>
        </div>
    </section>
</template>


<script setup>
import Swal from 'sweetalert2'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'

const router = useRouter()
const store = useAppStore()

const productCart = computed(() => store.cart)

const customer = ref(JSON.parse(localStorage.getItem('customer')) || null)

const cartTotal = computed(() =>
    store.cart.reduce((sum, item) => sum + item.Quantity * item.Price, 0).toFixed(2)
)

function handleCheckout() {
    if (!customer.value) {
        Swal.fire({
            title: 'Please login to continue',
            icon: 'warning',
            confirmButtonText: 'Login',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonColor: '#006b3d',
        }).then((result) => {
            if (result.isConfirmed) {
                router.push('/login')
            }
        })
        return
    }
    router.push('/checkout')
}

function removeCartItem(id) {
    store.removeCartItem(id)
}

function decreaseQuantity(product) {
    store.decreaseQuantity(product.ProductID);
}

function increaseQuantity(product) {
    store.increaseQuantity(product.ProductID);
}

function updateQuantity(id, newQuantity) {
    const index = productCart.value.findIndex((item) => item.ProductID === id)
    if (index !== -1) {
        productCart.value[index].Quantity = newQuantity < 1 ? 1 : newQuantity
        store.saveCart()
    }
}

</script>

<style scoped>
.quantity-control {
    display: flex;
    align-items: center;
}

.quantity-control input {
    width: 60px;
    text-align: center;
    margin: 0 5px;
}

.quantity-control button {
    background-color: #006b3d;
    color: white;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
}

.quantity-control button:hover {
    background-color: #004225;
}

.content {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    margin-top: 2000px !important;
}

/*Cart*/
.cart table {
    width: 100%;
    border-collapse: collapse;
}

.cart .product-info {
    display: flex;
    flex-wrap: wrap;
}

.cart th {
    text-align: left;
    padding: 5px 10px;
    color: white;
    background-color: #006b3d;
    font-size: 1.05rem;
}

.cart td {
    padding: 10px 0px;
    font-size: 1rem;
}

.cart td img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
}

.cart td input {
    width: 60px;
    grid-row-end: 30px;
    padding: 5px;
}

.cart td a {
    color: #006b3d;
}

.cart .remove-btn {
    color: rgb(230, 15, 15);
    text-decoration: none;
    font-size: 0.92rem;
    background-color: transparent;
    cursor: pointer;
}

.cart .edit-btn {
    color: #006b3d;
    text-decoration: none;
    font-size: 1rem;
    margin-left: 0.2rem;
    background-color: transparent;
}

.cart .product-info p {
    margin-bottom: 1px;
}

.cart-total {
    display: flex;
    justify-content: flex-end;
}

.cart-total table {
    width: 100%;
    max-width: 500px;
    border-top: 3px solid #006b3d;
}

td:last-child {
    text-align: right;
}

th:last-child {
    text-align: right;
}

.checkout-container {
    display: flex;
    justify-content: flex-end;
}

.checkout-btn {
    display: flex;
    justify-content: flex-end;
    background-color: #006b3d;
    color: white;
    font-size: 1rem;
    box-shadow: 0 2px 5px rgba(0, 107, 61, 0.2);
    margin-top: 1rem;
}

.checkout-btn:hover {
    background-color: #004d2f;
    color: white;
}

.checkout-btn:active {
    background-color: #006b3d !important;
    color: white !important;
    transform: scale(0.98);
}

@media (max-width: 1024px) {
    p {
        font-size: 0.9rem;
    }
    small {
        font-size: 0.85rem;
    }

    .remove-btn {
        font-size: 0.9rem !important;
    }
}
</style>