<template>
	<view :style="'height:'+windowHeight+'px'" >
		<cu-custom bgColor="bg-gradual-blue" >
		    <block slot="content">计算器分类</block>
			<!-- <block slot="right" @click="goSearch" >
				<text class="iconfont" style="color: #FFFFFF;font-size: 34upx;">&#xe666;</text>
			</block> -->
		</cu-custom>
		<view class="province-header" >
			<view class="province-nav">当前省份:</view>
			<view class="province-wrap">
				<view class="province-now" 
				:class="{'activepro':clickPro == addressName}"
				 :data-name="addressName"
				@tap="getCal">{{addressName}}</view>
				<view class="province-box">
					<scroll-view scroll-x="true" show-scrollbar="true" class="scroll-box">
						<view v-for="(item,index) in proList"
							:key="index"
							class="province-item"
							:data-name="item"
							:class="{'activepro':clickPro == item}"
							@tap="getCal"
						>
							<view>{{item}}</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<view class="cal-wrap">
			<scroll-view scroll-y show-scrollbar="true" class="content-nav">
				<view v-for="(item,index) in filterList"
					:key="index"
					:data-filter="item"
					:class="{'activefilter':clickFilter == item}"
					@tap="getFilter"
				>
					<view class="cal-item">{{item}}</view>
				</view>
			</scroll-view>
			<scroll-view scroll-y show-scrollbar="true" class="content">
				<view v-if="JSON.stringify(proCalList)=='{}'" class="mt-5">
					<view style="width: 85%;margin: 60rpx auto;white-space: normal;">
						您还没有选择计算器或该分类下没有计算器哦~
					</view>
				</view>
				<view v-else v-for="(item,index) in proCalList" :key="index">
					<view v-show="item.role_id" :data-url="item.url" :data-type="item.parent_type" @tap="navigateto" class="btn">{{item.name}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	import { calRouter } from '@/common/req/router.js'
	import amap from '@/common/amap-wx.js';  
	export default {
		onShareAppMessage(res) {
		    if (res.from === 'button') {// 来自页面内分享按钮
		      console.log(res.target)
		    }
		    return {
				title: '独立费~工程建设其他费用计算器',
				path: '/pages/index/index'
		    }
		},
		data() {
			return {
					provinceLists: ['全国','河南','海南','广东','广西','北京','天津','河北','山西','辽宁','吉林','黑龙江','内蒙古','上海','浙江','江苏','山东','安徽','福建','湖南','湖北','江西','四川','重庆','贵州','云南','陕西','甘肃','宁夏','青海','新疆'],
					proCalList:{},
					filterList: [],
					data:{},
					clickPro: '',
					clickFilter: '',
					windowHeight: '',
					key: 'd5e591ec54220d8fd5cafc4def34eef9',
					amapPlugin: null,  
					addressName: '全国',  
				}
		},
		onLoad() {  
			this.amapPlugin = new amap.AMapWX({  
				key: this.key  
			});  
			this.getRegeo()
		},
		mounted() {
			const res = uni.getSystemInfoSync()
			this.windowHeight = res.windowHeight
			this.getFilterAll()
		},
		methods: {
			getRegeo() {  
				this.amapPlugin.getRegeo({  
					success: (data) => { 
						const pro = data[0].regeocodeData.addressComponent.province.slice(0,2);
						if(pro){
							this.addressName = pro
							this.clickPro = pro
						}
						$req.request({
							url:'/api/xcx/getCalculatorByProvince',
							data:{
								state:1,
								province:this.addressName
							}
						}).then(res=>{
							this.proCalList = res.data.message
						}).catch(err=>{
							console.log(err)
						})
					}  
				});  
			},  
			goSearch() {
				uni.navigateTo({
				    url: '/pages/sousuo/sousuo'
				});
			},
			getCal(e){
				if(this.clickPro == e.currentTarget.dataset.name){
					this.clickPro = ''
				}else{
					this.clickPro = e.currentTarget.dataset.name
				}
				this.getCalculate(this.clickPro,this.clickFilter)
			},
			getFilterAll(){
				$req.request({
					url:'/api/xcx/getAll'
				}).then(res=>{
					const result =  res.data.data
					this.filterList = result.filter(val=>{
						return val != '其他标准' && val != '原位测试'
					})
				}).catch(err=>{
					console.log(err)
				})
			},
			getFilter(e) {
				if(this.clickFilter == e.currentTarget.dataset.filter){
					this.clickFilter = ''
				}else{
					this.clickFilter = e.currentTarget.dataset.filter
				}
				this.getCalculate(this.clickPro,this.clickFilter)
			},
			getCalculate(pro,category){
				let data = {}
				if(pro && !category){ // 只有省份时
					data = {
						state: 1,
						province:pro
					}
					this.getAllCate(data)
				}else if(!pro && category){ //只有分类
					data = {
						state: 1,
						calculator_type: category
					}
					this.getAllCate(data)
				}else { //省份分类
					data = {
						state: 1,
						province:pro,
						calculator_type: category
					}
					this.getAllCate(data)
				}
			},
			getAllCate(data){
				const url = '/api/xcx/getCalculatorByProvince'
				$req.request({ //没省份没分类不发送请求
					url:url,
					data:data
				}).then(res=>{
					this.proCalList = res.data.message 
				}).catch(err=>{
					uni.showToast({
						icon:'none',
						title:'获取数据失败，请稍后重试'
					})
				})
			},
			navigateto(e) {
				const url = e.currentTarget.dataset.url
				const type = e.currentTarget.dataset.type
				let urlArr = url.split('/')
				calRouter(type,urlArr)
			}
		},
		computed:{
			proList(){
				let arr = []
				arr = this.provinceLists.filter(val=>{
					return val != this.addressName
				})
				return arr
			}
		},
	}
</script>
<!-- 获取地理位置 -->

<style>
	.activepro {
		border-bottom: 4rpx solid #00A0E0;
		color: #00a0e0;
	}
	.activefilter {
		border-right: 4rpx solid #00A0E0;
		color: #00a0e0;
	}
	.province-header {
		width: 100%;
		height: 60rpx;
		line-height: 60rpx;
		border-bottom: 2rpx solid #ddd;
		position: fixed;
		display: flex;
		font-size: 32rpx;
		background: #fff;
		z-index: 999;
	}
	.province-header .province-nav {
		width: 22%;
		height: 100%;
	}
	.province-header .province-wrap {
		width: 78%;
		height: 100%;
		display: flex;
	}
	.province-header .province-wrap .province-now { 
		width: 15%;
		height: 100%;
		text-align: center;
	}
	.province-header .province-wrap .province-box {
		width: 85%;
		height: 100%;
	}
	.scroll-box {
		height: 100%;
		overflow: hidden;
		white-space: nowrap;
	}
	.province-item {
		margin-left: 22rpx;
		display: inline-block;
		font-size: 32rpx;
	}
	.cal-item {
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		padding: 10rpx;
		font-size: 30rpx;
	}
	.cal-wrap {
		display: flex;
		padding-top: 60rpx;
		height: 100%;
	}
	.content-nav {
		flex: 1;
		height: 100%;
		border-right: 2rpx solid #ddd;
	}
	.content {
		flex: 3.5;
		display: flex;
		height: 100%;
		align-items: center;
	}
	.btn {
		width: 85%;
		display: block;
		padding: 16rpx 10rpx;
		min-height: 74rpx;
		line-height: 40rpx;
		text-align: center;
		margin-top: 20rpx;
		font-size: 28rpx;
		border-radius: 14rpx;
		color: #fff;
		margin-left: auto;
		margin-right: auto;
		background-color: #5cb85c;
		border-color: #4cae4c;
	}
	.activeBottom {
		border-bottom: 2px solid #007BFF;
	}
</style>
