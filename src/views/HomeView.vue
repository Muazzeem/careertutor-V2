<template>
  <div class="home">
    <HelloWorld></HelloWorld>
  </div>
  <div>
    <AboutVue></AboutVue>
  </div>
  <div>
    <PricingVue></PricingVue>
  </div>
  <div>
    <DetailsVue></DetailsVue>
  </div>
  <div id="contact">
    <ContactVue></ContactVue>
  </div>
  <div>
    <ModalVue></ModalVue>
  </div>
  <div>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import AboutVue from '@/components/About.vue'
import PricingVue from '@/components/Pricing.vue'
import DetailsVue from '@/components/Details.vue'
import FooterVue from '@/components/Footer.vue'
import ContactVue from '@/components/Contact.vue'
import ModalVue from '@/components/Modal.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    AboutVue,
    PricingVue,
    DetailsVue,
    ContactVue,
    FooterVue,
    ModalVue,
  }
}
</script>
