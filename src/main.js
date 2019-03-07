
import Vue from 'vue'
import App from './App'
import router from './router';

import store from "@/store/index.js";

Vue.config.productionTip = false;

import "@/assets/common.css";

import axios from "axios";

// 引入elementui
import { MessageBox } from "element-ui";

Vue.prototype.$alert = MessageBox.alert;

Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})