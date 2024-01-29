const {createApp} = Vue;

createApp({
    data() {
      return {
        message: 'Hello Vue!',
        messageSecond: 'look me! I use Vue'
      }
    }
  }).mount('#root')