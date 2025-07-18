<template>
    <div class="content">
        <div class="carousel">
            <VSlickCarousel v-bind="settings">
                <div class="banner-container">
                    <img :src="banner" alt="Banner Image">
                </div>
                <div class="banner-container">
                    <img :src="watch" alt="Banner Image">
                </div>
                <div class="banner-container">
                    <img :src="watch4" alt="Banner Image">
                </div>
            </VSlickCarousel>
        </div>
        <div id="featured" class="text-center my-5">
            <h3 style="font-size: 2rem; color: rgb(155, 155, 155); text-align: left; margin-bottom: 0;">Best Seller</h3>
        </div>
        <div class="product-container">
            <div class="mx-auto container-fluid">
                <router-link v-for="product in products" :key="product.ProductID"
                    class="product text-center col-lg-3 col-md-4 col-sm-12"
                    :to="{ name: 'SingleProduct', params: { id: product.ProductID } }">
                    <img :src="`/images/${product.Image}`" alt="">
                    <div class="star">
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h5 class="p-name">{{ product.Name }}</h5>
                    <h4 class="p-price">${{ product.Price }}</h4>
                    <button class="buy-btn">Buy Now</button>
                </router-link>
            </div>


        </div>

    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import PageFooter from '@/components/PageFooter.vue'
import axios from 'axios';
import banner from '@/assets/banner.jpeg';
import banner2 from '@/assets/banner2.jpg'
import watch from '@/assets/watch.jpeg';
import watch1 from '@/assets/watch1.jpeg';
import watch2 from '@/assets/watch2.jpeg';
import watch3 from '@/assets/watch3.jpeg';
import watch4 from '@/assets/watch4.jpeg';

import { useRouter } from 'vue-router'
const router = useRouter()
import 'v-slick-carousel/style.css'
import { VSlickCarousel } from 'v-slick-carousel'

export default {
    name: 'Home',
    components: {
        VSlickCarousel, // ← thêm dòng này
    },
    data() {
        return {
            Navbar,
            PageFooter,
            banner,
            watch,
            watch1,
            watch2,
            watch3,
            watch4,
            banner2,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 3000,
                infinite: true,
                speed: 500,
                slidesToScroll: 1,
            },
            products: []
        };
    },
    mounted() {
        this.fetchProducts();
    },
    methods: {
        async fetchProducts() {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URI}/products`
                );
                this.products = response.data;
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

    }
}
</script>

<style scoped>
.carousel {
    width: 100%;
    max-width: 100%;
}

/* Slick arrow custom style */
.slick-arrow {
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    border: none;
    font-size: 2rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}

/* Left arrow */
.slick-prev {
    left: 10px;
}

/* Right arrow */
.slick-next {
    right: 10px;
}

.content {
    display: flex;
    gap: 0;
    flex-direction: column;
    background-color: transparent;
    color: black;
    width: 80%;
    height: min-content;
    margin: 10% auto;
    box-sizing: border-box;
}

/* banner */
.banner-container {
    width: 100%;
    overflow: hidden;
    object-fit: cover;
}

.banner-container img {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 6;
    object-fit: cover;
    display: block;
    max-height: 23rem;
    border-radius: 12px;
}

img {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 6;
    object-fit: cover;
    display: block;
    max-height: 20rem;
    border-radius: 12px;
}

/* products */
.product-container {
    width: 100%;
    height: fit-content;
    background-color: white;
}

.mx-auto.container-fluid {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    /* Chia đều các phần tử */
    margin: 3.5rem 0;
}


.product {
    /* flex: 1; */
    width: 25%;
    padding: 0;
    box-sizing: border-box;
    cursor: pointer;
    text-decoration: none;
    background-color: transparent;
    margin-bottom: 3.5rem;
}

.star i {
    color: goldenrod;
    margin: 1rem 0 0.5rem;
    font-size: 1rem;
}

.product img {
    width: 75%;
    height: auto;
    /* Cho phép ảnh co giãn theo chiều ngang và giữ nguyên tỉ lệ */
    aspect-ratio: 3 / 5;
    /* Tùy chỉnh tỉ lệ khung hình mong muốn */
    object-fit: cover;
    transition: 0.3s all;
    box-shadow: 3px 2px 8px rgba(0, 0, 0, 0.2);
    margin: 0 auto 0;
    /* Căn giữa ngang và tạo khoảng cách trên/dưới */
}


.product:hover img {
    opacity: 0.8;
}

.product .buy-btn {
    color: white;
    background-color: black;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    transform: translateY(30px);
    opacity: 0;
    transition: 0.3s all;
    font-size: 1.05rem;
    border: none;
    max-width: 80%;

}

.product:hover .buy-btn {
    transform: translateY(0px);
    opacity: 1;
}



h3 {
    font-weight: 600;
    font-size: 2.3rem;
    color: rgb(0, 0, 0, 1);
}

p {
    font-weight: 600;
    font-size: 1.2rem;
    color: rgb(0, 0, 0, 0.6);
}

.product .p-name {
    font-weight: 600;
    font-size: 1.2rem;
    color: rgb(0, 0, 0, 0.8);
}

.product .p-price {
    font-weight: 500;
    font-size: 1.2rem;
    color: rgb(0, 0, 0, 0.8);
}

/*desktop*/
@media (min-width: 1024px) {
    #app {
        padding-top: 10rem !important;
    }

    .content {
        margin: 7% auto;
    }
}

/*mobile*/
@media (max-width: 1024px) {
    #app {
        padding-top: 10rem !important;
    }

    .content {
        margin-top: 10%;
    }

    #featured h3 {
        font-size: 1.8rem !important;
    }

    .product {
        margin-bottom: 0.3rem;
    }

    .product .p-name {
        font-size: 0.8rem;
    }

    .product .p-price {
        font-size: 0.8rem;
    }

    .star i {
        font-size: 0.6rem;
        margin: 0;
    }

    .product .buy-btn {
        padding: 0.3rem 0.5rem;
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: 0.52rem;
    }

}
</style>