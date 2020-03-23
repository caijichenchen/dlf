<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">初步设计评审收费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.cbsjpssfGuo_xzxm">
				<view class="title">选择项目</view>
					<picker class="select" @change="PickerChange" data-name="cbsjpssfGuo_xzxm" :value="pickerIndex.cbsjpssfGuo_xzxm"
					 :range="multiSelector.cbsjpssfGuo_xzxm">
						<view class="picker">
							{{multiSelector.cbsjpssfGuo_xzxm[pickerIndex.cbsjpssfGuo_xzxm]}}
						</view>
					</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.cbsjpssfGuo_xzbz">
				<view class="title">选择标准</view>
					<view class="title" v-model="needVal.cbsjpssfGuo_xzbz">
						{{multiSelector.cbsjpssfGuo_xzbz[pickerIndex.cbsjpssfGuo_xzbz]}}
					</view>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.cbsjpssfGuo_fymc">
				<view class="title">{{multiSelector.cbsjpssfGuo_fymc}}</view>
				<input type="digit" v-model="needVal.cbsjpssfGuo_gstze" /></input>
				<uni-tag text="万元" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.cbsjpssfGuo5 || showSelector.cbsjpssfGuo_qmsc">
				<view class="title">{{multiSelector.cbsjpssfGuo5}}</view>
				<picker class="select" @change="PickerChange" data-name="cbsjpssfGuo_qmsc" :value="pickerIndex.cbsjpssfGuo_qmsc"
				 :range="multiSelector.cbsjpssfGuo_qmsc">
					<view class="picker">
						{{multiSelector.cbsjpssfGuo_qmsc[pickerIndex.cbsjpssfGuo_qmsc]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="cbsjpssfGuo_qmsc">查看说明</button>
			</view>
			<view class="cu-form-group" v-show="multiSelector.cbsjpssfGuo9">
				<view class="title">{{multiSelector.cbsjpssfGuo9}}</view>
				<input type="digit" v-model="needVal.cbsjpssfGuo_fjtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="cbsjpssfGuo_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input type="digit" v-model="needVal.cbsjpssfGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.cbsjpssfGuo_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<fjtz-guo :showModalName="showModalName" v-on:hideModal="hideModal" :cbsjpssfGuo10="multiSelector.cbsjpssfGuo10"></fjtz-guo>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/cbsjpsfs.json'
	import fjtzGuo from './cbsjpssfGuo_fjtz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		props:{
			index:{
				type: String,
				required:true
			},
			inval:{
				type:[String,Number],
				default:0
			}
		},
		data() {
			return {
				needVal: {
					cbsjpssfGuo_xzxm: '',
					cbsjpssfGuo_xzbz: '',
					cbsjpssfGuo_fymc: '',
					cbsjpssfGuo_gstze: '',
					cbsjpssfGuo_fw: '',
					cbsjpssfGuo_qmsc: '',
					cbsjpssfGuo_jj: '',
					cbsjpssfGuo_fjtz: '1',
					cbsjpssfGuo_fdfd: '80',
					cbsjpssfGuo_dzzk: '50',
					type: 'cbsjpssfGuo'
				},
				multiSelector: {
					cbsjpssfGuo_xzxm: [],
					cbsjpssfGuo_xzbz: [],
					cbsjpssfGuo_fymc: '',
					cbsjpssfGuo_fw: '',
					cbsjpssfGuo5: '',
					cbsjpssfGuo_qmsc: [],
					cbsjpssfGuo_jj: '',
					cbsjpssfGuo_fjtz: '',//8
					cbsjpssfGuo9: '',
					cbsjpssfGuo10: ''
				},
				pickerIndex: {
					cbsjpssfGuo_xzxm: 0,
					cbsjpssfGuo_xzbz: 0,
					cbsjpssfGuo_qmsc: 0,
				},
				showSelector: {
					cbsjpssfGuo_xzxm: true,
					cbsjpssfGuo_xzbz: true,
					cbsjpssfGuo_fymc: true,
					cbsjpssfGuo_fw: false,
					cbsjpssfGuo5: true,
					cbsjpssfGuo_qmsc: true,
					cbsjpssfGuo_jj: false,
					cbsjpssfGuo_fjtz: true,
					cbsjpssfGuo9: true,
					cbsjpssfGuo10: false
				},
				showModalName: null,
				datajson:'',
				modalData: null,
				explain: [
					{
						"id": "1",
						"title": "选择项目",
						"text": "各地区取值略有不同"
					},
					{
						"id": "2",
						"title": "选择标准",
						"text": "各地区取值略有不同"
					},
					{
						"id": "3",
						"title": "概算投资额",
						"text": "估算投资额为初步设计评审收费的概算投资额"
					},
					{
						"id": "4",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "5",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/cbsjpsfs.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		components: {
			fjtzGuo
		},
		watch:{
			inval(val){
				this.needVal.cbsjpssfGuo_gstze = val
			}
		}
	}
</script>

<style>
</style>
