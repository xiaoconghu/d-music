/*global Vue*/

/* weex initialized here, please do not move this line */
const router = require('./router');
const App = require('@/index.vue');
import '@/utils/validate'
import Loading from '@/core/api-server/index';

Vue.use(Loading);
new Vue(Vue.util.extend({el: '#root', router}, App));

weex.requireModule('storage').getItem('loginInfo', function (e) {
    if (e.result === 'success') {
        router.push('/home');
    } else {
        router.push('/login')
    }
});




