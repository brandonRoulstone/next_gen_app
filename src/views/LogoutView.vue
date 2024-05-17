<template lang="">
    <div class="height_100">
        <div class="container">
            <div class="card_log py-4 px-3">
                <div class="position_dir">
                    <i class="fa-solid fa-circle-exclamation fa-lg" style="color: #e90c0c;"></i>
                </div>
                <h3>Are you sure you want to logout</h3>
                <div class="options my-3">
                    <button class="btn style_to_logout px-4 py-2" @click="logOut()">Logout</button>
                    <router-link to="/dashboard"><button class="btn style_to_continue px-4 py-2">Continue</button></router-link>
                </div>
                <span class="small mdQ_color">Going forward with this action you will have to login again</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        logOut(){
          this.$store.dispatch('logout')
        }
    }
}
</script>
<style scoped>
    .height_100{
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column;
    }

    
    .card_log{
        border: 1px solid rgba(32, 32, 32, 0.185);
        border-radius: 20px;
        background: whitesmoke;
        width: 100%;
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .mdQ_color{
        color: rgb(251, 53, 53);
    }
    
    button{
        border: 1px solid rgba(32, 32, 32, 0.338);
    }

    .options{
        display: flex;
        justify-content: center;
        gap: 50px;
    }

    .position_dir{
        display: flex;
        justify-content: flex-end;
        position: absolute;
        left: 63.9%;
        top: 25.50%;
        transform: scale(160%);
    }
    i:hover::after{
        position: absolute;
        content: "You about to logout now?";
        font-size: .4rem;
        color: whitesmoke;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2rem;
        width: 9rem;
        left: 120%;
        top: 500%;
        border-radius: 10px;
        border-top-left-radius: 0px;
        background: red;
        animation-name: spanAcc;
        animation-duration: .45s;
    }

    @keyframes spanAcc {
        from{
            width: 0px;
        }
        to{
            width: 9rem;
        }
    }

    .style_to_logout{
        background: rgba(223, 15, 15, 0);
        color: rgb(0, 0, 0);
    }
    .style_to_logout:hover{
        background: rgb(228, 21, 21);
        color: white;
    }

    .style_to_continue{
        background: #8741d8;
        color: white;
    }
    .style_to_continue:hover{
        background: #4b2577;
    }


    @media (max-width: 540px) {
        .card_log{
            border: 1px solid rgba(32, 32, 32, 0.185);
            border-radius: 20px;
            background: none;
            width: 100%;
            height: 50vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .position_dir{
            left: 50%;
            top: 25.50%;
        }

        i::after{
            position: absolute;
            content: "You about to logout now?";
            font-size: .24rem;
            color: rgb(255, 255, 255);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            width: 4.8rem;
            left: 120%;
            top: 500%;
            border-radius: 10px;
            border-top-left-radius: 0px;
            background: red;
            animation-name: spanAcc;
            animation-duration: .45s;
        }

        @keyframes spanAcc {
            from{
                width: 0px;
            }
            to{
                width: 4.8rem;
            }
        }
    }
</style>