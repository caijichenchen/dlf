<template>
	<base-layout :detailId="1688">
		<template v-slot:jsq>
			<sgtscf-counter-su></sgtscf-counter-su>
			<computing v-bind:countData = "countData"></computing>
			<result title="江苏省施工图审查费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterSu from "./sgtscf_counter_su.vue"
	import {sgtscfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfSu',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(sgtscfData('Su')),
			}
		},
		components:{
			sgtscfCounterSu
		}
	}
</script>

<style>

</style>
