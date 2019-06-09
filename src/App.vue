<template>
  <div id="app">
    <router-link to="/" class="router">Router Main</router-link> | 
    <router-link to="/home" class="router">Router Home</router-link> | 
    <router-link to="component" class="router">Component Sample</router-link> | 
    <router-link to="axios-sample" class="router">Axios Sample</router-link> | 
    <router-link to="mixin-sample" class="router">Mixin Sample</router-link>
    
    <br>
    <router-view/>
  </div>
</template>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 50px 0 0 0;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.peopleDiv {
  padding:10px;
}
.characters {
  padding-top:20px;
}

.button-success {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px;
  cursor: pointer;
  width:200px;
}

.text {
  
  border: 1px solid gray;
  
  padding: 15px 32px;
  
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px;
  width:200px;
}

.button-success:hover {
  background-color: rgb(118, 212, 121);
  cursor: pointer;
}

.router {
  padding: 10px;
  color: #333333;
  text-decoration: none;
  border-radius: 3px;
  background-color: #fdfdfd;
}
.router:hover {
  background-color: #dedede;
}

.templateDiv {
  margin-top: 20px;
}
</style>

