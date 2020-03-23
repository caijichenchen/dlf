<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">南宁市监理费计算</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="title m-left">南监协知[2016]033号</view>
			</view>
			<view class="cu-form-group">
				<view class="title">监理人员类别</view>
				<picker class="select" @change="pickerChoose" data-arr="jlfNanning_jlrylb" data-index="index0" :value="index0" :range="jlfNanning_jlrylb">
					<view class="picker" name="sjfGui_fztz">
						{{jlfNanning_jlrylb[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0]) ">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">是否为高级工程师</view>
				<picker class="select" @change="pickerChoose" data-arr="jlfNanning_sfgjgcs" data-index="index1" :value="index1" :range="jlfNanning_sfgjgcs">
					<view class="picker" name="sjfGui_fztz">
						{{jlfNanning_sfgjgcs[index1]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" >
				<view class="title">监理人员数量</view>
				<input type="digit" v-model="needVal.jlfNanning_jlrysl"></input>
				<uni-tag  text="人" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group" >
				<view class="title">监理人员服务时间</view>
				<input type="digit" v-model="needVal.jlfNanning_jlryfwsj"></input>
				<uni-tag  text="月" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">工程复杂调整系数</view>
				<input type="digit" v-model="needVal.jlfNanning_fztz"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfNanning_fztz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">企业综合管理费率</view>
				<input type="digit" v-model="needVal.jlfNanning_qyzhglfl"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfNanning_qyzhglfl">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">利润率</view>
				<input type="digit" v-model="needVal.jlfNanning_lrl"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">税率</view>
				<input type="digit" v-model="needVal.jlfNanning_sl"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfNanning_sl">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">工作量比例</view>
				<input type="digit" v-model="needVal.jlfNanning_gzlbl"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfNanning_gzlbl">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input type="digit" v-model="needVal.jlfNanning_fjtz"></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfNanning_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="digit" v-model="needVal.jlfNanning_dzzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<fjtz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></fjtz>
		<gzlbl v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></gzlbl>
		<sl v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></sl>
		<glfl v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></glfl>
		<fztz v-bind:showModalName="showModalName" v-on:hideModal='hideModal'></fztz>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import fjtz from './jlfNanning_fjtz.vue'
	import gzlbl from './jlfNanning_gzlbl.vue'
	import sl from './jlfNanning_sl.vue'
	import glfl from './jlfNanning_qyzhglfl.vue'
	import fztz from './jlfNanning_fztz.vue'
	export default {
		mixins: [counterMixin],
		props:{
			index:{
				type: String,
				required:true
			},
		},
		data() {
			return {
				needVal: {
					jlfNanning_jsyj: "南监协知[2016]033号",
					jlfNanning_jlrylb: '总监理工程师',
					jlfNanning_sfgjgcs: '否',
					jlfNanning_jlrysl: '1',
					jlfNanning_jlryfwsj: '1',
					jlfNanning_fztz: '1.0',
					jlfNanning_qyzhglfl: '40',
					jlfNanning_lrl: '10',
					jlfNanning_sl: '6.45',
					jlfNanning_gzlbl: '100',
					jlfNanning_fjtz: '1.0',
					jlfNanning_dzzk: '100',
					jlfNanning_nums: '',
					jlfNanning_jbfy: '12000',
					jlfNanning_gjgcs: '1.0',
					type: 'jlfNanning'
				},
				modalData: null,  //查看说明
				showModalName: null,
				index0:0,
				index1:0,
				jlfNanning_jlrylb: ['总监理工程师','总监理工程师代表','专业监理工程师','监理员'],
				jlfNanning_sfgjgcs:['否','是'],
				explain: [{
						"id": "1",
						"title": "南宁市项目监理机构人员基本费用表(2016-2017年度) ",
						"text": "1、项目监理机构各类人员指定为高级工程师时，相应人员的基本费用乘以1.2的人员职称调整系数。2、本表中的项目监理机构各类人员基本费用值为工程复杂程度为普通的标准取值，（即工程复杂程度调整系数为1），工程复杂程度不同时则乘以工程复杂程度调整系数进行调整（详见附录4）。"
					},
					{
						"id": "2",
						"title": "南宁市税金",
						"text": "利润率由监理单位自行确定，考虑监理企业和行业的可持续发展，利润率一般按10～15％计算"
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
			gzlbl,
			sl,
			glfl,
			fztz
		},
	}
</script>

<style>

</style>
	