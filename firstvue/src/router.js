import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'

Vue.use(Router);
const routes = [
   { 
    path: '/home',
        component: Home,
        name: 'home'
   },
   {
    path: '/',
    component: Home
  }
   
   ];
 
const scrollBehavior = (to, from, savedPosition) => {
    if(savedPosition){
        return savedPosition
    }else{
        return { x: 0, y: 0 }
    }
}

const router = new Router({
    mode: 'history',
    routes,
    scrollBehavior
})

export default router