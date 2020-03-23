<template>
	<base-layout :detailId='120'>
		<template v-slot:jsq>
			<sgtscf-counter-e></sgtscf-counter-e>
			<computing v-bind:countData = "countData"></computing>
			<result title="湖北省施工图审查费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterE from "./sgtscf_counter_e.vue"
	import {sgtscfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfE',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(sgtscfData('E'))
			}
		},
		components:{
			sgtscfCounterE
		}
	}
</script>

<style>

</style>
