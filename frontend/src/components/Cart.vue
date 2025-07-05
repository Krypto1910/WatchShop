<template>
     <!--Cart-->
    <section class="cart container my-5 py-5">
        <div class="container" mt-5>
            <h2 class="font-weight-bold">Your Cart</h2>
            <hr>
        </div>

        <table class="mt-5 pt-5">
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
            <!--1-->
            <tr>
                <td>
                    <div class="product-info">
                        <img :src="watch1" alt="">
                        <div>
                            <p>White Watch</p>
                            <small><span>$</span>199</small>
                            <br>
                            <a class="remove-btn" href="#">Remove</a>
                        </div>
                    </div>
                </td>

                <td>
                    <input type="number" value="1">
                    <a class="edit-btn" href="#">Edit</a>
                </td>

                <td>
                    <span>$</span>
                    <span class="product-price">199</span>
                </td>
            </tr>

            <!--2-->
            <tr>
                <td>
                    <div class="product-info">
                        <img :src="watch2" alt="">
                        <div>
                            <p>Green Vest</p>
                            <small><span>$</span>199</small>
                            <br>
                            <a class="remove-btn" href="#">Remove</a>
                        </div>
                    </div>
                </td>

                <td>
                    <input type="number" value="1">
                    <a class="edit-btn" href="#">Edit</a>
                </td>

                <td>
                    <span>$</span>
                    <span class="product-price">199</span>
                </td>
            </tr>

            <!--3-->
            <tr>
                <td>
                    <div class="product-info">
                        <img :src="watch3" alt="">
                        <div>
                            <p>Black Watch</p>
                            <small><span>$</span>199</small>
                            <br>
                            <a class="remove-btn" href="#">Remove</a>
                        </div>
                    </div>
                </td>

                <td>
                    <input type="number" value="1">
                    <a class="edit-btn" href="#">Edit</a>
                </td>

                <td>
                    <span>$</span>
                    <span class="product-price">199</span>
                </td>
            </tr>
            
        </table>

        <!--subtotal-->
        <div class="cart-total">
            <table>
                <tr>
                    <td>Subtotal</td>
                    <td>$199</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>$199</td>
                </tr>
            </table>
        </div>

        <div class="checkout-container">
            <!-- <button class="btn checkout-btn">Checkout</button> -->
            <router-link tag="button" class="btn checkout-btn" to="/checkout">Checkout</router-link>
        </div>
    </section>
</template>

<script>
import watch1 from '@/assets/watch1.jpeg';
import watch2 from '@/assets/watch2.jpeg';
import watch3 from '@/assets/watch3.jpeg';
import watch4 from '@/assets/watch4.jpeg';
import router from '@/router';

export default {
    // name: 'Cart',
    // data() {
    //     return {
    //         cartItems: [
    //             { id: 1, name: 'White Watch', price: 199, quantity: 1, image: 'img/featured-watch.jpeg' },
    //             { id: 2, name: 'Green Vest', price: 199, quantity: 1, image: 'img/dress3.jpeg' },
    //             { id: 3, name: 'Black Watch', price: 199, quantity: 1, image: 'img/watch4.jpeg' }
    //         ]
    //     };
    // },
    // computed: {
    //     subtotal() {
    //         return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    //     },
    //     total() {
    //         return this.subtotal; // Add tax or shipping if needed
    //     }
    // }

    name: 'Cart',
    data() {
        return {         
            watch1,
            watch2,
            watch3,
            watch4
        };
    },
};
</script>

<style scoped>
.content {
   padding-top: 0px !important;
    padding-bottom: 0px !important; 
    margin-top: 2000px !important;
}

/*Cart*/
.cart table{
    width: 100%;
    border-collapse: collapse;
}

.cart .product-info{
    display: flex;
    flex-wrap: wrap;
}

.cart th{
    text-align: left;
    padding: 5px 10px;
    color: white;
    background-color: #006b3d;
    font-size: 1.05rem;
}

.cart td{
    padding: 10px 0px;
    font-size: 1rem;
}

.cart td img{
    width: 80px;
    height: 80px;
    margin-right: 10px;
}

.cart td input{
    width: 60px;
    grid-row-end: 30px;
    padding: 5px;
}

.cart td a{
    color: #006b3d;
}

.cart .remove-btn{
    color: rgb(230, 15, 15);
    text-decoration: none;
    font-size: 0.92rem;
    background-color: transparent;
}

.cart .edit-btn{
    color: #006b3d;
    text-decoration: none;
    font-size: 1rem;
    margin-left: 0.2rem;
    background-color: transparent;
}

.cart .product-info p{
    margin-bottom: 1px;
}

.cart-total{
    display: flex;
    justify-content: flex-end;
}

.cart-total table{
    width: 100%;
    max-width: 500px;
    border-top: 3px solid #006b3d;
}

td:last-child{
    text-align: right;
}

th:last-child{
    text-align: right;
}

.checkout-container{
    display: flex;
    justify-content: flex-end;
}

.checkout-btn{
    display: flex;
    justify-content: flex-end;
    background-color: #006b3d;
    color: white;
    font-size: 1rem;
}

.checkout-btn:hover{
    background-color: #004225;
    color: white;
    transition: 0.1s ease-in-out;
}
.checkout-btn:active{
    background-color: #006b3d !important;
    color: white !important;
    transition: 0.1s ease-out;
}
</style>