<template>
    <div class="content">
        <!--Single product-->
        <section class="single-product my-5 pt-2 pb-5">
            <div class="row mt-5">
                <!--Images-->
                <div class="col-lg-5 col-md-6 col-sm-12" style="padding: 0 30px">
                    <img id="mainImg" class="img-fluid w-100 pb-2" :src="`/images/${product.Image}`">
                    <div class="small-img-group">
                        <div class="small-img-col">
                            <img class="small-img" :src="`/images/${product.Image}`" width="100%">
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
                <div class="product-info col-lg-6 col-md-12 col-12">
                    <h6>{{ product.Category }}</h6>
                    <h3 class="py-4">{{ product.Name }}</h3>
                    <h2>${{ product.Price }}</h2>
                    <input type="number" value="1">
                    <button class="buy-btn" @click="addToCart">Add To Cart</button>
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
                <router-link class="product text-center col-lg-3 col-md-4 col-sm-12" :to="{ name: 'SingleProduct' }">
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
import { useAppStore } from '@/stores/app'

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
                    `${import.meta.env.VITE_API_URI}/products/${id}`
                );
                this.product = response.data.product;

            } catch (error) {
                console.error("Error fetching products:", error);
            }
        },
        // addToCart() {
        //     const store = useAppStore()
        //     const productCart = JSON.parse(localStorage.getItem("cart")) || []
        //     const existProduct = productCart.find((item) => item.ProductID == this.product.ProductID)
        //     console.log(existProduct)
        //     if (existProduct) {
        //         existProduct.Quantity += 1
        //     }
        //     else {
        //         const product = {
        //             ProductID: this.product.ProductID,
        //             Name: this.product.Name,
        //             Price: this.product.Price,
        //             Image: this.product.Image,
        //             Quantity: 1
        //         }
        //         store.updateCart([...store.cart, product])
        //         productCart.push(product)
        //     }
        //     localStorage.setItem("cart", JSON.stringify(productCart))

        // }
        async addToCart() {
            const store = useAppStore()

            store.addToCart({
                ProductID: this.product.ProductID,
                Name: this.product.Name,
                Price: this.product.Price,
                Image: this.product.Image,
                Quantity: 1
            })

            // optional toast
            // this.$toast.success('Added to cart')
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
    background-color: #006b3d;
    color: white;
    border: none;
    padding: 8px 10px;
    border: none;
    box-shadow: 0 3px 6px rgba(0, 107, 61, 0.25);
    transition: all 0.2s ease-in-out;
}

.single-product .buy-btn:hover {
    background-color: #004d2f;
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
    font-size: 1.15rem;
    color: rgb(0, 0, 0, 0.8);
}

.relate-products img {
    max-height: 20rem;
    border-radius: 12px;
}

.small-img {
    height: 100%;
    object-fit: cover;
}

.product-info h4 {
    margin-top: 2rem !important;
    margin-bottom: 0 !important;
}

.container {
    padding-bottom: 0 !important;
}

/*mobile*/
@media (max-width: 1024px) {
    .product-info {
        padding: 0 30px;
    }

    .product-info h3 {
        padding: 0 !important;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
    }

    .product-info h6 {
        margin-top: 1rem !important;
    }

    .product-info h2 {
        margin-top: 0.5rem !important;
        font-size: 1.2rem !important;
    }

    .product-info h4 {
        margin-top: 2rem !important;
        margin-bottom: 0 !important;
    }

    .container {
        padding-bottom: 0 !important;
        margin-top: 0 !important;
    }

    .star i {
        font-size: 0.6rem;
        margin: 0;
    }

    .product .p-name {
        font-size: 0.8rem;
    }

    .product .p-price {
        font-size: 0.8rem;
    }

    .product .buy-btn {
        padding: 0.3rem 0.5rem;
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: 0.52rem;
    }

}
</style>