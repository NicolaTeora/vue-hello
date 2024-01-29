const {createApp} = Vue;

createApp({
    data() {
      return {
        message: 'Hello Vue!',
        secondMessage: "look me! I'm using Vue",

        textMessage: {
            titleMessage: 'Title message',
            textAreaMes: ''
        }
      }
    }
  }).mount('#root')