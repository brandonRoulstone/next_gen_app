import { createStore } from 'vuex'
import router from '@/router'
import axios from 'axios'
axios.defaults.withCredentials = true

export default createStore({
  state: {
    tasks: [],
    assignedTasks: []
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
      $cookies.set('jwt', validateInfo.data.token)
      $cookies.set('role', validateInfo.data.userRole)
      
      const [user] = validateInfo.data.userInServer
      $cookies.set('userId', user.user_id)

      const userInServ = validateInfo.data.userInServer;
      const storage = JSON.stringify(userInServ);
      localStorage.setItem('userActive', storage);
      await router.push('/dashboard');
    },
    async logout(){
      const res = await axios.delete('http://localhost:3360/logout')
      $cookies.remove('jwt')
      $cookies.remove('role')
      $cookies.remove('userId')
      localStorage.removeItem('userActive')
      console.log(res.data.msg)
      router.push('/login')
    }
  },
  modules: {
  }
})
