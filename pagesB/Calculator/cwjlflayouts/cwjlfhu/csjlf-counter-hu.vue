<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">上海市财务监理费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">地区</view>
				<view class="picker m-left" >
					上海市
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<view class="picker" >
					沪发改投〔2016〕70号
				</view>
				<button class="m-r" type="primary" size="mini" @tap="checkDeatil(1578)">点击查看</button>
			</view>
			<view class="cu-form-group">
				<view class="title">总投资</view>
				<input type="text" v-model="needVal.cwjlfHu_ztz"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input name="sjfGuo_discount" v-model="needVal.cwjlfHu_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
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
					cwjlfHu_standard: '沪发改投〔2016〕70号',
					cwjlfHu_discount: '100',
					cwjlfHu_ztz: '',
					type: 'cwjlfHu',
					cwjlfHu_graded: '0|1000|5000|10000|50000|100000|200000',
					cwjlfHu_fl: '0.0068|0.0060|0.0056|0.0052|0.0042|0.0018|0.0010'
				},
				showModalName: null,
				explain: [
					{
						"id": "2",
						"title": "打折折扣",
						"text": "各地区取值不同，当地行情决定"
					}
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