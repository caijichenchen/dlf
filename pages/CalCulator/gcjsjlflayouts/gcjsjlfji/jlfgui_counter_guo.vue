<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">河北工程监理费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="picker m-left" >
					发改价格[2015]299号
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">计费额</view>
				<input type="digit" v-model="needVal.jlfJi_jfe"></input>
				<uni-tag  text="万元" type="defult">万元</uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jlfJi_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<!-- 查看说明 -->
			<explain></explain>
		</form>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					jlfJi_dzzk: "100",
					jlfJi_jfe: "",
					jlfJi_jsyj: "桂建标[2018]37号",
					jlfJi_nums: "",
					type: "jlfJi"
				},
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "1",
						"title": "计费额",
						"text": "一般建安工程费"
					},
					{
						"id": "2",
						"title": "打折折扣",
						"text": "不同地区折扣不同,具体根据实际调整"
					},
				]
			}
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
	