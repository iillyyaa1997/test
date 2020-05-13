<template>

<body>

  <div class="menu">
  <ul>
    <li><router-link class="link" :to="{name: 'About'}">About</router-link></li>
    <li><router-link  class="link" :to="{ name: 'Contact' }">Contacts</router-link></li>
    <li><router-link  class="link" :to="{name: 'Info'}">Information</router-link></li>
    
  </ul>
</div>
   <div id="app" >
    <div id="nav" class="background-img">
      <div class="links-container">
        <router-link to="/">Home|</router-link> 
        <router-link to="/create">Create</router-link>
      </div>
      
    </div>
    <router-view/>
  </div>

  
 
</body>


</template>


<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  text-align: center;
  font-family: Courier New, Avenir, Helvetica, Arial, sans-serif;
}
 .menu {
    float: left;
    width: 215px;
    
    display: block;
    position: absolute;
    top: 165px;
    padding: 10px; 
    background:#707070; 
    height: 100vh; 
    padding-top: 100px;
     z-index: 4;
    
   }

  .link{
    text-decoration: underline;
      color: white;
      font-family: Courier New;
  }

   li{
      list-style-type: none;
      padding: 0px;
      margin: 6px 10px 50px 0px;
     
      
      
   }
 ul {
   padding-left: 10px;
   margin-left: 20px;
   border-left: solid 3px rgb(194, 194, 194);
   
 } 
body{
  background: url('../src/assets/fieldgrey.jpg') no-repeat; 
   -moz-background-size: 100%; 
   -webkit-background-size: 100%;
   background-size: 100%;
}

.background-img{
  background-image: url(../src/assets/grey.jpg) ;
  height: 150px;
}
#nav a {
  font-weight: bold;
  color: #fff; 
}

.links-container{
  position: relative;
  top: 10px;
  margin-top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
} 


   /* */
 
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: darkgray;
}

#nav {
  padding: 30px;
  text-align: center;
  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
