<template>
  <section class="py-5 mt-7">
    <div class="row">
      <div class="col-md-8 ms-auto me-auto text-center">
        <h4 class="head-line">আপনাকে একা চাকরির সন্ধানের সাথে মোকাবিলা করতে হবে না </h4>
        <p class="text-dark">আপনার কর্মজীবনের লক্ষ্যগুলি আমাদের জানান, এবং আমরা আপনাকে আপনার কাজের সন্ধানের প্রতিটি অংশে
          সাহায্য করব৷</p>
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
            <h4 class="mt-3">প্রস্তাবিত চাকরি</h4>
            <p class="mb-3">আপনার সিভি পাওয়ার পর, আমাদের সিস্টেম সিভি থেকে প্রাসঙ্গিক তথ্য বের করবে। তথ্যের উপর ভিত্তি
              করে, সিস্টেমটি চাকরি প্রার্থীদের সবচেয়ে উপযুক্ত চাকরির সুপারিশ করা শুরু করে। আপনি ইমেলের মাধ্যমে চাকরির
              আপডেট পাবেন।</p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 mb-5">
        <div class="card">
          <div class="card-body border-radius-lg position-relative overflow-hidden pb-4 px-5">
            <div class="text-center">
              <img class="w-15 mb-3" src="https://img.icons8.com/stickers/100/undefined/fine-print.png">
            </div>
            <h4 class="mt-2">সিভি বিশ্লেষণ</h4>
            <p class="mb-3">আমরা সিভি বিশ্লেষণ করি এবং সেই সিভিতে আমাদের মতামত প্রদান করে থাকি যেমন সিভিটি কতটা
              গ্রহণযোগ্য । তাছাড়া, আমরা একটি ভালো মানের সিভি বানাতে পরামর্শ অফার করি।</p>
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
            <h4 class="mt-2">ক্যারিয়ার গাইডলাইন</h4>
            <p class="mb-3">এটি আমাদের প্রিমিয়াম পরিষেবা। যাদের সাহায্য প্রয়োজন হয় তাদের সাহায্য করার জন্য আমরা সবসময়
              উন্মুক্ত। আমাদের ক্যারিয়ার গাইডলাইন প্রোগ্রামগুলির মধ্যে রয়েছে একটি ভালো উপযোক্ত সিভি বানানো, একজন চাকরি
              প্রত্যাশীর সবচেয়ে শক্তিশালী দক্ষতা খুঁজে বের করা, ক্লায়েন্টদের দক্ষতা বিকাশ করা এবং অবশেষে তাকে চাকরির
              বাজারে চাকরি সাহায্য করা।</p>
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