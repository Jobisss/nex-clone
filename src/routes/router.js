import Category from "@/pages/public/Category.vue";
import EventSale from "@/pages/public/EventSale.vue";
import Homepage from "@/pages/public/Home.vue";
import Signin from "@/pages/public/signin.vue";
import Signup from "@/pages/public/signup.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path : '/', 
    component : Homepage,
    name : 'home',
    meta : {
      layout : 'home-layout'
    }
  },
  {
    path : '/event-sale', 
    component : EventSale,
    name : 'event',
    meta : {
      layout : 'home-layout'
    }
  },
  {
    path : '/category-:category', 
    component : Category,
    name : 'category',
    meta : {
      layout : 'home-layout'
    }
  },
  {
    path : '/events/intro', 
    component : Category,
    name : 'intro',
    meta : {
      layout : 'home-layout'
    }
  },
  {
    path : '/signin', 
    component : Signin,
    name : 'signin',
    meta : {
      layout : 'sign-layout'
    }
  },
  {
    path : '/signup', 
    component : Signup,
    name : 'signup',
    meta : {
      layout : 'sign-layout'
    }
  },
  
]

export const router = createRouter({
  history : createWebHistory(),
  routes : routes
})

