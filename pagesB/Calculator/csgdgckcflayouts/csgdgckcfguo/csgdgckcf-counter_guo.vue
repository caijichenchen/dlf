<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">长输管道工程勘察费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">选择项目</view>
				<picker class="select" @change="PickerChange1" :value="index0" :range="csgdgckcfGuo_xzxm">
					<view class="picker">
						{{csgdgckcfGuo_xzxm[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">实物工作量</view>
				<input v-model="needVal.csgdgckcfGuo_swgzl" /></input>
				<uni-tag text="km" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂分值</view>
				<input v-model="needVal.csgdgckcfGuo_fzcd" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="csgdgckcfGuo_fzcd">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input v-model="needVal.csgdgckcfGuo_fjtz" /></input>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">气温附加调整</view>
				<picker class="select" @change="PickerChange2" :value="index1" :range="csgdgckcfGuo_qwfjtz">
					<view class="picker">
						{{csgdgckcfGuo_qwfjtz[index1]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">高程调整</view>
				<input v-model="needVal.csgdgckcfGuo_gctz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="csgdgckcfGuo_gctz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input v-model="needVal.csgdgckcfGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.csgdgckcfGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 --> 
		<explain></explain>
		<gctz :showModalName="showModalName" v-on:hideModal="hideModal" :modalName="modalName"></gctz>
		<fztz :showModalName="showModalName" v-on:hideModal="hideModal"></fztz>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import gctz from '@/common/base/gctz.vue'
	import fztz from './csgdgckcfGuo_fzcd.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					csgdgckcfGuo_xzxm: '初勘',
					csgdgckcfGuo_swgzl: '',
					csgdgckcfGuo_fzcd: '4',
					csgdgckcfGuo_fjtz: '1.0',
					csgdgckcfGuo_qwfjtz: '1',
					csgdgckcfGuo_gctz: '1.0',
					csgdgckcfGuo_fdfd: '80',
					csgdgckcfGuo_yhzk: '90',
					csgdgckcfGuo_nums: '',
					type: "csgdgckcfGuo"
				},
				modalData: null,  //查看说明
				showModalName: null,
				csgdgckcfGuo_xzxm: ['初勘','详勘'],
				csgdgckcfGuo_qwfjtz: ['1','1.2'],
				modalName: 'csgdgckcfGuo_gctz',
				index1: 0,
				index0: 0,
				explain: [
					{
						"id": "1",
						"title": "选择项目",
						"text": "请确定好计算的类型"
					},
					{
						"id": "2",
						"title": "附加调整",
						"text": "默认系数为1"
					},
					{
						"id": "3",
						"title": "气温附加调整",
						"text": "在气温（以当地气象台、站的气象报告为准）≥35℃或者≤-10℃条件下进行勘查作业时，气温附加调整系数为1.2"
					},
					{
						"id": "4",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "5",
						"title": "优惠折扣",
						"text": "各地区取值不同，当地行情决定"
					}
				]
			}
		},
		components: {
			uniTag,
			explain,
			gctz,
			fztz
		},
		methods:{
			PickerChange1(e){
				this.index0 = e.detail.value
				this.needVal.csgdgckcfGuo_xzxm = this.csgdgckcfGuo_xzxm[this.index0]
			},
			PickerChange2(e){
				this.index1 = e.detail.value
				this.needVal.csgdgckcfGuo_qwfjtz = this.csgdgckcfGuo_qwfjtz[this.index1]
			},
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target) 
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
