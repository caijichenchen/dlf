<template>
	<base-layout :detailId="327">
		<template v-slot:jsq>
			<jlfxiang-counter-guo></jlfxiang-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="湖南省监理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jlfxiangCounterGuo from "./jlfxiang_counter_guo.vue"
	import {jlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfXiang',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(jlfData('Xiang'))
			}
		},
		components:{
			jlfxiangCounterGuo
		}
	}
</script>

<style>

</style>
