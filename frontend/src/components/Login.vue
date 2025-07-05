<template>
    <!--Login-->
    <section class="my-5 py-5">
        <div class="container text-center mt-3 pt-5" id="container">
            <h2 style="color: rgb(0, 66, 37);" class="form-weight-bold">Login</h2>
            <hr class="mx-auto">
        </div>

        <div class="mx-auto container">
            <form id="login-form" @submit.prevent="handleLogin">
                <div class="form-group">
                    <input type="email" v-model="email" class="form-control" id="login-email" name="email" placeholder="Email" required>
                </div>
                <div class="form-group">
                    <input type="password" v-model="password" class="form-control" id="login-password" name="password" placeholder="Password" required>
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
            <p v-if="error" style="color:red">{{ error }}</p>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

function handleLogin() {
  if (email.value === 'test@example.com' && password.value === '123456') {
    localStorage.setItem('auth', 'true');
    router.push('/account');
  } else {
    error.value = 'Email or password is incorrect';
  }
}

</script>

<style scoped>
.form-control {
    font-weight: 400;
    font-size: medium;
}
.form-control::placeholder {
    color: rgb(155, 155, 155);
}
.form-group{
    margin-bottom: 8px;
}

/*login*/
#login-form {
    width: 50%;
    margin: 5px auto;
    text-align: center;
    padding: 20px;

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