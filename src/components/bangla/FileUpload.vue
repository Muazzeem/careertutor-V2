<template>
  <div class="card shadow-lg text-white shadow-none border bg-gradient-dark h-100 overflow-hidden">
    <div v-if="file === null" class="card-body align-items-center text-center">
      <div class="image-upload"><label style="cursor: pointer;" for="file">
        <div>
          <div class="subheading mt-5 mb-5"><img src="https://img.icons8.com/stickers/30/undefined/import-pdf-2.png"/>
            আপনার সিভি আপলোড করুন
          </div>
        </div>
        <input @change="onPdf" data-required="image" ref="inputFile"
               type="file" name="image_name" id="file"
               accept="application/pdf"
               class="image-input" data-traget-resolution="image_resolution"
               value="">
      </label>
      </div>
    </div>
  </div>

  <div class="modal fade" :class="{ show: show, 'd-block': show }" tabindex="-1" aria-labelledby="exampleModalForm"
       aria-hidden="true">
    <div class="modal-dialog modal-danger modal-dialog-centered modal-" role="document">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="card bg-gray-200 shadow border-0 mb-0">
            <div v-if="uploadTime" class="progress mb-3 mt-5">
              <div id="progress-bar" class="progress-bar bg-gradient-primary" role="progressbar"
                   :style="'width:'+ uploadTime"
                   aria-valuenow="50"
                   aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <canvas class="canvas" v-if="file" ref="pdfViewer"></canvas>
            <div class="text-center">
              <pulse-loader class="mt-3" v-if="loader" :loading="loading" :color="color" :size="size"></pulse-loader>
            </div>
            <div class="card-body">
              <div v-if="file" class="mt-4">
                <button :class="{ disabled: loader }" type="button" v-on:click="uploadPdf"
                        class="btn bg-gradient-success w-auto me-2">Upload
                </button>
                <button :class="{ disabled: loader }" type="button" v-on:click="getUnits"
                        class="btn bg-gradient-danger w-auto me-2">Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'


export default {
  name: "FileUpload",
  components: {
    PulseLoader
  },
  data() {
    return {
      file: null,
      show: false,
      uploadTime: null,
      loader: false,
    }
  },
  methods: {
    click: function () {
      this.show = true;
    },
    onPdf(e) {
      this.click();
      const file = e.target.files[0],
          vm = this;
      if (file.type === "application/pdf") {
        this.file = file;
        const fileReader = new FileReader();
        fileReader.onload = function () {
          const pdfData = new Uint8Array(this.result);
          // Using DocumentInitParameters object to load binary data.
          const pdfjsLib = window['pdfjs-dist/build/pdf'];
          // The workerSrc property shall be specified.
          pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.js';
          const loadingTask = pdfjsLib.getDocument({data: pdfData});
          loadingTask.promise.then(function (pdf) {
            console.log('PDF loaded');

            // Fetch the first page
            const pageNumber = 1;
            pdf.getPage(pageNumber).then(function (page) {
              console.log('Page loaded');

              const scale = 1.5;
              const viewport = page.getViewport({scale: scale});

              // Prepare canvas using PDF page dimensions
              const canvas = vm.$refs.pdfViewer;
              const context = canvas.getContext('2d');
              canvas.height = viewport.height;
              canvas.width = viewport.width;

              // Render PDF page into canvas context
              const renderContext = {
                canvasContext: context,
                viewport: viewport
              };
              const renderTask = page.render(renderContext);
              renderTask.promise.then(function () {
                console.log('Page rendered');
              });
            });
          }, function (reason) {
            // PDF loading error
            console.error(reason);
          });
        };
        fileReader.readAsArrayBuffer(file);
      } else {
        Swal.fire('শুধুমাত্র পিডিএফ ফাইল আপলোড করুন।')
        this.getUnits();
      }
    },
    getUnits: function () {
      this.file = null;
      this.uploadTime = null;
      this.show = false;
      this.$refs.inputFile.value = null;
    },
    uploadPdf() {
      // const ext = this.file.name.split('.').pop();
      this.loader = true;
      const url = 'https://iwbk2wtb4e.execute-api.ap-southeast-1.amazonaws.com/dev/get-signed-url'
      if (this.file.type === "application/pdf") {
        axios.get(url).then(
            response => {
              const formData = new FormData();
              for (const [key, value] of Object.entries(response['data']['fields'])) {
                formData.append(key, value);
              }
              formData.append('file', this.file);
              axios.request({
                method: "post",
                url: response['data']['url'],
                data: formData,
                onUploadProgress: (p) => {
                  this.uploadTime = Math.round((p.loaded * 100) / p.total) + '%';
                }
              }).then(aa => {
                console.warn(aa)
                Swal.fire({
                  icon: 'success',
                  title: 'আপনার সিভি সঠিক ভাবে আপলোড হয়েছে ',
                  text: 'আমরা আপনাকে আপনার ইমেলের মাধ্যমে যোগাযোগ করবো।',
                  showConfirmButton: false,
                  timer: 3000
                })
                this.loader = false;
                this.getUnits();
              })
            }
        )
      } else {
        Swal.fire('শুধুমাত্র পিডিএফ ফাইল আপলোড করুন।')
      }
    }
  },
}
</script>

<style scoped>
h4, p, .subheading, .btn {
  font-family: 'Rubik', sans-serif !important;
  color: white;
}

.modal-dialog {
  min-width: 25% !important;
}

.canvas {
  height: 100% !important;
  width: 100% !important;
}

.subheading {
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 137.52%;
  letter-spacing: 0.02em;
}

.image-input {
  cursor: pointer;
  opacity: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
}

@media (max-width: 1024px) {
  .subheading {
    font-size: 20px;
  }

  .modal-dialog {
    min-width: auto !important;
  }
}

@media (max-width: 425px) {

}
</style>