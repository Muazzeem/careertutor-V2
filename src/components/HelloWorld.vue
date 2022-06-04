<template>
  <!-- -------- START HEADER 5 w/ text and illustration ------- -->
  <header>
    <div class="page-header min-vh-100">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-5 my-auto">
            <h1 class="text-gradient text-warning mb-0">Find your</h1>
            <h1 class="mb-4">Dream job</h1>
            <p class="lead">The time is now for it to be okay to be great. For being a bright color. For standing
              out.</p>
            <div class="buttons">
              <a href="#about" class="btn text-white btn-lg bg-gradient-primary mt-4">Discover</a>
            </div>
          </div>
          <div class="col-lg-7 ps-5 pe-0 cv-image">
            <div class="row">
              <div class="col-lg-3 col-6">
                <img class="w-100 border-radius-lg shadow mt-0 mt-lg-7"
                     src="https://careertutor.fractalslab.com/images/image3.jpg"
                     alt="">
              </div>
              <div class="col-lg-3 col-6">
                <img class="w-100 border-radius-lg shadow"
                     src="https://careertutor.fractalslab.com/images/image3.jpg"
                     alt="">
                <img class="w-100 border-radius-lg shadow mt-4"
                     src="https://careertutor.fractalslab.com/images/image5.jpg"
                     alt="">
              </div>
              <div class="col-lg-3 col-6">
                <img class="w-100 border-radius-lg shadow mt-0 mt-lg-5"
                     src="https://careertutor.fractalslab.com/images/image5.jpg"
                     alt="">
                <img class="w-100 border-radius-lg shadow mt-4"
                     src="https://careertutor.fractalslab.com/images/image7.jpg"
                     alt="">
              </div>
              <div class="col-lg-3 col-6">
                <img class="w-100 border-radius-lg shadow mt-3"
                     src="https://careertutor.fractalslab.com/images/image7.jpg"
                     alt="">
                <img class="w-100 border-radius-lg shadow mt-4"
                     src="https://careertutor.fractalslab.com/images/image7.jpg"
                     alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- -------- END HEADER 5 w/ text and illustration ------- -->
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
@media (max-width: 991px) {
  .cv-image{
    display: none;
  }
}
</style>
