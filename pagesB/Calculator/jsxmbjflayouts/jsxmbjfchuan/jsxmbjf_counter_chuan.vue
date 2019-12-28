<template>
	<view>
			<img src="/static/img/sjjsq.png" alt="" style="width: 100%;height: 120upx;">
			<div class="sjf_title w-100 mt-2" style="height: 60upx;">
				<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
				<text class="text-blue lt pl-2 " style="margin-top: 5upx;">四川省建设项目报建费计算器</text>
			</div>
			<form>
				<view class="cu-form-group" v-show="showSelector.jsxmbjfChuan1">
					<view class="title">选择省份</view>
						<view class="title">
							{{multiSelector.jsxmbjfChuan1[pickerIndex.jsxmbjfChuan1]}}
						</view>
				</view>
				
				<view class="cu-form-group">
					<view class="title">计算项目</view>
					<picker class="select" @change="PickerChange"  data-name="jsxmbjfChuan_category" :value="pickerIndex.jsxmbjfChuan_category"
					 :range="multiSelector.jsxmbjfChuan_category">
						<view class="picker">
							{{multiSelector.jsxmbjfChuan_category[pickerIndex.jsxmbjfChuan_category]}}
						</view>
					</picker>
				</view>
				<view class="cu-form-group">
					<view class="title">计算依据</view>
						<picker class="select" @change="PickerChange"  data-name="jsxmbjfChuan_standard" :value="pickerIndex.jsxmbjfChuan_standard"
						 :range="multiSelector.jsxmbjfChuan_standard">
							<view class="picker">
								{{multiSelector.jsxmbjfChuan_standard[pickerIndex.jsxmbjfChuan_standard]}}
							</view>
						</picker>
				</view>
				<view class="cu-form-group" style="border-top: 1upx solid #eee;">
					<view class="title">报建面积</view>
					<input type="text"  v-model="needVal.jsxmbjfChuan_bjmj"></input>
					<uni-tag text="m2" type="defult"></uni-tag>
				</view>
				<view class="cu-form-group">
					<view class="title">打折折扣</view>
					<input v-model="needVal.jsxmbjfChuan_discount" /></input>
					<uni-tag text="%" type="defult"></uni-tag>
					<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
				</view>
			</form>
			<!-- 查看说明 -->
			<explain></explain>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import explain from '@/common/base/explain.vue'
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import datajson from '@/common/json/jsxmbjfs/jsxmbjfs-chuan.json'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					jsxmbjfChuan_standard: '',
					jsxmbjfChuan_category: '',
					jsxmbjfChuan_bjmj: '',
					jsxmbjfChuan_discount: '100',
					jsxmbjfChuan_jj: '',
					type: 'jsxmbjfChuan'
				},
				multiSelector: {
					jsxmbjfChuan1: [],
					jsxmbjfChuan_category: [],
					jsxmbjfChuan_standard: [],
					jsxmbjfChuan_jj: '',
				},
				showSelector: {
					jsxmbjfChuan1: true,
					jsxmbjfChuan_category: true,
					jsxmbjfChuan_standard: true,
					jsxmbjfChuan_jj: false,
				},
				pickerIndex: {
					jsxmbjfChuan1: 0,
					jsxmbjfChuan_standard: 0,
					jsxmbjfChuan_category: 0,
				},
				modalData: null,  //查看说明
				showModalName: null,
				datajson:datajson,
				explain: [
					{
						"id": "2",
						"title": "打折折扣",
						"text": "可以根据自己实际情况选择折扣"
					}
				]
			}
		},
		components: {
			uniTag,
			explain
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
