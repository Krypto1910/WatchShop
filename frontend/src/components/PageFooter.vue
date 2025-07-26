<template>
    <!--Footer-->
    <footer class="mt-5 py-5" style="display: flex; flex-direction: column;">
        <div class="row container mx-auto pt-5">
            <div class="footer-one col-lg-3 col-md-6 col-sm-12">
                <img id="logo-img-footer" class="logo" :src="logoUrl" alt="NeoStyle Logo">
                <p class="pt-3">We offer best product for the most affordable prices</p>
            </div>

            <div class="footer-one col-lg-3 col-md-6 col-sm-12">
                <h5 class="pb-2">Featured</h5>
                <ul class="text-uppercase">
                    <li><a href="#">men</a></li>
                    <li><a href="#">women</a></li>
                    <li><a href="#">boys</a></li>
                    <li><a href="#">girls</a></li>
                    <li><a href="#">new arrivals</a></li>
                    <li><a href="#">discount</a></li>
                </ul>
            </div>

            <div class="footer-one col-lg-3 col-md-6 col-sm-12">
                <h5 class="pb-2">Contact Us</h5>
                <div>
                    <h6 class="text-uppercase">Address</h6>
                    <p>3/2 Street, Xuan Khanh Ward, Can Tho City</p>
                </div>
                <div>
                    <h6 class="text-uppercase">Phone</h6>
                    <p>(+84)702 831 358</p>
                </div>
                <div>
                    <h6 class="text-uppercase">Email</h6>
                    <p>neostyle1903@gmail.com</p>
                </div>
            </div>

            <div class="footer-one col-lg-3 col-md-6 col-sm-12">
                <h5 class="pb-2">Instagram</h5>
                <div class="row">
                    <img :src="watch1" class="img-fluid w-25 h-100 m-2">
                    <img :src="watch2" class="img-fluid w-25 h-100 m-2">
                    <img :src="watch3" class="img-fluid w-25 h-100 m-2">
                    <img :src="watch4" class="img-fluid w-25 h-100 m-2">
                    <img :src="watch3" class="img-fluid w-25 h-100 m-2">
                    <img :src="watch1" class="img-fluid w-25 h-100 m-2">
                </div>
            </div>
        </div>

        <div class="copyright mt-5">
            <div class="row container mx-auto">
                <div class="col-lg-3 col-md-5 col-sm-12 mb-4">
                    <img id="payment-img" :src="payment" alt="">
                </div>
                <div class="col-lg-3 col-md-5 col-sm-12 mb-4 text-nowrap">
                    <p>eCommerce @ 2025 All Right Reversed</p>
                </div>
                <div class="col-lg-3 col-md-5 col-sm-12 mb-4">
                    <a id="fb-icon" href="#"><i class="fab fa-facebook"></i></a>
                    <a id="ig-icon" href="#"><i class="fab fa-instagram"></i></a>
                    <a id="tw-icon" href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>           
        </div>
    </footer>
</template>

<script setup>
import logoUrl from '@/assets/logo_removebg.png'
import watch1 from '@/assets/watch1.jpeg'
import watch2 from '@/assets/watch2.jpeg'
import watch3 from '@/assets/watch3.jpeg'
import watch4 from '@/assets/watch4.jpeg'
import payment from '@/assets/payment.jpeg'
</script>


<style>
.small-img-group {
    display: flex;
    justify-content: space-between;
}

.small-img-col {
    flex-basis: 24%;
    cursor: pointer;
}

#app {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    margin: 0;
    border: 0;
}

.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    flex-wrap: wrap;
}

.footer-item {
    margin: 0 15px;
}

.row {
    max-height: 600px;
    padding-bottom: 0px;
}

.copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
}

footer {
    background-color: #1a1a1a;
    display: flex;
    flex-direction: row;
}

footer h5 {
    color: #D8D8D8;
    font-weight: 700;
    font-size: 1.8rem;
}

footer li {
    padding-bottom: 4px;
}

footer li a {
    font-size: 0.9rem;
    color: #999;
    text-decoration: none;
}

footer li a:hover {
    color: #D8D8D8;
}

footer .copyright a {
    color: black;
    height: 40px;
    width: 40px;
    background-color: white;
    display: inline-block;
    text-align: center;
    line-height: 2.5rem;
    border-radius: 50%;
    transition: 0.3s ease;
    margin: 0 5px;
}

footer .copyright a:hover {
    color: white;
    
}

footer p {
    color: white;
    font-size: 1rem;
}

footer h5 {
    font-size: 1.7rem;
}

footer h6 {
    font-size: 1.2rem;
}

.copyright p {
    margin-bottom: 0;
    flex: 1;
    text-align: center;
    font-size: 1rem;
}

.copyright div {
    display: flex;
    align-items: center;
}

.copyright div a {
    margin-left: 8px;
    /* Giảm khoảng cách giữa các icon */
}

footer .copyright img {
    width: 50%;
    padding: 0 20px;
    background-color: white;

}

.logo {
    height: auto;
    width: auto;
    max-height: 50px;
    background-color: #fff;
}

.footer-one p {
    font-size: 1rem;
}

.footer-one .text-uppercase {
    color: white;
}

.footer-one .row img {
    margin: 0px;
    padding: 2%;
}

.footer-one .text-uppercase a:hover {
    color: white;
    background-color: transparent;
    transition: 0.1s ease;
}

footer {
    margin-bottom: 0px !important;
    padding-bottom: 0px !important;
}

#payment-img {
    width: 50%;
    height: auto;
    max-height: 100px;
    object-fit: cover;
}

#logo-img-footer {
    width: 18%;
    max-height: 100px;
    object-fit: cover;
}

#fb-icon, #ig-icon, #tw-icon {
    font-size: 1.2rem;
    transition: color 0.1s ease;
}

#fb-icon {
    color: #3b5998;
    margin-left: -0.1rem;
}
#ig-icon {
    color: #e1306c;
}
#tw-icon {
    color: #1da1f2;
}

</style>