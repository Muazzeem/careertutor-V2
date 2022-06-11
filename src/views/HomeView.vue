<template>
  <div class="container-fluid">
    <AboutVue></AboutVue>
    <DetailsVue></DetailsVue>
    <ModalVue></ModalVue>
  </div>
</template>

<script>
import AboutVue from '@/components/About.vue'
import DetailsVue from '@/components/Details.vue'
import ModalVue from '@/components/Modal.vue'

export default {
  name: 'HomeView',
  components: {
    AboutVue,
    ModalVue,
    DetailsVue
  }
}
</script>
<style>
.container-fluid{
  width: 87% !important;
}

@media (max-width: 991px) {
  .container-fluid {
    width: 98% !important;
    padding: .5rem !important;
  }
}
</style>