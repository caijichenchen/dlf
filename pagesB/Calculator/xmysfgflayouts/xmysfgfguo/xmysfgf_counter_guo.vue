<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">项目验收费(光伏发电工程)计算</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
					<view class="picker m-left" >
						NB/T 32027--2016
					</view>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">建安设备费</view>
				<input type="text" v-model="needVal.xmysfgfGuo_gczj"></input>
				<uni-tag  text="万元" type="defult">万元</uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input v-model="needVal.xmysfgfGuo_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
		</form>
		<explain></explain>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import explain from '@/common/base/explain.vue'
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					type: "xmysfgfGuo",
					xmysfgfGuo_dzzk: "100",
					xmysfgfGuo_fl: "2.79|1.91|1.07|0.63|0.36|0.21|0.15|0.13",
					xmysfgfGuo_gczj: "",
					xmysfgfGuo_jfe: "5000|10000|20000|40000|80000|170000|270000|360000",
					xmysfgfGuo_jsyj: "NB/T 32027--2016"
				},
				showModalName: null,
				modalData:null,
				explain: [
					{
						"id": "1",
						"title": "计算依据",
						"text": "中华人民共和国能源行业标准NB/T 32027--2016"
					},
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
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>
	
