import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/home.vue'
import about from '../views/about.vue'
import secret from '../views/secret.vue'
import register from '../views/register.vue'
import login from '../views/login.vue'
import store from '../store/store.js'
import readmore from '../components/readmore.vue'
import Edit from '../components/edit.vue'

const routes=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:home,
            name:'home'
        },
        {
            path:'/about',
            component:about
        },
        {
            path:'/secrets',
            component:secret,
            async beforeEnter (to, from, next) {
                try {
                    const ok=await store.getters.isLoggedIn
                    if(ok)
                    {
                        next()
                    }
                    else
                    {
                        next({
                            name:'home'
                        })
                    }
                } catch (error) {
                    next({
                        name:'home'
                    })
                }
                
            }
        },
        {
            path:'/register',
            component:register
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/readmore/:id',
            name:'readmore',
            component:readmore,
            props:true
        },
        {
            path:'/edit/:id',
            name:'edit',
            component:Edit,
            props:true
        }

    ]
})


  

export default routes