<template>
  <div class="container-fluid">
    <AboutVue></AboutVue>
    <DetailsVue></DetailsVue>
  </div>
</template>
<script>
import AboutVue from '@/components/bangla/About.vue'
import DetailsVue from '@/components/bangla/Details.vue'
export default {
  name: "BanglaView",
  components:{
    AboutVue,
    DetailsVue,
  }
}
</script>

<style scoped>

</style>