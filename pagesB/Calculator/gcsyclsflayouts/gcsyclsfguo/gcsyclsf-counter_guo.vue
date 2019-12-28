<template>
	<view>
		<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">工程水域测量收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.gcsyclsfGuo_xzlx">
				<view class="title">收费依据</view>
				<picker class="select" @change="PickerChange" data-name="gcsyclsfGuo_xzlx" :value="pickerIndex.gcsyclsfGuo_xzlx"
				 :range="multiSelector.gcsyclsfGuo_xzlx">
					<view class="picker">
						{{multiSelector.gcsyclsfGuo_xzlx[pickerIndex.gcsyclsfGuo_xzlx]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.gcsyclsfGuo_swgzldw">
				<view class="title">实物工作量</view>
				<input v-model="needVal.gcsyclsfGuo_swgzl" /></input>
				<uni-tag :text="multiSelector.gcsyclsfGuo_swgzldw" type="defult" v-model="needVal.gcsyclsfGuo_swgzldw"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.gcsyclsfGuo_xzbl">
				<view class="title">选择比例</view>
				<picker class="select" @change="PickerChange" data-name="gcsyclsfGuo_xzbl" :value="pickerIndex.gcsyclsfGuo_xzbl"
				 :range="multiSelector.gcsyclsfGuo_xzbl">
					<view class="picker">
						{{multiSelector.gcsyclsfGuo_xzbl[pickerIndex.gcsyclsfGuo_xzbl]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" >
				<view class="title" >复杂程度</view>
				<picker class="select" @change="PickerChanges" :value="indexfzcd"
				 :range="gcsyclsfGuo_fzcd">
					<view class="picker">
						{{gcsyclsfGuo_fzcd[indexfzcd]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="gcsyclsfGuo_fzcd">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">附加调整</view>
				<input v-model="needVal.gcsyclsfGuo_fjtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="gcsyclsfGuo_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title" >气温附加调整</view>
				<picker class="select" @change="PickerChangess" :value="index0"
				 :range="gcsyclsfGuo_qwfjtz">
					<view class="picker">
						{{gcsyclsfGuo_qwfjtz[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">高程调整</view>
				<input v-model="needVal.gcsyclsfGuo_gctz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="gcsyclsfGuo_gctz">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">浮动幅度</view>
				<input v-model="needVal.gcsyclsfGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.gcsyclsfGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
			</view>
			<explain></explain>
		</form>
		<tzxs-guo :showModalName="showModalName" v-on:hideModal="hideModal"></tzxs-guo>
		<gctz :showModalName="showModalName" v-on:hideModal="hideModal" :title="title" :modalName="modalName"></gctz>
		<fzcd :showModalName="showModalName" v-on:hideModal="hideModal"></fzcd>
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
	import datajson from '@/common/json/sycls.json'
	import tzxsGuo from './gcsyclsfGuo_fjtz.vue'
	import gctz from '@/common/base/gctz.vue'
	import fzcd from './gcsyclsfGuo_fzcd.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					gcsyclsfGuo_xzlx: '',
					gcsyclsfGuo_swgzl: '',
					gcsyclsfGuo_swgzldw: '',
					gcsyclsfGuo_xzbl: '',
					gcsyclsfGuo_sfjj: '',
					gcsyclsfGuo_fzcd: '简单',
					gcsyclsfGuo_fjtz: '1.0',
					gcsyclsfGuo_qwfjtz: '1',
					gcsyclsfGuo_gctz: '1.0',
					gcsyclsfGuo_fdfd: '80',
					gcsyclsfGuo_yhzk: '90',
					gcsyclsfGuo_nums: '',
					type: 'gcsyclsfGuo'
				},
				title: '工程水域测量费',
				modalName: 'gcsyclsfGuo_gctz',
				multiSelector: {
					gcsyclsfGuo_xzlx: [],
					gcsyclsfGuo_xzbl: [],
					gcsyclsfGuo_swgzldw: '',
					gcsyclsfGuo_sfjj: '',
				},
				pickerIndex: {
					gcsyclsfGuo_xzlx: 0,
					gcsyclsfGuo_xzbl: 0,
				},
				showSelector: {
					gcsyclsfGuo_xzlx: true,
					gcsyclsfGuo_xzbl: true,
					gcsyclsfGuo_swgzldw: true,
					gcsyclsfGuo_sfjj: false,
				},
				gcsyclsfGuo_fzcd: ['简单','中等','复杂'],
				gcsyclsfGuo_qwfjtz: ['1','1.2'],
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
			gctz,
			fzcd
		},
		methods:{
			PickerChanges(e) {
				this.indexfzcd = e.detail.value
				this.needVal.gcsyclsfGuo_fzcd = this.gcsyclsfGuo_fzcd[this.indexfzcd]
			},
			PickerChangess(e) {
				this.index0 = e.detail.value
				this.needVal.gcsyclsfGuo_qwfjtz = this.gcsyclsfGuo_qwfjtz[this.index0]
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
