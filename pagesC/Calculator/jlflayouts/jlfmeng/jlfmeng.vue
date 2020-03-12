<template>
	<base-layout :detailId="1649">
		<template v-slot:jsq>
			<jlfmeng-counter-guo></jlfmeng-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="内蒙古监理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import jlfmengCounterGuo from "./jlfmeng_counter_guo.vue"
	import {jlfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/jlfMeng',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(jlfData('Meng')),
			}
		},
		components:{
			jlfmengCounterGuo
		}
	}
</script>

<style>

</style>
