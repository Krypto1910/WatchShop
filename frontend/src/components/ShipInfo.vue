<template>
    <!--Checkout-->
    <section class="my-5 py-5">
        <div class="container text-center mt-3 pt-5">
            <h2 class="form-weight-bold">Check Out</h2>
            <hr class="mx-auto">
        </div>

        <div class="mx-auto container">
            <form id="checkout-form">
                <div class="form-group checkout-small-element">
                    <input type="text" class="form-control" id="checkout-name" name="contactName"
                        placeholder="Contact name" required>
                </div>
                <div class="form-group checkout-small-element">
                    <input type="text" class="form-control" id="checkout-email" name="contactNumber"
                        placeholder="Contact number" required>
                </div>
                <div class="form-group checkout-large-element">
                    <input type="text" class="form-control" id="checkout-address" name="shippingAddress"
                        placeholder="Shipping address" required>
                </div>
                <div class="form-group checkout-btn-container">
                    <input type="submit" class="btn" id="checkout-btn" value="Submit">
                </div>
            </form>
        </div>

    </section>
</template>

<script>
export default {
    name: 'ShipInfo',
}

</script>

<style scoped>
/* Checkout */
#checkout-form .checkout-small-element {
    display: inline-block;
    width: 40%;
    margin: 10px auto;
}

#checkout-form .checkout-small-element:nth-child(2n) {
    margin-left: 0.5rem;
}

#checkout-form .checkout-small-element:nth-child(2n+1) {
    margin-left: 10%;
}

#checkout-form .checkout-large-element {
    width: calc(80% + 0.5rem);
    margin-left: 10%;
}

#checkout-form .checkout-btn-container {
    margin: 10px;
    text-align: right;
    margin-right: calc(10% - 0.5rem);
}

#checkout-form #checkout-btn {
    color: #fff;
    background-color: #006b3d;
    box-shadow: 0 3px 6px rgba(0, 107, 61, 0.25);
    transition: all 0.2s ease-in-out;

}

#checkout-form #checkout-btn:hover {
    background-color: #004d2f;
    box-shadow: 0 5px 10px rgba(0, 107, 61, 0.3);
}

#checkout-form #checkout-btn:active {
    background-color: #006b3d;
    box-shadow: 0 2px 5px rgba(0, 107, 61, 0.2);
    transform: scale(0.98);
}


#checkout-form input.form-control::placeholder {
    color: rgb(155, 155, 155) !important;

}
</style>