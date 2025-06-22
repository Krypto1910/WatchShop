<template>
    <!--Register-->
    <section class="my-5 py-5">
        <div class="container text-center mt-3 pt-5">
            <h2 style="color: rgb(0, 66, 37);" class="form-weight-bold">Register</h2>
            
        </div>

        <div class="mx-auto container">
            <form id="register-form" >
                <div class="form-group"> 
                                 
                    <input type="text" class="form-control" id="register-name" name="name" placeholder="Name">
                </div>
                <div class="form-group">  
                      
                    <input type="text" class="form-control" id="register-email" name="email" placeholder="Email">
                </div>
                <div class="form-group">  
                           
                    <input type="password" class="form-control" id="register-password" name="password" placeholder="Password">
                </div>
                <div class="form-group">  
                                 
                    <input type="password" class="form-control" id="register-confirm-password" name="confirmPassword" placeholder="Confirm Password">
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

export default {
    name: 'Register',
    data() {
        return {
            email: ref(''),
            password: ref('')
        };
    },
}
</script>

<style>
/*adjust for login and register page*/
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
/*Register*/
#register-form{
    width: 50%;
    margin: 5px auto;
    text-align: center;
    padding: 20px;
    border-top: 1px solid rgb(0, 66, 37, 0.3);
}
#register-form input{
    width: 50%;
    margin: 5px auto;
}
#register-form #register-btn{
    background-color: #006b3d;
    color: white;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
#register-form #login-url{
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