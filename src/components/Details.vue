<template>
  <section class="py-5 mt-7">
    <div class="row">
      <div class="col-md-8 ms-auto me-auto text-center">
        <h4 class="head-line">You don't have to deal with the job search alone.</h4>
        <p class="text-dark">Share your career goals, and we'll help you with every part of your job search.</p>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-lg-4 col-md-6 mb-5">
        <div class="card">
          <div class="card-body border-radius-lg position-relative overflow-hidden pb-4 px-5">
            <div class="text-center">
              <img class="w-15 ms-n2"
                   src="https://img.icons8.com/stickers/100/undefined/find-matching-job.png"
                   alt="">
            </div>
            <div>
              <b-spinner type="grow" label="Loading..."></b-spinner>
            </div>
            <h4 class="mt-3">Recommend jobs</h4>
            <p class="mb-3">After getting your CV, our system will extract relevant information from the CV. Based on
              the information, the system starts recommending the most appropriate jobs to job aspirant. You will
              receive the job updates via Email.</p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-5">
        <div class="card">
          <div class="card-body border-radius-lg position-relative overflow-hidden pb-4 px-5">
            <div class="text-center">
              <img class="w-15 mb-3" src="https://img.icons8.com/stickers/100/undefined/fine-print.png">
            </div>
            <h4 class="mt-2">CV analysis</h4>
            <p class="mb-3">We analyze the CV and provide feedback on that CV like how much representable the CV is!
              Moreover, we offer CV enhancement and renovation services.</p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-5">
        <div class="card">
          <div class="card-body border-radius-lg position-relative overflow-hidden pb-4 px-5">
            <div class="text-center">
              <img class="w-15 mb-3 ms-n2"
                   src="https://img.icons8.com/stickers/100/undefined/businessman.png">
            </div>
            <h4 class="mt-2">Career guideline</h4>
            <p class="mb-3">This is our premium service. We are always open to helping those who seek help. Our career
              guideline programs consist of providing feedback on CV, finding the strongest skills of a job aspirant,
              developing skills of the clients and finally helping to land him/her in the job market.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DetailsVue"
}
</script>

<style scoped>
h4 {
  font-weight: 600;
  line-height: 2;
  text-transform: capitalize;
}

h4, p {
  font-family: 'Rubik', sans-serif
}

p {
  font-size: 20px;
  letter-spacing: 0.01em;
}

.head-line {
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: #272E35;
}

.card {
  min-height: 29rem;
}

.w-15 {
  width: 20% !important;
}

@media (max-width: 768px) {
  .card {
    min-height: 13rem !important;
  }

  .card p {
    font-size: 17px;
  }

  .px-5 {
    padding-right: 2rem !important;
    padding-left: 2rem !important;
  }

  .card img {
    display: none;
  }
}

@media (max-width: 1024px) {
  .head-line {
    font-size: 25px;
  }

  .card h4 {
    font-size: 18px;
    margin-bottom: 1rem;
  }
}

@media (max-width: 1262px) {
  .card {
    height: 24rem;
  }

  .card p {
    font-size: 17px;
  }

  .px-5 {
    padding-right: 2rem !important;
    padding-left: 2rem !important;
  }

  h4 {
    line-height: 1.3;
  }
}

@media (max-width: 425px) {
  .head-line {
    font-size: 20px;
  }

  .text-dark {
    font-size: 16px;
  }
  .card {
    height: 18rem !important;
  }
}
</style>