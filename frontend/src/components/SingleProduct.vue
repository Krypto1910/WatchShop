<template>
    <div class="content">
        <!--Single product-->
        <section class="single-product my-5 pt-2 pb-5">
            <div class="row mt-5">
                <!--Images-->
                <div class="col-lg-5 col-md-6 col-sm-12" style="padding-left: 100px; padding-right: 50px;">
                    <img id="mainImg" class="img-fluid w-100 pb-2" :src="`/images/${product.Image}`">
                    <div class="small-img-group">
                        <div class="small-img-col">
                            <img class="small-img" :src="watch3" width="100%">
                        </div>
                        <div class="small-img-col">
                            <img class="small-img" :src="watch2" width="100%">
                        </div>
                        <div class="small-img-col">
                            <img class="small-img" :src="watch1" width="100%">
                        </div>
                        <div class="small-img-col">
                            <img class="small-img" :src="watch4" width="100%">
                        </div>
                    </div>
                </div>

                <!--Info-->
                <div class="col-lg-6 col-md-12 col-12">
                    <h6>{{ product.Category }}</h6>
                    <h3 class="py-4">{{ product.Name }}</h3>
                    <h2>${{ product.Price }}</h2>
                    <input type="number" value="1">
                    <button class="buy-btn">Add To Cart</button>
                    <h4 class="mt-5 mb-5">Product details</h4>
                    <span>{{ product.Description }}</span>
                </div>
            </div>
        </section>

        <!--Related products-->
        <section class="relate-products">
            <div class="container text-center mt-5 py-5">
                <h3>Related Products</h3>
                <hr width="150rem" class=" mx-auto">
            </div>
           <div class="row mx-auto container-fluid">
                <router-link class="product text-center col-lg-3 col-md-4 col-sm-12" :to="{ name: 'SingleProduct' }">
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
                </router-link>
                <router-link class="product text-center col-lg-3 col-md-4 col-sm-12" :to="{ name: 'SingleProduct' }">
                    <img :src="watch2" alt="">
                    <div class="star">
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h5 class="p-name">Watch 2</h5>
                    <h4 class="p-price">$999.9</h4>
                    <button class="buy-btn">Buy Now</button>
                </router-link>
                <router-link class="product text-center col-lg-3 col-md-4 col-sm-12"
                    :to="{ name: 'SingleProduct' }">
                    <img :src="watch3" alt="">
                    <div class="star">
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h5 class="p-name">Watch 3</h5>
                    <h4 class="p-price">$999.9</h4>
                    <button class="buy-btn">Buy Now</button>
                </router-link>
                <router-link class="product text-center col-lg-3 col-md-4 col-sm-12" :to="{ name: 'SingleProduct' }">
                    <img :src="watch4" alt="">
                    <div class="star">
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h5 class="p-name">Watch 4</h5>
                    <h4 class="p-price">$999.9</h4>
                    <button class="buy-btn">Buy Now</button>
                </router-link>
            </div>
        </section>
    </div>

</template>

<script>
import axios from 'axios';
import watch from '@/assets/watch.jpeg';
import watch1 from '@/assets/watch1.jpeg';
import watch2 from '@/assets/watch2.jpeg';
import watch3 from '@/assets/watch3.jpeg';
import watch4 from '@/assets/watch4.jpeg';

export default {
    name: 'SingleProduct',
    data() {
        return {
            watch,
            watch1,
            watch2,
            watch3,
            watch4,
            product: {}
        };
    },
    mounted() {
        this.productId = this.$route.params.id;
        // Gọi API hoặc tìm sản phẩm theo ID:
        this.fetchProductById(this.productId);
    },
    methods: {
        changeImage(index) {
            this.mainImg = this.smallImgs[index];
        },
        async fetchProductById(id) {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:3000/products/${id}`
                );
                this.product = response.data.product;

            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
    }
};

</script>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    background-color: white;
    color: black;
    width: 70%;
    height: fit-content;
    margin: 3% auto;
    box-sizing: border-box;
}

.single-product input {
    width: 60px;
    height: 40px;
    padding-left: 10px;
    font-size: 16px;
    margin-right: 10px;
}

.single-product input:focus {
    outline: none;
}

.single-product .buy-btn {
    background-color: black;
    color: white;
    border: none;
    padding: 8px 10px;
    border: none;
}

.single-product .buy-btn:hover {
    background-color: #006b3d;
    color: white;
    transition: 0.1s all;
}

h2 {
    font-size: 1.6rem !important;
    font-weight: 600;
    color: rgb(0, 0, 0, 0.8);
}


/*products*/
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
    text-decoration: none;
    background-color: transparent;
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
    margin: 0 auto 0.5rem;
    /* Căn giữa ngang và tạo khoảng cách trên/dưới */
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
    border: none;
}

.product:hover .buy-btn {
    transform: translateY(0px);
    opacity: 1;
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
.relate-products img {
    max-height: 20rem;
    border-radius: 12px;
}
</style>