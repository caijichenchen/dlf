<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">海南省施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">选择省份</view>
				<view class="title m-left">
					海南省
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<view class="title m-left" >
					琼价费管[2011]224号
				</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(246)">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">计算类别</view>
				<view class="title m-left" >
					建筑工程
				</view>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">投资额</view>
				<input type="text"  id="sjf" v-model="needVal.sgtscfQiong_gcl"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="sgtscfQiong_discount" v-model="needVal.sgtscfQiong_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 --> 
		<explain></explain>
			
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					sgtscfQiong_category: "建筑工程",
					sgtscfQiong_discount: "100",
					sgtscfQiong_fl: "0.065|0.06|0.055|0.05|0.04",
					sgtscfQiong_gcl: "",
					sgtscfQiong_graded: "0|1000|3000|5000|10000",
					sgtscfQiong_standard: "琼价费管[2011]224号",
					type: "sgtscfQiong",
				},
				modalData: null,  //查看说明
				showModalName: null,
				explain: [
					{
						"id": "0",
						"title": "计算类别",
						"text": "请选择对应的项目"
					},
					{
						"id": "1",
						"title": "打折折扣",
						"text": "根据各地区行情决定"
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


