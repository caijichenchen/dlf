<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">管理抬头</block>
		</cu-custom>
		<view class="px-3 py-3">
			<view class="px-2 py-1 font-md b-d" @tap="mynavigate('sztt','add')" ><text style="font-size: 40rpx;line-height: 1;">⊕</text>新增发票抬头</view>
		</view>
		<view class="tt-wrap font-md px-3 mt-3 py-4" v-for="(item,index) in ttdata" :key="index">
			<view class="tt-l" >
				<view v-if="item.inv_type == 0">开具类型:个人</view>
				<view v-else>开具类型:企业</view>
				<view>发票抬头:{{item.inv_title}}</view>
				<view v-if="item.inv_type == 0">个人手机号:{{item.ratepayer_number}}</view>
				<view v-else>纳税人识别号:{{item.ratepayer_number}}</view>
				<view>发票类型:增值税普通发票</view>
			</view>
			<view class="tt-r">
				<view v-if="item.default == 1">默认</view>
				<view v-if="item.default == 0" class="c-t" :data-id="item.id" @tap="setDefault">设为默认</view>
				<view class="c-t" v-if="item.inv_type == 0" @tap="mynavigate('sztt','check','per',item.id)" >查看</view>
				<view class="c-t" v-else @tap="mynavigate('sztt','check','compony',item.id)" >查看</view>
				<view class="c-t" v-if="item.inv_type == 0" @tap="mynavigate('sztt','change','per',item.id)" >修改</view>
				<view class="c-t" v-else @tap="mynavigate('sztt','change','compony',item.id)" >修改</view>
				<view class="c-t" v-if="item.default == 0" :data-id="item.id" @tap="delTitle">删除</view>
			</view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data () {
			return {
				ttdata:[]
			}
		},
		onLoad() {
			this.reload()
		},
		methods: {
			reload(){
				$req.request({
					url:'/api/xcx/myorders/getInvoiceTitle',
				}).then((res)=> {
					this.ttdata = res.data.data
					console.log('获取用户发票成功',res.data.data)
				}).catch((err)=>{
					console.log('获取用户发票失败',err)
				})
			},
			setDefault(e) {
				$req.request({
					url:'/api/xcx/myorders/setDefaultTitle',
					method:'POST',
					data:{id:e.currentTarget.dataset.id}
				}).then((res)=> {
					uni.showToast({
						icon:'success',
						title:'设置默认抬头成功'
					})
					this.reload()
					console.log('设置默认抬头成功',res.data)
				}).catch((err)=>{
					console.log('设置默认抬头失败',err)
				})
			},
			delTitle(e) {
				$req.request({
					url:'/api/xcx/myorders/deleteInvoiceTitle',
					method:'POST',
					data:{id:e.currentTarget.dataset.id}
				}).then((res)=> {
					uni.showToast({
						icon:'success',
						title:'删除抬头成功'
					})
					this.reload()
					console.log('删除用户发票成功',res.data)
				}).catch((err)=>{
					console.log('删除用户发票失败',err)
				})
			},
			mynavigate(path,type,style,id){
				if(!path) return
				let url = '/pages/PersonalCenter/'+path+'?type='+type
				if(style){
					url = '/pages/PersonalCenter/'+path+'?type='+type+'&style='+style+'&id='+id
				}
				this.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style scoped>
	page{
		background: #FFFFFF;
	}
	.b-d {
		border: 3rpx solid #00A0E0;
		color: #00A0E0;
		font-weight: 600;
		display: inline-block;
	}
	.tt-wrap {
		border-top: 2rpx solid #ccc;
		border-bottom: 2rpx solid #f2f2f2;
		background: #f7f7f7;
		width: 100%;
		display: flex;
	}
	.tt-wrap .tt-l {
		width: 75%;
	}
	.tt-wrap .tt-l view {
		line-height: 50upx;
	}
	.tt-wrap .tt-r {
		width: 25%;
		text-align: center;
	}
	.tt-wrap .tt-r view {
		line-height: 50upx;
		text-align: center;
	}
	.c-t {
		color: #00a0e0;
	}
</style>
