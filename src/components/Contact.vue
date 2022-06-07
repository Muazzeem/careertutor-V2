<template>
  <section>
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-lg-10 mx-auto d-flex justify-content-center flex-column">
          <div class="card d-flex justify-content-center p-4 shadow-lg">
            <div class="text-center">
              <h3>Contact us</h3>
              <p class="mb-0">
                For further questions, including partnership opportunities, please email hello@creative-tim.com
                or contact using our contact form.
              </p>
            </div>
            <div class="card card-plain">
              <form role="form" id="contact-form" method="post" autocomplete="off">
                <div class="card-body pb-2">
                  <div class="row">
                    <div class="col-md-6">
                      <label>Full Name</label>
                      <div class="input-group mb-4">
                        <input class="form-control" placeholder="Full Name" aria-label="Full Name" type="text">
                      </div>
                    </div>
                    <div class="col-md-6 ps-md-2">
                      <label>Email</label>
                      <div class="input-group">
                        <input type="email" class="form-control" placeholder="E-mail Address">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-check form-switch mb-4">
                        <input v-model="checked"  class="form-check-input" type="checkbox"
                               id="flexSwitchCheckDefault">
                        <label class="form-check-label" for="flexSwitchCheckDefault">My email and phone is already in my
                          CV.</label>
                      </div>
                    </div>
                    <div class="col-md-12 text-center">
                      <button type="submit" class="btn bg-gradient-primary mt-3 mb-0">Send Message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactVue",
  data() {
    return {
      checked: false
    }
  }
}
</script>

<style scoped>

</style>