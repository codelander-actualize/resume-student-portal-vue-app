import Vue from 'vue';
import Router from 'vue-router';
import Portal from './views/Portal.vue';
import Logout from "./views/Logout.vue";
import Example from './views/Example.vue';
import StudentsShow from './views/students/Show.vue';
import ExperiencesEdit from './views/ExperiencesEdit.vue';
import StudentsEdit from './views/students/Edit.vue';
import EducationsEdit from './views/EducationsEdit.vue';
import CapstonesEdit from './views/CapstonesEdit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'portal',
      component: Portal
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/example',
      name: 'example',
      component: Example
    },
    {
      path: '/students/me',
      name: 'students-show',
      component: StudentsShow
    },
    {
      path: '/experiences/:id/edit',
      name: 'experiences-edit',
      component: ExperiencesEdit
    },
    {
      path: '/students/me/edit',
      name: 'students-edit',
      component: StudentsEdit
    },
    {
      path: '/educations/:id/edit',
      name: 'eduations-edit',
      component: EducationsEdit
    },
    {
      path: '/capstones/:id/edit',
      name: 'capstones-edit',
      component: CapstonesEdit
    }     
  ]
});
