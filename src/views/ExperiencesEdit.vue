<template>
  <div class="experiences-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Edit Your Experience</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Start Date:</label>
          <input type="text" class="form-control" v-model="experience.start_date">
        </div>
        <div class="form-group">
          <label>End Date:</label>
          <input type="text" class="form-control" v-model="experience.end_date">
        </div>
        <div class="form-group">
          <label>Job Title:</label>
          <input type="text" class="form-control" v-model="experience.job_title">
        </div>
        <div class="form-group">
          <label>Company Name:</label>
          <input type="text" class="form-control" v-model="experience.company_name">
        </div>
        <div class="form-group">
          <label>Details:</label>
          <input type="text" class="form-control" v-model="experience.details">
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
      experience: {
        id: 1,
        start_date: "1-1-1",
        end_date: "12-12",
        job_title: "dummy",
        company_name: "test",
        details: "working at test company"
      }
    };
  },
  created: function() {
    // axios.get("/api/experiences/" + this.$route.params.id).then(response => {
    //   console.log(response.data);
    //   this.experience = response.data;
    // });
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/users/me");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
