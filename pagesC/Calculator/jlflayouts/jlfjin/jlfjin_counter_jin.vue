<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">山西省监理费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="m-left" v-model="needVal.jlfJin_jsyj">{{multiSelector.jlfJin_jsyj}}</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.jlfJin_jsff">
				<view class="title">计算方法</view>
				<picker class="select" @change="PickerChange"  data-name="jlfJin_jsff" :value="pickerIndex.jlfJin_jsff"
				 :range="multiSelector.jlfJin_jsff">
					<view class="picker">
						{{multiSelector.jlfJin_jsff[pickerIndex.jlfJin_jsff]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.jlfJin5">
				<view class="title">{{multiSelector.jlfJin5}}</view>
				<picker class="select" @change="PickerChange"  data-name="jlfJin_anyj" :value="pickerIndex.jlfJin_anyj"
				 :range="multiSelector.jlfJin_anyj">
					<view class="picker">
						{{multiSelector.jlfJin_anyj[pickerIndex.jlfJin_anyj]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.jlfJin14">
				<view class="title">{{multiSelector.jlfJin14}}</view>
				<picker class="select" @change="PickerChange"  data-name="jlfJin_jlrylb" :value="pickerIndex.jlfJin_jlrylb"
				 :range="multiSelector.jlfJin_jlrylb">
					<view class="picker">
						{{multiSelector.jlfJin_jlrylb[pickerIndex.jlfJin_jlrylb]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="showSelector.jlfJin7">
				<view class="title">{{multiSelector.jlfJin7}}</view>
				<input type="text" v-model="needVal.jlfJin_jfe"></input>
				<uni-tag  :text="multiSelector.jlfJin8" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfJin_jfe">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂调整</view>
				<input type="text" v-model="needVal.jlfJin_fztz"></input>
				<uni-tag  :text="multiSelector.jlfJin8" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfJin_fztz">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.jlfJin10">
				<view class="title">{{multiSelector.jlfJin10}}</view>
				<input type="text" v-model="needVal.jlfJin_gztzbl"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfJin_gztzbl">点击选择</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.jlfJin12">
				<view class="title">{{multiSelector.jlfJin12}}</view>
				<input type="text" v-model="needVal.jlfJin_jlrysl"></input>
				<uni-tag  text="人" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input  v-model="needVal.jlfJin_fjtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfJin_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="text" v-model="needVal.jlfJin_dzzk"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<!-- 查看说明 -->
			<explain></explain>
			<fjtz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></fjtz>
			<fztz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></fztz>
			<tzbl v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></tzbl>
			<jfe v-bind:showModalName="showModalName" v-on:hideModal='hideModal' :jlfJin9="multiSelector.jlfJin9"></jfe>
		</form>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import explain from '@/common/base/explain.vue'
	import datajson from '@/common/json/sxsjlfs/sxsjlfs.json'
	import fjtz from './jlfJin_fjtz.vue'
	import fztz from './jlfJin_fztz.vue'
	import tzbl from './jlfJin_gztzbl.vue'
	import jfe from './jlfJin_jfe.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					jlfJin_jsyj: '晋建监协〔2018〕9 号',
					jlfJin_jsff: '',
					jlfJin_qjjfe: '',
					jlfJin_fl: '',
					jlfJin_anyj: '',
					jlfJin_jfe: '',
					jlfJin_gztzbl: '1',
					jlfJin_jlrysl: '',
					jlfJin_jlrylb: '',
					jlfJin_jbfy: '',
					jlfJin_fztz: '1.0',
					jlfJin_gwtzxs: '',
					jlfJin_fjtz: '1.0',
					jlfJin_dzzk: '50',
					type:'jlfJin'
				},
				multiSelector: {
					jlfJin_jsyj: '',
					jlfJin_jsff: [],
					jlfJin_qjjfe: '',
					jlfJin_fl: '',
					jlfJin5: '',
					jlfJin_anyj: [],
					jlfJin7: '',
					jlfJin8: '',
					jlfJin9: '',
					jlfJin10: '',
					jlfJin_gztzbl: '',
					jlfJin12: '',
					jlfJin_jlrysl: '',
					jlfJin14: '',
					jlfJin_jlrylb: [],
					jlfJin_jbfy: '',
					jlfJin_gwtzxs: ''
				},
				showSelector: {
					jlfJin_jsyj: true,
					jlfJin_jsff:true,
					jlfJin_qjjfe: false,
					jlfJin_fl: false,
					jlfJin5: true,
					jlfJin_anyj: true,
					jlfJin7: true,
					jlfJin8: true,
					jlfJin9: false,
					jlfJin10: true,
					jlfJin_gztzbl: true,
					jlfJin12: true,
					jlfJin_jlrysl: true,
					jlfJin14: true,
					jlfJin_jlrylb: true,
					jlfJin_jbfy: false,
					jlfJin_gwtzxs: false
				},
				pickerIndex: {
					jlfJin_jsyj: 0,
					jlfJin_jsff: 0,
					jlfJin_anyj: 0,
					jlfJin_jlrylb: 0
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:datajson,
				explain: [{
						"id": "1",
						"title": "监理费收费计费额",
						"text": "1.计费额是指工程概算投资额中的建筑安装工程费、设备与工器具购置费和联合试运转费之和"
					},
					{
						"id": "2",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					},
				]
			}
		},
		components: {
			uniTag,
			explain,
			fjtz,
			fztz,
			tzbl,
			jfe
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

<style>

</style>
	