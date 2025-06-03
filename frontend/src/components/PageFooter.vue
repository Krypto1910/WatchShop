<template>
    <!--Footer-->
    <footer class="mt-5 py-5" style="font-weight: 400;">
        <div class="row container mx-auto pt-5">
            <div class="footer-one col-lg-3 col-md-6 col-sm-12">
                <img class="logo" :src="logoUrl" alt="NeoStyle Logo"
                    style="width: 40px; height: 40px; background-color: white;">
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
                    <li><a href="#">clothes</a></li>
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
                    <img :src="watch1" class="img-fluid w-25 h-100 m-2">
                </div>
            </div>
        </div>

        <div class="copyright mt-5">
            <div class="row container mx-auto">
                <div class="col-lg-3 col-md-5 col-sm-12 mb-4">
                    <img :src="payment" alt="">
                </div>
                <div class="col-lg-3 col-md-5 col-sm-12 mb-4 text-nowrap">
                    <p>eCommerce @ 2025 All Right Reversed</p>
                </div>
                <div class="col-lg-3 col-md-5 col-sm-12 mb-4">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import logoUrl from '@/assets/logo_removebg.png';
import watch1 from '@/assets/watch1.jpeg';
import watch2 from '@/assets/watch2.jpeg';
import watch3 from '@/assets/watch3.jpeg';
import watch4 from '@/assets/watch4.jpeg';
import payment from '@/assets/payment.jpeg';

export default {
    name: 'Home',
    data() {
        return { logoUrl, 
                 watch1, 
                 watch2, 
                 watch3, 
                 watch4,
                payment };
    }
}
</script>