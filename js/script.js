
const { createApp } = Vue;

createApp ({
    data() {
      return {
        listMail: [],
        listMailLength: 10,  
      };
    },
    methods: {
        callEmailFromApi() {
            for (let i = 0; i < this.listMailLength; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').
                then((response) => {
                    const serverData = response.data;
                    console.log(serverData);
                    const email = serverData.response;
                    this.listMail.push(email);
                });
            }
        }    
    },
    mounted() {
        this.callEmailFromApi()
    }     
  }).mount('#app')