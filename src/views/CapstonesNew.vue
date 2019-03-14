<template>
  <div class="capstones-new">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>New Capstone</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>Description:</label>
          <input type="text" class="form-control" v-model="description">
        </div>
        <div class="form-group">
          <label>Link:</label>
          <input type="text" class="form-control" v-model="url">
        </div>
        <div class="form-group">
          <label>Screenshot:</label>
          <input type="text" class="form-control" v-model="screenshot">
        </div>
        

        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  
  </div>
</template>

<style>
</style>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      capstone: {
        name: "",
        description: "",
        url: "",
        screenshot: ""
      },
      errors: []
    };
  },
  created: function() {
   
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        description: this.description,
        url: this.url,
        screenshot: this.screenshot
      };
      axios
        .post("/api/capstone/", params)
        .then(response => {
          console.log(response.data);
          this.$router.push("/students/me");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>