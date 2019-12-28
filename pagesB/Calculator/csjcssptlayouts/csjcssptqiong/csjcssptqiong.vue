<template>
	<!-- 计算器页面 -->
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<!-- 设计费计算选项 -->
			<csjcsspt-counter-qiong></csjcsspt-counter-qiong>
			<!-- 设计费计算按钮 -->
			<computing v-bind:countData = "countData"></computing>
			<!-- 设计费计算结果 -->
			<csjcsspt-result :title="title"></csjcsspt-result>
		</template>
		
		<template v-slot:qfbz>
			<view class="a-text" :data-id="243" @tap="setDetailId">海南|调整城市基础设施配套费征收标准|琼价费管[2010]99号</view>
			<view class="a-text" :data-id="245" @tap="setDetailId">海南省各市县城市基础设施配套费征收标准2017</view>
			<view class="a-text" :data-id="288" @tap="setDetailId">四川|调整成都市基础设施配套费标准|川发改价格[2012]1387号</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import csjcssptCounterQiong from "./csjcsspt_counter_qiong.vue"
	import computing from "@/common/base/computing.vue"
	import csjcssptResult from "../csjcsspt_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/csjcssptQiong',  //api请求
					count:1  //积分消耗
				},
				title:"海南",
				id:243
			}
		},
		methods:{
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			csjcssptCounterQiong,
			baseLayout,
			computing,
			csjcssptResult
		}
	}
</script>

<style>

</style>
