<template>
    <!--Cart-->
    <section class="cart container my-5 py-5">
        <div class="container" mt-5>
            <h2 class="font-weight-bold">Check Out</h2>
            <hr>
        </div>

        <!--Ship info-->
        <table class="mt-5 pt-5">
            <tr>
                <th style="text-align: left;">Ship Info</th>
            </tr>
        </table>

        <!--Order detail-->
        <div v-if="productCart.length">
            <table class="mt-5 pt-5">
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th style="text-align: center;">Discount</th>
                    <th>Subtotal</th>
                </tr>
                <!--1-->
                <tr v-for="product in productCart">
                    <td>
                        <div class="product-info">
                            <img :src="`/images/${product.Image}`" alt="">
                            <div>
                                <p>{{ product.Name }}</p>
                                <small style="font-weight: 500;"><span>$</span>{{ product.Price }}</small>
                                <br>
                            </div>
                        </div>
                    </td>

                    <td style="text-align: left">
                        <div class="quantity-control">
                            <div class="quantity-control">
                                <input type="text" :value="product.Quantity" disabled
                                    style="background-color: transparent !important; border: none; font-weight: 500; width: 50px; text-align: center; padding: 2px; margin-left: 15px;" />

                            </div>

                        </div>
                    </td>

                    <td style="text-align: center;">
                        <span style="font-weight: 500;">{{ product.Discount }}</span>
                        <span style="font-weight: 500;">%</span>
                    </td>

                    <td>
                        <span style="font-weight: 500;">$</span>
                        <span class="product-price" style="font-weight: 500;">
                            {{
                            (
                            product.Quantity *
                            product.Price *
                            (1 - (product.Discount || 0) / 100)
                            ).toFixed(2)
                            }}
                        </span>
                    </td>
                </tr>

            </table>

            <!--subtotal-->
            <div class="cart-total">
                <table>
                    <tr>
                        <td>Total</td>
                        <td style="font-weight: 500;">${{ cartTotal }}</td>
                    </tr>
                </table>
            </div>

            <div class="checkout-container">

                <router-link tag="button" class="btn checkout-btn" to="/checkout">Order</router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Cart',
    data() {
        return {
            productCart: JSON.parse(localStorage.getItem("cart")) || []
        };
    },
    computed: {
        // cartTotal() {
        //     return this.productCart.reduce(
        //         (sum, item) => sum + item.Quantity * item.Price, 0
        //     );
        // }
        cartTotal() {
            return this.productCart.reduce((sum, item) => {
                const priceAfterDiscount = item.Price * (1 - (item.Discount || 0) / 100);
                return sum + item.Quantity * priceAfterDiscount;
            }, 0).toFixed(2); // làm tròn 2 chữ số sau dấu thập phân
        }

    },
    created() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        // discount
        cart.forEach(item => {
            if (item.Discount === undefined) {
                item.Discount = this.getRandomDiscount();
            }
        });

        this.productCart = cart;
        localStorage.setItem("cart", JSON.stringify(cart));
    },
    methods: {
        getRandomDiscount() {
            return Math.floor(Math.random() * 16); // 0 - 15
        },
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