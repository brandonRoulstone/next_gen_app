import { toast } from 'vue3-toastify';
<template lang="">
    <div v-if="$cookies.get('role') === 'admin'">
        <div class="right_align_style h_100 py-3 my-3" v-if="openMod.open === true">
           
            <div class="modal_fixed container" id="modal">
                    
                <div class="justify_container">

                    <label for="userId" class="text-white">User ID</label>
                    <input type="text" class="w-100" v-model="user_id" id="userId">
                    
                    <label for="taskId" class="text-white">task ID</label>
                    <input type="text" class="w-100 mt-2" v-model="taskId" id="taskId">

                </div>
                <button @click="closeModal()" class="close_btn btn mt-2 mx-1">
                    <span style="color:red">Send</span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </button>
                <button @click="sendTaskToPeer()" class="close_btn btn mt-2 mx-1">
                    <span style="color:green">Send</span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="green" class="bi bi-send" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                    </svg>
                </button>

            </div>
            
        </div>
        <button class="send" @click="openModal()" v-if="openMod.open === false">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
            </svg>
        </button>
        <button class="send" @click="alertification()" v-else disabled>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
            </svg>
        </button>
    </div>
</template>
<script>
import { toast } from "vue3-toastify";
export default {
    data(){
        return {
            user_id : 0,
            taskId: 0,

            openMod : {
                clicked: false,
                open: false,
                closed: false
            },
        }
    },
    methods: {
        sendTaskToPeer(){
            this.$store.dispatch('sendTask', this.$data)
        },
        closeModal(){
            this.openMod.open = false
        },
        openModal(){
            try {
            this.openMod.clicked = true
                if(this.openMod.clicked === true){
                    this.openMod.open = true
                }
            } catch(error){
                console.log(error);
                throw new Error(error)
            }
        },
        alertification(){
            toast.danger("Action prohibited please close popup",{
                position: toast.POSITION.TOP_CENTER,
            })
        }
    },
}
</script>
<style scoped>
    .right_align_style{
        border: 1px solid rgb(6, 6, 6);
        border-radius: 10px;
        background-color: #0f0f0f;
        position: fixed;
        right: 3%;
        top: 8%;
        animation-name: toastify;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
    }

    @keyframes toastify {
        from{
            transform: translateY(-30px);
            opacity: 0;
        }
        to{
            transform: translateY(0px);
            opacity: 10;
        }
    }
    
    .justify_container{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .send{
        background: none;
        border: none;
    }
</style>