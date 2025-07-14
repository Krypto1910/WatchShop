<template>
    <!--Register-->
    <section class="my-5 py-5">
        <div class="container text-center mt-3 pt-5">
            <h2 style="color: rgb(0, 66, 37);" class="form-weight-bold">Register</h2>
            <hr class="mx-auto">
        </div>

        <div class="mx-auto container">
            <form id="register-form" @submit.prevent="handleSubmit">
                <!-- Thông báo lỗi / thành công -->
                <div v-if="error" style="color: red;">{{ error }}</div>
                <div v-if="success" style="color: green;">{{ success }}</div>
                <div class="form-group mt-4">
                    <input type="text" class="form-control" id="register-name" v-model="name" placeholder="Name">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="register-email" v-model="email" placeholder="Email">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="register-password" v-model="password"
                        placeholder="Password">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="register-confirm-password" v-model="confirmPassword"
                        placeholder="Confirm Password">
                </div>
                <div class="form-group">
                    <input type="submit" class="btn" id="register-btn" value="Submit">
                </div>
                <div class="form-group">
                    <router-link tag="a" id="register-url" to="/login" class="btn">
                        Do you have an account? Login
                    </router-link>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: 'Register',
    setup() {
        const name = ref('');
        const email = ref('');
        const password = ref('');
        const confirmPassword = ref('');
        const error = ref('');
        const success = ref('');

        const handleSubmit = async (e) => {
            e.preventDefault();

            // Kiểm tra đơn giản
            if (!name.value || !email.value || !password.value || !confirmPassword.value) {
                error.value = 'Please fill in all fields.';
                return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            if (!emailRegex.test(email.value)) {
                error.value = 'Invalid email format.';
                return;
            }

            if (password.value !== confirmPassword.value) {
                error.value = 'Passwords do not match.';
                return;
            }
            
            try {
                // Gửi dữ liệu đến API đăng ký
                const response = await axios.post(`${import.meta.env.VITE_API_URI}/customer/register`, {
                    name: name.value,
                    email: email.value,
                    password: password.value
                });

                if(response.data.success){
                    Swal.fire({
                        icon: "success",
                        text: response.data.message || "Registration successful!",
                        title: "Success"
                    })
                    success.value = 'Registration successful!';
                    error.value = '';
                }
            } catch (err) {
                error.value = err.response?.data?.message || 'Registration failed.';
                success.value = '';
            }
        };

        return {
            name,
            email,
            password,
            confirmPassword,
            handleSubmit,
            error,
            success
        };
    }
}
</script>

<style scoped>
/*adjust for login and register page*/
.form-control {
    font-weight: 400;
    font-size: medium;
}

.form-control::placeholder {
    color: rgb(155, 155, 155);
}

.form-group {
    margin-bottom: 8px;

}

/*Register*/
#register-form {
    width: 50%;
    margin: 5px auto;
    text-align: center;
    padding: 20px;
}

#register-form input {
    width: 50%;
    margin: 5px auto;
}

#register-form #register-btn {
    background-color: #006b3d;
    color: white;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

#register-form #login-url {
    color: rgb(0, 66, 37);
}

/* set limit form */
#register-form .form-control {
    width: 100%;
    max-width: 300px;
    padding: 6px 10px;

}

/* set limit button */
#register-form .btn,
#register-form input[type="submit"] {
    width: 100%;
    max-width: 300px;
    padding: 8px 0px;

}
</style>