<template>
	<view>
		<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">工程其他测量收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.gcqtclsfGuo_xzlx">
				<view class="title">选择类型</view>
				<picker class="select" @change="PickerChange" data-name="gcqtclsfGuo_xzlx" :value="pickerIndex.gcqtclsfGuo_xzlx"
				 :range="multiSelector.gcqtclsfGuo_xzlx">
					<view class="picker">
						{{multiSelector.gcqtclsfGuo_xzlx[pickerIndex.gcqtclsfGuo_xzlx]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">实物工作量</view>
				<input v-model="needVal.gcqtclsfGuo_swgzl" /></input>
				<uni-tag :text="multiSelector.gcqtclsfGuo_swgzldw" type="defult" v-model="needVal.gcqtclsfGuo_swgzldw"></uni-tag>
			</view>
			
			<view class="cu-form-group" v-show="showSelector.gcqtclsfGuo_xzxm">
				<view class="title" >选择项目</view>
				<picker class="select" @change="PickerChange" data-name="gcqtclsfGuo_xzxm" :value="pickerIndex.gcqtclsfGuo_xzxm"
				 :range="multiSelector.gcqtclsfGuo_xzxm">
					<view class="picker">
						{{multiSelector.gcqtclsfGuo_xzxm[pickerIndex.gcqtclsfGuo_xzxm]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.gcqtclsfGuo_zl">
				<view class="title" >种类/比例尺</view>
				<picker class="select" @change="PickerChange" data-name="gcqtclsfGuo_zl" :value="pickerIndex.gcqtclsfGuo_zl"
				 :range="multiSelector.gcqtclsfGuo_zl">
					<view class="picker">
						{{multiSelector.gcqtclsfGuo_zl[pickerIndex.gcqtclsfGuo_zl]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" >
				<view class="title" >复杂程度</view>
				<picker class="select" @change="PickerChanges" :value="indexfzcd"
				 :range="gcqtclsfGuo_fzcd">
					<view class="picker">
						{{gcqtclsfGuo_fzcd[indexfzcd]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="gcqtclsfGuo_fzcd">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">附加调整</view>
				<input v-model="needVal.gcqtclsfGuo_fjtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="gcqtclsfGuo_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title" >气温附加调整</view>
				<picker class="select" @change="PickerChangess" :value="index0"
				 :range="gcqtclsfGuo_qwfjtz">
					<view class="picker">
						{{gcqtclsfGuo_qwfjtz[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">高程调整</view>
				<input v-model="needVal.gcqtclsfGuo_gctz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="gcqtclsfGuo_gctz">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">浮动幅度</view>
				<input v-model="needVal.gcqtclsfGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
			</view>
			
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.gcqtclsfGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[5])">查看说明</button>
			</view>
			
		</form>
		<explain></explain>
		<fzcd :showModalName="showModalName" v-on:hideModal="hideModal"></fzcd>
		<fjtz :showModalName="showModalName" v-on:hideModal="hideModal"></fjtz>
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
	import datajson from '@/common/json/qtcls.json'
	import fzcd from './gcqtclsfGuo_fzcd.vue'
	import gctz from '@/common/base/gctz.vue'
	import fjtz from './gcqtclsfGuo_fjtz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					gcqtclsfGuo_xzlx: '',
					gcqtclsfGuo_swgzl: '',
					gcqtclsfGuo_swgzldw: '',
					gcqtclsfGuo_xzxm: '',
					gcqtclsfGuo_zl: '',
					gcqtclsfGuo_sfjj: '',
					gcqtclsfGuo_fzcd: '简单',
					gcqtclsfGuo_fjtz: '1.0',
					gcqtclsfGuo_qwfjtz: '1.0',
					gcqtclsfGuo_gctz: '1.0',
					gcqtclsfGuo_fdfd: '80',
					gcqtclsfGuo_yhzk: '90',
					gcqtclsfGuo_nums: '',
					type: 'gcqtclsfGuo'
				},
				multiSelector: {
					gcqtclsfGuo_xzlx: [],
					gcqtclsfGuo_xzxm: [],
					gcqtclsfGuo_zl: [],
					gcqtclsfGuo_swgzldw: '',
					gcqtclsfGuo_sfjj: '',
				},
				pickerIndex: {
					gcqtclsfGuo_xzlx: 0,
					gcqtclsfGuo_xzxm: 0,
					gcqtclsfGuo_zl: 0,
				},
				showSelector: {
					gcqtclsfGuo_xzlx: true,
					gcqtclsfGuo_xzxm: true,
					gcqtclsfGuo_zl: true,
					gcqtclsfGuo_swgzldw: true,
					gcqtclsfGuo_sfjj: false,
				},
				gcqtclsfGuo_fzcd: ['简单','中等','复杂'],
				gcqtclsfGuo_qwfjtz: ['1','1.2'],
				title: '其他工程测量费',
				modalName: 'gcqtclsfGuo_gctz',
				indexfzcd: 0,
				index0: 0,
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
						"title": "选择项目",
						"text": "请确定好比例标准"
					},
					{
						"id": "3",
						"title": "种类/比例尺",
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
			fzcd,
			gctz,
			fjtz
		},
		methods:{
			PickerChanges(e) {
				this.indexfzcd = e.detail.value
				this.needVal.gcqtclsfGuo_fzcd = this.gcqtclsfGuo_fzcd[this.indexfzcd]
			},
			PickerChangess(e) {
				this.index0 = e.detail.value
				this.needVal.gcqtclsfGuo_qwfjtz = this.gcqtclsfGuo_qwfjtz[this.index0]
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
