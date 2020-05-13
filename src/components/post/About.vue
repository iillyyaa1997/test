<template>
    <body>
        
        <div class="container">
            <h3>Welcome!</h3>
<p class="text">This website demonstrates the use of Vue.js for a Single-Page Application. </p>
<img class="img" src="@/assets/vuejs-tutorial.png" alt="">
<p class="text"> For backend, NestJS, TypeORM and the MySQL database are used.</p>
<img class="img"  src="@/assets/1_tYxUhTOpBoFIdnNWKxakow.jpg" alt="">
<p>On this page you can create your own note and sign it. 
    Your request will go to the server. The note will be saved in
     the database and other users will be able to see it.</p>
<p>If you click on "Contact", you can write a letter to the developer. The server will send your email to the developer!</p>
<p>With these technologies you can realize any idea and task.</p>


        </div>




    </body>
</template>



<script>
export default {
 
}
</script>


<style scoped>
.img{
    width: 400px;
    height: 200px;
    
}


.container{
   text-align: center;
   margin-left: 270px;
   margin-top: 0px;
   padding-top: 20px;
}

h3{
    text-align: center;
}


</style>