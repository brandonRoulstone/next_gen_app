<template lang="">
    <div id="align_to_center" v-if="$cookies.get('jwt')">

        <div class="left_float">
            <div class="flex_left_align container">  
               <div class="bs_card_flexed gap-3">
                    <div class="inner_block my-3 mx-1 py-3" v-for="user in $store.state.users" v-bind:key="user.user_id">
                        <div>
                            <img src="https://cdn-images.imagevenue.com/30/f2/c5/ME18B51X_o.png" :alt="user.user_name" class="img img-fluid image_height container-fluid mx-1" />
                            <div class="mt-2 text-center" v-if="$cookies.get('role') === 'admin'">
                                <i class="fa fa-pencil fa-lg" style="color: #8741d8; margin-right:10px;" />
                                <i class="fa-solid fa-trash-can fa-lg" style="color: #9433ee;"></i>
                            </div>
                        </div>
                       <div class="container-fluid">
                            <span class="small">User ID : <span style="color:red">{{user.user_id}}</span></span>
                            <br />
                            <h5>{{user.user_name}}</h5>
                            <p>{{user.user_phoneNo}}</p>
                       </div>
                    </div>
               </div>
            </div>  
        </div>

        <div class="flex_align container-fluid">

            <div class="scrollable_xlg py-3 px-3 mt-4" v-if="$cookies.get('role') === 'admin'">
                <div v-for="task in $store.state.tasks" v-bind:key="task.taskId">

                    <div class="card_rem mb-2">

                        <div class="container mt-3 task_Container">
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
                                <input type="checkbox" id="checkbox" @click="completeTask()" checked v-modal="task.completed"/>
                            </div>
                            <div v-else>
                                <input type="checkbox" id="checkbox" @click="completeTask()" v-modal="task.completed"/>
                            </div>
                            <button class="delete" @click="deleteTask(task.taskId)">
                                <i class="fa-solid fa-trash-can fa-lg" style="color: #9433ee;"></i>
                            </button>
                            <button class="edit" data-bs-toggle="modal" :data-bs-target="'#staticBackdrop'+task.taskId">
                                <i class="fa-solid fa-pencil fa-lg" style="color: #9433ee;"></i>
                            </button>
                        </div>
                        <div class="modal fade" :id="'staticBackdrop'+task.taskId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="input-group flex-nowrap">
                                            <span class="input-group-text w-25" id="addon-wrapping">Task name</span>
                                            <input v-model="taskname" type="text" class="form-control" placeholder="Task name" aria-label="Task name" aria-describedby="addon-wrapping">
                                        </div>
                                        <div class="input-group flex-nowrap mt-2">
                                            <span class="input-group-text w-25" id="addon-wrapping">Due date</span>
                                            <input v-model="taskdeadline" type="text" class="form-control" placeholder="Task due date" aria-label="Task due date" aria-describedby="addon-wrapping">
                                        </div>
                                        <div class="input-group flex-nowrap mt-2">
                                            <span class="input-group-text w-25" id="addon-wrapping">Completion</span>
                                            <input v-model="completed" type="text" class="form-control" placeholder="1 for completed 0 for not" aria-label="Task dcompletion" aria-describedby="addon-wrapping">
                                        </div>
                                        <div class="input-group flex-nowrap mt-2">
                                            <span class="input-group-text w-25" id="addon-wrapping">Created</span>
                                            <input v-model="created" type="text" class="form-control" placeholder="Task timestamp" aria-label="Task timestamp" aria-describedby="addon-wrapping" readonly>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-outline-primary" @click="editPersonalTask(task.taskId)">Save my changes <i class="fa-solid fa-check fa-lg" style="color: green;"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- // -->
            <!-- // -->
            <!-- // -->
            <!-- // -->
            <!-- // -->

            <div class="scrollable_xlg py-3 px-5 mt-4" v-else>
                <div v-for="task in $store.state.userTasks" v-bind:key="task.taskId" v-if="$store.state.userTasks.length > 0">
                    <div class="card_rem mb-2">
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
                                <input type="checkbox" id="checkbox" @click="completeTask(task.taskId)" checked v-modal="task.completed"/>
                            </div>
                            <div v-else>
                                <input type="checkbox" id="checkbox" @click="completeTask(task.taskId)" v-modal="task.completed"/>
                            </div>
                            <button class="delete" @click="deletePersonalTask(task.taskId)">
                                <i class="fa-solid fa-trash-can fa-lg" style="color: #9433ee;"></i>
                            </button>
                            <button class="edit" data-bs-toggle="modal" :data-bs-target="'#staticBackdrop'+task.taskId">
                                <i class="fa-solid fa-pencil fa-lg" style="color: #9433ee;"></i>
                            </button>
                        </div>
                        <!-- Modal -->
                        <div class="modal fade" :id="'staticBackdrop'+task.taskId" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="input-group flex-nowrap">
                                            <span class="input-group-text w-25" id="addon-wrapping">Task name</span>
                                            <input v-model="taskname" type="text" class="form-control" placeholder="Task name" aria-label="Task name" aria-describedby="addon-wrapping">
                                        </div>
                                        <div class="input-group flex-nowrap mt-2">
                                            <span class="input-group-text w-25" id="addon-wrapping">Due date</span>
                                            <input v-model="taskdeadline" type="text" class="form-control" placeholder="Task due date" aria-label="Task due date" aria-describedby="addon-wrapping">
                                        </div>
                                        <div class="input-group flex-nowrap mt-2">
                                            <span class="input-group-text w-25" id="addon-wrapping">Completion</span>
                                            <input v-model="completed" type="text" class="form-control" placeholder="1 for completed 0 for not" aria-label="Task dcompletion" aria-describedby="addon-wrapping">
                                        </div>
                                        <div class="input-group flex-nowrap mt-2">
                                            <span class="input-group-text w-25" id="addon-wrapping">Created</span>
                                            <input v-model="created" type="text" class="form-control" placeholder="Task timestamp" aria-label="Task timestamp" aria-describedby="addon-wrapping" readonly>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-outline-primary" @click="editPersonalTask(task.taskId)">Save my changes <i class="fa-solid fa-check fa-lg" style="color: green;"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <div v-else>
                    no tasks available
                </div>
            </div>
        </div>

        <div class="right_float">
            <div class="flex_right_align container">

                <div class="display_on_mobile_view container-fluid px-1">
                    <div class="input-group flex-nowrap">
                        <span class="input-group-text w-50 apply_diff" id="addon-wrapping">Task name</span>
                        <input v-model="taskname" type="text" id="text-input" class="form-control" placeholder="Task name" aria-label="Task name" aria-describedby="addon-wrapping">
                    </div>
                    <div class="input-group flex-nowrap mt-2">
                        <span class="input-group-text w-50 apply_diff" id="addon-wrapping">Due date</span>
                        <input v-model="taskdeadline" type="text" id="text-input" class="form-control" placeholder="Task due date" aria-label="Task due date" aria-describedby="addon-wrapping">
                    </div>
                    <div v-if="taskdeadline.length === 0 || taskname.length === 0">
                        <button type="button" class="btn my-2 border border_darken w-100" @click="toastWarn">
                            <span class="strangerDanger">Fill in the inputs</span> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="rgba(0, 0, 0, 0.578)" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                            </svg>
                        </button>
                    </div>
                    <div v-else>
                        <button type="button" class="btn my-2 border border_success w-100" @click="addTask()">
                            <span class="suXses">Great! click me now</span> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#1eff00" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="mb-2 d-flex justify-content-start border-bottom py-2 media_QQ">
                    <input type="text" class="rounded-3" placeholder="search tasklist ..." v-model="seachInput.search" @change="searchFn()"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-search mx-2 border-0" viewBox="0 0 16 16">
                       <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </div>

                <!-- <div class="sidebar_head">
                    <p class="mt-3">Task list (global)</p>

                    <span class="d-flex justify-content-center">
                        <hr class="w-50">
                    </span>
                </div> -->

                <div class="over_scroll my-3 border border-3 resize_option_y">
                    <div v-for="tasks in searchFn()">
                        <div class="small container text-start mt-2 card_in_sRes d-flex justify-content-center">
                            <div class="hoverMe cursor_point" title="TaskId">{{tasks.taskId}}</div>
                            <div class="d-flex container-fluid w-100 justify-content-center align-items-center">
                                <p class="small over_scroll_sm">{{ tasks.taskname }}</p>
                                <div class="d-flex container-fluid w-100 justify-content-end">
                                    <div id="complete" class="cursor_point" v-if="tasks.completed === 1" title="completed task">
                                    </div>
                                    <div id="incomplete" class="cursor_point" v-else title="incompleted task">
                                    </div>
                                </div>
                            </div>
                            <div>
                                <postTask />
                            </div>
                        </div>
                    </div>
                </div>
                <hr>

                <div class="right_align_style py-3" id="display_none_at_mobile">
                    <h5 class="text-black">Add new task</h5>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="rgb(12,12,12)" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                        </svg>
                    </button>

                    <!-- Modal -->
                    <div class="modal fade modal_bounce" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                        <div class="modal-dialog modal-dialog-centered">

                            <div class="modal-content styled_modal">

                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Add a new task</h1>
                                    <button type="button" class="close_btn" data-bs-dismiss="modal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                        </svg>
                                    </button>
                                </div>

                                <div class="modal-body">
                                    <div>
                                        <div class="input-group flex-nowrap">
                                            <span class="input-group-text w-25" id="addon-wrapping">Task name</span>
                                            <input v-model="taskname" type="text" class="form-control" placeholder="Task name" aria-label="Task name" aria-describedby="addon-wrapping">
                                        </div>
                                        <div class="input-group flex-nowrap mt-2">
                                            <span class="input-group-text w-25" id="addon-wrapping">Due date</span>
                                            <input v-model="taskdeadline" type="text" class="form-control" placeholder="Task due date" aria-label="Task due date" aria-describedby="addon-wrapping">
                                        </div>
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                                    <button type="button" class="btn btn-primary" @click="addTask()">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                                        </svg> Add task 
                                    </button>
                                </div>

                            </div>

                         </div>
                    </div>

                </div>

            </div>

        </div>
        <div class="fxd">
            <bottomNavVue />
        </div>


    </div>

</template>
<script>
import draggable from 'vuedraggable';
import postTask from '../components/postTask.vue'
import { toast } from "vue3-toastify";
import bottomNavVue from '@/components/bottomNav.vue';
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
            taskId: null,
            taskname: '',
            taskdeadline: '',
            completed: '',
            created: '',
            
            stateOfCompletion: 0,


        }
    },
    components : {
        draggable,
        postTask,
        bottomNavVue
    },
    computed: {
        toastWarn(){
            let targ = document.getElementById("text-input")
            targ.style = "border:1px solid red";
            toast("Add text into the input fields!", {
                position: toast.POSITION.BOTTOM_CENTER,
                "type": "warning"
            });
        }
    },
    methods : {
        fetchTasks(){
            this.$store.dispatch('fetchTasks')
        },
        fetchUsersTasks(){
            this.$store.dispatch('getUserData')
        },
        getUsers(){
            this.$store.dispatch('getUsers')
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
        },
        addTask(){
            this.$store.dispatch('addTask', this.$data)
        },
        deletePersonalTask(taskId){
            this.$store.dispatch('deletePersonalTask', taskId)
        },
        editPersonalTask(taskId){
            let TaskObjx = {
                taskId: taskId,
                taskname: this.taskname,
                taskdeadline: this.taskdeadline,
                completed: this.completed,
                created: this.created
            }
            this.$store.dispatch('editPersonalTask', TaskObjx)
        },
        completeTask(){
            toast.warning("Click on edit then insert a 1 for completed or 0 for incomplete",{
                position: 'top-center'
            });
        },
        randomMsg(){
            toast("hello you here")
        }
    },
    mounted(){
        this.fetchTasks()
        this.fetchUsersTasks()
        this.searchFn()
        this.getUsers()
    }
}
</script>
<style scoped>
    ::-webkit-scrollbar{
        display: none;
    }
    #align_to_center{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        flex-direction: row;
        background-color: rgb(255, 255, 255);
    }

    .image_height{
        height: 5rem;
        width: 5rem;
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.253);
        border-radius: 50%;
        object-fit: cover;
    }

    .justify_container{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .h_100{
        height: 140px;
    }
    /* .h_100vh{
        height: 140px;
    } */

    .display_on_mobile_view{
        display: none;
    }

    .flex_align{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        flex-direction: column;
        border: 1px solid rgba(130, 130, 255, 0.24);
        background-color: #FAF9F6;
        cursor: none;
    }

    .scrollable_xlg{
        max-height: 650px;
        width: 100%;
        overflow: scroll;
    }

    .modal_bounce{
        animation-name: bounce;
        animation-duration: 0.5s;
        /* box-shadow: 10px 100px 1000px 10px rgb(158, 99, 158); */
    }

    .cursor_point{
        cursor: pointer;
    }

    .fxd{
        display: none;
    }

    .styled_modal{
        background-color: #ffffff;
        border: 1px solid #9433ee;
    }

    .close_btn{
        border: 1px solid white;
        color: whitesmoke !important;
        background-color: rgba(255, 255, 255, 0);

    }

    #complete, #incomplete{
        height: 10px;
        width: 10px;
        border-radius: 50%;
    }

    #complete{
        background-color: rgb(0, 255, 0);
    }

    #incomplete{
        background-color: rgb(255, 0, 0);
    }

    .card_in_sRes{
        border: 1px solid #d4b3ff;
        height: 100px;
        max-width: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        background-color: #FAF9F6;
        color: rgb(0, 0, 0);
    }

    .resize_option_y{
        resize: vertical;
        overflow: auto;
    }
    .resize_option_xY{
        resize: both;
        overflow: auto;
    }


    .hoverMe{
        height: 1.2rem;
        width: 1.2rem;
        background: #692b94;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .6rem;
        border-radius: 50%;
        color: #FAF9F6;
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
        box-shadow: 1px 10px 17px 10px rgba(34, 34, 35, 0.125);
        background-color: #FAF9F6;
        cursor: none;
    }

    .card_rem{
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid rgb(255, 255, 255);
        box-shadow: 3px 2px 10px 2px rgba(0, 0, 0, 0.125);
        border-radius: 10px;
        color: black;
        background: linear-gradient(rgb(255, 255, 255), #FAF9F6);
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

    .delete, .edit, .send {
        appearance: none;
        border-radius: 5px;
        display: inline-block;
        position: relative;
        cursor: pointer;
    }

    #checkbox:before {
        content: "";
        background-color: #1eff00;
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
        right: -210%;
        bottom: 125%;
        animation-name: opx;
        animation-duration: 0.3s;
    }

    .delete, .edit{
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
        background-color: #ff0000;
        right: -210%;
        bottom: 130%;
        animation-name: opx;
        animation-duration: 0.3s;
    }
    .edit:hover::after{
        position: absolute;
        content: "Edit";
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px !important;
        border-radius: 5px;
        text-align: center;
        color: white;
        width: 100px !important;
        background-color: #9433ee;
        right: -210%;
        bottom: 130%;
        animation-name: opx;
        animation-duration: 0.3s;
    }

    .media_QQ input{
        width: 100%;
        height: 2.7rem;
        border: none;
        border-radius: 40px !important;
        background: linear-gradient(rgb(244, 242, 234), rgb(244, 242, 242));
        border: 1px solid rgb(198, 196, 196);
        text-indent: 15px;
    }


    .media_QQ svg{
        position: absolute;
        right: 1%;
        margin-top: 11.6px;
        margin-right: 10px !important;
        fill: rgb(141, 140, 140) !important;
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
        background: #FAF9F6;
        color: rgb(0, 0, 0) !important;
        display: flex;
        justify-content: center;
        width: 60%;
        gap: 70px;
        align-items: center;
        position: fixed;
        top: 7.20%;
        box-shadow: 0px 1px 4px 0px rgba(23, 22, 22, 0.097);
    }

    .nav_px{
        text-decoration: none;
        color: rgb(0, 0, 0);
        font-weight: bold;
    }

    .bs_card_flexed{
        height: 80vh;
        width: auto;
        background: #f0f0ed;
        border: 1px solid rgba(0, 0, 0, 0.129);
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        overflow: scroll;
    }

    .over_scroll{
        overflow-y: scroll;
        max-height: 450px;
    }

    .over_scroll_sm{
        overflow-y: scroll;
        max-height: 100px;
    }

    .over_scroll_sm::-webkit-scrollbar{
        width: 3px !important;
        height: 2px !important;
    }

    .inner_block{
        background: white;
        border-radius: 5px;
        box-shadow: 2px 2px 10px 5px rgba(18, 17, 17, 0.09);
        display: flex;
        text-align: start;
        justify-content: space-around;
        flex-flow: row !important;
    }

    .right_align_style{
        border: 1px solid rgba(6, 6, 6, 0.204);
        border-radius: 10px;
        background-color: #ffffff00;
        /* color: rgb(12, 12, 12); */
    }


    /* @media (max-width: 998px) {
        #align_to_center{
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            flex-direction: column;
        }
    }
     */
    @media (max-width: 1028px) {
        #align_to_center{
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            min-width: 100%;
            overflow-x: hidden;
            flex-direction: column;
        }

        .left_float, .right_float{
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 35vh;
            min-width: 100vw;
            box-shadow: 0px;
            background-color: #FAF9F6;
        }

        .left_float{
            margin-top: 3.8rem;
        }

        .flex_align{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 0px !important;
            min-height: 50vh;
            flex-direction: column;
            border: 1px solid #FAF9F6;
            background-color: #e9e9e900;
            cursor: none;
        }

        .media_QQ input{
           width: 100%;
           height: 2.7rem;
           border: none;
           border-radius: 40px !important;
           background: linear-gradient(rgb(244, 242, 234), rgb(244, 242, 242));
           border: 1px solid rgb(198, 196, 196);
           text-indent: 15px;
        }
        
        .media_QQ svg{
           position: absolute;
           right: 2.8%;
           margin-top: 11.6px;
           margin-right: 10px !important;
           fill: rgb(141, 140, 140) !important;
        }

        .bs_card_flexed{
            background-color: #FAF9F6;
            border: 1px solid rgba(255, 255, 255, 0);
        }
    }

    
    @media (max-width: 520px) {
        #align_to_center{
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            flex-direction: column;
        }

        .left_float, .right_float{
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 35vh;
            min-width: 100vw;
            box-shadow: 0px;
            background-color: #FAF9F6;
        }
        .left_float{
            margin-top: 3.8rem;
        }
        .flex_align{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 0px !important;
            min-height: 50vh;
            flex-direction: column;
            border: 1px solid rgb(255, 255, 255);
            background-color: #e9e9e900;
            cursor: none;
        }
        .bs_card_flexed{
            border: 1px solid rgba(255, 255, 255, 0);
        }
    }

    @media (max-width: 540px) {
        .card_rem h5{
            font-size: 1rem;
        }
        .card_rem p{
            font-size: .7rem;
        }
        .fxd{
            display: flex;
            justify-content: center;
            z-index: 99;
            position: fixed;
            bottom: 0;
            height: 5rem;
            width: 100%;
        }

        .suXses{
            color: #1eff00;
        }
        .strangerDanger{
            color: rgb(35, 34, 34);
        }
        .border_success{
            border: 1px solid #1eff00 !important;
        }

        .display_on_mobile_view{
            display: block;
        }

        .apply_diff{
            background: rgb(35, 35, 36) !important;
            color: white;
        }

        #checkbox {
            appearance: none;
            width: 15px;
            height: 15px;
            border: 1px solid #9433ee;
            border-radius: 5px;
            background-color: transparent;
            display: inline-block;
            position: relative;
            margin-right: 10px;
            cursor: pointer;
        }

        #checkbox:before {
            content: "";
            background-color: #1eff00;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            width: 7.5px;
            height: 7.5px;
            border-radius: 3px;
            transition: all 0.3s ease-in-out;
        }

        .delete, .edit{
            background: none;
            border: none;
            transform: scale(70%);
        }

        #display_none_at_mobile{
            display: none;
        }

    }
</style>