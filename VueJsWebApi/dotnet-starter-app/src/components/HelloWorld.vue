<template>
  <div>
    {{message}}    
  <div>
    <button @click="callWebApi">Call api for Hello World</button>
  </div>
  </div>
</template>

<script>
import helloWorldService from '../services/HelloWorld.service.js';
import store from '../store/helloWorld.store.js';

export default {
  name: 'hello-world',
  methods:{
    callWebApi(){
      helloWorldService.callWebApi().subscribe(newMessage => (store.commit('saveMessage', newMessage)));
    }
  },
  computed: {
    message() {
      return store.state.message;
    }
  }
};
</script>

<style lang="scss">
</style>
