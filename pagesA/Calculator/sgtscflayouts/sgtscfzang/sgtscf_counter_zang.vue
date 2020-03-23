<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">西藏施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">选择省份</view>
				<view class="title m-left" >
					西藏
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<view class="title m-left" >
					藏价费〔2003〕84号
				</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1698)">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">项目</view>
				<view class="title m-left" >
					施工图咨询服务费
				</view>
			</view>
			<view class="cu-form-group" >
				<view class="title">投资额</view>
				<input type="digit" v-model="needVal.sgtscfZang_gcl"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.sgtscfZang_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
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
		props:{
			index:{
				type: String,
				required:true
			},
			inval:{
				type:[String,Number],
				default:0
			}
		},
		data() {
			return {
				needVal: {
					sgtscfZang_category: "施工图咨询服务费",
					sgtscfZang_discount: "100",
					sgtscfZang_fl: "0.15|0.3|1.2|3|5|10|15|20|25|35",
					sgtscfZang_gcl: "",
					sgtscfZang_graded: "0|200|500|1000|3000|10000|50000|100000|500000",
					sgtscfZang_standard: "藏价费〔2003〕84号",
					type: "sgtscfZang",
				},
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "1",
						"title": "打折折扣",
						"text": "根据各地区行情决定"
					},
				]
			}
		},
		watch:{
			inval(val){
				this.needVal.sgtscfZang_gcl = val
			}
		}
	}
</script>


