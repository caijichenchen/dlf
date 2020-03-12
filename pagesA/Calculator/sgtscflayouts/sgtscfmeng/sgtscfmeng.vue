<template>
	<base-layout :detailId="929">
		<template v-slot:jsq>
			<sgtscf-counter-meng></sgtscf-counter-meng>
			<computing v-bind:countData = "countData"></computing>
			<result title="内蒙古施工图审查费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterMeng from "./sgtscf_counter_meng.vue"
	import {sgtscfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfMeng',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(sgtscfData('Meng'))
			}
		},
		components:{
			sgtscfCounterMeng
		}
	}
</script>

<style>

</style>
