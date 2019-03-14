<template>
  <div class="students-show">
  <h2>Your Info</h2>
  
  <div>
    <p>First Name: {{student.first_name}}</p>
    <p>Last Name: {{student.last_name}}</p>
    <p>email: {student.email}}</p>
    <p>Phone Number: {{student.phone_number}}</p>
    <p>LinkedIn: {{student.linkedin_url}}</p>
    <p>Twitter: {{student.twitter_handle}}</p>
    <p>Personal Blog: {{student.personal_blog}}</p>
    <p>Resume: {{student.online_resume_url}}</p>
    <p>Github: {{student.github_url}}</p>
    <p>Photo: {{student.photo_url}}</p>
    <router-link v-bind:to="'/students/me/edit'">Edit Info</router-link>


    <h2>Experience</h2>
    <div v-for="experience in student.experiences">
       <p>Start Date: {{experience.start_date}}</p>
       <p>End Date: {{experience.end_date}}</p>
       <p>Job Title: {{experience.job_title}}</p>
       <p>Company: {{experience.company_name}}</p>
       <p>Details: {{experience.details}}</p>
       <router-link v-bind:to="'/experiences/' + experience.id + '/edit'">Edit Experience</router-link>
    </div>
    <router-link v-bind:to="'/experiences/new'">Add An Experience</router-link>


    <h2>Education</h2>
    <div v-for="education in student.educations">
       <p>Start Date: {{education.start_date}}</p>
       <p>End Date: {{education.end_date}}</p>
       <p>Degree: {{education.degree}}</p>
       <p>University: {{education.university}}</p>
       <p>Details: {{education.details}}</p>
       <router-link v-bind:to="'/educations/' + education.id + '/edit'">Edit Education</router-link>
    </div>
    <router-link v-bind:to="'/educations/new'">Add Education</router-link>


    <h2>Skills</h2>
    <div v-for="skill in student.skills">
       <p>{{skill.skill_name}}
      <button v-on:click="destroySkill()">Delete</button></p>
    </div>
    <form v-on:submit.prevent="submit()">
       <div>
         Add a Skill: <input type="text" class="form-control" v-model="skill_name">
       </div>
       <div>
         <input type="submit" value="Create">
       </div>
    </form>


    <h2>Capstone</h2>
    <div v-for="capstone in student.capstones">
       <p>Name: {{capstone.name}}</p>
       <p>Description: {{capstone.description}}</p>
       <p>Link: {{capstone.url}}</p>
       <p>Photo: {{capstone.image_url}}</p>
       <router-link v-bind:to="'/capstones/' + capstone.id + '/edit'">Edit Capstone</router-link>
    </div>
    <router-link v-bind:to="'/capstones/new'">Add A Capstone</router-link>
  </div>


  </div>
</template>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      skill_name: "",
      student: {
        id: 1,
        first_name: "test",
        last_name: "dummy",
        email: "test@gmail.com",
        phone_number: "123-4567",
        short_bio: "sdfojsfpojpwofj",
        linkedin_url: "linkedin/in/testdummy",
        twitter_handle: "@test_dummy",
        personal_blog: "testdummy.com",
        online_resume_url: "testdummy.com/resume",
        github_url: "github.com/testdummy",
        photo_url: "photo_test",
        experiences: [
          {
            id: 1,
            start_date: "1-1-1",
            end_date: "12-12",
            job_title: "dummy",
            company_name: "test",
            details: "working at test company"
          },
          {
            id: 2,
            start_date: "12-1-1",
            end_date: "1-2-12",
            job_title: "dummy1",
            company_name: "test1",
            details: "working as a dummy at test company"
          }
        ],
        educations: [
          {
            id: 1,
            start_date: "12-1-1",
            end_date: "123-12",
            degree: "BA",
            university_name: "ABC U",
            details: "Degree in sales"
          },
          {
            id: 2,
            start_date: "112-1-1",
            end_date: "2123-12",
            degree: "BAS",
            university_name: "ABC JU",
            details: "Degree in nothing"
          }
        ],
        skills: [
          {
            id: 1,
            skill_name: "ruby"
          },
          {
            id: 2,
            skill_name: "html"
          }
        ],
        capstones: [
          {
            id: 1,
            name: "cappy",
            description: "a capstone",
            url: "capstone.com",
            image_url: "screenshot.com"
          },
          {
            id: 2,
            name: "cap 2",
            description: "cap 2123-12",
            url: "cap.com",
            image_url: "screen.com"
          }
        ]
      }
    };
  },
  created: function() {
    axios.get("api/students/me").then(response => {
      console.log(response.data);
      this.student = response.data;
    });
  },
  methods: {
    destroySkill: function() {
      axios.delete("api/skills/" + this.skill.id).then(response => {
        console.log("Successfully Removed Skill", response.data);
        this.$router.push("/students/me");
      });
    },
    submit: function() {
      var skillParams = {
        skill_name: this.skill_name
      };
      axios
        .post("api/skills", skillParams)
        .then(response => {
          console.log("Success", response.data);
          this.$router.push("/students/me");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
        });
    }
  }
};
</script>
