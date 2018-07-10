<template>
  <div>
    {{message}}  
  </div>  
</template>

<script>
import HelloWorldService from '../services/HelloWorld.service.js';

export default {
  name: 'hello-world',
  data() {
    return {
      message: ''
    };
  },
  mounted() {
    var helloWorldService = new HelloWorldService();
    helloWorldService.callWebApi().subscribe(x => (this.message = x));
  }
};
</script>

<style lang="scss">
</style>
