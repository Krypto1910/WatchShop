<template>
    <!--Cart-->
    <section class="cart container my-5 py-5">
        <div class="container mt-3" style="padding-left: 0;">
            <h2 class="font-weight-bold">Check Out</h2>
            <hr>
        </div>

        <!--Ship info-->
        <div class="ship-container">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(200, 0, 0)"
                    class="bi bi-geo-alt-fill" viewBox="0 0 16 16" style="margin-bottom: 5px;">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                <span class="ship-title">Shipping Information</span>
            </div>

            <div v-if="!selectedAddress" class="ship-info-option">
                <span style="font-size: 1.05rem; font-weight: 400; color: rgb(155, 155, 155); padding-left: 0.5rem;">
                    No selected address
                </span>
            </div>
            <label v-for="address in addressList" class="ship-info-option">
                <input type="radio" class="ship-option" name="shipOption" v-model="selectedAddress" :value="{
                    name: address.ContactName,
                    phone: address.ContactNumber,
                    address: address.ShippingAddress
                }" />
                <div class="ship-info">
                    <span id="contact-name">{{ address.ContactName }}</span>
                    <span id="contact-number">{{ address.ContactNumber }}</span>
                    <span id="ship-position">{{ address.ShippingAddress }}</span>
                </div>
            </label>

            <router-link tag="button" id="add-new-one" class="btn checkout-btn" to="/shipinfo">Add new one</router-link>
        </div>


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
        </div>

        <!--Payment Methods-->
        <div class="payment-container">
            <div>
                <span class="payment-title">Payment Methods</span>
            </div>

            <div v-if="!selectedMethod">
                <span style="font-size: 1.05rem; font-weight: 400; color: rgb(155, 155, 155); padding-left: 0.5rem;">
                    No payment method selected
                </span>
            </div>
            <label class="payment-option">
                <input type="radio" class="pay-option" name="payOption" v-model="selectedMethod" :value="{
                    method: 'COD'
                }" />
                <div class="payment-methods">
                    <span id="cod">COD</span>
                </div>
            </label>
            <label class="payment-option">
                <input type="radio" class="pay-option" name="payOption" v-model="selectedMethod" :value="{
                    method: 'Online Banking'
                }" />
                <div class="payment-methods">
                    <span id="onl-banking">Online Banking</span>
                </div>
            </label>
        </div>
        <div class="checkout-container">
            <button @click="createOrder" class="btn checkout-btn">Confirm Order</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
    name: 'Cart',
    data() {
        return {
            productCart: JSON.parse(localStorage.getItem("cart")) || [],
            selectedAddress: null,
            addressList: [],
            selectedMethod: null,
        };
    },
    mounted() {
        this.fetchAddressList();
    },
    computed: {
        cartTotal() {
            return this.productCart.reduce((sum, item) => {
                const priceAfterDiscount = item.Price * (1 - (item.Discount || 0) / 100);
                return sum + item.Quantity * priceAfterDiscount;
            }, 0).toFixed(2); // làm tròn 2 chữ số
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
        async fetchAddressList() {
            const customer = JSON.parse(localStorage.getItem("customer"));
            if (!customer) {
                return;
            }
            const customerId = customer.CustomerID;
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URI}/shipinfo/${customerId}`);
                if (response.data.success) {
                    this.addressList = response.data.shipInfo;
                } else {
                    console.error("Failed to fetch addresses:", response.data.message);
                }
            } catch (error) {
                console.error("Error fetching addresses:", error);
            }
        },
        getRandomDiscount() {
            return Math.floor(Math.random() * 16); // 0 - 15
        },

        // Cập nhật localStorage
        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.productCart));
        },

        async createOrder() {
            const customer = JSON.parse(localStorage.getItem("customer"));
            if (!customer || !this.selectedAddress || !this.selectedMethod) {
                Swal.fire("Incomplete Info", "Please select address and payment method", "warning");
                return;
            }

            const orderData = {
                CustomerID: customer.CustomerID,
                Date: new Date().toISOString().split('T')[0], // yyyy-mm-dd
                TotalAmount: parseFloat(this.cartTotal),
                Status: "Pending",
                Address: this.selectedAddress.address,
                PaymentMethod: this.selectedMethod.method,
                OrderItems: this.productCart.map(item => ({
                    ProductID: item.ProductID,
                    Quantity: item.Quantity,
                    UnitPrice: item.Price,
                }))
            };

            console.log("Order Data:", orderData);

            try {
                const res = await axios.post(`${import.meta.env.VITE_API_URI}/orders`, orderData);
                if (res.data.success) {
                    Swal.fire("Success", "Order created successfully!", "success");
                    localStorage.removeItem("cart");
                    this.productCart = [];
                    setTimeout(() => {
                        this.$router.push('/'); // Redirect to home after 2 seconds
                    }, 2000);
                } else {
                    Swal.fire("Error", res.data.message || "Failed to create order", "error");
                }
            } catch (err) {
                console.error(err);
                Swal.fire("Error", "Something went wrong", "error");
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
    background-color: #006b3d !important;
    color: white !important;
    font-size: 1rem;
    box-shadow: 0 3px 6px rgba(0, 107, 61, 0.25);
    transition: all 0.2s ease-in-out;
    margin-top: 3rem;
}

.checkout-btn:hover {
    background-color: #004d2f;
    color: white;
}

.checkout-btn:active {
    background-color: #006b3d;
    color: white !important;
}

#add-new-one {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin-left: auto;
    margin-right: 1rem;
    margin-top: 0;
    background-color: #006b3d;
    color: white;
    font-size: 0.95rem;
    font-weight: 400;
    border: none;
    border-radius: 8px;
    box-shadow: 0 3px 6px rgba(0, 107, 61, 0.25);
    transition: all 0.2s ease-in-out;
    text-align: center;
    cursor: pointer;
}

#add-new-one:hover {
    background-color: #004d2f;
    box-shadow: 0 5px 10px rgba(0, 107, 61, 0.3);
}

#add-new-one:active {
    background-color: #006b3d;
    box-shadow: 0 2px 5px rgba(0, 107, 61, 0.2);
    transform: scale(0.98);
}

.ship-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border: #006b3d 3px dashed;
    box-shadow: 0 4px 8px rgba(0, 107, 61, 0.15);
    padding: 1rem;
    border-radius: 10px;
    background-color: #fdfdfd;
    margin-top: 2rem;
    gap: 0.5rem;

}

.ship-title {
    color: rgb(200, 0, 0);
    font-size: 16.8px;
    margin-left: 0.2rem;
}

#contact-name,
#contact-number {
    font-weight: bold;
}

#contact-name,
#contact-number #ship-position {
    word-break: break-word;
    overflow-wrap: break-word;
    white-space: normal;
}

.ship-info {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    padding-left: 0.5rem;
    margin-right: 1rem;
    border: 1px solid rgba(207, 207, 207, 0.6);
    padding: 0.75rem 1rem;
    background-color: #ffffff;
    transition: border-color 0.1s;
}

.ship-info:hover {
    border-color: rgb(0, 107, 61, 0.3);
    box-shadow: 5px 5px 8px 0px rgba(0, 107, 61, 0.1);
    cursor: pointer;
}

.ship-option {
    margin-left: 0.5rem;
    accent-color: #006b3d;
}

.ship-info-option {
    display: flex;
    align-items: stretch;
    gap: 0.75rem;
}

/*Payment Methods*/
/* .payment-container {
    display: flex;
    flex-direction: column;
    border: #006b3d 3px dashed;
    box-shadow: 0 4px 8px rgba(0, 107, 61, 0.15);
    padding: 1rem;
    border-radius: 10px;
    background-color: #fdfdfd;
    margin-top: 2rem;
}
.payment-title {
    color: rgb(200, 0, 0);
    font-size: 16.8px;
    margin-left: 0.2rem;
}
.payment-option {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0;
}
.pay-option {
    margin-left: 0.5rem;
    accent-color: #006b3d;
}
.payment-methods {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    padding-left: 0.5rem;
    margin-right: 1rem;
    border: 1px solid rgba(207, 207, 207, 0.6);
    padding: 0.75rem 1rem;
    background-color: #ffffff;
    transition: border-color 0.1s;
}
.payment-methods:hover {
    border-color: rgb(0, 107, 61, 0.3);
    box-shadow: 5px 5px 8px 0px rgba(0, 107, 61, 0.1);
    cursor: pointer;
} */

/* Payment Methods*/
.payment-container {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    border: 2px solid #e0e0e0;
    background: linear-gradient(135deg, #fafafa, #ffffff);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
    padding: 1.25rem 1.5rem;
    border-radius: 12px;
    margin-top: 2.5rem;
    transition: all 0.3s ease-in-out;
}

.payment-title {
    color: #004225;
    font-size: 17px;
    font-weight: 600;
    margin-left: 0.2rem;
    margin-bottom: 0.5rem;
}

.payment-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 0;
}

.payment-option:last-child {
    padding-top: 0;
}

.pay-option {
    margin-left: 0.5rem;
    accent-color: #004225;
}

.payment-methods {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    padding: 0.85rem 1rem;
    margin-right: 1rem;
    border: 1px solid rgba(180, 180, 180, 0.4);
    border-radius: 8px;
    background-color: #ffffff;
    font-weight: 500;
    color: #333;
    transition: all 0.2s ease-in-out;
}

.payment-methods:hover {
    border-color: #006b3d;
    box-shadow: 0 4px 10px rgba(0, 107, 61, 0.15);
    cursor: pointer;
}

@media (max-width: 1024px) {
    p {
        font-size: 1rem;
    }

    small {
        font-size: 0.9rem;
    }
}
</style>