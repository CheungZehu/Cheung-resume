import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "./mutations";
import actions from "./actions"

Vue.use(Vuex);

const state = {
	"status": "100",
	"result": [
		{
			"name": "张三",
			"age": 20,
			"email": "111@qq.com"
		},
		{
			"name": "李四",
			"age": 22,
			"email": "222@qq.com"
		},
		{
			"name": "王五",
			"age": 24,
			"email": "222@qq.com"
		}
	]
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})