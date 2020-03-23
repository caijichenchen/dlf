<template>
	<view class="cu-modal" :class="showModalName== modalName ?'show':''" :style="'margin-top:'+CustomBar+ 'px'">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">水利水电工程勘察复杂程度赋分表</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<uni-collapse animation="outer" accordion="true" @change="activeIndex">
				<uni-collapse-item v-for="(item,index) in dataList" :key="index" :title="item.title">
					<view class="num-wrap">
						<radio-group @change="radioChange">
							<label class="num-wrap-li border-b" v-for="(i, k) in item.list" :key="i.val">
								<view>
									<radio :value="i.val" :checked="i.checked" style="transform: scale(0.5);" />
								</view>
								<view class="li-left">{{i.content}}</view>
								<view class="li-right">
									<text class="num-box">{{i.val}}</text>
								</view>
							</label>
						</radio-group>
					</view>
				</uni-collapse-item>
				<view class="py-2 font-md iconWhite backBlue" style="width: 100%;" @tap="assignment" :data-val="lastval">计算</view>
			</uni-collapse>
		</view>
	</view>
</template>

<script>
	import {modalMixin} from "@/common/base/modalMixin"
	
	export default {
		mixins: [modalMixin],
		props: {
			gclbindex: {
				type: Number,
				default: null
			},
			showModalName: {
				type: String,
				default: null
			}, // 弹框可见标志
		},
		data() {
			return {
				modalName:'slsdqqgzkcfGuo_ffb',
				activeKey:0,
				resultval: [1,1,1,5,1],
				lastval: 9,
				dataList: [
					{
						title: '坝高',
						list: [
							{
								content:'H<30',
								val:'-5',
								checked:true
							},
							{
								content:'30<=H<50',
								val:'-2'
							},
							{
								content:'50<=H<70',
								val:'1'
							},
							{
								content:'70<=H<150',
								val:'3'
							},
							{
								content:'150<=H<250',
								val:'5'
							},
						]
					},
					{
						title: '建筑物',
						list: [
							{
								content:'一般土石坝',
								val:'-1',
								checked:true
							},
							{
								content:'常规重力坝',
								val:'1'
							},
							{
								content:'两种坝型或引水大于3Km或者抽水蓄能电站',
								val:'2'
							},
							{
								content:'拱坝、碾压混凝土坝、混凝土面板堆石坝、新坝型',
								val:'3'
							},
							{
								content:'大型地下洞室群',
								val:'4'
							},
						]
					},
					{
						title: '岩石级别',
						list: [
							{
								content:'V级以下',
								val:'-2',
								checked:true
							},
							{
								content:'VI级岩石',
								val:'0'
							},
							{
								content:'VII级岩石',
								val:'1'
							},
							{
								content:'VIII、IX级岩石',
								val:'2'
							},
							{
								content:'X级以上',
								val:'3'
							},
						]
					},
					{
						title: '地形面貌',
						list: [
							{
								content:'简单',
								val:'-2',
								checked:true
							},
							{
								content:'中等',
								val:'1'
							},
							{
								content:'较复杂',
								val:'2'
							},
							{
								content:'复杂',
								val:'3'
							},
						]
					},
					{
						title: '地层岩性',
						list: [
							{
								content:'均一',
								val:'-2',
								checked:true
							},
							{
								content:'较均一',
								val:'1'
							},
							{
								content:'较复杂',
								val:'2'
							},
							{
								content:'复杂',
								val:'3'
							},
						]
					},
					{
						title: '地质构造',
						list: [
							{
								content:'简单',
								val:'-2',
								checked:true
							},
							{
								content:'中等',
								val:'1'
							},
							{
								content:'较复杂',
								val:'2'
							},
							{
								content:'复杂',
								val:'3'
							},
						]
					},
					{
						title: '坝基或厂基覆盖层厚度',
						list: [
							{
								content:'<10m',
								val:'-2',
								checked:true
							},
							{
								content:'10~20m',
								val:'1'
							},
							{
								content:'20~40m',
								val:'2'
							},
							{
								content:'40~60m',
								val:'4'
							},
						]
					},
					{
						title: '水文地质',
						list: [
							{
								content:'简单',
								val:'-2',
								checked:true
							},
							{
								content:'中等',
								val:'1'
							},
							{
								content:'较复杂',
								val:'2'
							},
							{
								content:'复杂',
								val:'3'
							},
						]
					},
					{
						title: '库岸稳定',
						list: [
							{
								content:'可能不稳定体<10万m3 ',
								val:'0',
								checked:true
							},
							{
								content:'可能不稳定体10万~100万m3',
								val:'2'
							},
							{
								content:'可能不稳定体100万~500万m3',
								val:'3'
							},
							{
								content:'可能不稳定体500万m3以上',
								val:'4'
							},
						]
					},
					{
						title: '库区渗漏',
						list: [
							{
								content:'无永久性渗漏',
								val:'-1',
								checked:true
							},
							{
								content:'断层或古河道渗漏',
								val:'2'
							},
							{
								content:'单薄分水岭渗漏',
								val:'3'
							},
						]
					},
					{
						title: '水文勘察',
						list: [
							{
								content:'简单',
								val:'-1',
								checked:true
							},
							{
								content:'中等',
								val:'1'
							},
							{
								content:'复杂',
								val:'3'
							},
						]
					},
				]
			}
		},
		methods: {
			activeIndex(e){
				this.activeKey = e[0] || 0
			},
			radioChange(e){
				this.resultval[this.activeKey] = e.detail.value
				this.lastval = this.resultval.reduce((a,b)=>Number(a)+Number(b))
			},
		}
	}
</script>

<style >
	.activeclass {
		background-color: #007AFF;
		color: #fff;
	}
	.text {
		font-size: 20px;
		color: #007AFF;
	}
	.border-tlr{
		border-top: 1upx solid blue;
		border-left: 1upx solid blue;
		border-right: 1upx solid blue;
		padding: 8upx;
	}
</style>