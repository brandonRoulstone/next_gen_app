<template lang="">
    <div class="adjust_height container">
        <div class="adjust_margin">
            <h4><div class="outerDot"><div class="dot"></div></div> Better than your average todo list</h4>
            <h2>Forget fancy Task management</h2>
            <p>Just jot down your todos in a simpler way!</p>
        </div>
        <div class="mt-5">
            <div class="w-100">
                <div class="p-4 p-md-5 border rounded-3 bg-body-tertiary">

                    <div class="form-floating mb-3">
                        <input type="email" class="form-control input_lestyle" id="floatingInput" v-model="user_email" placeholder="name@example.com">
                        <label for="floatingInput">Email address</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="password" class="form-control input_lestyle" id="floatingPassword" v-model="user_password" placeholder="Password">
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="form-floating mb-3" v-if="this.user_email !== 'admin465@gmail.com'">
                        <input type="password" class="form-control input_lestyle" id="floatingUserRole" v-model="user_role" placeholder="User identity" readonly>
                        <label for="floatingUserRole">Identification</label>
                    </div>
                    <div class="form-floating mb-3" v-if="this.user_email === 'admin465@gmail.com'">
                        <input type="password" class="form-control input_lestyle" id="floatingUserRole" v-model="user_role" placeholder="User identity">
                        <label for="floatingUserRole">Identification</label>
                    </div>

                    <div class="hide_overflow">
                        <button class="w-100 btn btn_styled py-2" type="submit" @click="login()">Login</button>
                    </div>
                    <hr class="my-4">
                    <small class="text-body-secondary">Dont have an acc <router-link to="/signUp" class="themify">click here</router-link></small>
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
        min-width: 100vw;
        gap: 5rem;
        cursor: none;
    }

    p {
        color: #7a7a7b;
    }

    .themify{
        color: #8841d8;
    }

    .input_lestyle{
        border-radius: 10px;
        background-color: #ffffff !important;
        border: 1px solid rgba(28, 28, 28, 0.446);
        width: 100%;
    }

    .hide_overflow{
        overflow: hidden;
    }

    .btn_styled{
        color: #8841d8;
        border: 1px solid rgb(117, 70, 198) !important;
    }
    .btn_styled:hover{
        color: #ffffff;
        background-color: #8841d8;
    }

    .outerDot{
        border: 1px solid #8841d8;
        width: 1.12rem;
        height: 1.12rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }

    .dot{
        height: .6rem;
        width: .6rem;
        background: #8841d8;
        border-radius: 50%;
    }

    .dot::after{
        content: "";
        position: absolute;
        top: 26%;
        display: flex;
        justify-content: center;
        height: 6.58rem;
        width: 17rem;
        background-image: url("https://cdn-images.imagevenue.com/f1/ba/3e/ME18BMIA_o.png");
        box-shadow: .2px .2px 10px .2px rgb(222, 222, 222);
        border-radius: 20px;
        border-bottom-left-radius: 0px;
        animation-name: spanAcc;
        animation-duration: .4s;
    }

    @keyframes spanAcc {
        from{
            width: 0rem;
        }
        to{
            width: 17rem;
        }
    }

    @media (max-width: 790px) {
        .adjust_height{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            min-height: 100vh;
            min-width: 100vw;
            gap: 1rem;
            margin-top: 1rem;
            cursor: none;
        }
        .dot{
            display: none;
        }
        .adjust_margin{
            margin-top: 4.5rem;
        }
    }
</style>