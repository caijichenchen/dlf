<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">我的通知</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in sjf" :key="index" @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
			<view class="sjf_content">
				<view v-show="TabCur==0" class="content_msg">
					<view v-if="!noread[0]" class="msg">
						<view class="iconfont">&#xe61e;</view>
						<view>没有新的通知</view>
					</view>
					<view v-else>
						<view class="msg-box">未读消息<view style="color:#00A0E0;margin-left: auto;" :data-status="'all'" @tap="readAllMsg">全部设置为已读</view></view>
						<view v-for="(item,index) in noread" :key="index" class="msg-ct">
							<text class="ggmsg">公告</text>
							<text @tap="readMsg" :data-id="item.id">{{item.message}}</text>
							<view style="display: flex;">
								<view style="line-height: 1.8rem;font-size: 0.7rem;">{{item.created_at}}</view>
								<view class="nonebtn" @tap="readMsg" :data-id="item.id" style="background: #00A0E0;">设为已读</view>
							</view>
						</view>
					</view>
				</view>
				<view v-show="TabCur==1" class="content_msg">
					<view class="msg" v-if="!okread[0]">
						<view class="iconfont">&#xe61e;</view>
						<view>没有新的通知</view>
					</view>
					<view v-else>
						<view class="msg-box">已读消息<view style="color: red;margin-left: auto;" :data-status="'read'" @tap="delAllMsg">删除全部通知</view></view>
						<view v-for="(item,index) in okread" :key="index" class="msg-ct">
							<text class="ggmsg">公告</text>
							<text>{{item.message}}</text>
							<view style="display: flex;">
								<view style="line-height: 1.8rem;font-size: 0.7rem;">{{item.created_at}}</view>
								<view class="nonebtn" @tap="delMsg" :data-id="item.id">删除</view>
							</view>
						</view>
					</view>
				</view>
				<view v-show="TabCur==2" class="content_msg">
					<view v-if="!allread[0]" class="msg">
						<view class="iconfont">&#xe61e;</view>
						<view>没有新的通知</view>
					</view>
					<view v-else>
						<view class="msg-box">已读消息<view style="color: red;margin-left: auto;" :data-status="'all'" @tap="delAllMsg">删除全部通知</view></view>
						<view v-for="(item,index) in allread" :key="index" class="msg-ct">
							<text class="ggmsg">公告</text>
							<text>{{item.message}}</text>
							<view style="display: flex;">
								<view style="line-height: 1.8rem;font-size: 0.7rem;">{{item.created_at}}</view>
								<view class="nonebtn" @tap="delMsg" :data-id="item.id">删除</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data() {
			return {
				shows:1,
				TabCur: 0,
				scrollLeft: 0,
				sjf:['未读消息','已读消息','全部消息'],
				noread:[],
				okread:[],
				allread:[]
			}
		},
		onLoad() {
			this.getNoRead()
		},
		methods: {
			tabSelect(e) {
			 	this.TabCur = e.currentTarget.dataset.id;
			 	this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				if(this.TabCur == 0){
					this.getNoRead()
				}else if(this.TabCur == 1){
					this.getOkRead()
				}else if(this.TabCur == 2){
					this.getAllRead()
				}
			},
			readAllMsg(e) {
				$req.request({
				 	url: '/api/xcx/setNotificationRead',
					data:{status:e.currentTarget.dataset.status},
					method:'PATCH'
				}).then((res)=>{
					uni.showToast({
						icon:'none',
						title:res.data.meg
					})
					if(this.TabCur == 0){
						this.getNoRead()
					}else if(this.TabCur == 1){
						this.getOkRead()
					}else if(this.TabCur == 2){
						this.getAllRead()
					}
				 	console.log(res)
				}).catch(()=>{
				 	console.log("errerrerr")
				})
			},
			readMsg(e) {
				$req.request({
				 	url: '/api/xcx/setNotificationRead',
					data:{id:e.currentTarget.dataset.id},
					method:'PATCH'
				}).then((res)=>{
					uni.showToast({
						icon:'none',
						title:res.data.meg
					})
					if(this.TabCur == 0){
						this.getNoRead()
					}else if(this.TabCur == 1){
						this.getOkRead()
					}else if(this.TabCur == 2){
						this.getAllRead()
					}
				 	console.log(res)
				}).catch(()=>{
				 	console.log("errerrerr")
				})
			},
			delAllMsg(e){
				$req.request({
				 	url: '/api/xcx/notificationDelete',
					data:{status:e.currentTarget.dataset.status},
					method:'DELETE'
				}).then((res)=>{
					uni.showToast({
						icon:'none',
						title:res.data.meg
					})
					if(this.TabCur == 0){
						this.getNoRead()
					}else if(this.TabCur == 1){
						this.getOkRead()
					}else if(this.TabCur == 2){
						this.getAllRead()
					}
				 	console.log(res)
				}).catch(()=>{
				 	uni.showToast({
				 		icon:'none',
						title:'删除失败请稍后重试'
				 	})
				})
			},
			delMsg(e){
				$req.request({
				 	url: '/api/xcx/notificationDelete',
					data:{id:e.currentTarget.dataset.id},
					method:'DELETE'
				}).then((res)=>{
					uni.showToast({
						icon:'none',
						title:res.data.meg
					})
					if(this.TabCur == 0){
						this.getNoRead()
					}else if(this.TabCur == 1){
						this.getOkRead()
					}else if(this.TabCur == 2){
						this.getAllRead()
					}
				 	console.log(res)
				}).catch(()=>{
				 	uni.showToast({
				 		icon:'none',
				 		title:'删除失败请稍后重试'
				 	})
				})
			},
			getNoRead(){
				$req.request({
				 	url: '/api/xcx/notificationAll?readed=0'
				}).then((res)=>{
				 	this.noread = res.data
				 	console.log(res)
				}).catch(()=>{
				 	console.log("errerrerr")
				})
			 },
			getOkRead(){
				$req.request({
					url: '/api/xcx/notificationAll?readed=1'
				}).then((res)=>{
					this.okread = res.data
					console.log(res)
				}).catch(()=>{
					console.log("errerrerr")
				})
			},
			getAllRead(){
				$req.request({
					url: '/api/xcx/notificationAll'
				}).then((res)=>{
					this.allread = res.data
					console.log(res)
				}).catch(()=>{
					console.log("errerrerr")
				})
			}
		}
	}
</script>

<style>
	page{
		background: #fff;
	}
	/* tabs样式 */
	.sjf_content{
		width: 100%;
		height: auto;
		background-color: #fff;
	}
	.content_msg{
		width: 96%;
		margin-left: 2%;
		margin-top: 20upx;
	}
	.sjf_content form{
		text-align: left;
	}
	
	.text-orange , .line-orange, .lines-orange{
		color: #0062CC;
	}
	.msg{
		width: 96%;
		height: 200upx;
		border: 2upx solid #CCCCCC;
		background-color: #ececec;
		margin: 0 auto;
		color: #333;
		text-align: center;
	}
	.msg .iconfont{
		margin: 40upx 0 5upx 0;
	}
	.msg-box {
		height: 80rpx;
		line-height: 80rpx;
		text-align: left;
		font-size: 30rpx;
		font-weight: bolder;
		padding-left: 20upx;
		padding-right: 20upx;
		display: flex;
		border-bottom: 2upx solid #ccc;
	}
	.ggmsg {
		display: inline-block;
		background: #d9534f;
		color: #fff;
		padding-left: 12upx;
		padding-right: 12upx;
		height: 54rpx;
		line-height: 54rpx;
		font-size: 28rpx;
		font-weight: bolder;
		margin-right: 6upx;
	}
	.nonebtn {
		display: inline-block;
		background: #d9534f;
		color: #fff;
		padding-left: 20upx;
		padding-right: 20upx;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 28rpx;
		font-weight: bolder;
		margin-left: auto
	}
	.msg-ct {
		padding:30upx 20upx 20upx 20upx;
		border-bottom: 2upx solid #ccc;
		font-size: 28rpx;
		text-align: left;
		white-space: normal;
	}
</style>
