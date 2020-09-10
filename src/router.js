import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultPage from '@/layout/default'
import Index from '@/pages/index.vue'
import changeCity from '@/pages/changeCity.vue'
import Login from '@/pages/login.vue'
import Register from '@/pages/register.vue'
Vue.use(VueRouter);


export default new VueRouter({
    mode: 'hash',
    routes: [{
            path: '/', // 默认模板页(header/footer)
            name: 'DefaultPage',
            component: DefaultPage,
            redirect: './index', // 重定向到index页
            children: [{
                    path: '/index', // 主页
                    name: 'index',
                    component: Index,
                },
                {
                    path: '/changeCity', // 切换城市页
                    name: 'changeCity',
                    component: changeCity,

                }
            ]
        },
        {
            path: '/login', // 登录页面
            name: 'login',
            component: Login
        },
        {
            path: '/register', // 注册页面
            name: 'register',
            component: Register
        }
    ]
});