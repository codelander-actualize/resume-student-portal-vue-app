import Vue from 'vue';
import Router from 'vue-router';
import Portal from './views/Portal.vue';
import Logout from "./views/Logout.vue";
import Example from './views/Example.vue';
import StudentsShow from './views/students/Show.vue';
import StudentsEdit from './views/students/Edit.vue';
import ExperiencesEdit from './views/ExperiencesEdit.vue';
import EducationsEdit from './views/EducationsEdit.vue';
import CapstonesEdit from './views/CapstonesEdit.vue';
import CapstonesNew from './views/CapstonesNew.vue';
import EducationsNew from './views/EducationsNew.vue';
import ExperiencesNew from './views/ExperiencesNew.vue';

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
      path: '/students/me/edit',
      name: 'students-edit',
      component: StudentsEdit
    },
    {
      path: '/experiences/new',
      name: 'experiences-new',
      component: ExperiencesNew
    },
    {
      path: '/experiences/:id/edit',
      name: 'experiences-edit',
      component: ExperiencesEdit
    },
    
    {
      path: '/educations/new',
      name: 'educations-new',
      component: EducationsNew
    },  
    {
      path: '/educations/:id/edit',
      name: 'eduations-edit',
      component: EducationsEdit
    },
    {
      path: '/capstones/new',
      name: 'capstones-new',
      component: CapstonesNew
    },
    {
      path: '/capstones/:id/edit',
      name: 'capstones-edit',
      component: CapstonesEdit
    }
      
  ]
});
