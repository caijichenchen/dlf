<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">搜索结果</block>
		</cu-custom>
		<view>
			<view class="sea-box" >搜索关键字:<text style="color: #3366d6;">设计费计算器</text></view>
			<view class="header text-center">
				<view class="header-item" style="width: 50%;" :data-show="1" :class="{'activeItem':show==1}" @tap="changeShow(1)">计算器</view>
				<view class="header-item" style="width: 50%" :data-show="2" :class="{'activeItem':show==2}" @tap="changeShow(2)">标准</view>
				<!-- <view class="header-item" style="width: 28%" :data-show="3" :class="{'activeItem':show==3}" @tap="changeShow">帮助</view> -->
			</view>
			<view v-if="show == 1">
				<view v-if="searchList[0].length >= 1">
					<uni-card v-for="(item,index) in searchList[0]"
							:key="index"
							:title="item.name"
							extra="点击查看" 
							:note="'发表时间:'+item.created_at.split(' ')[0]"
							@click="goCal(item.new_url,item.type)"
							>
							{{item.key_word}}
					</uni-card>
				</view>
				<view v-else>
					<view class="fongt-md iconBLue my-3" style="padding-left: 3%;">未能找到相关搜索,为您推荐:</view>
					<uni-card @click="goRecommend('/pagesB/Calculator/sjflayouts/sjfguo/sjfguo')" title="设计费计算器" extra="点击查看" note="发表时间:两年前">设计费计算器,设计费计算,工程设计费计算器,计价格[2002]10号计算器</uni-card>
					<uni-card @click="goRecommend('/pagesA/Calculator/zbdlflayouts/zbdlfguo/zbdlfguo')" title="全国招标代理费计算器" extra="点击查看" note="发表时间:一年前">招标代理费计算器,招标代理费服务费计算器,招标代理费计算器在线,计价格[2002]1980号计算器</uni-card>
					<uni-card @click="goRecommend('/pagesC/Calculator/jlflayouts/jlfguo/jlfguo')" title="全国通用监理费计算器" extra="点击查看" note="发表时间:两年前">监理费计算器,监理费计算,工程监理费计算器,发改价格[2007]670号计算器</uni-card>
				</view>
			</view>
			<view v-if="show == 2">
				<view v-if="searchList[1].length >= 1">
					<uni-card v-for="(item,index) in searchList[1]"
							:key="index"
							:title="item.name"
							extra="点击查看" 
							:note="'发表时间:'+item.created_at.split(' ')[0]"
							@click="goDetail(item.id)"
							>
							{{item.key_word}}
					</uni-card>
				</view>
				<view v-else>
					<view class="fongt-md iconBLue my-3" style="padding-left: 3%;">未能找到相关搜索,为您推荐:</view>
					<uni-card @click="goDetail(38)" title="监理费计算标准-发改价格[2007]670号" extra="点击查看" note="发表时间:两年前">监理费计算标准-发改价格[2007]670号</uni-card>
					<uni-card @click="goDetail(10)" title="设计费计算标准|计价格[2002]10号" extra="点击查看" note="发表时间:两年前">设计费计算标准|计价格[2002]10号</uni-card>
					<uni-card @click="goDetail(34)" title="招标代理费计算标准-计价格[2002]1980号" extra="点击查看" note="发表时间:两年前">招标代理费计算标准-计价格[2002]1980号</uni-card>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniCard from "@/components/uni-card/uni-card"
	import $req from '@/common/req/request.js'
	import { router } from '@/common/req/router.js'
	import { calRouter } from '@/common/req/router.js'
	export default {
		data() {
			return {
				show:1,
				text:'点击查看',
				searchList:[]
			}
		},
		onLoad(options) {
			let keyCode = options.key
			if(keyCode){
				$req.request({
					url: '/api/xcx/search',
					data:{
						key: keyCode
					}
				}).then(res=>{
					console.log(res.data)
					this.searchList = res.data
				}).catch(err=>{
					console.log(err)
				})
			}
		},
		methods:{
			goDetail(id){
				uni.navigateTo({
					url:`/pages/normal/normal?id=${id}`
				})
			},
			goRecommend(url){
				uni.navigateTo({
					url:url
				})
			},
			goCal(url,type){
				let urlArr = url.split('/')
				calRouter(type,urlArr)
			},
			changeShow(index){
				if(this.show = index){
					return
				}
				this.show = index
			}
		},
	    components: {uniCard}
	}
</script>

<style>
	.sea-box {
		color: #00a0e0;
		font-size: 30rpx;
		text-align: left;
		padding-left: 3%;
		margin-top: 14rpx;
		margin-bottom: 14rpx;
	}
	.header {
		display: flex;
		padding-left: 3%;
		padding-right: 3%;
		margin-top: 14rpx;
	}
	.header-item {
		font-size: 40rpx;
	}
	.activeItem {
		color: #00A0E0;
		border-bottom: 4rpx solid #00A0E0;
	}
</style>
