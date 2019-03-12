import Vue from 'vue';
import Router from 'vue-router';
import Portal from './views/Portal.vue';
import Logout from "./views/Logout.vue";
import Example from './views/Example.vue';

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
    }
    
  ]
});
