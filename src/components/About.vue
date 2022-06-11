<template>
  <div class="card min-vh-45 mt-lg-8">
    <section>
      <div class="card-body border-radius-lg position-relative overflow-hidden pb-4 px-5 py-5">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-6 col-md-12 mb-md-0 mb-4">
            <h3 class="mb-0 head-line">What makes Career-Tutor the best online CV maker?</h3>
            <p class="lead mb-md-5 mt-5 mb-4">
              The Career-Tutor CV maker app offers a unique set of features to make your CV-making process easy and
              efficient. With Career-Tutor you can:
            </p>
            <p><span class="me-2">&#9679;</span>We help to enhance your career path. Our 10+ experienced Software
              engineer will help you prepare for the global market.</p>
            <p><span class="me-2">&#9679;</span>We will share your CV with the potential recruiters.</p>
            <p><span class="me-2">&#9679;</span>We recommend the most appropriate job for you after inspecting the CV.
            </p>
            <p><span class="me-2">&#9679;</span>After many attempts, you are not getting an interview call. No problem.
              Our career guideline program will help to land your dream job.</p>
          </div>
          <div class="col-lg-5 col-md-12">
            <FileUpload></FileUpload>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FileUpload from '@/components/FileUpload.vue'

export default {
  name: "AboutVue",
  components: {
    FileUpload
  },
}
</script>

<style scoped>
h3, p {
  font-family: 'Rubik', sans-serif
}

p {
  font-size: 22px;
  text-align: justify;
}

.head-line {
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: #272E35;
}

@media (max-width: 1024px) {
  .card p {
    font-size: 17px;
  }

  .head-line {
    font-size: 25px;
  }
}

@media (max-width: 991px) {
  .px-5 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}

@media (max-width: 425px) {
  .head-line {
    font-size: 20px;
  }
  p {
    font-size: 17px !important;
  }
  .card{
    margin-top: 5rem;
  }
}
</style>