<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">水利水电工程建设项目工作勘察费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">取费标准</view>
					<view class="picker">
						发改价格〔2006〕1352号
					</view>
				</picker>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">投资估算值</view>
				<input type="digit" v-model="needVal.slsdqqgzkcfGuo_gczj" /></input>
				<uni-tag text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">比例表</view>
				<input type="digit" v-model="needVal.slsdqqgzkcfGuo_blb" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="slsdqqgzkcfGuo_blb">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">类型调整</view>
				<input type="digit" v-model="needVal.slsdqqgzkcfGuo_lxtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="slsdqqgzkcfGuo_lxtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">赋分表</view>
				<input type="digit" v-model="needVal.slsdqqgzkcfGuo_ffb" /></input>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂程度调整系数</view>
				<picker class="select" @change="PickerChange1" :value="index0" :range="slsdqqgzkcfGuo_fzcd">
					<view class="picker">
						{{slsdqqgzkcfGuo_fzcd[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="slsdqqgzkcfGuo_fzcd">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input type="digit" v-model="needVal.slsdqqgzkcfGuo_fjtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="slsdqqgzkcfGuo_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">作业准备费比例</view>
				<input type="digit" v-model="needVal.slsdqqgzkcfGuo_zyzbfbl" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">高程调整</view>
				<input type="digit" v-model="needVal.slsdqqgzkcfGuo_gctz" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input type="digit" v-model="needVal.slsdqqgzkcfGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input type="digit" v-model="needVal.slsdqqgzkcfGuo_discount"/></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 --> 
		<explain></explain>
		<fjtz :showModalName="showModalName" v-on:hideModal="hideModal"></fjtz>
		<lxtz :showModalName="showModalName" v-on:hideModal="hideModal"></lxtz>
		<fzcd :showModalName="showModalName" v-on:hideModal="hideModal"></fzcd>
		<blb :showModalName="showModalName" v-on:hideModal="hideModal"></blb>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import fjtz from './slsdqqgzkcfGuo_fjtz.vue'
	import lxtz from './slsdqqgzkcfGuo_lxtz.vue'
	import fzcd from './slsdqqgzkcfGuo_fzcd.vue'
	import blb from './slsdqqgzkcfGuo_blb.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		data() {
			return {
				needVal: {
					slsdqqgzkcfGuo_standard: '发改价格〔2006〕1352号',
					slsdqqgzkcfGuo_gczj: '',
					slsdqqgzkcfGuo_blb: '100',
					slsdqqgzkcfGuo_lxtz: '1.0',
					slsdqqgzkcfGuo_ffb: '1.0',
					slsdqqgzkcfGuo_fzcd: '0.85',
					slsdqqgzkcfGuo_fjtz: '1.0',
					slsdqqgzkcfGuo_zyzbfbl: '15',
					slsdqqgzkcfGuo_gctz: '1.0',
					slsdqqgzkcfGuo_fdfd: '70',
					slsdqqgzkcfGuo_discount: '50',
					type: "slsdqqgzkcfGuo"
				},
				modalData: null,  //查看说明
				showModalName: null,
				slsdqqgzkcfGuo_fzcd: ['0.85','1.0','1.15'],
				index0: 0,
				explain: [
					{
						"id": "3",
						"title": "作业准备费比例",
						"text": "发生相关作业准备的，可按照相应工程勘察收费基准价的10%-20%另行收取。"
					},
					{
						"id": "4",
						"title": "浮动幅度",
						"text": "国家标准：70%~120%"
					},
					{
						"id": "5",
						"title": "优惠折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					}
				]
			}
		},
		components: {
			fjtz,
			lxtz,
			fzcd,
			blb
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
