<template lang="">
    <div class="chatUI">
        
        <div class="container mt-5">

            <div class="w-100 h_100">

                <div class="my_chat_section px-2">

                    <div class="my_chat_bubble mt-5" v-for="chats in $store.state.globalChat" v-bind:key="chats.comment_id">
                        <div class="content-placeholder">
                            <button class="mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg>
                            </button>
                            <button class="mx-2" @click="deleteMessage(chats.comment_id)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                </svg>
                            </button>
                            <p class="smaller mx-2 rounded-3">{{ chats.timestamp }}</p>
                        </div>

                        <div class="text-start overflow-s px-1">
                            <p>{{ chats.content }}</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
        <div class="max_out_width mt-4 pt-3">
            <input type="text" class="chat_box" placeholder="chat to your peers" v-model="content" />
            <button class="btn mx-3" @click="chatFn()">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-send" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                </svg>
            </button>
            <div class="d-flex justify-content-center">
                <hr class="bg-white w-50" />
            </div>
            <p class="text-white animate">Powered by MotionZ <span>.</span> <span>.</span> <span>.</span></p>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return {
            content: ""
        }
    },
    computed: {
        chatFunc(){
            this.$store.dispatch('chatBox')
        }
    },
    methods:{
        chatFn(){
            this.$store.dispatch('chatFn', this.$data)
        },
        deleteMessage(comment_id){
            this.$store.dispatch('deleteMessage', comment_id)
        }
    },
    mounted(){
        this.chatFunc
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
        background: rgb(232, 231, 234);
    }

    .overflow-s{
        max-height: 4.7rem !important;
        overflow: scroll;
        width: 50%;
    }

    .chat_box{
        width: 70%;
        height: 4.5rem;
        border-radius: 20px;
        border: 1px solid rgba(0, 0, 0, 0.312);
    }

    .smaller{
        font-size: x-small;
        background: rgb(90, 90, 90);
        width: 60%;
        text-align: left;
        height: 2rem;
        display: flex;
        justify-content: center;
        color: rgb(255, 255, 255);
        align-items: center;
    }

    .my_chat_section{
        background: rgb(232, 231, 234);
        color: rgb(0, 0, 0);
        height: 39.3rem;
        max-height: 40rem;
        overflow: scroll;
        width: 100%;
    }

    .content-placeholder{
        display: flex;
        justify-content: center;
        /* align-items: center; */
        gap: .5rem;
        height: 100%;
        width: 50%;
        flex-flow: column;
    }

    .my_chat_bubble{
        height: 6rem;
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: first baseline;
        background: rgb(12, 12, 33);
        color: whitesmoke;
    }

    .my_chat_bubble button {
        background: rgba(97, 63, 208, 0.144);
        border: none;
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
    }

    .max_out_width{
        width: 100%;
        background: rgb(12, 12, 33);
    }

    .my_chat_bubble{
        text-align: end;
        border-radius: .8rem;
        border-top-left-radius: 0px;
    }

    .h_100{
        min-height: 30rem;
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 5rem;
    }


</style>