import { default } from '../views/DashBoardView.vue';
<template>
    <div id="navbar" class="bg-white"> 
     <nav class="navbar bg-white">
      <div class="page">
       <header tabindex="0"></header>
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
           <li><router-link to="/" v-if="$cookies.get('jwt')">My tasks</router-link></li>
           <li><router-link to="/" v-if="$cookies.get('jwt')">Friends</router-link></li>
           <li class="small gap-2"><router-link to="/signUp" v-if="!$cookies.get('jwt')"><button class="btn px-4 py-1 btn_login">Login</button></router-link><button v-if="$cookies.get('jwt')" class="btn btn_logout px-4 py-1" @click="logOut()">Logout</button></li>
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
      },
    }
  </script>

   <style scoped>
   #navbar{
     position: fixed;
     top: -1%;
     z-index: 2000;
   }

   .btn_logout{
    background-color: rgb(255, 35, 35);
    color: white;
   }

    header{
     background: rgb(243, 243, 243);
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
     background: #000;
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
   .small a {
     font-size: 12px;
     font-weight: 400;
     color: #ffffff;
     background-color: green;
     width: 100%;
     align-items: center;
   }
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
   </style>