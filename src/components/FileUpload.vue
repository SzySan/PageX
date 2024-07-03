<template>
  <lr-config
    ctx-name="my-uploader"
    pubkey="89dc9f6c5208f7798233"
  />
  <lr-file-uploader-regular
    ctx-name="my-uploader"
  />
  <lr-upload-ctx-provider
    ctx-name="my-uploader"
    ref="ctxProviderRef"
    @change="handleChangeEvent"
  />
  <div>
    <div
      v-for="file in files"
      :key="file.cdnUrl"
    >
      <img
        :src="file.cdnUrl"
        :alt="file.fileInfo.originalFilename"
      />
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import * as LR from '@uploadcare/blocks';
  import "@uploadcare/blocks/web/lr-file-uploader-regular.min.css"

  LR.registerBlocks(LR);

  const files = ref([]);
  const ctxProviderRef = ref(null);

  function handleChangeEvent(event) {
    if (event.detail) {
      files.value = event.detail.allEntries.filter((file) => file.status === 'success');
    }
  }








//   import $ from 'jquery'
  
//   export default {
//   data() {
//     return {
//       file: null
//     };
//   },
//   methods: {
//     onFileChange(event) {
//       this.file = event.target.files[0];
//     },
//     uploadFile() {
//       if (!this.file) {
//         alert("Please select a file first.");
//         return;
//       }

//       let formData = new FormData();
//       formData.append("file", this.file);

//       $.ajax({
//         url: 'http://localhost:5081/api/FileUpload/upload', // Use HTTP URL if not using HTTPS
//         type: 'POST',
//         data: formData,
//         processData: false,
//         contentType: false,
//         success: (response) => {
//           alert(`File uploaded successfully: ${response.fileName}`);
//         },
//         error: (xhr, status, error) => {
//           console.error("There was an error uploading the file!", error);
//           alert("There was an error uploading the file.");
//         }
//       });
//     }
//   }
// };
  </script>
  
  <style scoped>
  .file-upload {
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
  }
  .file-upload input {
    margin-bottom: 10px;
  }
  </style>