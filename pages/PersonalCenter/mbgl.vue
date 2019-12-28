<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">模板管理</block>
		</cu-custom>
		<view class="d-flex border-bottom font-md px-3 py-2 text-center">
			<view style="width: 15%;">
				序号
			</view>
			<view style="width: 35%;">
				名称
			</view>
			<view style="width: 50%;">
				操作
			</view>
		</view>
		<view v-if="normList.length == 0" class="font-md px-3 py-2 text-center">
			暂无数据
		</view>
		<view v-else v-for="(item,index) in normList" :key="index">
			<view class="mb-wrap px-3 py-2 font-md">
				<text style="width: 15%;">{{index+1}}</text>
				<text style="width: 35%;">{{item.name}}</text>
				<text style="width: 50%;">
					<!-- <text style="color: #00A0E0;margin-right: 20upx;">修改</text> -->
					<text style="color: rgba(0,0,0,0.2);margin-right: 20upx;" v-if="item.default == 0" :data-countid="item.id" >删除</text>
					<text style="color: red;margin-right: 20upx;" v-else :data-countid="item.id" @tap="delMb">删除</text>
					<text style="color: rgba(0,0,0,0.2);" v-if="item.default == 0" :data-countid="item.id" >设为默认</text>
					<text style="color: #00A0E0;" v-else :data-countid="item.id" @tap="defaultMb">设为默认</text>
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data() {
			return {
				normList: []
			}
		},
		onLoad(){
			this.getnormList()
		},
		methods: {
			getnormList(){
				$req.request({
					url:'/api/xcx/template/templatelist',
				}).then((res)=> {
					this.normList = res.data.data
				}).catch((err)=>{
					uni.showToast({
						icon:'none',
						title:'获取信息失败,请稍后重试'
					})
				})
			},
			delMb(e) {
				$req.request({
					url:'/api/xcx/template/deleteTemplate?id='+e.currentTarget.dataset.countid,
				}).then((res)=> {
					uni.showToast({
						icon:'none',
						title:res.data.msg
					})
					this.getnormList()
				}).catch((err)=>{
					uni.showToast({
						icon:'none',
						title:'删除模板失败,请稍后重试'
					})
				})
			},
			defaultMb(e) {
				$req.request({
					url:'/api/xcx/template/default?id='+e.currentTarget.dataset.countid,
				}).then((res)=> {
					uni.showToast({
						icon:'none',
						title:res.data.msg
					})
					this.getnormList()
				}).catch((err)=>{
					uni.showToast({
						icon:'none',
						title:'设置模板失败,请稍后重试'
					})
				})
			}
		}
	}
</script>

<style>
	page{
		background: #fff;
	}
	.mb-wrap text {
		color: #656565;
		display: inline-block;
		text-align: center;
	}
</style>
