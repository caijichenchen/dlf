<template>
	<base-layout :detailId="328">
		<template v-slot:jsq>
			<sgtscf-counter-xiang></sgtscf-counter-xiang>
			<computing v-bind:countData = "countData"></computing>
			<result title="湖南省施工图审查费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterXiang from "./sgtscf_counter_xiang.vue"
	import {sgtscfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfXiang',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(sgtscfData('Xiang')),
			}
		},
		components:{
			sgtscfCounterXiang
		}
	}
</script>

<style>

</style>
