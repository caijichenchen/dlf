<template>
	<base-layout :detailId="id">
		<template v-slot:jsq>
			<zjzxf-counter-gui :title="title"></zjzxf-counter-gui>
			<computing v-bind:countData = "countData"></computing>
			<zjzxf-result :title="title"></zjzxf-result>
		</template>
		<template v-slot:qfbz>
			<view class="a-text" :data-id="108" @tap="setDetailId">广西造价咨询收费标准-桂价费[2013]88号</view>
			<view class="a-text" :data-id="1924" @tap="setDetailId">广西壮族自治区工程建设其他费用定额|桂建标〔2018〕37号</view>
			<view class="a-text" :data-id="1909" @tap="setDetailId">广西建设工程造价咨询服务行业收费参考标准|桂价协字( 2019)15 号</view>
		</template>
	</base-layout>
</template>

<script>
	import baseLayout from "@/common/base/baseLayout.vue"
	import zjzxfCounterGui from "./zjzxf-counter_gui.vue"
	import computing from "@/common/base/computing.vue"
	import zjzxfResult from "../zjzxf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl+'/api/zjzxfGui',  //api请求
					count:2  //积分消耗
				},
				title: "广西造价咨询费",
				id:108
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			zjzxfCounterGui,
			zjzxfResult
		}
	}
</script>

<style>
</style>
