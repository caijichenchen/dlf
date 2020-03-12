<template>
	<view>
		<div class="sjf_title w-100 mt-2" style="height: 60upx;">
			<img src="/static/img/tel.jpg" style="width: 35upx;height: 45upx;float: left;margin-left: 30upx;">
			<text class="text-blue lt pl-2 " style="margin-top: 5upx;">辽宁省岩土工程勘察收费</text>
		</div>
		<form>
			<view class="cu-form-group" >
				<view class="title">选择省份</view>
					<view class="picker m-left">
						辽宁
					</view>
			</view>
			<view class="cu-form-group">
				<view class="title">选择标准</view>
				<view class="picker m-left">
					辽宁省岩土工程勘察收费基价标准(试行)
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">岩土工程勘察等级</view>
				<picker class="select" @change="PickerChange1" :value="index0" :range="ytgckcsfLiao_kcdj">
					<view class="picker">
						{{ytgckcsfLiao_kcdj[index0]}}
					</view>
				</picker>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[0])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">岩土工程勘察类型</view>
					<view class="picker">
						钻孔
					</view>
				<button class="m-r" type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[1])">查看说明</button>
			</view>
			<view class="cu-form-group">
				<view class="title">计算孔数</view>
				<input type="digit" v-model="needVal.ytgckcsfLiao_zkgs" /></input>
				<uni-tag text="个" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">单孔深度D/长度L</view>
				<input type="digit" v-model="needVal.ytgckcsfLiao_sdcd" @blur="checkVal" maxlength="4"/></input>
				<uni-tag text="m" type="defult"></uni-tag>
			</view>
			<view class="cu-form-group">
				<view class="title">单孔复杂分界点</view>
				<input type="digit" v-model="needVal.ytgckcsfLiao_fzfjd" @blur="checkVal" placeholder="例如:5,15"/></input>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[2])">查看说明</button>
			</view>
			<view class="cu-form-group" v-if="arr.length == 0">
				<view class="title">0至n米/复杂程度</view>
				<picker class="select" @change="PickerChanges" :value="index2" :range="ytgckcsfLiao_fzcd">
					<view class="picker">
						{{ytgckcsfLiao_fzcd[index2]}}
					</view>
				</picker>
			</view>
			<view v-else>
				<view class="cu-form-group" v-for="(item,index) in arr" :key="index">
					<view class="title" v-if="index == 0">0至{{arr[index]}}米/复杂程度</view>
					<!-- <view class="title" v-else-if="index == arr.length-1">{{arr[index]}}至{{needVal.ytgckcsfLiao_sdcd}}米/复杂程度</view> -->
					<view class="title" v-else>{{arr[index-1]}}至{{arr[index]}}米/复杂程度</view>
					<picker class="select" @change="PickerChange2" v-if="copyPickerIndex.length >= 1"
					:data-index="index" :value="copyPickerIndex[index]" :range="ytgckcsfLiao_fzcd">
						<view class="picker">
							{{ytgckcsfLiao_fzcd[copyPickerIndex[index]]}}
						</view>
					</picker>
					<button type="primary" size="mini" @tap="changeModal(index,$event)" data-target="ytgckcsfLiao_fzcd">点击选择</button>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">附加调整</view>
				<input type="digit" v-model="needVal.ytgckcsfLiao_fjtz" /></input>
				<button type="primary" size="mini" @tap="showModal" data-target="ytgckcsfLiao_fjtz">点击选择</button>
			</view>
			<view class="cu-form-group">
				<view class="title">优惠折扣</view>
				<input type="digit" v-model="needVal.ytgckcsfLiao_discount" /></input>
				<uni-tag text="%" type="defult"></uni-tag>
				<button type="primary" size="mini" @tap="showdzzk" :data-target="JSON.stringify(explain[3])">查看说明</button>
			</view>
		</form>
		<explain></explain>
		<fjtz :showModalName="showModalName" v-on:hideModal="hideModal"></fjtz>
		<fzcd :showModalName="showModalName" v-on:hideModal="hideModal" v-on:chioceModal="chioceModal" :indexKey="indexkey"></fzcd>
	</view>
</template>

<script>
	import {
		counterMixin
	} from "@/common/base/counterMixin"
	import fjtz from './ytgckcsfLiao_fjtz.vue'
	import fzcd from './ytgckcsfLiao_fzcd.vue'
	export default {
		mixins: [counterMixin],
		data() {
			return {
				needVal: {
					ytgckcsfLiao_standard: '辽宁省岩土工程勘察收费基价标准(试行)',
					ytgckcsfLiao_kcdj: '甲级',
					ytgckcsfLiao_ktlx: '钻孔',
					ytgckcsfLiao_zkgs: '1',
					ytgckcsfLiao_sdcd: '',
					ytgckcsfLiao_fzfjd: '',
					ytgckcsfLiao_fjtz: '1.0',
					ytgckcsfLiao_fzcd: [],
					ytgckcsfLiao_discount: '100',
					ytgckcsfLiao_gcfztzdj: 'I|II|III|Ⅳ|Ⅴ',
					ytgckcsfLiao_gcfztzxs: '150|220|300|420|550',
					ytgckcsfLiao_ytgckcdj: '甲级|乙级|丙级',
					ytgckcsfLiao_ytgcsfxs: '120|100|80',
					type: 'ytgckcsfLiao'
				},
				ytgckcsfLiao_kcdj: ['甲级','乙级','丙级'],
				ytgckcsfLiao_fzcd: ['Ⅰ','Ⅱ','Ⅲ','Ⅳ','Ⅴ'],
				index0: 0,
				index2: '0',
				indexkey: 0,
				arr : [],
				copyPickerIndex:[],
				showModalName: null,
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
						"id": "7",
						"title": "优惠折扣",
						"text": "各地区取值不同，当地行情决定"
					}
				]
			}
		},
		components: {
			fjtz,
			fzcd
		},
		methods:{
			PickerChange1(e) {
				this.index0 = e.detail.value
				this.needVal.ytgckcsfLiao_kcdj = this.ytgckcsfLiao_kcdj[this.index0]
			},
			PickerChanges(e){
				this.index2 = e.detail.value
			},
			PickerChange2(e) {
				const indexKey = e.currentTarget.dataset.index
				const key = e.detail.value
				this.needVal.ytgckcsfLiao_fzcd[indexKey] = this.ytgckcsfLiao_fzcd[key]
				this.copyPickerIndex.splice(indexKey,1,key)
			},
			checkVal(){
				this.arr = this.needVal.ytgckcsfLiao_fzfjd.split(',')
				if(this.needVal.ytgckcsfLiao_sdcd-0 < this.arr[this.arr.length-1]-0 || this.arr[this.arr.length-1] == ''){
					uni.showToast({
						icon:'none',
						title:'实物工作量（深度D/长度L）的值应≥不同复杂程度分界点的最大值'
					})
					this.arr = []
				}else{
					this.arr.push(this.needVal.ytgckcsfLiao_sdcd)
					this.copyPickerIndex = []
					this.arr.forEach(item=>{
						this.copyPickerIndex.push(0)
						this.needVal.ytgckcsfLiao_fzcd.push('Ⅰ')
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
				this.needVal.ytgckcsfLiao_fzcd[val.key] = this.ytgckcsfLiao_fzcd[val.index]
				this.copyPickerIndex[val.key] = val.index
			}
		}
	}
</script>

<style>
</style>
