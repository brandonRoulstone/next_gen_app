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
                    <div class="d-flex justify-content-evenly w-100 h-25 align-items-center">
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

        <!-- <div class="modal_fixed container-fluid" id="modal" v-if="openMod.open === true" tabindex="-1" data-bs-target="#staticBackdrop">
            <button @click="closeModal()" class="close_btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </button>
        </div> -->


        <div class="right_float">
            <div class="flex_right_align container">
                <div class="mb-2 d-flex justify-content-evenly">
                    <input type="text" class="rounded-3" placeholder="search" v-model="seachInput.search" @change="searchFn()"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search mx-2 border rounded-3" viewBox="0 0 16 16">
                       <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </div>
                <div class="over_scroll mb-3 border border-3">
                    <div v-for="tasks in searchFn()">
                        <div class="small">
                            <p class="fs-6">{{ tasks.taskname }}</p>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="right_align_style py-3">
                    <h5 class="text-white">Add new task</h5>
                    <!-- <button class="btn" @click="openModal()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                        </svg>
                    </button> -->
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                        </svg>
                    </button>

                    <!-- Modal -->
                    <div class="modal fade modal_bounce" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="close_btn" data-bs-dismiss="modal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="right_align_style py-3">
                    <h5 class="text-white">Company Blog</h5>
                    <button class="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import draggable from 'vuedraggable';
export default {
    data(){
        return {
            seachInput: {
                search: ''
            },
            openMod : {
                clicked: false,
                open: false,
                closed: false
            },
            taskname: '',
            taskdeadline: '',
            completed: '',
            created: ''
            
        }
    },
    components : {
        draggable
    },
    methods : {
        fetchTasks(){
            this.$store.dispatch('fetchTasks')
        },
        deleteTask(taskId){
            this.$store.dispatch('deleteTask', taskId)
        },
        searchFn(){
            try {
                const arrOfTasks = this.$store.state.tasks;
                let inp = this.seachInput.search;
                let result = arrOfTasks.filter(t => {
                    return t.taskname.toLowerCase().includes(inp.toLocaleLowerCase())
                })
                return result
            } catch (error){
                console.log(error);
                throw new Error(error)
            }
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
        closeModal(){
            this.openMod.open = false
        }
    },
    mounted(){
        this.fetchTasks()
        this.searchFn()
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

    .modal_bounce{
        animation-name: bounce;
        animation-duration: 0.5s;
        /* box-shadow: 10px 100px 1000px 10px rgb(158, 99, 158); */
    }

    .close_btn{
        border: none;
        background-color: rgba(255, 255, 255, 0);
        height: 35px;
        width: 35px;
        position: absolute;
        top: 1%;
        right: 1%;
    }

    @keyframes bounce {
        0%{
            transform: scale(100%);
        }
        25%{
            transform: scale(108%) translateY(-30px);
        }
        50%{
            transform: scale(105%) translateY(0px);
        }
        75%{
            transform: scale(108%) translateY(-30px);
        }
        100%{
            transform: scale(100%);
        }
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
        background: linear-gradient(rgb(247, 247, 247), rgb(254, 254, 254));
        /* resize: both;
        overflow: auto; */
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
        animation-duration: 0.3s;
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
        animation-duration: 0.3s;
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
        background: rgb(255, 255, 255);
        display: flex;
        justify-content: center;
        width: 60%;
        gap: 70px;
        align-items: center;
        position: fixed;
        top: 8.091%;
        box-shadow: 0px 1px 4px 0px rgba(23, 22, 22, 0.228);
    }

    .nav_px{
        text-decoration: none;
        color: rgb(0, 0, 0);
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

    .over_scroll{
        overflow-y: scroll;
        max-height: 100px;
    }

    .inner_block{
        background: white;
        border-radius: 5px;
        /* resize: both;
        overflow: auto; */
    }

    .right_align_style{
        border: 1px solid whitesmoke;
        border-radius: 10px;
        background-color: rgb(131, 86, 255);
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