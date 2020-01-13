<template>
	<base-layout :detailId='id'>
		<template v-slot:jsq>
			<sgtscf-counter-gui></sgtscf-counter-gui>
			<computing v-bind:countData = "countData"></computing>
			<sgtscf-result></sgtscf-result>
		</template>
		
		<template v-slot:qfbz>
			<view class="a-text" :data-id="930" @tap="setDetailId">广西|降低部分建设项目收费标准规范收费|桂价费[2011]55号</view>
			<view class="a-text" :data-id="1924" @tap="setDetailId">广西壮族自治区工程建设其他费用定额|桂建标〔2018〕37号</view>
		</template>
	</base-layout>
</template>

<script>
	import sgtscfCounterGui from "./sgtscf_counter_gui.vue"
	import sgtscfResult from "./sgtscf_result.vue"
	export default {
		data() {
			return {
				countData:{
					url: this.$serverUrl + '/api/sgtscfGui',  //api请求
					count:2  //积分消耗
				},
				id:930
			}
		},
		methods: {
			setDetailId(e){
				this.id = (e.currentTarget.dataset.id)-0
			}
		},
		components:{
			sgtscfCounterGui,
			sgtscfResult
		}
	}
</script>

<style>

</style>
