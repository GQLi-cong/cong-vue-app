import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import './api/mock'
import Cookie from 'js-cookie'

Vue.config.productionTip = false

Vue.use(ElementUI)

// 添加全局前置导航首位
router.beforeEach((to, from, next) => {
  // 判断 token 是否存在
  const token = Cookie.get('token');
  // token 不存在，说明当前用户未登录，应跳转至登录页
  if (!token && to.name !== 'login') {
    next({ name: 'login' });
  }
  else if (token && to.name === 'login') { // token 存在，跳转至首页
    next({ name: 'home' });
  }
  else {
     next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit('addMenu', router);
  }
}).$mount('#app')
