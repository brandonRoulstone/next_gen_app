import { createStore } from 'vuex'
import router from '@/router'
import axios from 'axios'
axios.defaults.withCredentials = true

export default createStore({
  state: {
    tasks: [],
    assignedTasks: [],

    // user specific tasks
    userTasks: []
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
      alert("added new task")
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
      const validateInfo = await axios.post('http://localhost:3360/login', userPayloadIsValid)
      // console.log(validateInfo.data.userRole);
      // console.log(validateInfo.data);
      $cookies.set('jwt', validateInfo.data.token)
      $cookies.set('role', validateInfo.data.userRole)
      console.log("role: " + validateInfo.data.userRole);
      
      const [user] = validateInfo.data.userInServer;
      $cookies.set('userId', user.user_id)

      const userInServ = validateInfo.data.userInServer;
      const storage = JSON.stringify(userInServ);
      localStorage.setItem('userActive', storage);
      await router.push('/dashBoard');
      window.location.reload()
    },

    async logout(){
      const res = await axios.delete('http://localhost:3360/logout')
      $cookies.remove('jwt')
      $cookies.remove('role')
      $cookies.remove('userId')
      localStorage.removeItem('userActive')
      console.log(res.data.msg)
      router.push('/login')
    },
    async signUp(context, userPayload){
      const res = await axios.post('http://localhost:3360/users', userPayload);
      alert("You have signed up successfully");
    },

    // user  specific config
    async getUserData(context){
      const res = await axios.get(`http://localhost:3360/assigned/${$cookies.get('userId')}`)
      context.commit('accessUserClientData', res.data.tasks)
      const s = res.data.tasks
      console.log(s);
      // console.log(data.data);
    },

    // will select user first by Id and send the task to user
    async sendTask(context, tID){
      const res = await axios.post(`http://localhost:3360/myTasks/${tID.taskId}?user_id=${tID.user_id}`, tID)
      alert("sent task to user")
    },
    async deletePersonalTask(context, tID){
      const res = await axios.delete(`http://localhost:3360/myTasks/${tID}?user_id=${$cookies.get('userId')}`)
      window.location.reload();
    },
    async editPersonalTask(context, update){
      const res = await axios.patch(`http://localhost:3360/tasks/${update.taskId}`, update)
      alert("task was edited");
      window.location.reload();
    }
    
  },
  modules: {
  }
})
