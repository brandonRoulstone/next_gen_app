<template lang="">
    <div class="adjust_height">
        <div class="mt-5">
            <div class="w-100">
                <div class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingName" v-model="user_name" placeholder="John">
                        <label for="floatingName">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" v-model="user_email" placeholder="name@example.com">
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" v-model="user_password" placeholder="Password">
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingUserRole" v-model="user_role" placeholder="User identity" readonly>
                        <label for="floatingUserRole">Identification</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingNumber" v-model="user_phoneNo" placeholder="Contact details">
                        <label for="floatingNumber">Phone no.</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingNumber" v-model="user_img" placeholder="Contact details">
                        <label for="floatingNumber">Profile Image</label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit" @click="signUp()">Create Acc</button>
                    <hr class="my-4">
                    <small class="text-body-secondary">Already have an acc <router-link to="/login">click here</router-link></small>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            user_name : '',
            user_role: 'user', // set in db as a default user
            user_email: '',
            user_password: '',
            user_phoneNo: '',
            user_img: ''
        }
    },
    methods : {
        login(){
            this.$store.dispatch('login', this.$data)
        },
        signUp(){
            this.$store.dispatch('signUp', this.$data)
        }
    },
    mounted(){

    }
}
</script>
<style scoped>
    .adjust_height{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
</style>