
const { createApp } = Vue;

createApp ({
    data() {
      return {
        listMail: []     
      };
    },
    methods: {
        callMailFromApi() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').
            then((response) => {
                const serverData = response.data;
                const singleMail = serverData.response;
                this.listMail.push(singleMail)                                                              
            }); 
        },
        mounted() {
           this.callMailFromApi()
        }        
    }
  }).mount('#app')