<template>
  <div class="container">
    <div class="btn-wrapper">
      <button v-on:click="navigate()" class="btn-nav btn-success">View all posts</button>
    </div>
    <div class="section">
      <h2>Edit Post</h2>
      <div >
        <form @submit.prevent="editPost" id="edit-post-form" class='clearfix:after'>
        <div class="main-wrapper">     
        
         <div class="edit-wrapper wrapper">
          <label for="title">Title</label>
          <input
            type="text"
            id="title"
            v-model="post.title"
            name="title"
            class="title-field"
            placeholder="enter title"
          />
        </div>
        <div class="edit-wrapper wrapper">
          <label for="description">Description</label>
          <input
            type="text"
            id="description"
            v-model="post.description"
            name="description"
            class="desc-field"
            placeholder="enter description"
          />
        </div>
        <div class="edit-wrapper wrapper">
          <label for="body">Edit text</label>
          <textarea id="body" cols="30" rows="5" v-model="post.body" class="body-field"></textarea>
        </div>
        <div class="edit-wrapper wrapper">
          <label for="author">Author</label>
          <input
            type="text"
            id="author"
            v-model="post.author"
            name="author"
            class="author-field"
            placeholder="enter author"
          />
        </div>

       
        <div class="edit-wrapper btn-field">
        <button type="submit" class="btn-edit btn-success">Edit this post</button> 
          
        </div>
        </div>
   
      </form></div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { server } from '../../utils/helper.js';
import router from '../../router'; 
export default {
    data(){
        return{
            id: 0,
            
            post: {}
        };
    },

    created(){
        this.id = this.$route.params.id;
        console.log(this.$route.params.id);
        //var myPostId = Number(this.$route.params.id);
        this.getPost();
    },
    
    methods: 
    {
             getPost(){
            axios.get(`${server.baseURL}/blog/post/${this.id}`)
            .then(data => {this.post = data.data});
        },
        editPost(){
               let postData = {
                title: this.post.title,
                description: this.post.description,
                body: this.post.body,
                author: this.post.author,
                date_posted: this.post.date_posted
            };
        axios
        .put(`${server.baseURL}/blog/edit/${this.id}`, postData)
        .then(data => {
          router.push({ name: "home" });
          console.log(data);
        });
       
        },
 
        navigate(){
            router.go(-1);
        }

    }


};
</script>


<style scoped>
.btn-nav{
    background-color: rgb(184, 184, 184);
    top: -50px;
    position: relative;
    padding: 10px 20px;
    border: 2px solid white;
    font-family: Courier New;
        font-weight: bold;
}


.wrapper{
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
textarea{
  width: 300px;
  margin-bottom: 10px;
}
.main-wrapper{
  float: left;
  position: relative;
  right: -550px;

}

.btn-edit{
  background-color: rgb(123, 214, 158);
   position: relative;
   right: 20px;
    padding: 15px 25px;
    border: 2px solid white;
    font-family: Courier New;
    font-weight: bold;
}


</style>

