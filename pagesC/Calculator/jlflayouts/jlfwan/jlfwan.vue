<template>
	<base-layout :detailId="1582">
		<template v-slot:jsq>
			<jlfwan-counter-guo></jlfwan-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="安徽省监理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jlfwanCounterGuo from "./jlfwan_counter_guo.vue"
	import {jlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfWan',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(jlfData('Wan'))
			}
		},
		components:{
			jlfwanCounterGuo
		}
	}
</script>

<style>

</style>
