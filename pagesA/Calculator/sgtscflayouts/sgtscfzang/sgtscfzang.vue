<template>
	<base-layout :detailId="1698">
		<template v-slot:jsq>
			<sgtscf-counter-zang></sgtscf-counter-zang>
			<computing v-bind:countData = "countData"></computing>
			<result title="西藏施工图审查费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterZang from "./sgtscf_counter_zang.vue"
	import {sgtscfData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfZang',  //api请求
					count:1  //积分消耗
				},
				result: JSON.parse(sgtscfData('Zang'))
			}
		},
		components:{
			sgtscfCounterZang
		}
	}
</script>

<style>

</style>
