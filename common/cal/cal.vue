<template>
	<view :style="'height:'+windowHeight+'px'" >
		<cu-custom bgColor="bg-gradual-blue" >
		    <block slot="content">计算器分类</block>
		</cu-custom>
		<view class="province-header" >
			<view class="province-nav">当前省份:</view>
			<view class="province-wrap">
				<view class="province-now" 
					:class="{'activepro':clickPro == city}"
					@tap="getCal(city)"
				>{{city}}</view>
				<view class="province-box">
					<scroll-view scroll-x="true" show-scrollbar="true" class="scroll-box">
						<view v-for="(item,index) in proList"
							:key="index"
							class="province-item"
							:class="{'activepro':clickPro == item}"
							@tap="getCal(item)"
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
					:class="{'activefilter':clickFilter == item}"
					@tap="getFilter(item)"
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
					<view v-if="type == 'calculation'" v-show="item.role_id" @tap="navigateto(item.url,item.parent_type)" class="btn" style="background:#5cb85c">{{item.name}}</view>
					<view v-else @tap="navigateto(item.url,item.name)" class="btn" style="background:#00a0e0">{{item.name}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	import { calRouter } from '@/common/req/router.js'
	export default {
		props:{
			state:{ //标准或计算器请求标志
				type:[String,Number],
				default: 1
			},
			city:{ //城市定位
				type:String,
				default:'全国'
			},
			type:{ //区分计算器或标准
				type:String,
				default: 'calculation'
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
				}
		},
		mounted() {
			const res = uni.getSystemInfoSync()
			this.windowHeight = res.windowHeight
			this.getFilterAll()
		},
		methods: {
			goSearch() {
				uni.navigateTo({
				    url: '/pages/sousuo/sousuo'
				});
			},
			getCal(pro){ //选择城市
				this.clickPro = this.clickPro == pro ? '' : pro
				this.getCalculate(this.clickPro,this.clickFilter)
			},
			getFilterAll(){ //获取分类
				$req.request({
					url:'/api/xcx/getAll'
				}).then(res=>{
					const result =  res.data.data
					this.filterList = result.filter(val=> val != '其他标准' && val != '原位测试')
				}).catch(err=>{
					console.log(err)
				})
			},
			getFilter(category) { //选择分类
				this.clickFilter = this.clickFilter == category ? '' : category
				this.getCalculate(this.clickPro,this.clickFilter)
			},
			getCalculate(pro,category){
				let data = {}
				if(pro && !category){ // 只有省份时
					data = {
						state: this.state,
						province:pro
					}
					this.getAllCate(data)
				}else if(!pro && category){ //只有分类
					data = {
						state: this.state,
						calculator_type: category
					}
					this.getAllCate(data)
				}else { //省份分类
					data = {
						state: this.state,
						province:pro,
						calculator_type: category
					}
					this.getAllCate(data)
				}
			},
			getAllCate(data){ //获取计算器标准
				const url = '/api/xcx/getCalculatorByProvince'
				$req.request({ //没省份没分类不发送请求
					url:url,
					data:data
				}).then(res=>{
					if(this.type == 'calculation'){ //当是计算器时
						this.proCalList = res.data.message 
					}else if(this.type == 'standard'){ //当是标准时
						this.proCalList = res.data.message.standard ? res.data.message.standard : []
					}
				}).catch(err=>{
					this.$msg('获取数据失败，请稍后重试')
				})
			},
			//跳转计算器
			navigateto(url,type) { 
				if(this.type == 'calculation'){
					let urlArr = url.split('/')
					calRouter(type,urlArr)
				}else if(this.type == 'standard'){
					let nameArr = type.includes("-") ? type.split('-') : type.split('|')
					const title = nameArr[nameArr.length-1]
					const urlArr = url.split('/')
					uni.navigateTo({
						url:`/pages/normal/normal?id=${urlArr[3]}&title=${title}`
					})
				}
			}
		},
		computed:{
			proList(){ //城市列表
				return this.provinceLists.filter(val => val != this.city)
			}
		},
		watch:{
			city(val){ //监听城市变化获取城市计算器
				$req.request({
					url:'/api/xcx/getCalculatorByProvince',
					data:{
						state:this.state,
						province:val
					}
				}).then(res=>{
					if(this.type == 'calculation'){ //当是计算器时
						this.proCalList = res.data.message 
					}else if(this.type == 'standard'){ //当是标准时
						this.proCalList = res.data.message.standard ? res.data.message.standard : []
					}
				}).catch(err=>{
					console.log(err)
				})
			}
		}
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
		/* background-color: #5cb85c; */
		border-color: #4cae4c;
	}
	.activeBottom {
		border-bottom: 2px solid #007BFF;
	}
</style>
