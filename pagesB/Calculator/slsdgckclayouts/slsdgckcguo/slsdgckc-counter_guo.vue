<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">水利水电工程勘察费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">工程造价</view>
				<input type="digit" v-model="needVal.slsdgckcGuo_gczj" /></input>
				<uni-tag text="万元" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">比例表</view>
				<input type="digit" v-model="needVal.slsdgckcGuo_blb" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="slsdgckcGuo_blb">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">专业调整</view>
				<input type="digit" v-model="needVal.slsdgckcGuo_zytz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="slsdgckcGuo_zytz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">赋分表</view>
				<input type="digit" v-model="needVal.slsdgckcGuo_ffb" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="slsdgckcGuo_ffb">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">复杂程度</view>
				<picker class="select" @change="pickerChoose" data-index="index0" data-arr="slsdgckcGuo_fzcd" :value="index0" :range="slsdgckcGuo_fzcd">
					<view class="picker">
						{{slsdgckcGuo_fzcd[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showModal" data-target="slsdgckcGuo_fzcd">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input type="digit" v-model="needVal.slsdgckcGuo_fjtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="slsdgckcGuo_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">作业准备费比例</view>
				<input type="digit" v-model="needVal.slsdgckcGuo_zyzbfbl" /></input>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input type="digit" v-model="needVal.slsdgckcGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input type="digit" v-model="needVal.slsdgckcGuo_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<!-- 查看说明 --> 
		<explain></explain>
		<gctz :showModalName="showModalName" v-on:hideModal="hideModal" :modalName="modalName"></gctz>
		<fztz :showModalName="showModalName" v-on:hideModal="hideModal"></fztz>
		<ffb :showModalName="showModalName" v-on:hideModal="hideModal"></ffb>
	</view>
</template>

<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import {
		MultiSelectorsChangeMixin
	} from "@/common/base/multiSelectorsChange.js"
	import fjtz from './slsdgckcGuo_fjtz.vue'
	import ffb from './slsdgckcGuo_ffb.vue'
	import fzcd from './slsdgckcGuo_fzcd.vue'
	import zytz from './slsdgckcGuo_zytz.vue'
	export default {
		mixins: [counterMixin,MultiSelectorsChangeMixin],
		props:{
			index:{
				type: String,
				required:true
			},
			inval:{
				type:[Number,String],
				default:0
			}
		},
		data() {
			return {
				needVal: {
					slsdgckcGuo_gczj: '',
					slsdgckcGuo_blb:"100",
					slsdgckcGuo_zytz: '1.0',
					slsdgckcGuo_ffb: '1.0',
					slsdgckcGuo_fzcd: 'I级',
					slsdgckcGuo_fjtz: '1.0',
					slsdgckcGuo_zyzbfbl: '17.5',
					slsdgckcGuo_fdfd: '80',
					slsdgckcGuo_dzzk: '50',
					slsdgckcGuo_nums:'',
					type: "slsdgckcGuo"
				},
				modalData: null,  //查看说明
				showModalName: null,
				slsdgckcGuo_fzcd: ['I级','II级','III级'],
				index1: 0,
				index0: 0,
				explain: [
					{
						"id": "1",
						"title": "作业准备费比例",
						"text": "按照工程勘察收费基准价的15%~20%计算收费"
					},
					{
						"id": "2",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "3",
						"title": "打折折扣",
						"text": "目前市场行情采用较多折扣为50%，各地区取值略有不同"
					},
				]
			}
		},
		components: {
			fjtz,
			ffb,
			fzcd,
			zytz
		},
		watch:{
			inval(val){
				this.needVal.slsdgckcGuo_gczj = val
			}
		}
	}
</script>

<style>

</style>
