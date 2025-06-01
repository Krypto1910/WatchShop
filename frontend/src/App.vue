<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');

* {
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #F5F5F5;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
}

h2 {
  font-size: 1.4rem;
  font-weight: 400;
}

h3 {
  font-size: 1.5rem;
  font-weight: 800;
}

h4 {
  font-size: 1.2rem;
  font-weight: 400;
}

h5 {
  font-size: 1rem;
  font-weight: 400;
}

h6 {
  color: #D8D8D8;
}


.nav-buttons {
  margin-left: 50%;
}

.navbar-nav {
  align-items: center;
  /* Căn giữa theo chiều dọc */
  display: flex;
}


.navbar {
  font-size: 16px;
  padding: 0.6rem 0 !important;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.navbar-light .navbar-nav .nav-link {
  padding: 0 15px;
  color: white;
  transition: 0.1s ease;
}

.navbar-light .navbar-nav .nav-link {
  padding: 0 10px;
}

.navbar-light .navbar-nav .nav-link:hover,
.navbar i:hover,
.navbar-light .navbar-nav .nav-link:active,
.navbar i:hover {
  color:  bisque;
  background-color: transparent;
}

.navbar a {
  color: white;
}

.navbar i {
  font-size: 1.2rem;
  padding: 0 0.7px;
  transition: 0.1s ease;
  cursor: pointer;
  margin-left: 5px;
}

.navbar-nav .nav-item {
  border-right: 1px solid #ccc;
  /* Thêm viền giữa các mục */
}

.navbar-nav .nav-icon {
  padding-left: 10px;
}

.navbar-nav .nav-item {
  border-right: 1px solid #ccc;
  padding: 0 2px; /* Giảm khoảng cách ngang */
  margin-left: none;
}

/* Xóa viền phải của phần tử cuối cùng */
.navbar-nav .nav-item:last-child {
  border-right: none;
}


@media only screen and (max-width:990px) {
  .nav-buttons {
    margin: 10px;

  }

  .nav-buttons ul {
    margin: 1rem;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }

  .nav-buttons ul .fas {
    margin: 20px 5px 10px 20px;
  }

  .navbar-nav .nav-item {
    border: none;
  }
}
</style>