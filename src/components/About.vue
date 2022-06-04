<template>
  <section>
    <div id="about" class="container-fluid py-5">
      <div class="row">
        <div class="col-md-6 mb-md-0 mb-4 mt-6">
          <h3 class="text-gradient text-dark mb-0">Our Service </h3>
          <p class="lead mb-md-5 mb-4 mt-3">
            Change the color to match your brand or vision, add your logo, choose the perfect thumbnail, remove the
            playbar, add controls and more.
          </p>
          <div class="d-flex pb-3">
            <div>
              <i class="fas fa-check text-success text-sm" aria-hidden="true"></i>
            </div>
            <div class="ps-3">
              <span class="text-sm">We help to review the CV and provide feedback</span>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="blur-shadow-image text-center">
            <div class="border-radius-lg max-height-600">
              <section class="py-6 cv-uploader">
                <div class="container-fluid">
                  <div class="justify-space-between py-2">
                    <div class="mx-auto">
                      <div class="card upload-card shadow border bg-gradient-dark overflow-hidden">
                        <div class="card-header bg-transparent text-sm-start text-center pt-4 pb-3 px-4">
                          <h5 class="mb-1 text-white">Upload your CV</h5>
                          <div class="file-upload-wrapper">
                            <div id="app">
                              <input class="file-upload" type="file" @change="onPdf"/><br>
                            </div>
                          </div>
                        </div>
                        <hr class="horizontal light my-0">
                      </div>
<!--                      <canvas class="canvas" ref="pdfViewer"></canvas>-->
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

  name: "AboutVue",
  methods: {
    onPdf(e) {
      const file = e.target.files[0],
          vm = this;
      if (file.type === "application/pdf") {
        const fileReader = new FileReader();
        fileReader.onload = function () {
          const pdfData = new Uint8Array(this.result);
          const pdfjsLib = window['pdfjs-dist/build/pdf'];
          // The workerSrc property shall be specified.
          pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.js';
          const loadingTask = pdfjsLib.getDocument({data: pdfData});
          loadingTask.promise.then(function (pdf) {
            console.log('PDF loaded');
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
    }
  }
}
</script>

<style scoped>
.file-upload {
  cursor: pointer;
  opacity: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
}
.upload-card{
  height: 10rem;
}
@media (max-width: 500px) {
  .py-6{
    padding: 0px !important;
  }
}
/*.canvas {*/
/*  height: 29.5rem !important;*/
/*  width: 25rem !important;*/
/*}*/
</style>