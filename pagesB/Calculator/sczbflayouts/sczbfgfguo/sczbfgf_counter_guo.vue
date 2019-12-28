<template>
	<view>
			<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
			<div class="sjf_title w-100 mt-2" style="height: 60upx;">
				<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
				<text class="text-blue lt pl-2 " style="margin-top: 5upx;">生产准备费(光伏发电工程)</text>
			</div>
			<form>
				<view class="cu-form-group">
					<view class="title">计算依据</view>
					<picker class="select" @change="PickerChange" v-model="needVal.sczbfgf_jsyj" :range="picker1">
						<view class="picker" >
							NB/T 32027--2016
						</view>
					</picker>
					<button type="primary" size="mini" @tap="showModal" data-target="jsyj-guo">查看说明</button>
				</view>
				<view class="cu-form-group" style="border-top: 1upx solid #eee;">
					<view class="title">建安设备费</view>
					<input type="text" id="sjf" v-model="needVal.sczbfgfGuo_gczj"></input>
					<uni-tag  text="万元" type="defult">万元</uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">打折折扣</view>
					<input name="sjfGuo_discount" v-model="needVal.sczbfgfGuo_dzzk" /></input>
					<uni-tag text="%" type="defult"></uni-tag>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
				</view>
				
				<!-- <sczbfgf-guo-jsyj v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></sczbfgf-guo-jsyj> -->
			</form>
			<explain></explain>
	</view>
</template>
	
<script>
		import {counterMixin} from "@/common/base/counterMixin"
		import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
		import explain from '@/common/base/explain.vue'
		// import sczbfgfGuoJsyj from "./sczbfgfGuo_jsyj.vue"
		export default {
			mixins: [counterMixin],
			data() {
				return {
					needVal: {
						// sczbfgf_dzzk: '100',
						// sczbfgf_jasbf: '',
						// sczbfgf_jsyj: 'NB/T 32027--2016',
						type: "sczbfgfGuo",
						sczbfgfGuo_dzzk: "100",
						sczbfgfGuo_fl: "2.60|1.78|1.03|0.53|0.32|0.19|0.14|0.11",
						sczbfgfGuo_gczj: "",
						sczbfgfGuo_jfe: "3000|6000|12000|30000|60000|120000|180000|250000",
						sczbfgfGuo_jsyj: "NB/T 32027--2016"
					},
					showModalName: null,
					radio: 'radio1',
					selected: 'A',
					shows: 1,
					picker1:['NB/T 32027--2016'],
					index:'NB/T 32027--2016',
					explain: [
						{
							"id": "2",
							"title": "打折折扣",
							"text": "目前市场行情采用较多折扣为40%，各地区取值略有不同"
						}
					]
				}
			},
			components: {
				uniTag,
				explain
				// sczbfgfGuoJsyj
			},
			methods:{
				PickerChange(e) {
					this.index = e.detail.value
					console.log(e.detail.value);
				},
				showdzzk(e) {
					this.modalData = JSON.parse(e.currentTarget.dataset.target)
					this.$bus.emit('modalData', this.modalData )
				},
			}
		}
	</script>
	
	<style>
	.content {
			text-align: center;
			height: 400upx;
		}
	
		/* tabs样式 */
		.sjf_content {
			width: 100%;
			height: auto;
			background-color: #fff;
		}
	
		.content_jsq {
			width: 96%;
			margin-left: 2%;
			margin-top: 20upx;
		}
	
		.sjf_content form {
			text-align: left;
		}
	
		.cu-form-group {
			position: relative;
		}
	
		.cu-form-group .title {
			min-width: calc(4em + 15px);
		}
	
		.money {
			position: absolute;
			right: -80upx;
		}
	
		.text-orange,
		.line-orange,
		.lines-orange {
			color: #0062CC;
		}
	
		/* logo样式 */
		.logo {
			height: 200upx;
			width: 200upx;
			margin-top: 200upx;
		}
	
		.title {
			font-size: 36upx;
			color: #8f8f94;
		}
	
		.con-text {
			width: 90%;
			height: 80upx;
			font-size: 26upx !important;
			border: 1px solid deepskyblue;
			border-radius: 10upx;
			border-bottom: none;
			float: left;
			margin: 10upx 0 0 10upx;
		}
	
		.con-text1 {
			width: 48%;
			height: 80upx;
			font-size: 21upx !important;
			border: 1px solid deepskyblue;
			line-height: 80upx;
			border-radius: 10upx;
			border-bottom: none;
			float: left;
			margin: 10upx 0 0 10upx;
		}
	
		.con-text2 {
			height: 80upx;
			line-height: 80upx;
			border-radius: 10upx;
			float: left;
			margin: 10upx 0 0 10upx;
		}
	
		.con-text3 {
			height: auto;
			line-height: 60upx;
			border-radius: 10upx;
			float: left;
			margin: 10upx 0 0 10upx;
		}
	
		.active {
			background: #0081FF;
			color: #fff;
			border: none;
		}
	
		/* 百分比样式 */
		.sjpercentage {
			width: 100%;
			height: auto;
			float: left;
			margin-top: 20upx;
		}
	
		.sjpercentage p {
			width: 100%;
			height: 80upx;
			text-align: left;
			line-height: 80upx;
			font-size: 26upx;
			border: 1upx solid deepskyblue;
			padding-left: 20upx;
		}
	
		.sjpercentage p text {
			font-size: 30upx;
			color: #007AFF;
			padding-right: 10upx;
		}
	
		/* 复杂调整 */
		.cu-form-group picker .picker {
			text-align: left;
		}
	
		.sjffztz {
			width: 100%;
			text-align: left;
			float: left;
			border: 1px solid deepskyblue;
		}
	
		.sjffztz p {
			width: 100%;
			height: auto;
			line-height: 40upx;
			text-align: left;
			font-size: 26upx;
			border: 1upx solid deepskyblue;
			padding-left: 20upx;
		}
	
		.sjffztz p view {
			font-size: 30upx;
			font-weight: bold;
			padding-left: 8upx;
			padding-top: 5upx;
		}
	
		/* 设计费附加系数 */
		.sjffjxs {
			width: 100%;
			height: auto;
			float: left;
		}
	
		.sjffjxs p {
			width: 100%;
			height: auto;
			text-align: left;
			line-height: 60upx;
			font-size: 26upx;
			border: 1upx solid deepskyblue;
			padding-left: 20upx;
		}
	
		.sjffjxs p text {
			display: inline-block;
			background-color: #007AFF;
			border-radius: 10upx;
			font-size: 30upx;
			color: #fff;
			text-align: center;
			padding: 0 10upx;
			margin-left: 20upx;
		}
	
		.dianjijisuan {
			width: 100%;
			height: 120upx;
		}
	
		.dianjijisuan button {
			height: 80upx;
		}
	
		.dianjijisuan text {
			font-size: 26upx;
			margin-left: 20upx;
		}
	
		/* sjf计算结果 */
		.sjfjsjg {
			width: 100%;
			margin-top: 20upx;
			height: auto;
		}
	
		.sjfjsjg .sjftable {
			width: 100%;
			height: 60upx;
		}
	
		.sjfjsjg .sjftable img {
			width: 35upx;
			height: 45upx;
			float: left;
			margin-left: 20upx;
		}
	
		.sjfjsjg .sjftable text {
			float: left;
			margin-top: 5upx;
			margin-left: 15upx;
		}
	
		.sjfInput {
			text-align: left;
			padding-right: 80%;
		}
	
		.cu-form-group picker::after {
			content: none;
		}
	</style>
	