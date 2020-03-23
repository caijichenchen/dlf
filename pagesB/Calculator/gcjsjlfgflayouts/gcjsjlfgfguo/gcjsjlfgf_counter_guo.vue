<template>
	<view>
			<div class="sjf_title w-100 mt-2" style="height: 60upx;">
				<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
				<text class="text-blue lt pl-2 " style="margin-top: 5upx;">工程建设监理费</text>
			</div>
			<form>
				<view class="cu-form-group">
					<view class="title">计算依据</view>
						<view class="picker m-left" >
							NB/T 32027--2016
						</view>
					<!-- <button type="primary" size="mini" @tap="showModal" data-target="zsxzGuo_fzcd">查看说明</button> -->
					<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
				</view>
				<view class="cu-form-group" >
					<view class="title">建安设备费</view>
					<input type="digit" v-model="needVal.gcjsjlfgfGuo_gczj"></input>
					<uni-tag  text="万元" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">打折折扣</view>
					<input type="digit" v-model="needVal.gcjsjlfgfGuo_dzzk" /></input>
					<uni-tag text="%" type="defult"></uni-tag>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
				</view>
			</form>
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
				type:[Number,String],
				default:0
			}
		},
		data() {
			return {
				needVal: {
					gcjsjlfgfGuo_dzzk: '100',
					gcjsjlfgfGuo_gczj: '',
					gcjsjlfgfGuo_jsyj: 'NB/T 32027--2016',
					gcjsjlfgfGuo_jfe: '5000|10000|20000|40000|80000|170000|270000|360000',
					gcjsjlfgfGuo_fl: '1.12|0.87|0.79|0.71|0.64|0.41|0.34|0.28',
					type:'gcjsjlfgfGuo'
				},
				showModalName: null,
				modalData: null,
				explain: [
					{
						"id": "2",
						"title": "计算依据",
						"text": "中华人民共和国能源行业标准NB/T 32027--2016"
					},
					{
						"id": "1",
						"title": "打折折扣",
						"text": "目前市场行情不同，各地区取值略有不同"
					}
				]
			}
		},
		watch:{
			inval(val){
				this.needVal.gcjsjlfgfGuo_gczj = val
			}
		}
	}
</script>
	
	