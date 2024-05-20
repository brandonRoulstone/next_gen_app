<template lang="">
    <nav class="d-flex py-4 w-100 bg-balck" id="usefulNav">
        <ul class="list-unstyled py-5 targ">
            <li class="li_targ">
                <router-link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8841d8" class="bi bi-house" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                    </svg>
                </router-link>
            </li>
            <li class="li_targ">
                <router-link to="/dashboard">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8841d8" class="bi bi-person" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                </router-link>
            </li>
            <li class="li_targ">
                <router-link to="/logout">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8841d8" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
                        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
                    </svg>
                </router-link>
            </li>
        </ul>
    </nav>
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
    #usefulNav{
        position: fixed;
        background: #f2efef;
        z-index: 1000 !important;
        bottom: 0;
        height: 4rem !important;
        width: 100% !important;
    }
    #usefulNav::before{
        content: "";
        position: absolute;
        border-top: 3px solid rgb(162, 161, 161);
        width: 50% !important;
        top: 0;
        left: 25%;
    }

    .targ{
        display: flex !important;
        justify-content: center !important;
    }

    .targ li{
        z-index: 3000;
        position: absolute;
        top: 30%;
    }

    .targ li:nth-child(1):active{
        box-shadow: inset 3px 3px 30px 3px rgba(0, 0, 0, 0.877);
        transition: all .4s;
        transform: scale(120%);
        background: white;
    }

    .targ li:nth-child(2):active{
        box-shadow: inset 3px 3px 30px 3px rgba(0, 0, 0, 0.877);
        transition: all .4s;
        transform: scale(120%);
        background: white;
    }

    .targ li:nth-child(3):active{
        box-shadow: inset 3px 3px 30px 3px rgba(0, 0, 0, 0.877);
        transition: all .4s;
        transform: scale(120%);
        background: white;
    }

    .targ li:nth-child(1){
        z-index: 3000;
        position: absolute;
        left: 10.3%;
        transform: scale(130%);
    }

    .targ li:nth-child(2){
        z-index: 3000;
        position: absolute;
        left: 46.3%;
        transform: scale(130%);
    }

    .targ li:nth-child(3){
        z-index: 3000;
        position: absolute;
        left: 79.3%;
        transform: scale(130%);
    }

    .li_targ{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f5f5f5;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        box-shadow: .5px .5px 2.5px .5px rgba(0, 0, 0, 0.175);
    }

</style>