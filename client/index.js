import Vue from 'vue';
import Router from 'vue-router';
//ajax库
import vueResource from 'vue-resource';

//全局模板
import main from './main.vue';

//模块化编程需要use
Vue.use(Router);
Vue.use(vueResource);

const router = new Router();

router.map({
    '/index': {
        name: 'index', //index
        component: function (resolve) {
            require(['./views/index.vue'], resolve);
        },
    },
    '/view/*any': {
        name: 'view', //详情
        component: function (resolve) {
            require(['./views/apiview.vue'], resolve);
        },
    },
    '/codelist': {
        name: 'codelist', //详情
        component: function (resolve) {
            require(['./views/codelist.vue'], resolve);
        },
    },
});

router.redirect({
    '*':'/index'
});

router.start(main, '#app');
