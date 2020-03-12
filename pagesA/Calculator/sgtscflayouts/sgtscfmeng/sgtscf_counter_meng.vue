<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">内蒙古施工图审查费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">选择省份</view>
				<view class="title m-left" name="djglfHu_xzsf">
					内蒙古
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<view class="title m-left">
					内计费字[2002]1007号
				</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(929)">点击查看</button>
			</view>
			<view class="cu-form-group" style="border-top: 1upx solid #eee;">
				<view class="title">建筑安装工程直接费</view>
				<input type="digit" v-model="needVal.sgtscfMeng_gcl"></input>
				<uni-tag text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.sgtscfMeng_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
		</form>
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
					sgtscfMeng_discount: "100",
					sgtscfMeng_fl: "0.0018|0.0012|0.001",
					sgtscfMeng_gcl: "",
					sgtscfMeng_graded: "0|1000|5000",
					sgtscfMeng_standard: "内计费字[2002]1007号",
					type: "sgtscfMeng",
				},
				modalData: null,  //查看说明
				showModalName: null,
				explain: [{
						"id": "sgmeng1",
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


