import Vuex from "vuex";

import Vue from "vue";

Vue.use(Vuex);


export default new Vuex.Store({
	state: {
		token: "",
		loading: false
	},
	mutations: {
		loading_show(state) {
			state.loading = true;
		},
		loading_hide(state) {
			state.loading = false;
		},
		update_token(state, a) {
			// 更新token 并存入localStorage,防止页面刷新重置token
			state.token = a;
			localStorage.token = a;
		}
	}
})