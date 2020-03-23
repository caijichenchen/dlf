<template>
	<base-layout :detailId="252">
		<template v-slot:jsq>
			<sgtscf-counter-tianjin></sgtscf-counter-tianjin>
			<computing v-bind:countData = "countData"></computing>
			<result title="天津市施工图审查费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterTianjin from "./sgtscf_counter_tianjin.vue"
	import {sgtscfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfTianjin',  //api请求
					count:2  //积分消耗
				},
				result: JSON.parse(sgtscfData('Tianjin')),
			}
		},
		components:{
			sgtscfCounterTianjin
		}
	}
</script>

<style>

</style>
