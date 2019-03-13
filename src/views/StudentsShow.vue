<template>
  <div class="students-show">
  <h2>Your Info</h2>
  <div>
    <p>{{student.first_name}}</p>
    <p>{{student.last_name}}</p>
    <p>{{student.email}}</p>
    <p>{{student.phone_number}}</p>
    <p>{{student.linkedin_url}}</p>
    <p>{{student.twitter_url}}</p>
    <p>{{student.personal_blog_website_url}}</p>
    <p>{{student.resume_url}}</p>
    <p>{{student.github_url}}</p>
    <p>{{student.photo_url}}</p>
    <div v-for="experience in student.experiences">
       <p>{{experience.start_date}}</p>
       <p>{{experience.end_date}}</p>
       <p>{{experience.job_title}}</p>
       <p>{{experience.company}}</p>
       <p>{{experience.details}}</p>
    </div>

    <div v-for="education in student.educations">
       <p>{{education.start_date}}</p>
       <p>{{education.end_date}}</p>
       <p>{{education.degree}}</p>
       <p>{{education.university}}</p>
       <p>{{education.details}}</p>
    </div>

    <div v-for="skill in student.skills">
       <p>{{skill.skill}}</p>
    </div>

    <div v-for="capstone in student.capstones">
       <p>{{capstone.name}}</p>
       <p>{{capstone.description}}</p>
       <p>{{capstone.url}}</p>
       <p>{{capstone.screenshot}}</p>
    </div>

  </div>


  </div>
</template>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      student: {
        id: 1,
        first_name: "test",
        last_name: "dummy",
        email: "test@gmail.com",
        phone_number: "123-4567",
        short_bio: "sdfojsfpojpwofj",
        linkedin_url: "linkedin/in/testdummy",
        twitter_handle: "@test_dummy",
        personal_blog_website_url: "testdummy.com",
        resume_url: "testdummy.com/resume",
        github_url: "github.com/testdummy",
        photo_url: "photo_test",
        experiences: [
          {
            id: 1,
            start_date: "1-1-1",
            end_date: "12-12",
            job_title: "dummy",
            compnay_name: "test",
            details: "working at test company"
          },
          {
            id: 2,
            start_date: "12-1-1",
            end_date: "1-2-12",
            job_title: "dummy1",
            compnay_name: "test1",
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
            skill: "ruby"
          },
          {
            id: 2,
            skill: "html"
          }
        ],
        capstones: [
          {
            id: 1,
            name: "cappy",
            description: "a capstone",
            url: "capstone.com",
            screenshot: "screenshot.com"
          },
          {
            id: 2,
            name: "cap 2",
            description: "cap 2123-12",
            url: "cap.com",
            screenshot: "screen.com"
          }
        ]
      }
    };
  },
  created: function() {
    // axios.get("/api/students/me").then(response => {
    //   console.log(response.data);
    //   this.student = response.data;
    // });
  },
  methods: {}
};
</script>
