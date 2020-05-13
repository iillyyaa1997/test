<template>
<div class="container">
    <h2>Contact us</h2>
    <h3>Write your question and leave your email address</h3>
    <form id="sendMessage" @submit.prevent="sendMessage">
         <div class="wrapper">
            <label for="name"></label>
            <input type="text" id="name" v-model="name" name="name" class="field" placeholder="enter your name">
        </div>

         <div class="wrapper">
            <label for="email"></label>
            <input type="text" id="email" v-model="email" name="email" class="field" placeholder="enter your email">
        </div>

         <div class="wrapper">
            <label for="text"></label>
            <input type="text" id="text" v-model="text" name="text" class="field" placeholder="enter your question">
        </div>
          <div class="wrapper btn-field">
            <button type="submit" class="btn btn-success"> Send your message </button>
        </div>

         
    </form>
</div>
    
</template>

<script>
import axios from 'axios';
import { server } from '../../utils/helper.js';
//import router from '../../router';



export default{ 
   
  data() {
    return {
        name: "",
        email: "",
        text: "",
    };},
        
    
      /* const data = { 'name': name, 'email':  email, 'text': text};
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url: `${server.baseURL}/blog/sendMessage`,
}; */


    methods: {
        
      sendMessage(){
          let sender = {
        name: this.name,
        email: this.email,
        text: this.text
        };
        
        
                
            
     this.__submitToServer(sender);
    },

    __submitToServer(data){
     axios.post(`${server.baseURL}/blog/sendMessage`, data).then(data => {
        console.log(data);
        
        //router.push({ name: "Contact" });
 });}

    /*     __submitToServer(dataBodyMessage){
              const qs = require('qs');
axios.post(`${server.baseURL}/blog/sendMessage`, qs.stringify(({ name, email, text })));
        } */

        /*
        __submitToServer(name, email, text) {
      axios.post(`${server.baseURL}/blog/sendMessage`, name, email, text).then((name, email, text) => {
        console.log(name, email, text);
        router.push({ name: "Contact" });
        });

        } */


       

    },

    
}
</script>

<style scoped>
.container{
    width: 500px;
    text-align: center;
    position: relative;
    margin-left: 500px;
}

.wrapper{
  clear: both;
  text-align: center;
}

.field{
  width: 300px;
}

#text{
  height: 40px;
}

.btn{
  margin-left: 30px;
}
</style>