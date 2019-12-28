<template>
	<view>
			<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
			<div class="sjf_title w-100 mt-2" style="height: 60upx;">
				<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
				<text class="text-blue lt pl-2 " style="margin-top: 5upx;">现场检测和材料试验收费</text>
			</div>
			<form>
				<view class="cu-form-group" v-show="showSelector.xcjchclsyYue_xzsf">
					<view class="title">选择省份</view>
					<view class="title" v-model="needVal.xcjchclsyYue_xzsf">{{multiSelector.xcjchclsyYue_xzsf[pickerIndex.xcjchclsyYue_xzsf]}}</view>
				</view>
				<view class="cu-form-group" v-show="showSelector.xcjchclsyYue_xzbz">
					<view class="title">选择标准</view>
					<view class="title" v-model="needVal.xcjchclsyYue_xzbz">{{multiSelector.xcjchclsyYue_xzbz[pickerIndex.xcjchclsyYue_xzbz]}}</view>
				</view>
				<view class="cu-form-group" v-show="showSelector.xcjchclsyYue_xzdl">
					<view class="title">选择大类</view>
					<picker class="select" @change="PickerChange" data-name="xcjchclsyYue_xzdl" :value="pickerIndex.xcjchclsyYue_xzdl"
					 :range="multiSelector.xcjchclsyYue_xzdl">
						<view class="picker">
							{{multiSelector.xcjchclsyYue_xzdl[pickerIndex.xcjchclsyYue_xzdl]}}
						</view>
					</picker>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
				</view>
				<view class="cu-form-group" v-show="showSelector.xcjchclsyYue_xzfl">
					<view class="title">选择分类</view>
					<picker class="select" @change="PickerChange" data-name="xcjchclsyYue_xzfl" :value="pickerIndex.xcjchclsyYue_xzfl"
					 :range="multiSelector.xcjchclsyYue_xzfl">
						<view class="picker">
							{{multiSelector.xcjchclsyYue_xzfl[pickerIndex.xcjchclsyYue_xzfl]}}
						</view>
					</picker>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
				</view>
				<view class="cu-form-group" v-show="showSelector.xcjchclsyYue4 || showSelector.xcjchclsyYue_jcxm">
					<view class="title">{{multiSelector.xcjchclsyYue4}}</view>
					<picker class="select" @change="PickerChange" data-name="xcjchclsyYue_jcxm" :value="pickerIndex.xcjchclsyYue_jcxm"
					 :range="multiSelector.xcjchclsyYue_jcxm">
						<view class="picker">
							{{multiSelector.xcjchclsyYue_jcxm[pickerIndex.xcjchclsyYue_jcxm]}}
						</view>
					</picker>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
				</view>

				<view class="cu-form-group" v-show="showSelector.xcjchclsyYue6 || showSelector.xcjchclsyYue_jcff">
					<view class="title">{{multiSelector.xcjchclsyYue6}}</view>
					<picker class="select" @change="PickerChange" data-name="xcjchclsyYue_jcff" :value="pickerIndex.xcjchclsyYue_jcff"
					 :range="multiSelector.xcjchclsyYue_jcff">
						<view class="picker">
							{{multiSelector.xcjchclsyYue_jcff[pickerIndex.xcjchclsyYue_jcff]}}
						</view>
					</picker>
					<button type="primary" size="mini" @tap="showModal" data-target="xcjchclsyYue_jcff">点击查看</button>
				</view>
				<view class="cu-form-group">
					<view class="title">工程量</view>
					<input v-model="needVal.xcjchclsyYue_gcl" /></input>
					<uni-tag :text="multiSelector.xcjchclsyYue_dw" type="defult" v-model="needVal.xcjchclsyYue_dw"></uni-tag>
				</view>
				<view class="cu-form-group" v-show="showSelector.xcjchclsyYue13">
					<view class="title">{{multiSelector.xcjchclsyYue13}}</view>
					<input v-model="needVal.xcjchclsyYue_qzxs" /></input>
				</view>
				<view class="cu-form-group">
					<view class="title">打折折扣</view>
					<input name="xcjchclsyYue_dzzk" v-model="needVal.xcjchclsyYue_dzzk" /></input>
					<uni-tag text="%" type="defult"></uni-tag>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
				</view>
			</form>
			<!-- 查看说明 --> 
			<explain></explain>
			<xcjchclsy-yue-jcff :showModalName="showModalName" v-on:hideModal="hideModal" :xcjchclsyYue11="multiSelector.xcjchclsyYue11"></xcjchclsy-yue-jcff>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import datajson from "@/common/json/xcjchclsy.json"
	import xcjchclsyYueJcff from './xcjchclsyYue_jcff.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					xcjchclsyYue_xzsf: '',
					xcjchclsyYue_xzbz: '',
					xcjchclsyYue_xzdl: '',
					xcjchclsyYue_xzfl: '',
					xcjchclsyYue_jcxm: '',
					xcjchclsyYue_jcff: '',
					xcjchclsyYue_gcl: '',
					xcjchclsyYue_dw: '',
					xcjchclsyYue_dj: '',
					xcjchclsyYue_qj: '',
					xcjchclsyYue_qzxs: '',
					xcjchclsyYue_qzdw: '',
					xcjchclsyYue_sfzj: '',
					xcjchclsyYue_dzzk: '50',
					xcjchclsyYue_nums: '',
					type: 'xcjchclsyYue'
				},
				multiSelector: {
					xcjchclsyYue_xzsf: [],
					xcjchclsyYue_xzbz: [],
					xcjchclsyYue_xzdl: [],
					xcjchclsyYue4: '',
					xcjchclsyYue_xzfl: [],
					xcjchclsyYue6: '',
					xcjchclsyYue_jcxm: [],
					xcjchclsyYue_jcff: [],
					xcjchclsyYue_dw: '',
					xcjchclsyYue_dj: '',
					xcjchclsyYue11: '',
					xcjchclsyYue_qj: '',
					xcjchclsyYue13: '',
					xcjchclsyYue_qzdw: '',
					xcjc_iszj: '',
				},
				showSelector: {
					xcjchclsyYue_xzsf: true,
					xcjchclsyYue_xzbz: true,
					xcjchclsyYue_xzdl: true,
					xcjchclsyYue4: true,
					xcjchclsyYue_xzfl: true,
					xcjchclsyYue6: true,
					xcjchclsyYue_jcxm: true,
					xcjchclsyYue_jcff: true,
					xcjchclsyYue_dw: true,
					xcjchclsyYue_dj: false,
					xcjchclsyYue11: false,
					xcjchclsyYue_qj: false,
					xcjchclsyYue13: false,
					xcjchclsyYue_qzdw:false,
					xcjc_iszj: false
				},
				pickerIndex: {
					xcjchclsyYue_xzsf: 0,
					xcjchclsyYue_xzbz: 0,
					xcjchclsyYue_xzdl: 0,
					xcjchclsyYue_xzfl: 0,
					xcjchclsyYue_jcxm: 0,
					xcjchclsyYue_jcff: 0,
				},
				datajson:datajson,
				modalData: null,  //查看说明
				showModalName: null,
				selected: 'A',
				shows: 1,
				explain: [{
						"id": "1",
						"title": "选择大类",
						"text": "请选择大类"
					},
					{
						"id": "2",
						"title": "选择分类",
						"text": "请选择分类"
					},
					{
						"id": "3",
						"title": "检测项目",
						"text": "请选择分类"
					},
					{
						"id": "4",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					},
				]
			}
		},
		components: {
			uniTag,
			explain,
			xcjchclsyYueJcff
		},
		methods:{
			//查看说明
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>


