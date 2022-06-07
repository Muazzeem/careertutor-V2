<template>
  <div class="card shadow-lg text-white shadow-none border bg-gradient-dark h-100 overflow-hidden">
    <div class="card-body align-items-center text-center">
      <div class="image-upload"><label style="cursor: pointer;" for="file">
        <div class="subheading mt-5 mb-5">Select or Drag or Drop File</div>
        <input @change="onPdf" data-required="image" ref="inputFile"
               type="file" name="image_name" id="file"
               accept="application/pdf"
               class="image-input" data-traget-resolution="image_resolution"
               value="">
      </label>
      </div>
    </div>
  </div>
  <canvas class="canvas" v-if="file" ref="pdfViewer"></canvas>
  <div v-if="file">
    <button type="button" v-on:click="uploadPdf" class="btn bg-gradient-success w-auto me-2">Success</button>
    <button type="button" v-on:click="getUnits" class="btn bg-gradient-danger w-auto me-2">Cancel</button>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: "FileUpload",
  data() {
    return {
      file: null,
    }
  },
  methods: {
    onPdf(e) {
      const file = e.target.files[0],
          vm = this;
      this.file = file;
      if (file.type === "application/pdf") {
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
      }
    },
    getUnits: function () {
      console.log('click')
      this.$refs.inputFile.value = null;
      this.file = null;
    },
    uploadPdf() {
      const ext = this.file.name.split('.').pop();
      const url = 'https://pwfsbltumc.execute-api.ap-southeast-1.amazonaws.com/dev/upload-cv?extension=' + ext
      axios.get(url).then(
          res => {
            const formData = new FormData();
            for (const [key, value] of Object.entries(res['data']['fields'])) {
              console.log(key, value);
              formData.append(key, value);
            console.log(formData);
            axios.request({
              method: "post",
              url: ['data']['url'],
              data: formData,
            }).then(data => {
              console.log(data)
            })
            }
          }
      )
    },
    showModal() {
      console.log('aaa')
    },
  },
}
</script>

<style scoped>
h4, p, .subheading, .btn {
  font-family: 'Rubik', sans-serif !important;
  color: white;
}

.canvas {
  height: 50rem;
  width: 30rem;
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
</style>