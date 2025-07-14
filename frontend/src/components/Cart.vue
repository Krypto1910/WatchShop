<template>
    <!--Cart-->
    <section class="cart container my-5 py-5">
        <div class="container" mt-5>
            <h2 class="font-weight-bold">Your Cart</h2>
            <hr>
        </div>
        <div v-if="!productCart.length"><span
                style="font-size: 1.2rem; font-weight: 400; color: rgb(155, 155, 155); padding-left: 1rem;">You don't
                have any items</span></div>
        <div v-if="productCart.length">


            <table class="mt-5 pt-5">
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                <!--1-->
                <tr v-for="product in productCart">
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
                        <span class="product-price">{{ product.Quantity * +product.Price }}</span>
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
                <!-- <button class="btn checkout-btn">Checkout</button> -->
                <router-link tag="button" class="btn checkout-btn" to="/checkout">Checkout</router-link>
            </div>
        </div>
    </section>
</template>

<script>
import watch1 from '@/assets/watch1.jpeg';
import watch2 from '@/assets/watch2.jpeg';
import watch3 from '@/assets/watch3.jpeg';
import watch4 from '@/assets/watch4.jpeg';

export default {

    name: 'Cart',
    data() {
        return {
            watch1,
            watch2,
            watch3,
            watch4,
            productCart: JSON.parse(localStorage.getItem("cart")) || []
        };
    },
    computed: {
        cartTotal() {
            return this.productCart.reduce(
                (sum, item) => sum + item.Quantity * item.Price,
                0
            );
        }
    },
    methods: {
        removeCartItem(id) {
            this.productCart = this.productCart.filter((item) => item.ProductID != id)
            localStorage.setItem("cart", JSON.stringify(this.productCart))
        },
        // Giảm số lượng
        decreaseQuantity(product) {
            if (product.Quantity > 1) {
                product.Quantity--;
                this.saveCart();
            }
        },

        // Tăng số lượng
        increaseQuantity(product) {
            product.Quantity++;
            this.saveCart();
        },

        // Nhập trực tiếp và lọc
        onQuantityInput(event, product) {
            let value = event.target.value.replace(/[^0-9]/g, '1');

            if (parseInt(value) < 1 || !parseInt(value)) {
                value = '1';
            }

            product.quantity = parseInt(value);
            event.target.value = value;

            this.saveCart();
        },

        // Cập nhật localStorage
        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.productCart));
        },
        onQuantityInput(event, product) {
            let value = event.target.value;

            // Chỉ giữ lại chữ số 0-9
            value = value.replace(/[^0-9]/g, '1');

            // Không cho phép rỗng hoặc 0
            product.quantity = parseInt(value) || "";
            event.target.value = value;

            // Cập nhật vào localStorage
            localStorage.setItem('cart', JSON.stringify(this.productCart));
        },
        updateQuantity(id, newQuantity) {
            const index = this.productCart.findIndex(item => item.ProductID === id);
            if (index !== -1) {
                if (newQuantity < 1) newQuantity = 1; // Ngăn nhập số âm hoặc 0
                this.productCart[index].Quantity = newQuantity;
                localStorage.setItem("cart", JSON.stringify(this.productCart));
            }
        }
    }
};
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
}

.checkout-btn:hover {
    background-color: #004225;
    color: white;
    transition: 0.1s ease-in-out;
}

.checkout-btn:active {
    background-color: #006b3d !important;
    color: white !important;
    transition: 0.1s ease-out;
}
</style>