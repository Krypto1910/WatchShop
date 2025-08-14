<template>
    <section class="cart container my-5 py-5">
        <div class="container mt-3" style="padding-left: 0;">
            <h2 class="font-weight-bold">Check Out</h2>
            <hr>
        </div>

        <!--Order detail-->
        <div >
            <table class="mt-5 pt-5">
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th style="text-align: center;">Discount</th>
                    <th>Subtotal</th>
                </tr>
                <!--1-->
                <tr >
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

        
    </section>
</template>