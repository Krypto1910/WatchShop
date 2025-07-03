<template>
    <!--Account-->
    <section class="my-5 py-5">
        <div class="row container mx-auto">
            <div class="text-center mt-3 pt-5 col-lg-6 col-md-12 col-sm-12">
                <h3 class="font-weight-bold">Account Info</h3>
                <hr class="mx-auto" width="400rem">
                <div class="account-info">
                    <div class="info">
                        <p>Name: <strong>Michael James</strong></p>
                        <p>Email: <strong>michael1997@gmail.com</strong></p>
                    </div>

                    <div class="flex items-center gap-4 mt-6">
                        <button class="btn btn-primary">Orders</button>
                        <button class="btn btn-secondary">Logout</button>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 col-md-12 col-sm-12">
                <form id="account-form">
                    <h3>Change Password</h3>
                    <hr class="mx-auto">
                    <div class="form-group">
                        <input type="password" class="form-control" id="account-password" name="password"
                            placeholder="Password" required>
                    </div>
                    <span class="form-group">
                        <input type="password" class="form-control" id="account-confirm-password" name="confirmPassword"
                            placeholder="Confirm Password" required>
                    </span>
                    <span class="form-group">
                        <input type="submit" class="btn" id="change-pass-btn" value="Change Password">
                    </span>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
#account-form {
    width: 50%;
    margin: 35px auto;
    text-align: center;
    padding: 20px;
}

#account-form input {
    margin: 5px auto;
}

#account-form #change-pass-btn {
    color: white;
    background-color: #006b3d;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

/* set limit button */
#account-form .btn,
#account-form input[type="submit"] {
    width: 100%;
    max-width: 300px;
    padding: 8px 0px;

}

.account-info #orders-btn,
#logout-btn {
    color: #006b3d;
    text-decoration: none;
}

.account-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.flex {
    display: flex;
    align-items: center;
    margin-top: 24px;
    gap: 16px;
    margin: auto;
    /* adds space between buttons */
}
.btn {
    background-color: #006b3d;
}
</style>