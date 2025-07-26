<template>
    <!--Account-->
    <section class="my-5 py-5">
        <div class="row container mx-auto">
            <div class="text-center mt-3 pt-5 col-lg-6 col-md-12 col-sm-12">
                <h3 class="font-weight-bold">Account Info</h3>
                <hr class="mx-auto" width="400rem">
                <div class="account-info">
                    <div class="info">
                        <p>Name: <span>{{ customer.Name }}</span></p>
                        <p>Email: <span>{{ customer.Email }}</span></p>
                    </div>

                    <div class="flex items-center gap-4 mt-6">
                        <a @click="scrollToOrders">Orders</a>
                        <a @click="handleLogout">Logout</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 col-md-12 col-sm-12">
                <form id="account-form" @submit.prevent="handleChangePassword">
                    <h3>Change Password</h3>
                    <hr class="mx-auto">
                    <div class="form-group">
                        <input type="password" class="form-control" id="account-password" name="password"
                            v-model="form.password" placeholder="Password" required>
                    </div>
                    <span class="form-group">
                        <input type="password" class="form-control" id="account-confirm-password" name="confirmPassword"
                            v-model="form.confirmPassword" placeholder="Confirm Password" required>
                    </span>
                    <span class="form-group">
                        <input type="submit" class="btn" id="change-pass-btn" value="Change Password">
                    </span>
                </form>
            </div>
        </div>
    </section>

    <!--Orders-->
    <section ref="ordersSection" class="orders container my-5 py-3">
        <div class="container" mt-5>
            <h2 class="font-weight-bold text-center">Your Orders</h2>
            <hr class="mx-auto">
        </div>

        <table class="mt-5 pt-5">
            <tr>
                <th>Product</th>
                <th>Status</th>
                <th>Date</th>
            </tr>

            <tr v-for="order in orders" :key="order.OrderID">
                <td>
                    <div class="product-info">
                        <!-- <img :src="`/images/${order.ProductImage}`" alt=""> -->
                        <img :src="`/images/${order.ProductImage}`" alt="product image" />

                        <div>
                            <p class="item-detail">{{ order.ProductName }}</p>
                            <p class="item-detail">Qty: {{ order.Quantity }}</p>
                            <p class="item-detail">Unit price: ${{ (+order.UnitPrice).toFixed(2) }}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <span>{{ order.Status }}</span>
                </td>

                <td>
                    <span>{{ moment(order.Date).format(
                        'YYYY-MM-DD'
                        ) }}</span>

                </td>
            </tr>


        </table>

    </section>
</template>

<script>
import watch1 from '@/assets/watch1.jpeg';
import axios from 'axios';
import moment from 'moment';

export default {
    name: 'Account',
    data() {
        return {
            moment,
            watch1,
            customer: JSON.parse(localStorage.getItem("customer")) || {},
            form: {
                password: '',
                confirmPassword: ''
            },
            orders: []
        };
    },
    mounted() {
        this.fetchOrders();
    },
    methods: {
        async fetchOrders() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URI}/orders/customer/${this.customer.CustomerID}`);
                //console.log(response.data);
                if (response.data.status == "success") {
                    this.orders = response.data.data.orders; // vì dùng Jsend.success({ orders })
                    console.log(response.data.data.orders);
                }
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        },

        scrollToOrders() {
            const el = this.$refs.ordersSection;
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        },

        handleLogout() {
            localStorage.removeItem('customer');
            //this.$router.push('/login');
            window.location.href = '/login';
        },
        async handleChangePassword() {
            if (this.form.password !== this.form.confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            try {
                const formData = new FormData();
                formData.append('password', this.form.password);

                const response = await axios.put(
                `${import.meta.env.VITE_API_URI}/customers/${this.customer.CustomerID}`,
                formData,
                {
                    headers: {
                    'Content-Type': 'multipart/form-data'
                    }
                }
                );

                if (response.data.success) {
                    alert('Password updated successfully!');
                    this.form.password = '';
                    this.form.confirmPassword = '';
                } else {
                    alert(response.data.message || 'Update failed');
                }
            } catch (error) {
                console.error("Error:", error);
                alert('Update failed');
            }
        }

    },
}
</script>

<style scoped>
/*Account*/
#account-form {
    width: 50%;
    margin: 35px auto;
    text-align: center;
    padding: 20px;
}

#account-form input {
    margin: 5px auto;
}

#account-form #change-pass-btn {
    color: white;
    background-color: #006b3d;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

/* set limit button */
#account-form .btn,
#account-form input[type="submit"] {
    width: 100%;
    max-width: 300px;
    padding: 8px 0px;

}

.account-info #orders-btn,
#logout-btn {
    color: #006b3d;
    text-decoration: none;
}

.account-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.flex {
    display: flex;
    align-items: center;
    margin-top: 24px;
    gap: 16px;
    margin: auto;
    /* adds space between buttons */
}

a {
    color: #029455 !important;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    background-color: transparent;
    cursor: pointer;

}

a:nth-child(2) {
    color: #E60F0F !important;

}

/* .btn, .btn:hover, .btn:active {
    background-color: #006b3d !important;
}
.btn.btn-primary, .btn.btn-secondary {
    margin-top: 0.5rem;
    border: none;
} */


/*Orders*/
.orders table {
    width: 100%;
    border-collapse: collapse;
}

.orders .product-info {
    display: flex;
    flex-wrap: wrap;
}

.orders th {
    text-align: left;
    padding: 5px 10px;
    color: #fff;
    background-color: #006b3d;
}

.orders th:last-child {
    text-align: right;
}

.orders td {
    padding: 10px 0px;
}

.orders td:nth-child(2) {
    padding: 10px;
}

.orders td:last-child {
    text-align: right;
}

.orders td img {
    width: 4.5rem;
    height: 4.5rem;
    margin-right: 10px;
}

.item-detail {
    margin: 0;
    font-size: 0.9rem;
}

.item-detail:nth-child(1) {
    font-size: 1rem;
}

</style>