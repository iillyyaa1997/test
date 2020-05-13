<template>
    <div class="container">
        <div class="btn-wrapper">
            <button v-on:click="navigate()" class="btn-nav">View all posts</button>
        </div>
    <hr>
        <div class="post-container">
            <h2>{{ post.title }}</h2>
            <h5>Artiсle by{{ post.author }}, {{ post.date_posted }}</h5>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { server } from '../../utils/helper.js';
import router from '../../router'; 
export default{
    data(){
        return {
            id: 0,
            post: {}
            };
    },

    created(){
        this.id = this.$route.params.id;
        this.getPost();
    },


    methods: {
        getPost(){
            axios.get(`${server.baseURL}/blog/post/${this.id}`).then(data => (this.post = data.data));
        
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
}
.post-container{
    width: 600px;
    margin: auto;
}

</style>