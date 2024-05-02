<template>
  <section class="about">
    <div class="d-flex justify-content-center align-items-center h-100 col-lg-12 container flex-wrap margin_sm">
      <div class="col-lg-6">
        <p class="fw-bold">- LOREM IPSUM DOLOR -</p>
        <hr class="primary_text_color">
        <h1 class="primary_text_color display-4 fw-bold text-start">About our company.</h1>
        <div class="d-flex justify-content-center w-100">
          <p class="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores eos, nostrum eum recusandae ipsa unde sequi vero assumenda, quos incidunt, rerum eaque officia repudiandae delectus corrupti tenetur minus asperiores.</p>
        </div>
      </div>
      <div class="col-lg-6">
        <img src="https://cdn-images.imagevenue.com/0c/ac/03/ME1877QR_o.png" alt="digi_com" class="img img-fluid ajust_to_viewport">
      </div>
    </div>
  </section>
</template>
<script>
</script>
<style scoped>

.about{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background: radial-gradient(circle, rgb(216, 202, 255) 50%, rgb(203, 170, 253) 35%);
}

.ajust_to_viewport{
  height: 600px;
  width: 600px;
  object-fit: cover;
}

.justify{
  text-align: justify;
}


@media (max-width: 580px) {
  .margin_sm{
    margin-top: 80px;
  }

  .about{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    flex-direction: column;
    background: linear-gradient(to bottom, rgb(255, 255, 255) 65%, rgb(154, 88, 252) 35%);
  }

  .ajust_to_viewport{
    height: 300px;
    width: 300px;
    object-fit: contain;
  }
}

</style>
