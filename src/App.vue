<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
     
    </div> -->
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand"><img src="https://anyonecanlearntocode.com/assets/actualize-logo-158d4b4cceb72d78f91dbd8bde4eabb9c71a2eba651c10dbc5d4cbf6c96c3afa.png" width="30" height="30">Actualize Student Resume Portal</a>
        
        <span v-if= "isLoggedIn()">
        <ul class="nav-item">
              <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">My Resume</a>
        </ul>
        <ul class="nav-item">
              <a class="nav-link" tabindex="-1" aria-disabled="true">Edit Resume</a>
        </ul>
        <ul class="nav-item">
              <a class="nav-link" tabindex="-1" aria-disabled="true"><router-link to="/logout">Log Out</router-link></a>
        </ul>
        </span>
        <span v-else>
          <ul class="nav-item">
              <a class="nav-link"><router-link to="/example">Example Resume</router-link></a>
          </ul>
          <ul class="nav-item">
              <a class="nav-link"><router-link to="/">Login</router-link></a>
          </ul>
        </span>
      </nav>
    </div>
      
 

      
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
</style>
<script>
import axios from 'axios';


export default {
  // data: function() {
  //   return {
  //     user: {},
      
     

      
      
  //   };
  // },
  // created: function() {
  //   axios.get("/api/users/me").then(response => {
  //     console.log(response.data);
  //     this.user = response.data;
  //   });
  //   // .catch(error => {
  //   //   this.errors = error.response.data.errors;
  //   // });

  // },
  methods: {
    isLoggedIn: function() {
      return localStorage.getItem('jwt');
    },
  },
};
</script>
