<template>
  <div id="justify">
    <span class="bg_gradient"></span>
    <div class="box_lg wrap_content">
      <!-- <img src="https://cdn-images.imagevenue.com/b2/57/64/ME1876NR_o.png" alt="logo_img" class="img img-fluid" height="200" width="200"> -->
      <img src="https://cdn-images.imagevenue.com/27/48/2e/ME1877EW_o.png" alt="" class="pos_abs">
      <div class="">
        <span>- Unreal touch UI -</span>
        <br>
        <span class="text-start fs-4 text_xsm_shrink">- Digital marketing solutions -</span>
        <h1 class="text_sm_shrink primary_text_color">Next generation Task managment.</h1>
        <div class="d-flex gap-4 justify-content-center flex_dir">
          <router-link to="/" class="px-4 py-1 text-decoration-none fw-bold styled_btn">Exlpore</router-link>
          <router-link to="/about" class="px-4 py-1 text-decoration-none fw-bold styled_btn">Company</router-link>
          <router-link to="/dashboard" class="px-4 py-1 text-decoration-none fw-bold styled_btn">Dashboard</router-link>
          <router-link to="/login" class="px-4 py-1 text-decoration-none fw-bold styled_btn">Login</router-link>
        </div>
      </div>
    </div>
    <div class="bottom_justify">
      <ul class="list-unstyled justify_bottom">
        <li class="primary_text_color">lorem ipsum</li>
        <li class="primary_text_color">lorem ipsum</li>
        <li class="primary_text_color">lorem ipsum</li>
        <li class="primary_text_color">lorem ipsum</li>
      </ul>
      <!-- <h2>Partners : </h2> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // }
}
</script>


<style scoped>
  #justify{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: rgb(243, 243, 243);
    flex-direction: column;
  }

  .primary_text_color{
    color: rgb(140, 78, 255);
  }

  .box_lg{
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 1000;
  }

  .bg_gradient{
    height: 300px;
    width: 300px;
    background: radial-gradient(circle, rgba(243, 200, 255, 0.863), rgb(14, 199, 255));
    filter: blur(100px);
    position: absolute;
  }

  .pos_abs{
    position: absolute;
    bottom: .20%;
    left: 0%;
    z-index: 1;
    /* border-right: 1px solid #560bad;
    border-top: 1px solid #560bad; */
    border-top-right-radius: 137.5px;
  }

  .bottom_justify{
    position: absolute;
    bottom: 0;
    right: 0.5%;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer !important;
    z-index: 222;
  }
  .bottom_justify li:nth-child(1):hover::before{
    content: "lorem";
    color: white;
    border-radius: 10px;
    text-align: center;
    position: absolute;
    height: 30px;
    width: 115px;
    background-color: purple;
    top: -65%;
    animation-name: trans;
    animation-duration: 0.4s;
  }
  .bottom_justify li:nth-child(2):hover::before{
    content: "ipsum";
    color: white;
    border-radius: 10px;
    text-align: center;
    position: absolute;
    height: 30px;
    width: 115px;
    background-color: purple;
    top: -65%;
    animation-name: trans;
    animation-duration: 0.4s;
  }
  .bottom_justify li:nth-child(3):hover::before{
    content: "dolor";
    color: white;
    border-radius: 10px;
    text-align: center;
    position: absolute;
    height: 30px;
    width: 115px;
    background-color: purple;
    top: -65%;
    animation-name: trans;
    animation-duration: 0.4s;
  }
  .bottom_justify li:nth-child(4):hover::before{
    content: "anciet";
    color: white;
    border-radius: 10px;
    text-align: center;
    position: absolute;
    height: 30px;
    width: 115px;
    background-color: purple;
    top: -65%;
    animation-name: trans;
    animation-duration: 0.4s;
  }

  .styled_btn {
    --color: #560bad;
    font-family: inherit;
    display: inline-block;
    width: 8em;
    height: 2.6em;
    line-height: 2.5em;
    margin: 20px;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--color);
    transition: color .5s;
    z-index: 1;
    font-size: 17px;
    border-radius: 6px;
    font-weight: 500;
    color: var(--color);
    display: flex;
    justify-content: center;
    align-items: center;
  }

    .styled_btn:before {
      content: "";
      position: absolute;
      z-index: -1;
      background: var(--color);
      height: 150px;
      width: 200px;
      border-radius: 50%;
    }

    .styled_btn:hover {
      color: #fff;
    }

    .styled_btn:before {
      top: 100%;
      left: 100%;
      transition: all .7s;
    }

    .styled_btn:hover:before {
      top: -30px;
      left: -30px;
    }

    .styled_btn:active:before {
      background: #3a0ca3;
      transition: background 0s;
    }

  @keyframes trans {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  .justify_bottom{
    display: flex;
    justify-content: space-around !important;
    gap: 30px;
  }

  @media (max-width: 580px) {
    .wrap_content{
      display: flex;
      flex-wrap: wrap;
      height: 200px;
      width: 200px;
    }

    .justify_bottom{
      display: flex;
      justify-content: center !important;
      gap: 40px;
    }

    .text_sm_shrink{
      font-size: 20px;
    }
    
    .text_xsm_shrink{
      font-size: 12px !important;
    }

    .bottom_justify{
      position: absolute;
      bottom: 0;
      right: 50%;
      left: 50%;
      font-weight: 700;
      font-size: 10px;
      cursor: pointer !important;
      z-index: 222;
    }

    .styled_btn {
      --color: #560bad;
      font-family: inherit;
      display: inline-block;
      width: 100%;
      height: 2.6em;
      line-height: 2.5em;
      margin: 2px;
      position: relative;
      overflow: hidden;
      border: 2px solid var(--color);
      transition: color .5s;
      z-index: 1;
      font-size: 10px;
      border-radius: 6px;
      font-weight: 500;
      color: var(--color);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .flex_dir{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px !important;
    }

    .bottom_justify li:nth-child(1):hover::before{
      content: "lorem";
      color: white;
      text-align: center;
      position: absolute;
      height: 30px;
      width: 63.4px;
      z-index: 12;
      background-color: purple;
      top: -95%;
      animation-name: trans;
      animation-duration: 0.4s;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .bottom_justify li:nth-child(2):hover::before{
      content: "lorem";
      color: white;
      text-align: center;
      position: absolute;
      height: 30px;
      width: 63.4px;
      z-index: 12;
      background-color: purple;
      top: -95%;
      animation-name: trans;
      animation-duration: 0.4s;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .bottom_justify li:nth-child(3):hover::before{
      content: "lorem";
      color: white;
      text-align: center;
      position: absolute;
      height: 30px;
      width: 63.4px;
      z-index: 12;
      background-color: purple;
      top: -95%;
      animation-name: trans;
      animation-duration: 0.4s;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .bottom_justify li:nth-child(4):hover::before{
      content: "lorem";
      color: white;
      text-align: center;
      position: absolute;
      height: 30px;
      width: 63.4px;
      z-index: 12;
      background-color: purple;
      top: -95%;
      animation-name: trans;
      animation-duration: 0.4s;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .pos_abs{
      position: absolute;
      bottom: 7%;
      left: 0%;
      opacity: 0.3;
      z-index: 1;
      height: 200px;
      border: none;
    }

  }






</style>
