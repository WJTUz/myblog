import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Blog = () => import('views/blogs/Blog')
const Apps = () => import('views/apps/Apps')
const MessageBoard = () => import('views/messageboard/MessageBoard')
const Others = () => import('views/others/Others')
const routes =[
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/blogs',
    component: Blog
  },
  {
    path: '/apps',
    component: Apps
  },
  {
    path: '/messageboard',
    component: MessageBoard
  },
  {
    path: '/others',
    component: Others
  }


]

const router = new VueRouter({
  routes,
  mode:'history'
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router