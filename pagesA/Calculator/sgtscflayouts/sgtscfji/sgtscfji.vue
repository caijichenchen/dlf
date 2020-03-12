<template>
	<base-layout :detailId="248">
		<template v-slot:jsq>
			<sgtscf-counter-ji></sgtscf-counter-ji>
			<computing v-bind:countData = "countData"></computing>
			<result title="河北省施工图审查费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterJi from "./sgtscf_counter_ji.vue"
	import {sgtscfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfJi',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(sgtscfData('Ji')),
			}
		},
		components:{
			sgtscfCounterJi
		}
	}
</script>

<style>

</style>
