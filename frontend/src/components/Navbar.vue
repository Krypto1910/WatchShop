<template>
    <!--Header-->
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top shadow-sm"
        style="background-color: #004225  !important;">
        <div class="container-fluid" style="padding-right: 0px;">
            <div class="row w-100 align-items-center">
                <!-- Logo bên trái -->
                <div class="col-4 d-flex align-items-center" style="padding-left: 5%">
                    <img class="logo me-2" :src="logoUrl" alt="NeoStyle Logo"
                        style="width: 40px; height: 40px; background-color: white;">
                    <h2 style="color: white;" class="brand mb-0">NeoStyle</h2>
                </div>

                <!-- Search box giữa -->
                <div class="col-4 d-flex justify-content-center">
                    <form class="d-flex" style="max-width: 100%; width: 100%;">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button style="color: white" class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>

                <!-- Nav links bên phải -->
                <div class="col-4" style="padding-right: 5%;">
                    <div class="d-flex justify-content-end">
                        <ul class="navbar-nav align-items-center gap-1 flex-row mb-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                            <li class="nav-item d-flex gap-1">
                                <a class="nav-link d-flex align-items-center" href="#" style="padding: 0 5px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 576 512"
                                        fill="currentColor">
                                        <path
                                            d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48l45.5 0c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5L488 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-288.3 0c-11.5 0-21.4-8.2-23.6-19.5L170.7 288l288.5 0c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32l-411 0C111 12.8 91.6 0 69.5 0L24 0zM131.1 80l389.6 0L482.4 222.2c-2.8 10.5-12.3 17.8-23.2 17.8l-297.6 0L131.1 80zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
                                    </svg>
                                </a>

                                <a class="nav-link" href="#"><i class="fas fa-user"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import logoUrl from '@/assets/logo_removebg.png';
export default {
    name: 'Home',
    data() {
        return {
            logoUrl
        };
    }
}
</script>

<style scoped>
.navbar-nav .nav-link {
    white-space: nowrap;
}

.navbar .btn {
    color: white;
    border: 2px solid white;
    font-weight: 600;

}

.navbar .btn:hover {
    background-color: bisque;
    color: black !important;
}

.navbar .nav-link {
    font-weight: 600;
}


.site-footer {
    background-color: #1a1a1a;
    color: white;
    padding: 20px;
    text-align: center;
    width: 100%;
}
</style>
