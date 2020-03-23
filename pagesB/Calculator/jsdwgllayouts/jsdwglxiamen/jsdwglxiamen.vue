<template>
	<base-layout :detailId="1681">
		<template v-slot:jsq>
			<xmjs-counter-xiamen></xmjs-counter-xiamen>
			<computing v-bind:countData = "countData"></computing>
			<result title="厦门市建设单位管理费" :result="result"></result>
		</template>
	</base-layout>
</template>

<script>
	import xmjsCounterXiamen from "./xmjs_counter_xiamen.vue"
	import {jsdwglData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/jsdwglXiamen',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(jsdwglData)),
			}
		},
		components:{
			xmjsCounterXiamen
		}
	}
</script>

<style>

</style>
