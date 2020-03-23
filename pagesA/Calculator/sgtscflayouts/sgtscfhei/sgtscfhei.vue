<template>
	<base-layout :detailId="1644">
		<template v-slot:jsq>
			<sgtscf-counter-hei></sgtscf-counter-hei>
			<computing v-bind:countData = "countData"></computing>
			<result title="黑龙江省施工图审查费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterHei from "./sgtscf_counter_hei.vue"
	import {sgtscfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfHei',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(sgtscfData('Hei')),
			}
		},
		components:{
			sgtscfCounterHei
		}
	}
</script>

<style>

</style>
