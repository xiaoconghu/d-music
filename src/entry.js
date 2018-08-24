/*global Vue*/

/* weex initialized here, please do not move this line */
const router = require('./router');
const App = require('@/index.vue');
import '@/utils/validate'
import Loading from '@/core/api-server/index'

Vue.use(Loading);
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/home');


