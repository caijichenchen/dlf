<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">河北省监理费</text>
		</div>
		<form>
			<view class="cu-form-group">
				<view class="title">计算依据</view>
				<view class="title m-left" v-model="needVal.jlfJi_jsyj">冀建市研〔2016〕6号</view>
			</view>
			<view class="cu-form-group" >
				<view class="title">计费额</view>
				<input type="text" v-model="needVal.jlfJi_jfe"></input>
				<uni-tag  text="万元" type="defult"></uni-tag>
				<button class="m-r" type="primary" size="mini" @tap="showModal" data-target="jlfJi_jfe">查看说明</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">复杂调整</view>
				<picker class="select" @change="PickerChanges" :value="index0" :range="jlfJi_fztz">
					<view class="picker">
						{{jlfJi_fztz[index0]}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group">
				<view class="title">专业调整</view>
				<input type="text" v-model="needVal.jlfJi_zytz"></input>
				<button type="primary" size="mini" @tap="showModal" data-target="jlfJin_fztz">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">打折折扣</view>
				<input type="text" v-model="needVal.jlfJi_dzzk"></input>
				<uni-tag  text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<!-- 查看说明 -->
			<explain></explain>
		</form>
	</view>
</template>
	
<script>
	import {counterMixin} from "@/common/base/counterMixin"
	import uniTag from "@/components/uni-ui/uni-tag/uni-tag.vue"
	import explain from '@/common/base/explain.vue'
	import datajson from '@/common/json/sxsjlfs/sxsjlfs.json'
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					jlfJi_jsyj: '',
					jlfJi_jfe: '',
					jlfJi_fztz: 'I级',
					jlfJi_zytz: '1.0',
					jlfJi_dzzk: '50',
					jlfJi_nums: '',
					jlfJi_qjjfe: '500|1000|3000|5000|8000|10000|20000|40000|60000|80000|100000|200000|400000|600000|800000|1000000',
					jlfJi_fl:'0.0330|0.0301|0.0260|0.0242|0.0226|0.0219|0.0197|0.0177|0.0165|0.0157|0.0151|0.0136|0.0122|0.0114|0.0108|0.01039',
					jlfJi_gcfztzdj: 'I级|II级|III级|II级双线|铁路III级|穿II级|穿III级',
					jlfJi_gcfztzxs: '0.85|1.0|1.15|0.85|0.95|1.1|1.26',
					type:'jlfJi'
				},
				jlfJi_fztz: ['I级','II级','III级','II级双线','铁路III级','穿II级','穿III级'],
				index: 0,
				modalData: null,  //查看说明
				showModalName: null,
				explain: [
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
		},
		methods:{
			PickerChanges(e){
				this.index = e.target.value
				this.needVal.jlfJi_fztz = this.jlfJi_fztz[this.index]
			},
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
	