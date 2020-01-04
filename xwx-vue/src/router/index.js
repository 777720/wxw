import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import WomenList from '../views/women-list'
import ManList from '../views/man-list'
import ProductDetails from '../views/product-detail'
import ContactUs from '../views/contact-us'
import AboutUs from '../views/about-us'
import SendEmail from '../views/send-email'
import WhatNewList from '../views/what-new-list'
import HomeLink from '../views/home-link'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/list',
  //   name: 'shop-list',
  //   children: [
  //     { path: 'man/:id', components: ShopList },
  //     { path: 'women/:id', components: ShopList }
  //   ]
  // },
  {
    path: '/home-link',
    name: 'HomeLink',
    component: HomeLink
  },
  {
    path: '/manlist',
    name: 'ManList',
    component: ManList
  },
  {
    path: '/womenlist',
    name: 'WomenList',
    component: WomenList
  },
  {
    path: '/whatnewlist',
    name: 'whatNewList',
    component: WhatNewList
  },
  {
    path: '/details/:id',
    name: 'product-detail',
    component: ProductDetails
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactUs
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutUs
  },
  {
    path: '/send-email',
    name: 'SendEmail',
    component: SendEmail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/wxw/',
  routes
})

export default router
