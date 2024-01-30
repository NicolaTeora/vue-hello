const {createApp} = Vue;

createApp({
    data() {
      return {
        message: 'Hello Vue!',
        secondMessage: "Look me! I'm using Vue",
        logo: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Total_War_logo.png',
        positionText: 'text-center border p-2',
        count: 0,

        textMessage: {
            titleMessage: 'My Favourite game',
            textAreaMes: ''
        }
      }
    },
    
    methods: {
      upNumer(){
        if (this.count == 10){
          this.count = 0;
        } else {
          this.count++;
        }
      },
      
      resetNumber(){
        this.count = 0;
      }
    }
  }).mount('#root')