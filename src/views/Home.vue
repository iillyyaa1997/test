<template>

  <div class="container">

    <div class="header-wrapper">
          <div>
                  <img src="@/assets/comp2.jpg" width="1000 px" height="310 px" class="img"> 
          </div>
          <div class="header-text"> 
              <p >On this blog you will find the most important technical news. </p>
              <p>Also, you can add and edit news yourself!</p>
          </div>
     
      <div v-if="posts.length === 0">
        <h2>No articles found in the moment</h2>
      </div>
    </div>


    <div class="posts">
      <div class="post" v-for="post in posts" :key="post._id">
        <div class="post-body">
          <h2 class="post-title">{{ post.title }}</h2>
          <p class="">{{ post.body }}</p>
        </div>
 
        <div class="posts-footer">
          <div><small class="footer">Posted on: {{ post.date_posted }}</small></div>
          <div><small class="footer">by: {{ post.author }}</small></div>
          
          
        </div>
               <div class="posts-links">
          <router-link class="btn" :to="{name: 'Post', params: {id: post.id}}">View article</router-link>
          <router-link class="btn" :to="{name: 'Edit', params: {id: post.id}}">Edit article</router-link>
          <button class="btn  btn-succes" v-on:click="deletePost(post.id)">Delete artice</button>
        </div>
      </div>
    </div>
 
  </div>


  
  
</template>




<script>
import { server } from "@/utils/helper";
import axios from "axios";


export default {
  data(){
    return {
      posts: [],
      
    };  
  },
 
  
  created(){
    this.fetchPosts();
  },

  methods: {
    fetchPosts(){
      axios.get(`${server.baseURL}/blog/posts`).then(data => (this.posts = data.data));
    },

    deletePost(id){
      //deleteзапросы с телом нужно, чтобы он задавался под dataключ
      axios.delete(`${server.baseURL}/blog/${id}/delete`).then(data => {
        console.log(data);
        window.location.reload();
      });
    }
  }




};
</script>



<style scoped>
.container{
  position: relative;
  top: -100px;
}

.img{
  border: 5px solid #fff;
}

.header-text{
 position: relative;
 top: -70px;
} 

.header-text p {
color: white;
margin: 0 auto;
font-size: 11pt;
}
.post{
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  background-color: rgb(223, 223, 223);
  
  top: -30px;
  position: relative;
}
.post-body{
  
  text-align: center;
}

.btn{
  display: inline-block;
  background: rgb(223, 223, 223);
  border: none;
  text-decoration: none;
  font-family: Courier New;
  font-size: 11pt;
  color: black;
  padding: 4px 10px;
   border: 1px solid gray;

}

/* *{
  background-color: darkgray;

}
.photo{
 filter: alpha(Opacity=75); /* Полупрозрачность для IE */
    /* opacity: 0.75;
}

.post{

  
    display: block;
    height: 200px;
    text-align: center;
    width: 400px;
    background-color: white;
        margin-left: auto;
    margin-right: auto



}


.post-body {
  background-color: white;
} */ 


</style>