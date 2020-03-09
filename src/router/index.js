import VueRouter from 'vue-router'
import Vue from 'vue'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Message from '../views/Message.vue'
import MessageItems from '../views/MessageItems.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
              {
                  path: '/home/news',
                  component: News 
              },
              {
                  path: '/home/message',
                  component: Message,
                  children: [
                      {
                          path: '/home/message/details/:id',
                          component: MessageItems
                      }
                  ]
              },
              {
                  path: '',
                  redirect: '/home/news'
              }
            ]
        },
        {
            path: '/',
            redirect: '/about'
        }
    ]
})