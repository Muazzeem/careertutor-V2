<template>
  <div class="card min-vh-45 mt-8">
    <section>
      <div class="card-body border-radius-lg position-relative overflow-hidden pb-4 px-5 py-5">
        <div class="row align-items-center justify-content-between">
          <div class="col-md-6 mb-md-0 mb-4">
            <h3 class="mb-0 head-line">Medium Length Headline</h3>
            <p class="lead mb-md-5 mt-5 mb-4">
              Change the color to match your brand or vision, add your logo, choose the perfect thumbnail, remove the
              playbar, add controls and more.
            </p>
            <p><span class="me-2">&#9679;</span> Showcase and embed your work with</p>
            <p><span class="me-2">&#9679;</span> Publish across social channels in a click</p>
            <p><span class="me-2">&#9679;</span> Sell your videos worldwide</p>
            <p><span class="me-2">&#9679;</span> Make more profit</p>
          </div>
          <div class="col-md-5">
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
}

.head-line {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: #272E35;
}
</style>