<template>
  <div class="card min-vh-45 mt-lg-8 mt-sm-5">
    <section>
      <div class="card-body border-radius-lg position-relative overflow-hidden pb-4 px-5 py-5">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-6 col-md-12 mb-md-0 mb-4">
            <h3 class="mb-0 head-line">যেসব কারণে ক্যারিয়ার-টিউটরকে সেরা অনলাইন সিভি মেকার করে ওয়েবসাইট বলা হয়?</h3>
            <p class="lead mb-md-5 mt-5 mb-4">
              ক্যারিয়ার-টিউটর সিভি মেকার ওয়েব সাইটটি আপনার সিভি তৈরির প্রক্রিয়াকে সহজ করে তুলেছে এবং আপনার জন্য কিছু
              বেতিক্রমি ফিচার নিয়ে এসেছে ।
            </p>
            <p><span class="me-2">&#9679;</span>আমরা আপনার কর্মজীবনের পথকে আরো উন্নত করতে সাহায্য করে থাকি । আমাদের 10+
              অভিজ্ঞ সফটওয়্যার প্রকৌশলী যারা আপনাকে বিশ্ববাজারে টিকে থাকতে সহায়তা করবে।</p>
            <p><span class="me-2">&#9679;</span>আমরা সম্ভাব্য নিয়োগকারীদের সাথে আপনার সিভি শেয়ার করব।</p>
            <p><span class="me-2">&#9679;</span>সিভি পর্যবেক্ষণ করার পর আমরা আপনার জন্য সবচেয়ে উপযুক্ত চাকরির পরামর্শ
              দিয়ে থাকি ।
            </p>
            <p><span class="me-2">&#9679;</span>অনেক চেষ্টার পরও ইন্টারভিউ এর জন্য কল পাচ্ছেন না! সমস্যা নেই, আমাদের
              ক্যারিয়ার গাইডেন্স প্রোগ্রাম আপনার স্বপ্নের চাকরি পেতে সাহায্য করবে।</p>
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

  .card {
    margin-top: 5rem;
  }
}
</style>