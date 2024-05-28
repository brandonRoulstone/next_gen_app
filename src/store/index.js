import { createStore } from 'vuex'
import router from '@/router'
import axios from 'axios'
axios.defaults.withCredentials = true
import { toast } from "vue3-toastify";

export default createStore({
  state: {
    tasks: [],
    assignedTasks: [],

    // user specific tasks
    userTasks: [],
    users: [],
    globalChat: []
  },
  getters: {
  },
  mutations: {
    accessTaskState(state, payload){
      state.tasks = payload
    },
    accessAssignedTasksState(state, payload){
      state.assignedTasks = payload
    },
    accessUserClientData(state, payload){
      state.userTasks = payload
    },
    accessUsers(state, payload){
      state.users = payload
    },
    accessGlobalChat(state, payload){
      state.globalChat = payload
    }
  },
  actions: {
    // admin config
    async fetchTasks(context){
      const {data} = await axios.get('http://localhost:3360/tasks')
      context.commit('accessTaskState', data)
    },

    async addTask(context,userPayload){
      const res = await axios.post('http://localhost:3360/tasks', userPayload)
      toast("Your task was successfully added!", {
        position: toast.POSITION.TOP_CENTER,
        "theme": "dark",
      });
      setTimeout(() => {
        window.location.reload()
      }, 4000);
    },

    async deleteTask(context, taskId){
      const res = await axios.delete(`http://localhost:3360/tasks/${taskId}`)
      console.log(`deleted item:  ${taskId}`);
      window.location.reload()
    },

    async updateTask(context, update){
      const res = await axios.patch(`http://localhost:3360/tasks/${update.taskId}`, update)
      console.log(`edited item:  ${update.taskId}`);
    },

    // login config
    async login(context, userPayloadIsValid){

      try {
        const validateInfo = await axios.post('http://localhost:3360/login', userPayloadIsValid)

        $cookies.set('jwt', validateInfo.data.token);
  
        $cookies.set('role', validateInfo.data.userRole);
  
        console.log("role: " + validateInfo.data.userRole);
        
        const [user] = validateInfo.data.userInServer;
  
        $cookies.set('userId', user.user_id)
  
        const userInServ = validateInfo.data.userInServer;
  
        const storage = JSON.stringify(userInServ);
  
        localStorage.setItem('userActive', storage);
  
        toast(validateInfo.data.msg, {
          position: toast.POSITION.TOP_CENTER,
          "theme": "dark",
        });
        
        await router.push('/dashBoard');
        setTimeout(() => {
          window.location.reload()
        }, 3000);
      } catch (error) {
        toast("Invalid credentials try again", {
          position: toast.POSITION.TOP_CENTER,
          "theme": "light",
          "type": "error",
        })
      }
      
    },

    async logout(){
      const res = await axios.delete('http://localhost:3360/logout')
      $cookies.remove('jwt')
      $cookies.remove('role')
      $cookies.remove('userId')
      localStorage.removeItem('userActive')
      console.log(res.data.msg)
      
      await router.push('/login')

      toast.success(res.data.msg, {
        position: toast.POSITION.TOP_CENTER,
      });

      setTimeout(() => {
        window.location.reload()
      }, 3000);
    },

    async signUp(context, userPayload){
      const res = await axios.post('http://localhost:3360/users', userPayload);

      toast.success("Signed up successfully you will be redirected", {
        position: toast.POSITION.TOP_CENTER,
      });

      setTimeout(() => {
        window.location.reload()
      }, 3000);

    },

    // user  specific config
    async getUserData(context){
      const res = await axios.get(`http://localhost:3360/assigned/${$cookies.get('userId')}`)
      context.commit('accessUserClientData', res.data.tasks)
      const s = res.data.tasks
      console.log(s);
    },

    // will select user first by Id and send the task to user
    async sendTask(context, tID){

      const res = await axios.post(`http://localhost:3360/send`, tID)
      toast("Your task was successfully sent", {
        position: toast.POSITION.TOP_CENTER,
        "theme": "dark",
      });

      setTimeout(() => {
        window.location.reload()
      }, 2000);
      
    },

    async deletePersonalTask(context, tID){
      const res = await axios.delete(`http://localhost:3360/myTasks/${tID}?user_id=${$cookies.get('userId')}`)
      toast("Your task has been deleted", {
        position: toast.POSITION.TOP_CENTER,
        "type": "warning",
      });

      setTimeout(() => {
        window.location.reload()
      }, 3000);
    },

    async getUsers(context){
      const {data} = await axios.get("http://localhost:3360/users")
      context.commit('accessUsers', data)
      console.log(data)
    },

    async editPersonalTask(context, update){
      const res = await axios.patch(`http://localhost:3360/tasks/${update.taskId}`, update)
      toast("Your task was edited", {
        position: toast.POSITION.TOP_CENTER,
        "theme": "dark",
      });

      setTimeout(() => {
        window.location.reload()
      }, 3000);
    },
    
    async completeTask(context, update){
      const res = await axios.patch(`http://localhost:3360/myTasks/${update.taskId}`, update);

      toast.success("Task is completed!", {
        position: toast.POSITION.TOP_CENTER,
      });

      setTimeout(() => {
        window.location.reload()
      }, 2000);

    },
    async chatBox (context){
      const { data } = await axios.get("http://localhost:3360/chat");
      context.commit("accessGlobalChat", data);
      console.log(data);
    },
    async chatFn(context, content){
      const res =  await axios.post("http://localhost:3360/chat", content);
      console.log(res.data);
      window.location.reload()
    },
    async deleteMessage(context, comment_id){
      const res = await axios.delete(`http://localhost:3360/chat/${comment_id}`);

      toast.success("This action will delete for everyone in the server", {
        position: toast.POSITION.TOP_CENTER,
      });

      setTimeout(() => {
        window.location.reload()
      }, 3000);
    }
    
  },
  modules: {
  }
})
