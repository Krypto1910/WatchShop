<template>
    <!--Login-->
    <section class="my-5 py-5">
        <div class="container text-center mt-3 pt-5" id="container">
            <h2 style="color: rgb(0, 66, 37);" class="form-weight-bold">Login</h2>
        </div>

        <div class="mx-auto container">
            <form id="login-form">
                <div class="form-group">
                    <input type="text" class="form-control" id="login-email" name="email" placeholder="Email">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="login-password" name="password"
                        placeholder="Password">
                </div>
                <div class="form-group">
                    <input type="submit" class="btn" id="login-btn" value="Submit">
                </div>
               
                <div class="form-group">
                    <router-link tag="a" id="register-url" to="/register" class="btn">
                        Don't have account? Register
                    </router-link>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';


export default {
    name: 'Login',
    data() {
        return {
            email: ref(''),
            password: ref('')
        };
    },
   
}
</script>

<style >
.form-control {
    font-weight: 400;
    font-size: medium;
}
.form-control::placeholder {
    color: #dbdbdb;
}
.form-group{
    margin-bottom: 8px;
   
}
/*login*/
#app {
   padding-top: 8rem;
}
#login-form {
    width: 50%;
    margin: 5px auto;
    text-align: center;
    padding: 20px;
    border-top: 1px solid rgb(0, 66, 37, 0.3);
}

#login-form input {
    width: 50%;
    margin: 5px auto;
}

#login-form #login-btn {
    background-color: #006b3d;
    color: white;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

#login-form #register-url {
    color: rgb(0, 66, 37) ;
}

/* set limit form */
#login-form .form-control {
    width: 100%;
    max-width: 300px;
    padding: 6px 10px;

}

/* set limit button */
#login-form .btn,
#login-form input[type="submit"] {
    width: 100%;
    max-width: 300px;
    padding: 8px 0px;

}


</style>