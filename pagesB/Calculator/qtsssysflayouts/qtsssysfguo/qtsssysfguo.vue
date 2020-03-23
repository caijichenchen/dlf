<template>
	<base-layout :detailId="102">
		<template v-slot:jsq>
			<qtsssysf-counter-guo></qtsssysf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="取土、水、石试样收费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import qtsssysfCounterGuo from "./qtsssysf-counter-guo.vue"
	import {qtsssysfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/qtsssysfGuo',  //api请求
					count:4  //积分消耗
				},
				result:JSON.parse(JSON.stringify(qtsssysfData)),
			}
		},
		components:{
			qtsssysfCounterGuo
		}
	}
</script>

<style>

</style>
