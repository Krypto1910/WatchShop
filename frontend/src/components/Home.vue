<template>
    <Navbar />
    <div class="content">
        
        <div class="banner-container">
            <img :src="banner" alt="Banner Image">
        </div>
        <div id="featured" class="text-center my-5">
            <h3 style="font-size: 2rem; color: #708090; text-align: left; margin-bottom: 0;">Best saler</h3>
        </div>
        <div class="product-container">
            <div class="row mx-auto container-fluid">
                <div onclick="window.location.href='#';" class="product text-center col-lg-3 col-md-4 col-sm-12">
                    <img :src="watch1" alt="">
                    <div class="star">
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h5 class="p-name">Watch 1</h5>
                    <h4 class="p-price">$999.9</h4>
                    <button class="buy-btn">Buy Now</button>
                </div>

                <div onclick="window.location.href='#';" class="product text-center col-lg-3 col-md-4 col-sm-12">
                    <img :src="watch2" alt="">
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h5 class="p-name">Watch 2</h5>
                    <h4 class="p-price">$999.9</h4>
                    <button class="buy-btn">Buy Now</button>
                </div>

                <div onclick="window.location.href='#';" class="product text-center col-lg-3 col-md-4 col-sm-12">
                    <img :src="watch3" alt="">
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h5 class="p-name">Watch 3</h5>
                    <h4 class="p-price">$999.9</h4>
                    <button class="buy-btn">Buy Now</button>
                </div>

                <div onclick="window.location.href='#';" class="product text-center col-lg-3 col-md-4 col-sm-12">
                    <img :src="watch4" alt="">
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h5 class="p-name">Watch 4</h5>
                    <h4 class="p-price">$999.9</h4>
                    <button class="buy-btn">Buy Now</button>
                </div>
            </div>
            <div class="row mx-auto container-fluid">
                <div onclick="window.location.href='#';" class="product text-center col-lg-3 col-md-4 col-sm-12">
                    <img :src="watch1" alt="">
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h5 class="p-name">Watch 1</h5>
                    <h4 class="p-price">$999.9</h4>
                    <button class="buy-btn">Buy Now</button>
                </div>

                <div onclick="window.location.href='#';" class="product text-center col-lg-3 col-md-4 col-sm-12">
                    <img :src="watch2" alt="">
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h5 class="p-name">Watch 2</h5>
                    <h4 class="p-price">$999.9</h4>
                    <button class="buy-btn">Buy Now</button>
                </div>

                <div onclick="window.location.href='#';" class="product text-center col-lg-3 col-md-4 col-sm-12">
                    <img :src="watch3" alt="">
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h5 class="p-name">Watch 3</h5>
                    <h4 class="p-price">$999.9</h4>
                    <button class="buy-btn">Buy Now</button>
                </div>

                <div onclick="window.location.href='#';" class="product text-center col-lg-3 col-md-4 col-sm-12">
                    <img :src="watch4" alt="">
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h5 class="p-name">Watch 4</h5>
                    <h4 class="p-price">$999.9</h4>
                    <button class="buy-btn">Buy Now</button>
                </div>
            </div>
            <div class="row mx-auto container-fluid">
                <div onclick="window.location.href='#';" class="product text-center col-lg-3 col-md-4 col-sm-12">
                    <img :src="watch1" alt="">
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h5 class="p-name">Watch 1</h5>
                    <h4 class="p-price">$999.9</h4>
                    <button class="buy-btn">Buy Now</button>
                </div>

                <div onclick="window.location.href='#';" class="product text-center col-lg-3 col-md-4 col-sm-12">
                    <img :src="watch2" alt="">
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h5 class="p-name">Watch 2</h5>
                    <h4 class="p-price">$999.9</h4>
                    <button class="buy-btn">Buy Now</button>
                </div>

                <div onclick="window.location.href='#';" class="product text-center col-lg-3 col-md-4 col-sm-12">
                    <img :src="watch3" alt="">
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h5 class="p-name">Watch 3</h5>
                    <h4 class="p-price">$999.9</h4>
                    <button class="buy-btn">Buy Now</button>
                </div>

                <div onclick="window.location.href='#';" class="product text-center col-lg-3 col-md-4 col-sm-12">
                    <img :src="watch4" alt="">
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h5 class="p-name">Watch 4</h5>
                    <h4 class="p-price">$999.9</h4>
                    <button class="buy-btn">Buy Now</button>
                </div>
            </div>
        </div>
        
    </div>
    <PageFooter />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import PageFooter from '@/components/PageFooter.vue'
import banner from '@/assets/banner.jpeg';
import watch1 from '@/assets/watch1.jpeg';
import watch2 from '@/assets/watch2.jpeg';
import watch3 from '@/assets/watch3.jpeg';
import watch4 from '@/assets/watch4.jpeg';
export default {
    name: 'Home',
    data() {
        return {
            Navbar,
            PageFooter,
            banner,
            watch1,
            watch2,
            watch3,
            watch4
        };
    },
}
</script>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    color: black;
    width: 70%;
    height: fit-content;
    margin: 3% auto;
    /* margin-top: 20rem; */
    padding-top: 112rem; /* đúng bằng chiều cao navbar */
    box-sizing: border-box;
}

/* banner */
.banner-container {
    width: 100%;
    overflow: hidden;
}

 img {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 6;
    /* Hoặc 3 / 1 tuỳ hình ảnh bạn đang dùng */
    object-fit: cover;
    /* Giúp ảnh bao phủ khung không méo */
    display: block;
    max-height: 20rem;
    /* Hoặc 400px nếu bạn muốn cao hơn */
    border-radius: 12px;
}

/* products */
.product-container {
    width: 100%;
    height: fit-content;
    background-color: white;
}

.row.mx-auto.container-fluid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* Chia đều các phần tử */
    margin: 3.5rem 0;
}


.product {
    flex: 1;
    max-width: 25%;
    padding: 0;
    box-sizing: border-box;
    cursor: pointer;
}

.star i {
    color: goldenrod;
    margin: 0.5rem 0;
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
    margin: 0 auto 0.5rem; /* Căn giữa ngang và tạo khoảng cách trên/dưới */
}


.product:hover img {
    opacity: 0.8;
}

.product .buy-btn {
    color: white;
    background-color: black;
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
    transform: translateY(30px);
    opacity: 0;
    transition: 0.3s all;
    font-size: 1.05rem;
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
    font-size: 1.25rem;
    color: rgb(0, 0, 0, 0.8);
}

.product .p-price {
    font-weight: 600;
    font-size: 1.1rem;
    color: rgb(0, 0, 0, 0.8);
}
</style>