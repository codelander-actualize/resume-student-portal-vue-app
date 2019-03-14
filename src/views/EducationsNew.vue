<template>
  <div class="educations-new">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Add Education</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Start Date:</label>
          <input type="text" class="form-control" v-model="start_date">
        </div>
        <div class="form-group">
          <label>End Date:</label>
          <input type="text" class="form-control" v-model="end_date">
        </div>
        <div class="form-group">
          <label>Degree:</label>
          <input type="text" class="form-control" v-model="degree">
        </div>
        <div class="form-group">
          <label>University Name:</label>
          <input type="text" class="form-control" v-model="university_name">
        </div>
        <div class="form-group">
          <label>Details:</label>
          <input type="text" class="form-control" v-model="details">
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
      education: {},
      errors: []
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
        start_date: this.start_date,
        end_date: this.end_date,
        degree: this.degree,
        university_name: this.university_name,
        details: this.details
      };
      axios
        .post("/api/educations/", params)
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
