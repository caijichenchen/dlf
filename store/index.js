import Vue from "vue"
import Vuex from "vuex"

import user from "@/store/modules/user.js"
import hot from "@/store/modules/hot.js"
import oneClick from "@/store/modules/oneClick.js"

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		user,
		hot,
		oneClick
	}
})