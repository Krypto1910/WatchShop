<template>
    <!--Panel-->
    <section class="content" >
        <div class="panel">
            <img :src="panel" alt="Panel Image">
        </div>

    </section>
    
</template>

<script>
import panel from '@/assets/panel.jpeg';
export default {
    name: 'Home',
    data() {
        return {
            panel
        };
    }
}
</script>

<style scoped>
.content {
    display: flex;
    background-color: white; 
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    color:  black;
    width: 70%;
    height: fit-content;
    margin: auto;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.panel  {
    width: 100%;
    height: 20%;
    margin: auto;
    border-radius: 10px;
}
img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
}

</style>