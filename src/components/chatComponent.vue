<template lang="">
    <div class="chatUI">
        <h1>Global chat UI</h1>

        <div class="w-100 h_100">

            <div class="users_chat_section px-2 py-1">
                <div class="users_chat_bubble">
                    hello, copy and delete this task plase bro you will win samsung galaxy.
                </div>
            </div>

            <div class="my_chat_section px-2 py-1">
                <div class="my_chat_bubble">
                    nice to meet you this makes no sense bruh tf u is bro
                </div>
            </div>

        </div>
        
        <input type="text" class="chat_box" placeholder="chat to your peers"/>
    </div>
</template>
<script>
export default {
    data(){
        return {
            chatData: ""
        }
    },
    computed: {
        chatFn(){
            
        }
    }
}
</script>
<style scoped>
    .chatUI{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        flex-flow: column;
        width: 100%;
    }

    .chat_box{
        position: fixed;
        bottom: 1%;
        width: 50%;
        height: 5rem;
        border-radius: 20px;
        border: 1px solid rgba(0, 0, 0, 0.312);
    }

    .users_chat_section, .my_chat_section{
        background: rgb(232, 231, 234);
        color: rgb(0, 0, 0);
        height: 100vh;
        width: 50%;
    }

    .users_chat_bubble{
        text-align: start;
        border-radius: 1rem;
        border-top-left-radius: 0px;
        background: blueviolet;
    }

    .my_chat_bubble{
        text-align: end;
        border-radius: 1rem;
        border-top-right-radius: 0px;
    }

    .h_100{
        min-height: 30rem;
        display: flex;
        justify-content: center;
        width: 100%;
        /* gap: 19rem; */
    }
</style>