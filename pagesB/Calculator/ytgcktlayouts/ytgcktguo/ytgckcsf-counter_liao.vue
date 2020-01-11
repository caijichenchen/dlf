<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">全国岩土工程勘探收费</text>
		</div>
		<form>
			<view class="cu-form-group" >
				<view class="title">岩土工程勘察等级</view>
				<picker class="select" @change="PickerChange1" :value="index0" :range="ytgcktGuo_kcdj">
					<view class="picker">
						{{ytgcktGuo_kcdj[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">岩土工程勘探类型</view>
				<picker class="select" @change="PickerChange3" :value="index1" :range="ytgcktGuo_ktlx">
					<view class="picker">
						{{ytgcktGuo_ktlx[index1]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">计算孔数</view>
				<input v-model="needVal.ytgcktGuo_zkgs" /></input>
				<uni-tag text="个" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">单孔深度D/长度L</view>
				<input v-model="needVal.ytgcktGuo_sdcd" @blur="checkVal" maxlength="4"/></input>
				<uni-tag text="m" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">单孔复杂分界点</view>
				<input v-model="needVal.ytgcktGuo_fzfjd" @blur="checkVal" placeholder="例如:5,15"/></input>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-if="arr.length == 0">
				<view class="title">0至n米/复杂程度</view>
				<picker class="select" @change="PickerChanges" :value="index2" :range="ytgcktGuo_fzcd">
					<view class="picker">
						{{ytgcktGuo_fzcd[index2]}}
					</view>
				</picker>
			</view>
			<view v-else>
				<view class="cu-form-group" v-for="(item,index) in arr" :key="index">
					<view class="title" v-if="index == 0">0至{{arr[index]}}米/复杂程度</view>
					<!-- <view class="title" v-else-if="index == arr.length-1">{{arr[index]}}至{{needVal.ytgckcsfLiao_sdcd}}米/复杂程度</view> -->
					<view class="title" v-else>{{arr[index-1]}}至{{arr[index]}}米/复杂程度</view>
					<picker class="select" @change="PickerChange2" v-if="copyPickerIndex.length >= 1"
					:data-index="index" :value="copyPickerIndex[index]" :range="ytgcktGuo_fzcd">
						<view class="picker">
							{{ytgcktGuo_fzcd[copyPickerIndex[index]]}}
						</view>
					</picker>
					<button type="primary" size="mini" @tap="changeModal(index,$event)" data-target="ytgcktGuo_fzcd">点击选择</button>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input v-model="needVal.ytgcktGuo_fjtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="ytgcktGuo_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group" >
				<view class="title">气温附加调整</view>
				<picker class="select" @change="PickerChange4" :value="index3" :range="ytgcktGuo_qwfjtz">
					<view class="picker">
						{{ytgcktGuo_qwfjtz[index3]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">高程调整</view>
				<input v-model="needVal.ytgcktGuo_gctz" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showModal" data-target="ytgcktGuo_gctz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">浮动幅度</view>
				<input v-model="needVal.ytgcktGuo_fdfd" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[4])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input v-model="needVal.ytgcktGuo_yhzk" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[5])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<fjtz :showModalName="showModalName" v-on:hideModal="hideModal"></fjtz>
		<fzcd :showModalName="showModalName" v-on:hideModal="hideModal" v-on:chioceModal="chioceModal" :indexKey="indexkey"></fzcd>
		<gctz :showModalName="showModalName" v-on:hideModal="hideModal" :modalName="modalName"></gctz>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import fjtz from './ytgcktGuo_fjtz.vue'
	import fzcd from './ytgcktGuo_fzcd.vue'
	import gctz from '@/common/base/gctz.vue'
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					ytgcktGuo_kcdj: '甲级',
					ytgcktGuo_ktlx: '钻孔',
					ytgcktGuo_zkgs: '1',
					ytgcktGuo_sdcd: '',
					ytgcktGuo_fzfjd: '',
					ytgcktGuo_fzcd: [],
					ytgcktGuo_fjtz: '1.0',
					ytgcktGuo_qwfjtz: '1',
					ytgcktGuo_gctz: '1.0',
					ytgcktGuo_fdfd: '80',
					ytgcktGuo_yhzk: '90',
					ytgcktGuo_nums: '',
					type: 'ytgcktGuo'
				},
				ytgcktGuo_kcdj: ['甲级','乙级','丙级'],
				ytgcktGuo_ktlx: ['钻孔','井探','槽探','洞探'],
				ytgcktGuo_fzcd: ['Ⅰ','Ⅱ','Ⅲ','Ⅳ','Ⅴ','Ⅵ'],
				ytgcktGuo_qwfjtz: ['1','1.2'],
				index0: 0,
				index1: 0,
				index2: '0',
				index3: 0,
				indexkey: 0,
				arr : [],
				copyPickerIndex:[],
				showModalName: null,
				modalName: 'ytgcktGuo_gctz',
				modalData: null,  //查看说明
				explain: [
					{
						"id": "1",
						"title": "岩土工程勘察等级",
						"text": "岩土工程勘察等级见国标《岩土工程勘察规范》"
					},
					{
						"id": "2",
						"title": "岩土工程勘察类型",
						"text": "请确定好计算的类型"
					},
					{
						"id": "3",
						"title": "单孔复杂分界点",
						"text": "例1：某线路工程勘察，总勘探深度15米，埋深15m以上全部为Ⅰ级复杂程度，则此处不用填写; 例2：某线路工程勘察，总勘探深度30米，埋深15m以上为Ⅰ级复杂程度，15m以下（至30米处）为Ⅱ级复杂程度，则此处填写：15;  例3：某线路工程勘察，总勘探深度30米，埋深15m以上为Ⅰ级复杂程度，15m至25m为Ⅱ级复杂程度，25m以下（至30米处）为Ⅲ级复杂程度，则此处填写：15，25; 以此类推 注意事项：记得用“，”隔开（逗号）"
					},
					{
						"id": "4",
						"title": "气温附加调整",
						"text": "在气温（以当地气象台、站的气象报告为准）≥35℃或者≤-10℃条件下进行勘查作业时，气温附加调整系数为1.2"
					},
					{
						"id": "5",
						"title": "浮动幅度",
						"text": "国家标准：80%~120%"
					},
					{
						"id": "7",
						"title": "优惠折扣",
						"text": "各地区取值不同，当地行情决定"
					}
				]
			}
		},
		components: {
			fjtz,
			fzcd,
			gctz
		},
		methods:{
			PickerChange4(e){
				this.index3 = e.detail.value
				this.needVal.ytgcktGuo_qwfjtz = this.ytgcktGuo_qwfjtz[this.index3]
			},
			PickerChange1(e) {
				this.index0 = e.detail.value
				this.needVal.ytgcktGuo_kcdj = this.ytgcktGuo_kcdj[this.index0]
			},
			PickerChanges(e){
				this.index2 = e.detail.value
			},
			PickerChange3(e){
				this.index1 = e.detail.value
				this.needVal.ytgcktGuo_ktlx = this.ytgcktGuo_ktlx[this.index1]
			},
			PickerChange2(e) {
				const indexKey = e.currentTarget.dataset.index
				const key = e.detail.value
				this.needVal.ytgcktGuo_fzcd[indexKey] = this.ytgcktGuo_fzcd[key]
				this.copyPickerIndex.splice(indexKey,1,key)
			},
			checkVal(){
				this.arr = this.needVal.ytgcktGuo_fzfjd.split(',')
				if(this.needVal.ytgcktGuo_sdcd-0 < this.arr[this.arr.length-1]-0 || this.arr[this.arr.length-1] == ''){
					uni.showToast({
						icon:'none',
						title:'实物工作量（深度D/长度L）的值应≥不同复杂程度分界点的最大值'
					})
					this.arr = []
				}else{
					this.arr.push(this.needVal.ytgcktGuo_sdcd)
					this.copyPickerIndex = []
					this.arr.forEach(item=>{
						this.copyPickerIndex.push(0)
						this.needVal.ytgcktGuo_fzcd.push('Ⅰ')
					})
				}
			},
			changeModal(index,e){
				this.indexkey = index
				this.showModalName = e.currentTarget.dataset.target
			},
			showdzzk(e) {
				this.modalData = JSON.parse(e.currentTarget.dataset.target)
				this.$bus.emit('modalData', this.modalData )
			},
			chioceModal(val){
				this.needVal.ytgcktGuo_fzcd[val.key] = this.ytgcktGuo_fzcd[val.index]
				this.copyPickerIndex[val.key] = val.index
			}
		}
	}
</script>

<style>
</style>
