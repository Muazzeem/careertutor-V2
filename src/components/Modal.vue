<template>
  <div class="container-fluid py-7">
    <div class="row mt-5">
      <div class="mx-auto">
        <!-- Modal -->
        <div class="modal fade" id="exampleModalForm" tabindex="-1" aria-labelledby="exampleModalForm"
             aria-hidden="true">
          <div class="modal-dialog modal-danger modal-dialog-centered modal-" role="document">
            <div class="modal-content">
              <div class="modal-body p-0">
                <div class="card bg-gray-200 shadow border-0 mb-0">
                  <div class="card-header text-start">
                    <h3 class="font-weight-bolder text-info text-gradient mb-1">Got a question?</h3>
                    <p class="mb-0">We'd like to talk more about what you need</p>
                  </div>
                  <div class="card-body">
                    <form role="form text-start">
                      <label>Full Name</label>
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Full Name" aria-label="Name"
                               aria-describedby="name-addon">
                      </div>
                      <label>Email</label>
                      <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Email" aria-label="Email"
                               aria-describedby="email-addon">
                      </div>
                      <div class="form-group mb-4">
                        <label>Your message</label>
                        <textarea name="message" class="form-control" id="message" rows="4"></textarea>
                      </div>
                      <div class="text-center">
                        <button type="button" class="btn bg-gradient-info mt-4 mb-0">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalVue"
}
</script>

<style scoped>
.form-control{
  padding-left: 10px !important;
}
</style>