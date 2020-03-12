<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<csjcsspt-counter-qiong></csjcsspt-counter-qiong>
			<computing v-bind:countData = "countData"></computing>
			<result title="海南省城市基础设施配套费" :result="result"></result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="243" @tap="setDetailId">海南|调整城市基础设施配套费征收标准|琼价费管[2010]99号</view>
			<view class="a-text" :data-id="245" @tap="setDetailId">海南省各市县城市基础设施配套费征收标准2017</view>
			<view class="a-text" :data-id="288" @tap="setDetailId">四川|调整成都市基础设施配套费标准|川发改价格[2012]1387号</view>
		</template>
	</base-layout>
</template>

<script>
	import csjcssptCounterQiong from "./csjcsspt_counter_qiong.vue"
	import {csjcssptData} from '@/common/resultData.js'
	import {resultMixin} from "@/common/base/resultMixin"
	export default {
		mixins: [resultMixin],
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/csjcssptQiong',  //api请求
					count:1  //积分消耗
				},
				result:JSON.parse(JSON.stringify(csjcssptData)),
				id:243
			}
		},
		components:{
			csjcssptCounterQiong
		}
	}
</script>

<style>

</style>
