<template>
    <div id="navbar" class="bg-white"> 
     <nav class="navbar bg-white">
      <div class="page">
       <header tabindex="0">
        <div v-if="$cookies.get('jwt')">
          <div class="psFxd py-1 px-2" v-for="user in getLoggedInUser()" v-bind:key="user.user_id">
            <img class="iamage" :src="user.user_img" :alt="user.user_name" height="20x" width="20px">
            <div class="text-start">
              <p class="mb-1">{{ user.user_name }} | id : {{ user.user_id }}</p>
              <p>{{ user.user_email }}</p>
            </div>
          </div>
        </div>
       </header>
        <div id="nav-container">
       <div class="bg"></div>
          <div class="button" tabindex="0">
           <span class="icon-bar"></span>
            <span class="icon-bar"></span>
         <span class="icon-bar"></span>
       </div>
       <div id="nav-content" tabindex="0">
         <ul>
           <li><router-link to="/">Home</router-link></li>
           <li><router-link to="/dashboard" v-if="$cookies.get('jwt')">Dashboard</router-link></li>
           <li><router-link to="/chatToPeer" v-if="$cookies.get('role') === 'admin'">Chat</router-link></li>
            <li class="small gap-2">
              <router-link to="/signUp" v-if="!$cookies.get('jwt')" class="btn px-4 py-2 btn_reg rounded-4">Register</router-link>
              <router-link to="/login" v-if="!$cookies.get('jwt')" class="btn px-4 py-2 btn_login rounded-4">Login</router-link>
              <router-link to="/logout" v-if="$cookies.get('jwt')" class="btn btn_logout px-4 py-1">Logout</router-link>
            </li>
         </ul>
       </div>
     </div>
   </div>
    </nav>
   </div>
   </template>

   <script>
    export default {
      methods: {
        logOut(){
          this.$store.dispatch('logout')
        },
        getLoggedInUser(){
          let userVars = JSON.parse(localStorage.getItem('userActive')) || [];
          console.log(userVars);
          return userVars;
        }
      },
      mounted(){
        this.getLoggedInUser()
      }
    }
  </script>

   <style scoped>
   #navbar{
    position: fixed;
    top: -1%;
    z-index: 2000;
   }


   .psFxd{
      position: fixed;
      right: .5%;
      top: 22%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: .7rem;
      gap: .5rem;
      color: #212121;
      background: white;
      border-radius: 10px;
      box-shadow: .5px .5px 3px .7px rgba(0, 0, 0, 0.2);
    }

   .iamage{
      height: 40px;
      width: 40px;
      border-radius: 50%;
      object-fit: cover;
      border: 1px solid #2121213b;
   }

   .btn_logout{
    background-color: rgb(255, 35, 35);
    color: white;
   }

   .btn_reg, .btn_login{
    font-size: .9rem;
    width: 100%;
   }

   .btn_reg{
    border: 1px solid #8841d8;
    color: rgb(32, 32, 32);
   }

   .btn_reg:hover, .btn_login:hover{
    color: #8841d8 !important;
    background-color: #ffffff00;
    border: 1px solid #8841d8;  /* for login btn hover */
   }

   .btn_login{
    background-color: #8841d8;
    color: rgb(246, 242, 242);
   }

    header{
     background: rgb(240, 235, 235);
     backdrop-filter: blur(12px);
     border: none;
    }
   * {
     outline: none;
   }
   strong {
     font-weight: 600;
   }
   .page {
     width: 100%;
     font-family: 'Encode Sans Condensed', sans-serif;
     font-weight: 600;
     letter-spacing: .03em;
     color: #212121;
   }
   header {
     display: flex;
     position: fixed;
     width: 100%;
     height: 70px;
     color: #fff;
     justify-content: center;
     align-items: center;
     z-index: 23;
     -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
   }
   main {
     padding: 70px 20px 0;
     display: flex;
     flex-direction: column;
     height: 100%;
   }
   main > div {
     margin: auto;
     max-width: 600px;
   }
   main h2 span {
     color: #BF7497;
   }
   main p {
     line-height: 1.5;
     font-weight: 200;
     margin: 20px 0;
   }
   main small {
     font-weight: 300;
     color: #888;
   }
   #nav-container {
     position: fixed;
     height: 100vh;
     width: 100%;
     pointer-events: none;
     z-index: 3777;
   }
   #nav-container .bg {
     position: absolute;
     top: 70px;
     left: 0;
     width: 100%;
     height: calc(100% - 70px);
     visibility: hidden;
     opacity: 0;
     transition: .3s;
     background: #ffffff00;
   }
   #nav-container:focus-within .bg {
     visibility: visible;
     opacity: .6;
   }
   #nav-container * {
     visibility: visible;
   }
   .button {
     position: relative;
     display: flex;
     flex-direction: column;
     justify-content: center;
     z-index: 1;
     border: 0;
     background: transparent;
     border-radius: 0;
     height: 70px;
     width: 30px;
     cursor: pointer;
     pointer-events: auto;
     margin-left: 25px;
     touch-action: manipulation;
     -webkit-tap-highlight-color: rgba(0,0,0,0);
   }
   .icon-bar {
     display: block;
     width: 100%;
     height: 3px;
     background: #8841d8;
     transition: .3s;
   }
   .icon-bar + .icon-bar {
     margin-top: 5px;
   }
   #nav-container:focus-within .button {
     pointer-events: none;
   }
   #nav-container:focus-within .icon-bar:nth-of-type(1) {
     transform: translate3d(0,8px,0) rotate(45deg);
   }
   #nav-container:focus-within .icon-bar:nth-of-type(2) {
     opacity: 0;
   }
   #nav-container:focus-within .icon-bar:nth-of-type(3) {
     transform: translate3d(0,-8px,0) rotate(-45deg);
   }
   #nav-content {
     margin-top: 70px;
     padding: 20px;
     width: 90%;
     max-width: 300px;
     position: absolute;
     top: 0;
     left: 0;
     height: calc(100% - 70px);
     background: #ececec;
     pointer-events: auto;
     -webkit-tap-highlight-color: rgba(0,0,0,0);
     transform: translateX(-101%);
     transition: transform .3s;
     will-change: transform;
     contain: paint;
   }
   #nav-content ul {
     height: 100%;
     display: flex;
     flex-direction: column;
   }
   #nav-content li a {
     padding: 10px 5px;
     display: block;
     text-transform: uppercase;
     transition: color .1s;
   }
   #nav-content li a:hover {
     color: #BF7497;
   }
   #nav-content li a:active {
     color: #BF7497 !important;
   }
   #nav-content li:not(.small) + .small {
     margin-top: auto;
   }
   .small {
     display: flex;
     align-self: center;
   }
   /* .small a {
     font-size: 12px;
     font-weight: 400;
     color: #ffffff;
     background-color: green;
     width: 100%;
     align-items: center;
   } */
   .small a + a {
     margin-left: 15px;
   }
   #nav-container:focus-within #nav-content {
     transform: none;
   }
   * {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
   }
   html, body {
     height: 100%;
   }
   a,
   a:visited,
   a:focus,
   a:active,
   a:link {
     text-decoration: none;
     outline: 0;
   }
   a {
     color: currentColor;
     transition: .2s ease-in-out;
   }
   h1, h2, h3, h4 {
     margin: 0;
   }
   ul {
     padding: 0;
     list-style: none;
   }
   img {
     vertical-align: middle;
     height: auto;
     width: 100%;
   }


   @media (max-width: 540px) {
    .btn_logout{
      display: none;
    }

    /* .psFxd{
      display: none;
    } */
   }
   </style>