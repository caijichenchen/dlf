<template>
	<base-layout :detailId="1924">
		<template v-slot:jsq>
			<jlfgui-counter-guo></jlfgui-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="广西省监理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jlfguiCounterGuo from "./jlfgui_counter_guo.vue"
	import {jlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfGui',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(jlfData('Gui'))
			}
		},
		components:{
			jlfguiCounterGuo
		}
	}
</script>

<style>

</style>
