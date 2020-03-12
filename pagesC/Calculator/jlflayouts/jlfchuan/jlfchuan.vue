<template>
	<base-layout :detailId="1035">
		<template v-slot:jsq>
			<jlfchuan-counter-guo></jlfchuan-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="四川省监理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jlfchuanCounterGuo from "./jlfchuan_counter_guo.vue"
	import {jlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfChuan',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(jlfData('Chuan'))
			}
		},
		components:{
			jlfchuanCounterGuo
		}
	}
</script>

<style>

</style>
