
const { createApp } = Vue;

createApp ({
    data() {
      return {
        listMail: [], 
      };
    },
    methods: {
        callEmailFromApi() {
            for (let i = 0; i < 10; i++) {
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