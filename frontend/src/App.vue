<template>
  <div id="app">
    <Navbar />
    <PageFooter />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    PageFooter
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

<!--footer-->
.row{
    max-height: 600px;
    padding-bottom: 0px;
}
.copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
}
footer{
    background-color: #222222;
    display: flex;
    flex-direction: row;
}
footer h5{
    color: #D8D8D8;
    font-weight: 700;
    font-size: 1.2rem;
}
footer li{
    padding-bottom: 4px;
}
footer li a{
    font-size: 0.8rem;
    color: #999;
    text-decoration: none;
}
footer li a:hover{
    color: #D8D8D8;
}
footer .copyright a{
    color: black;
    height: 40px;
    width: 40px;
    background-color: white;
    display: inline-block;
    text-align: center;
    line-height: 38px;
    border-radius: 50%;
    transition: 0.3s ease;
    margin: 0 5px;
}
footer .copyright a:hover{
    color: white;
    background-color: burlywood;
}
footer p{
    color: white;
    font-size: 0.8rem;
}
.copyright p {
    margin-bottom: 0;
    flex: 1;
    text-align: center;
    font-size: 14px; /* Giảm kích thước chữ nếu cần */
    padding-right: 10px; /* Giảm khoảng cách giữa chữ và icon */
}
.copyright div {
    display: flex;
    align-items: center;
}
.copyright div a {
    margin-left: 8px; /* Giảm khoảng cách giữa các icon */
}
footer .copyright img{
    width: 40%;
    padding: 0 20px;
    background-color: white;
    
}
.logo {
    height: auto; 
    width: auto; 
    max-height: 50px;
    background-color: #fff;
}

.navbar .brand{
    color: burlywood;
    margin: 3px 5px;
    font-size: 1.3rem;
}

.small-img-group{
    display: flex;
    justify-content: space-between;
}
.small-img-col{
    flex-basis: 24%;
    cursor: pointer;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
  border: 0;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  padding: 20px;
  flex-wrap: wrap; 
}
.footer-item {
  margin: 0 15px;
}
#app > .footer {
  flex-shrink: 0;
}
.main-content {
  flex: 1;
}
html, body, #app {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


</style>