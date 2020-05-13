import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeComponent from '@/views/Home';
import EditComponent from '@/components/post/Edit';
import CreateComponent from '@/components/post/Create';
import PostComponent from '@/components/post/Post';
import AboutComponent from '@/components/post/About';
import InfoComponent from '@/components/post/Info';
import ContactsComponent from '@/components/post/Contacts';


Vue.use(VueRouter)

const routes = [

  { path: '/', redirect: { name: 'home' } },
  {
    path: '/home',
    name: 'home',
    component: HomeComponent
  },

  {
    path: '/edit/:id',
    name: 'Edit',
    
    component: EditComponent
  },

  {
    path: '/create',
    name: 'Create',
    component: CreateComponent
  },

  {
    path: '/post/:id',
    name: 'Post',
    component: PostComponent
  },

  {
    path: '/about',
  name: 'About',
  component: AboutComponent,
  },

  {
    path: '/info',
  name: 'Info',
  component: InfoComponent
  },

  {path: '/contact',
  name: 'Contact',
  component: ContactsComponent
  },
  
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
