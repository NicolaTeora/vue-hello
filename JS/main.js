const {createApp} = Vue;

createApp({
    data() {
      return {
        message: 'Hello Vue!',
        secondMessage: "look me! I'm using Vue",
        logo: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Total_War_logo.png',

        textMessage: {
            titleMessage: 'My Favourite game',
            textAreaMes: ''
        }
      }
    }
  }).mount('#root')