<template>
 
<div class="container">
    <h2>Create Post</h2>
    <form id="create-post-form"  @submit.prevent="createPost">
      <div class="main-wrapper">
        <div class="create-wrapper">
            <label for="title">Title</label>
            <input type="text" id="title" v-model="title" name="title" class="field" placeholder="enter title">
        </div>
        
    
        <div class="create-wrapper">
            <label for="description">Description</label>
            <input type="text" id="description" v-model="description" name="description" class="field" placeholder="enter description">
        </div>
    
    
        <div class="create-wrapper">
            <label for="body"> Write Content </label>
            <textarea id="body" cols="30" rows="5" v-model="body" class="field"></textarea>
        </div>
    
    
        <div class="create-wrapper">
            <label for="author"> Author </label>
            <input type="text" id="author" v-model="author" name="author" class="field" placeholder="enter author">
        </div>

    <!-- Добавить картинку -->
        
        <div class="create-wrapper btn-field">
            <button type="submit" class="btn btn-success"> Create Post </button>
        </div>
    </div>
    
    
    </form>
</div>



</template>



<script>
import axios from 'axios';
import { server } from '../../utils/helper.js';
import router from '../../router';

export default{ 
  data() {
    return {
      title: "",
      description: "",
      body: "",
      author: "",
      date_posted: ""
    };
    
  },

  created(){
      this.date_posted = new Date().toLocaleDateString();
  },

  methods: {
    createPost() {
      let postData = {
        title: this.title,
        description: this.description,
        body: this.body,
        author: this.author,
        date_posted: this.date_posted
      };
      this.__submitToServer(postData);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/blog/post`, data).then(data => {
        console.log(data);
        router.push({ name: "home" });
      });
    }
  }
};




</script>

<style scoped>
.create-wrapper{
  clear: both;
  text-align: right;
}
label{
  float: left;
padding-right: 10px;
  
}
input{
  width: 300px;
  margin-bottom: 10px;
}

input{
  width: 300px;
}
textarea{
  width: 300px;
}
.main-wrapper{
  float: left;
  position: relative;
  right: -550px;
}




</style>
