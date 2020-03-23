<template>
	<base-layout :detailId='153'>
		<template v-slot:jsq>
			<sgtscf-counter-guo></sgtscf-counter-guo>
			<computing v-bind:countData = "countData"></computing>
			<result title="施工图审查费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterGuo from "./sgtscf_counter_guo.vue"
	import {sgtscfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfGuo',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(sgtscfData('Guo')),
			}
		},
		components:{
			sgtscfCounterGuo
		}
	}
</script>

<style>

</style>
