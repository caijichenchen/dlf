<template>
	<base-layout :detailId="1651">
		<template v-slot:jsq>
			<sgtscf-counter-hu></sgtscf-counter-hu>
			<computing v-bind:countData = "countData"></computing>
			<result title="上海市施工图审查费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterHu from "./sgtscf_counter_hu.vue"
	import {sgtscfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfHu',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(sgtscfData('Hu')),
			}
		},
		components:{
			sgtscfCounterHu
		}
	}
</script>

<style>

</style>
