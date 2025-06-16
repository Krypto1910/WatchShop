<template>
    <!--Panel-->
    <section class="content" >
        <div class="banner-container">
            <img :src="banner" alt="Banner Image">
        </div>
        <div class="items" style="background-color: aquamarine; width: 100%; height: 100%; padding: 20px; border-radius: 10px; margin-top: 50px;">
            <h1>Welcome to NeoStyle</h1>
            <p>Your one-stop shop for the latest fashion trends.</p>
        </div>
    </section>
    
</template>

<script>
import banner from '@/assets/banner.jpeg';
export default {
    name: 'Home',
    data() {
        return {
            banner
        };
    }
}
</script>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    background-color: white; 
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    color:  black;
    width: 70%;
    height: fit-content;
    margin: 3% auto;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.banner-container {
    width: 100%;
    height: 30%;
    border-radius: 10px;
}
img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 10px;
}


</style>