<template>
	<view :style="'height:'+windowHeight+'px'" class="aaa">
		<cu-custom bgColor="bg-gradual-blue" >
		    <block slot="content">计算器分类</block>
			<block slot="right" @click="goSearch" >
				<text class="iconfont" style="color: #FFFFFF;font-size: 34upx;">&#xe666;</text>
			</block>
		</cu-custom>
		<view class="province-header" >
			<view class="province-nav">当前省份:</view>
			<view class="province-wrap">
				<view class="province-now">海南</view>
				<view class="province-box">
					<scroll-view scroll-x="true" show-scrollbar="true" class="scroll-box">
						<view v-for="(item,index) in provinceList"
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
				<view v-for="(item,index) in proCalList" :key="index">
					<view :data-url="item.url" :data-name="item.name" @tap="navigateto" class="btn">{{item.name}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	
	export default {
		data() {
			return {
					provinceLists: ['全国','海南','广东','广西','北京','天津','河北','山西','辽宁','吉林','黑龙江','内蒙古','上海','浙江','江苏','山东','安徽','福建','湖南','湖北','河南','江西','四川','重庆','贵州','云南','陕西','甘肃','宁夏','青海','新疆'],
					proCalList:[],
					filterList: [],
					clickPro: '',
					clickFilter: '',
					windowHeight: ''
				}
		},
		onShow() {
			// uni.getLocation({
			//     type: 'wgs84',
			//     success: function (res) {
			// 			console.log(JSON.stringify(res))
			//          console.log('当前位置：' + res.latitude);
			//     },
			// 		fail: function(res) {
			// 			console.log("获取位置信息失败了")
			// 		}
			// });
		},
		mounted() {
			const res = uni.getSystemInfoSync()
			this.windowHeight = res.windowHeight
			$req.request({
				url:'/api/xcx/getCalculatorByProvince?state=2&province=海南'
			}).then(res=>{
				this.proCalList = res.data.message.standard
				console.log(res)
			}).catch(err=>{
				console.log(err)
			})
			this.getFilterAll()
		},
		methods: {
			goSearch() {
				uni.navigateTo({
				    url: '/pages/sousuo/sousuo'
				});
			},
			getCal(e){
				if(this.clickPro == e.currentTarget.dataset.name){
					this.clickPro = ''
					return
				}
				this.clickPro = e.currentTarget.dataset.name
				let url = '/api/xcx/getCalculatorByProvince' 
				let data = {
					state: 2,
					province:this.clickPro 
				}
				if(this.clickFilter){
					data = {
						state: 2,
						province:this.clickPro,
						calculator_type: this.clickFilter
					}
				}
				$req.request({
					url:url,
					data:data
				}).then(res=>{
					this.proCalList = res.data.message.standard
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			},
			getFilterAll(){
				$req.request({
					url:'/api/xcx/getAll'
				}).then(res=>{
					this.filterList = res.data.data
				}).catch(err=>{
					console.log(err)
				})
			},
			getFilter(e) {
				if(this.clickFilter == e.currentTarget.dataset.filter){
					this.clickFilter = ''
					return
				}
				this.clickFilter = e.currentTarget.dataset.filter
				let url = '/api/xcx/getCalculatorByProvince'
				let data = {
					state: 2,
					calculator_type:this.clickFilter
				}
				if(this.clickPro){
					data = {
						state: 2,
						province:this.clickPro,
						calculator_type: this.clickFilter
					}
				}
				$req.request({
					url: url,
					data:data
				}).then(res=>{
					this.proCalList = res.data.message.standard
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			},
			navigateto(e) {
				const url = e.currentTarget.dataset.url
				const name = e.currentTarget.dataset.name
				let nameArr = []
				if(name.search("-") != -1){
					nameArr = name.split('-')
				}else{
					nameArr = name.split('|')
				}
				const title = nameArr[nameArr.length-1]
				const urlArr = url.split('/')
				uni.navigateTo({
					url:`/pages/normal/normal?id=${urlArr[3]}&title=${title}`
				})
			}
		},
		computed: {
			provinceList: function() {
				function removepro(arr,val) {
					for(var i = 0;i < arr.length;i++){
						if(arr[i] === val){
							arr.splice(i,1);
							break;
						}
					}
					return arr
				}
				return removepro(this.provinceLists,'海南')
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
		font-size: 24rpx;
		border-radius: 14rpx;
		color: #fff;
		margin-left: auto;
		margin-right: auto;
		background-color: #00a0ea;
		border-color: #357ebd;
	}
	.activeBottom {
		border-bottom: 2px solid #007BFF;
	}
</style>
