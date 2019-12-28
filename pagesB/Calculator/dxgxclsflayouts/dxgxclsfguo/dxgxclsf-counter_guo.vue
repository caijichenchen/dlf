<template>
	<view>
		<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">地下管线勘察费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.dxgxclsfGuo_xzlx">
				<view class="title">选择类型</view>
				<picker class="select" @change="PickerChange" data-name="dxgxclsfGuo_xzlx" :value="pickerIndex.dxgxclsfGuo_xzlx"
				 :range="multiSelector.dxgxclsfGuo_xzlx">
					<view class="picker">
						{{multiSelector.dxgxclsfGuo_xzlx[pickerIndex.dxgxclsfGuo_xzlx]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.dxgxclsfGuo_swgzldw">
				<view class="title">实物工作量</view>
				<input v-model="needVal.dxgxclsfGuo_swgzl" /></input>
				<uni-tag :text="multiSelector.dxgxclsfGuo_swgzldw" type="defult" v-model="needVal.dxgxclsfGuo_swgzldw"></uni-tag>
			</view>
			<view class="cu-form-group" >
				<view class="title" >复杂程度</view>
				<picker class="select" @change="PickerChanges" :value="indexfzcd"
				 :range="dxgxclsfGuo_fzcd">
					<view class="picker">
						{{dxgxclsfGuo_fzcd[indexfzcd]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="dxgxclsfGuo_fzcd">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">附加调整</view>
				<input v-model="needVal.dxgxclsfGuo_fjtz" /></input>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title" >气温附加调整</view>
				<picker class="select" @change="PickerChangess" :value="index0"
				 :range="dxgxclsfGuo_qwfjtz">
					<view class="picker">
						{{dxgxclsfGuo_qwfjtz[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">高程调整</view>
				<input v-model="needVal.dxgxclsfGuo_gctz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="dxgxclsfGuo_gctz">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">浮动幅度</view>
				<input v-model="needVal.dxgxclsfGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.dxgxclsfGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
			</view>
			<explain></explain>
		</form>
		<tzxs-guo :showModalName="showModalName" v-on:hideModal="hideModal"></tzxs-guo>
		<gctz :showModalName="showModalName" v-on:hideModal="hideModal" :title="title" :modalName="modalName"></gctz>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import uniTag from '@/components/uni-ui/uni-tag/uni-tag.vue'
	import explain from '@/common/base/explain.vue'
	import datajson from '@/common/json/dxgxcls.json'
	import tzxsGuo from './dxgxclsfGuo_fzcd.vue'
	import gctz from '@/common/base/gctz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					dxgxclsfGuo_xzlx: '',
					dxgxclsfGuo_swgzl: '',
					dxgxclsfGuo_swgzldw: '',
					dxgxclsfGuo_sfjj: '',
					dxgxclsfGuo_fzcd: '简单',
					dxgxclsfGuo_fjtz: '1.0',
					dxgxclsfGuo_qwfjtz: '1',
					dxgxclsfGuo_gctz: '1.0',
					dxgxclsfGuo_fdfd: '80',
					dxgxclsfGuo_yhzk: '90',
					dxgxclsfGuo_nums: '',
					type: 'dxgxclsfGuo'
				},
				title:'地下管线勘察费',
				modalName: 'dxgxclsfGuo_gctz',
				multiSelector: {
					dxgxclsfGuo_xzlx: [],
					dxgxclsfGuo_swgzldw: '',
					dxgxclsfGuo_sfjj: '',
				},
				pickerIndex: {
					dxgxclsfGuo_xzlx: 0,
				},
				showSelector: {
					dxgxclsfGuo_xzlx: true,
					dxgxclsfGuo_swgzldw: true,
					dxgxclsfGuo_sfjj: false,
				},
				dxgxclsfGuo_fzcd: ['简单','中等','复杂'],
				dxgxclsfGuo_qwfjtz: ['1','1.2'],
				index0: 0,
				indexfzcd: 0,
				showModalName: null,
				datajson:datajson,
				modalData: null,  //查看说明
				explain: [
					{
						"id": "1",
						"title": "选择类型",
						"text": "请确定好计算的类型"
					},
					{
						"id": "2",
						"title": "选择比例",
						"text": "请确定好比例标准"
					},
					{
						"id": "4",
						"title": "气温附加调整",
						"text": "在气温（以当地气象台、站的气象报告为准）≥35℃或者≤-10℃条件下进行勘查作业时，气温附加调整系数为1.2"
					},
					{
						"id": "5",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "6",
						"title": "优惠折扣",
						"text": "各地区取值不同，当地行情决定"
					}
				]
			}
		},
		components: {
			uniTag,
			explain,
			tzxsGuo,
			gctz
		},
		methods:{
			PickerChanges(e) {
				this.indexfzcd = e.detail.value
				this.needVal.dxgxclsfGuo_fzcd = this.dxgxclsfGuo_fzcd[this.indexfzcd]
			},
			PickerChangess(e) {
				this.index0 = e.detail.value
				this.needVal.dxgxclsfGuo_qwfjtz = this.dxgxclsfGuo_qwfjtz[this.index0]
			},
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			}
		}
	}
</script>

<style>
</style>
