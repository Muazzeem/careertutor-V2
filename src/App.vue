<template>
  <nav
      class="navbar navbar-expand-lg  blur blur-rounded top-0 border-bottom z-index-3 shadow w-100 mt-4 d-none d-lg-block my-3 py-2 fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand">
        <router-link to="/">Career-Tutor</router-link>
      </a>
      <a href=""
         class="btn btn-sm  bg-gradient-primary  btn-round mb-0 ms-auto d-lg-none d-block">Buy Now</a>
      <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
              data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
              aria-label="Toggle navigation">
      <span class="navbar-toggler-icon mt-2">
        <span class="navbar-toggler-bar bar1"></span>
        <span class="navbar-toggler-bar bar2"></span>
        <span class="navbar-toggler-bar bar3"></span>
      </span>
      </button>
      <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
        <ul class="navbar-nav navbar-nav-hover mx-auto">
          <li class="nav-item mx-2">
            <a class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
              <router-link to="/about">About</router-link>
              <i class="fa fa-home arrow ms-2" aria-hidden="true"></i>
            </a>
          </li>
        </ul>

        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <a href=""
               class="btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1" role="button">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<style lang="css">
html {
  width: 100% !important;
}

.container-fluid {
  width: 80% !important;
}

@media (max-width: 991px) {
  .container-fluid {
    width: 100% !important;
  }
}
</style>
