<!-- eslint-disable vue/multi-word-component-names -->
<script >

import FileUpload from '@/components/FileUpload.vue';


export default {
  
  name: 'upload',
  components: {
      
      FileUpload,
  }
}

</script>

<template>

    <div class="text-center">
        <h1>Dodaj plik</h1>
    </div>
    <div>
        <FileUpload />
    </div>
    
</template>