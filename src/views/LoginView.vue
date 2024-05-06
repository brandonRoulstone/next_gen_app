<template lang="">
    <div class="adjust_height">
        <div class="mt-5">
            <div class="w-100">
                <div class="p-4 p-md-5 border rounded-3 bg-body-tertiary">

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
                    <div class="form-floating mb-3" v-if="this.user_email === 'admin465@gmail.com'">
                        <input type="password" class="form-control" id="floatingUserRole" v-model="user_role" placeholder="User identity">
                        <label for="floatingUserRole">Identification</label>
                    </div>

                    <button class="w-100 btn btn-lg btn-primary" type="submit" @click="login()">Login</button>
                    <hr class="my-4">
                    <small class="text-body-secondary">Dont have an acc <router-link to="/signUp">click here</router-link></small>
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
        checkRole(){
            let role = this.$store.state;
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