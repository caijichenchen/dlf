<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">无人岛金征费</text>
		</div>
		<form>
			<view class="cu-form-group" v-show="showSelector.wrdjzfGuo_jsyj">
				<view class="title">计算依据</view>
				<view class="title m-left" v-model="needVal.wrdjzfGuo_jsyj">{{multiSelector.wrdjzfGuo_jsyj[pickerIndex.wrdjzfGuo_jsyj]}}</view>
			</view>
			<view class="cu-form-group" v-show="showSelector.wrdjzfGuo_yddb">
				<view class="title">无人居住岛</view>
				<picker class="select" @change="PickerChange" data-name="wrdjzfGuo_yddb" :value="pickerIndex.wrdjzfGuo_yddb"
				 :range="multiSelector.wrdjzfGuo_yddb">
					<view class="picker">
						{{multiSelector.wrdjzfGuo_yddb[pickerIndex.wrdjzfGuo_yddb]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="wrdjzfGuo_yddb">点击选择</button>
			</view>
			<view class="cu-form-group" v-show="showSelector.wrdjzfGuo_ydfs">
				<view class="title">用岛方式</view>
				<picker class="select" @change="PickerChange" data-name="wrdjzfGuo_ydfs" :value="pickerIndex.wrdjzfGuo_ydfs"
				 :range="multiSelector.wrdjzfGuo_ydfs">
					<view class="picker">
						{{multiSelector.wrdjzfGuo_ydfs[pickerIndex.wrdjzfGuo_ydfs]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="wrdjzfGuo_ydfs">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">用岛类型</view>
				<picker class="select" @change="PickerChanges" :range="wrdjzfGuo_ydlx"  :value="index3">
					<view class="picker">
						{{wrdjzfGuo_ydlx[index3]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="wrdjzfGuo_ydlx">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">实物工作量</view>
				<input v-model="needVal.wrdjzfGuo_swgzl" /></input>
				<uni-tag text="公顷" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" v-show="showSelector.wrdjzfGuo4">
				<view class="title">{{multiSelector.wrdjzfGuo4}}</view>
				<input v-model="needVal.wrdjzfGuo_nx" /></input>
				<uni-tag :text="multiSelector.wrdjzfGuo_zsdw" type="defult" v-model="multiSelector.wrdjzfGuo_zsdw"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.wrdjzfGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<wrdjzf-guo-blb v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></wrdjzf-guo-blb>
		<ydlx v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></ydlx>
		<ydfs v-bind:showModalName="showModalName" v-on:hideModal='hideModal' @changepicker="changepicker"></ydfs>
		<yddb v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></yddb>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import wrdjzfGuoBlb from './wrdjzfGuo_yddb.vue'
	import datajson from '@/common/json/wrdjzfs/wrdjzfs-all.json'
	import ydlx from './wrdjzfGuo_ydlx.vue'
	import ydfs from './wrdjzfGuo_ydfs.vue'
	import yddb from './wrdjzfGuo_yddb.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					wrdjzfGuo_jsyj: '财综[2018]15号',
					wrdjzfGuo_yddb: '',
					wrdjzfGuo_ydfs: '',
					wrdjzfGuo_ydlx: '旅游娱乐用岛',
					wrdjzfGuo_swgzl: '',
					wrdjzfGuo_nx: '',
					wrdjzfGuo_yhzk :'100',
					wrdjzfGuo_fl: '',
					wrdjzfGuo_zsdw: '',
					wrdjzfGuo_sfjj:'',
					type: 'wrdjzfGuo'
				},
				multiSelector: {
					wrdjzfGuo_jsyj: [],
					wrdjzfGuo_yddb: [],
					wrdjzfGuo_ydfs: [],
					wrdjzfGuo4: '',
					wrdjzfGuo_zsdw: '',
					wrdjzfGuo_sfjj:'',
					wrdjzfGuo_fl: '',
				},
				pickerIndex: {
					wrdjzfGuo_jsyj: 0,
					wrdjzfGuo_yddb: 0,
					wrdjzfGuo_ydfs: 0,
				},
				showSelector: {
					wrdjzfGuo_jsyj: true,
					wrdjzfGuo_yddb: true,
					wrdjzfGuo_ydfs: true,
					wrdjzfGuo4: true,
					wrdjzfGuo_zsdw: true,
					wrdjzfGuo_sfjj:true,
					wrdjzfGuo_fl: false
				},
				index3:0,
				showModalName: null,
				wrdjzfGuo_ydlx: ['旅游娱乐用岛','交通运输用岛','工业仓储用岛','渔业用岛','农林牧业用岛','可再生能源用岛','城乡建设用岛'],
				datajson:datajson,
				modalData: null,  //查看说明
				explain: [
						{
							"id": "1",
							"title": "优惠折扣",
							"text": "各地区取值不同，当地行情决定"
						}
				]
			}
		},
		components: {
			wrdjzfGuoBlb,
			ydlx,
			ydfs,
			yddb
		},
		methods:{
			PickerChanges(e) {
				this.index3 = e.detail.value
				this.needVal.wrdjzfGuo_ydlx = this.wrdjzfGuo_ydlx[this.index3]
			},
			changepicker(key) {
				console.log(key)
				this.needVal.wrdjzfGuo_ydlx = this.wrdjzfGuo_ydlx[key]
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
