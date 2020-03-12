<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">上海市节能评估费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.jnpgfHu_xzsf">
				<view class="title">选择省份</view>
				<view class="title" v-model="needVal.jnpgfHu_xzsf">{{multiSelector.jnpgfHu_xzsf[pickerIndex.jnpgfHu_xzsf]}}</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.jnpgfHu_xzbz">
				<view class="title">选择标准</view>
				<view class="title" v-model="needVal.jnpgfHu_xzbz">{{multiSelector.jnpgfHu_xzbz[pickerIndex.jnpgfHu_xzbz]}}</view>
			</view>
			<view class="cu-form-group">
				<view class="title">工程费用</view>
				<input type="digit" v-model="needVal.jnpgfHu_gcfy" /></input>
				<uni-tag text="万元" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jnpgfHu_gcfy">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">选择项目</view>
				<picker class="select" @change="PickerChange" data-name="jnpgfHu_xzxm" :value="pickerIndex.jnpgfHu_xzxm"
				 :range="multiSelector.jnpgfHu_xzxm">
					<view class="picker">
						{{multiSelector.jnpgfHu_xzxm[pickerIndex.jnpgfHu_xzxm]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">计算类别</view>
				<picker class="select" @change="PickerChange" data-name="jnpgfHu_jslb" :value="pickerIndex.jnpgfHu_jslb"
				 :range="multiSelector.jnpgfHu_jslb">
					<view class="picker">
						{{multiSelector.jnpgfHu_jslb[pickerIndex.jnpgfHu_jslb]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">调整系数</view>
				<input type="digit" v-model="needVal.jnpgfHu_tzxs" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jnpgfHu_tzxs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jnpgfHu_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<explain></explain>
			<jnpgf-hu-gcfy :showModalName="showModalName" v-on:hideModal="hideModal"></jnpgf-hu-gcfy>
			<jnpgf-hu-tzxs :showModalName="showModalName" v-on:hideModal="hideModal"></jnpgf-hu-tzxs>
		</form>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	// import datajson from '@/common/json/jnpgfs/jnpgfs-hu.json'
	import jnpgfHuGcfy from './jnpgfHu_gcfy.vue'
	import jnpgfHuTzxs from './jnpgfHu_tzxs.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		beforeCreate() {
			uni.request({
				url:'https://www.dulifei.com/json/jnpgfs/jnpgfs-hu.json',
				success: (res) => {
					this.datajson = res.data
				}
			})
		},
		data() {
			return {
				needVal: {
					jnpgfHu_xzsf: '',
					jnpgfHu_xzbz: '',
					jnpgfHu_money: '',
					jnpgfHu_gcfy: '',
					jnpgfHu_xzxm: '',
					jnpgfHu_jslb: '',
					jnpgfHu_fl: '',
					jnpgfHu_fy: '',
					jnpgfHu_tzxs: '1.0',
					jnpgfHu_dzzk: '50',
					jnpgfHu_nums: '',
					type: 'jnpgfHu'
				},
				multiSelector: {
					jnpgfHu_xzsf: [],
					jnpgfHu_xzbz: [],
					jnpgfHu_money: '',
					jnpgfHu_xzxm: [],
					jnpgfHu_jslb: [],
					jnpgfHu_fl: '',
					jnpgfHu_fy: '',
				},
				pickerIndex: {
					jnpgfHu_xzsf: 0,
					jnpgfHu_xzbz: 0,
					jnpgfHu_xzxm: 0,
					jnpgfHu_jslb: 0,
				},
				showSelector: {
					jnpgfHu_xzsf: true,
					jnpgfHu_xzbz: true,
					jnpgfHu_money: false,
					jnpgfHu_xzxm: true,
					jnpgfHu_jslb: true,
					jnpgfHu_fl: false,
					jnpgfHu_fy: false,
				},
				datajson:'',
				modalData: null,
				showModalName: null,
				explain: [{
						"id": "1",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			jnpgfHuGcfy,
			jnpgfHuTzxs
		},
		methods:{
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
		}
	}
</script>

<style>

</style>
