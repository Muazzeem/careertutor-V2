<template>
  <nav
      class="navbar navbar-expand-lg  blur blur-rounded top-0 border-bottom z-index-3 shadow w-100 my-3 py-2 fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand h4">
        <router-link to="/">Career-Tutor</router-link>
      </a>
      <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
              data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
              aria-label="Toggle navigation">
      <span class="navbar-toggler-icon mt-2">
        <span class="navbar-toggler-bar bar1"></span>
        <span class="navbar-toggler-bar bar2"></span>
        <span class="navbar-toggler-bar bar3"></span>
      </span>
      </button>
      <div class="collapse navbar-collapse w-100 py-lg-0" id="navigation">
        <ul class="navbar-nav navbar-nav-hover mx-auto">
          <li class="nav-item mx-2">
            <a class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
              <!--              <router-link to="/thank-you">About</router-link>-->
              <!--              <i class="fa fa-home arrow ms-2" aria-hidden="true"></i>-->
            </a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <button v-if="!bn" v-on:click="aa" class="p-1 language-btn btn"><img
                src="https://img.icons8.com/stickers/40/000000/bangladesh.png"/> BN
            </button>
            <button v-if="bn" v-on:click="aa" class="p-1 btn language-btn"><img
                src="https://img.icons8.com/stickers/40/000000/hawaii-flag.png"/> EN
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
  <FooterVue></FooterVue>
</template>
<script>
import FooterVue from '@/components/Footer.vue'
import router from "@/router";


export default {
  name: 'HomeView',
  components: {
    FooterVue,
  },
  data() {
    return {
      bn: false,
    }
  },
  beforeMount() {
    this.bn = false;
    router.push('/')
  },
  methods: {
    aa: function () {
      if (this.bn === false) {
        this.bn = true;
        router.push('/bn')
      } else {
        this.bn = false;
        router.push('/')
      }
    },
  }
}
</script>
<style lang="css">

.navbar-brand {
  font-family: 'Kanit', sans-serif;
  font-weight: 600 !important;
  text-decoration: none;
}

html {
  width: 100% !important;
}

body {
  background-color: rgba(244, 245, 248, 0.6) !important;
}

.container-fluid {
  width: 80%;
}
.language-btn{
  width: 7rem;
  font-size: 15px !important;
  background-image: linear-gradient(310deg, #141727 0%, #3A416F 100%) !important;
  color: white !important;
}
.language-btn img{
  margin-right: .5rem;
}
@media (max-width: 991px) {
  .container-fluid {
    width: 100% !important;
  }
  .navbar-brand{
    padding: 0px !important;
  }
}
</style>
