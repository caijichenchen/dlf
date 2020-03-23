<template>
	<base-layout :detailId="253">
		<template v-slot:jsq>
			<sgtscf-counter-min></sgtscf-counter-min>
			<computing v-bind:countData = "countData"></computing>
			<result title="福建省施工图审查费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterMin from "./sgtscf_counter_min.vue"
	import {sgtscfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfMin',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(sgtscfData('Min'))
			}
		},
		components:{
			sgtscfCounterMin
		}
	}
</script>

<style>

</style>
