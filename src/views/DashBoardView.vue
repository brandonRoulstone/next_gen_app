<template lang="">
    <div id="align_to_center">

        <div class="left_float">
            <div class="flex_left_align container">  
               <div class="bs_card_flexed">
                    <div class="inner_block mx-3 py-4">
                        inner_block mx-3 py-4
                    </div>
                    <div class="inner_block mx-3 py-4">
                        inner_block mx-3 py-4
                    </div>
                    <div class="inner_block mx-3 py-4">
                        inner_block mx-3 py-4
                    </div>
                    <div class="inner_block mx-3 py-4">
                        inner_block mx-3 py-4
                    </div>
               </div>
               <div class="bs_card_flexed">
                    <div class="inner_block mx-3 py-4">
                        inner_block mx-3 py-4
                    </div>
                    <div class="inner_block mx-3 py-4">
                        inner_block mx-3 py-4
                    </div>
                    <div class="inner_block mx-3 py-4">
                        inner_block mx-3 py-4
                    </div>
                    <div class="inner_block mx-3 py-4">
                        inner_block mx-3 py-4
                    </div>
               </div>
            </div>  
        </div>

        <div class="flex_align container-fluid">
            <nav class="justify_to_fixed_position">
                <router-link to="/" class="nav_px">My Colleagues</router-link>
                <router-link to="/" class="nav_px">Collaboration</router-link>
                <router-link to="/" class="nav_px">Find A job</router-link>
                <router-link to="/" class="nav_px">Recent Tasks</router-link>
                <router-link to="/" class="nav_px">Software version</router-link>
            </nav>

            <div v-for="task in $store.state.tasks" v-bind:key="task.taskId">
                <div class="w- card_rem mb-2">
                    <div class="container mt-3">
                        <h5>{{task.taskname}}</h5>
                    </div>
                    <div>
                        <p>{{task.created}}</p>
                    </div>
                    <div class="d-flex justify-content-evenly w-100">
                        <div>
                            <p>{{task.taskdeadline}}</p>
                        </div>
                        <div v-if="task.completed === 1">
                            <input type="checkbox" class="" id="checkbox" checked v-modal="task.completed"/>
                        </div>
                        <div v-else>
                            <input type="checkbox" class="" id="checkbox" v-modal="task.completed"/>
                        </div>
                        <button class="delete" @click="deleteTask(task.taskId)">
                            <i class="fa-solid fa-trash fa-lg" style="color: #9433ee;"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <div class="right_float">
            <div class="flex_right_align container">
                Important things
            </div>
        </div>

    </div>
</template>
<script>
export default {
    methods : {
        fetchTasks(){
            this.$store.dispatch('fetchTasks')
        },
        deleteTask(taskId){
            this.$store.dispatch('deleteTask', taskId)
        }
    },
    mounted(){
        this.fetchTasks()
    }
}
</script>
<style scoped>
    #align_to_center{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        flex-direction: row;
    }

    .flex_align{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        flex-direction: column;
        border: 1px solid rgba(130, 130, 255, 0.24);
    }

    .left_float, .right_float{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        min-width: 20vw;
        box-shadow: 1px 10px 17px 10px rgba(34, 34, 35, 0.366);
    }

    .card_rem{
        width: 650px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid rgb(255, 255, 255);
        box-shadow: 3px 2px 10px 2px rgba(0, 0, 0, 0.307);
        border-radius: 10px;
        background: linear-gradient(rgb(187, 255, 254), rgb(149, 165, 246));
    }


    #checkbox {
        appearance: none;
        width: 20px;
        height: 20px;
        border: 1px solid #9433ee;
        border-radius: 5px;
        background-color: transparent;
        display: inline-block;
        position: relative;
        margin-right: 10px;
        cursor: pointer;
    }

    .delete {
        appearance: none;
        border-radius: 5px;
        display: inline-block;
        position: relative;
        cursor: pointer;
    }

    #checkbox:before {
        content: "";
        background-color: #3b0582;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        width: 10px;
        height: 10px;
        border-radius: 3px;
        transition: all 0.3s ease-in-out;
    }

    #checkbox:checked:before {
        transform: translate(-50%, -50%) scale(1);
    }

    #checkbox-label {
        font-size: 18px;
        color: #fff;
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
    }

    #checkbox:hover::after{
        position: absolute;
        content: "task completion";
        display: flex;
        justify-content: center;
        height: 50px !important;
        border-radius: 5px;
        text-align: center;
        color: white;
        width: 100px !important;
        background-color: #9433ee;
        right: -180%;
        bottom: 115%;
        animation-name: opx;
        animation-duration: 0.6s;
    }

    .delete{
        background: none;
        border: none;
    }

    .delete:hover::after{
        position: absolute;
        content: "Delete";
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px !important;
        border-radius: 5px;
        text-align: center;
        color: white;
        width: 100px !important;
        background-color: #9433ee;
        right: -180%;
        bottom: 115%;
        animation-name: opx;
        animation-duration: 0.6s;
    }

    @keyframes opx {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0px);
        }
    }


    .justify_to_fixed_position{
        height: 40px;
        background: rgb(90, 79, 212);
        display: flex;
        justify-content: center;
        width: 60%;
        gap: 70px;
        align-items: center;
        position: fixed;
        top: 7.1%;
    }

    .nav_px{
        text-decoration: none;
        color: whitesmoke;
        font-weight: bold;
    }

    .bs_card_flexed{
        height: 300px;
        width: auto;
        background: rgb(93, 26, 194);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        border-radius: 5px;
    }

    .inner_block{
        background: white;
        border-radius: 15px;
        /* resize: both;
        overflow: auto; */
    }


    @media (max-width: 998px) {
        #align_to_center{
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            flex-direction: column;
        }
    }
</style>