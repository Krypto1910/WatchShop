<template>
    <div class="content">
        <div class="carousel">
            <VSlickCarousel v-bind="settings">
                <div class="banner-container">
                    <img :src="`/images/banner4.jpg`" alt="Banner Image">
                </div>
                <div class="banner-container">
                    <img :src="`/images/banner5.jpg`" alt="Banner Image">
                </div>
                <div class="banner-container">
                    <img :src="`/images/banner10.jpg`" alt="Banner Image">
                </div>
            </VSlickCarousel>
        </div>

        <!--Brands-->
        <section id="brand" class="container">
            <div class="row" style="padding: 1rem 0;">
                <img class="img-fluid col-lg-3 col-md-6 col-sm-12" :src="`/images/brioni.png`" alt="">
                <img class="img-fluid col-lg-3 col-md-6 col-sm-12" :src="`/images/canali.jpeg`" alt="">
                <img class="img-fluid col-lg-3 col-md-6 col-sm-12" :src="`/images/coach.png`" alt="">
                <img class="img-fluid col-lg-3 col-md-6 col-sm-12" :src="`/images/balmain.jpeg`" alt="">
            </div>
        </section>

        <!--New-->
        <section id="new" class="w-100">
            <div class="row p-0 m-0">
                <!--1-->
                <div class="one col-lg-4 col-md-12 col-sm-12 p-0">
                    <img class="img-fluid" :src="`/images/vest.jpeg`" alt="">
                    <div class="details">
                        <h2>Premium</h2>

                    </div>
                </div>

                <!--2-->
                <div class="one col-lg-4 col-md-12 col-sm-12 p-0">
                    <img class="img-fluid" :src="`/images/watch1.jpeg`" alt="">
                    <div class="details">
                        <h2>High-End</h2>

                    </div>
                </div>

                <!--3-->
                <div class="one col-lg-4 col-md-12 col-sm-12 p-0">
                    <img class="img-fluid" :src="`/images/banner3.jpg`" alt="">
                    <div class="details">
                        <h2>Prestigious</h2>

                    </div>
                </div>
            </div>
        </section>

        <!--Fashion-->
        <section>
            <div id="featured" class="text-center my-5">
                <h3>Fashion</h3>
                <hr class="mx-auto">
                <p>Check out our fashion watches</p>
            </div>
            <div class="product-container">
                <div class="mx-auto container-fluid">
                    <router-link v-for="product in productsByCategory.fashion" :key="product.ProductID"
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
        </section>

        <!--Banner-->
        <section id="banner" class="my-5 py-5" :style="{ '--banner-image': `url(${bannerBackground})` }">
            <div class="container">
                <h4>MID SEASON'S SALE</h4>
                <h1>Summer Collection <br> Up to 15% OFF</h1>
                <button class="text-uppercase" @click="goToRegister">Get Discount</button>
                <router-link class="button text-uppercase" to="/register"></router-link>
            </div>
        </section>

        <!--Classic-->
        <section>
            <div id="featured" class="text-center my-5">
                <h3>Classic</h3>
                <hr class="mx-auto">
                <p>Check out our classic watches</p>
            </div>
            <div class="product-container">
                <div class="mx-auto container-fluid">
                    <router-link v-for="product in productsByCategory.classic" :key="product.ProductID"
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
        </section>

        <!--Luxury-->
        <section>
            <div id="featured" class="text-center my-5">
                <h3>Luxury</h3>
                <hr class="mx-auto">
                <p>Check out our luxury watches</p>
            </div>
            <div class="product-container">
                <div class="mx-auto container-fluid">
                    <router-link v-for="product in productsByCategory.luxury" :key="product.ProductID"
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
        </section>


    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import bannerBackground from '@/assets/brightened-product-photography.jpeg'
import { VSlickCarousel } from 'v-slick-carousel'
import 'v-slick-carousel/style.css'

const router = useRouter()
const store = useAppStore()

const settings = {
    slidesToShow: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
}

const goToRegister = () => {
    router.push('/register')
}

const productsByCategory = computed(() => store.productsByCategory);

onMounted(() => {
    store.fetchAllCategories();
})
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
    width: 2rem;
    height: 2rem;
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
    /* margin: 10% auto; */
    box-sizing: border-box;
    margin-top: 9% !important;
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
    margin-top: 3rem;
    padding-top: 3rem;
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
        margin: 5% auto;
    }
}

#brand .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: auto;
}

.img-fluid {
    width: 15.5rem;
    height: 15rem;
    object-fit: cover;
    border-radius: unset;
}

#new .one img {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#new .one {
    position: relative;
}

#new .one .details {
    position: absolute;
    top: 0;
    left: 0;
    color: burlywood;
    font-weight: 500;
    opacity: 0.8;
    background-color: black;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    /* Căn giữa theo chiều dọc */
    flex-direction: column;
    align-items: center;
    /* Căn giữa theo chiều ngang */
    text-align: center;
    /* Căn giữa chữ */
    transition: opacity 0.4s ease;
    /* Hiệu ứng mượt */
}

#new .one .details:hover {
    background-color: rgba(222, 184, 135, 0.1);
    color: transparent;
    cursor: pointer;
    transition: 0.4s ease-out;
}

#new .one .details:hover button {
    opacity: 0;
    pointer-events: none;
    transition: 0.4s ease-in-out;
}

#banner {
    background-image: var(--banner-image);
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position-x: center;
    background-position-y: 80px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 0 !important;
}

#banner .container {
    height: 15rem !important;
}

#banner h4 {
    font-weight: 400;
    color: rgb(250, 250, 250, 0.85);
    margin-left: 4rem;
    margin-top: 1rem;
}

#banner h1 {
    color: rgb(222, 184, 135, 1);
    font-weight: 400;
    margin-left: 4rem;
    margin-bottom: 1rem;
}

#banner button {
    text-decoration: none;
    background-color: black;
    color: white;
    padding: 0.8rem 1.2rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    margin-left: 4rem;
    margin-top: 0.8rem;
    transition: 0.3s ease;
    box-shadow:
        0 0 8px rgba(255, 255, 255, 0.1),
        0 6px 20px rgb(222, 184, 135, 1),
        inset 0 0 5px rgba(255, 255, 255, 0.05);
}

#banner button:hover {
    background-color: black;
    scale: 1.1;
}

/*mobile*/
@media (max-width: 1024px) {
    #app {
        padding-top: 10rem !important;
    }

    .content {
        margin-top: 18%;
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

    .img-fluid {
        width: 9rem;
        height: 8rem;
    }

    #new .one img {
        width: 100%;
        height: 12rem;

    }

    /* #banner {
        height: 80%;
    } */

    #banner .container {
        height: 10rem !important;
    }

    #banner h4 {
        font-size: 0.9rem;
    }

    #banner h1 {
        font-size: 1.1rem;
    }

    #banner button {
        font-size: 0.8rem;
        padding: 0.5rem 0.8rem;
    }
}
</style>