import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas, fab);
// library.add(fab);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(ElementUI);
new Vue({
	render: (h) => h(App),
}).$mount('#app');
