<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">我的标准</block>
		</cu-custom>
		<view class="my-stand" v-if="normList.length == 0">
			您还没有下载过相关标准哦
		</view>
		<view class="my-stand" v-else v-for="(item,index) in normList" :key="index">
			<view class="my-stand-info">
				<view >
					标准名:{{item.counter.name}}
				</view>
				<view style="margin-top: 20rpx;">
					文件名:{{item.counter.title}}
				</view>
			</view>
			<!-- <view class="my-stand-down" :data-countId="item.counter_id" @tap="downup">
				<view>下载</view>
			</view> -->
		</view>
		<view v-if="page >= last_page" class="load-more">
			没有更多了
		</view>
		<view v-if="page < last_page" class="load-more">
			下拉加载更多
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				normList:[],
				page:1,
				last_page:1,
				timer:null
			}
		},
		onLoad() { //获取标准
			this.getNorms()
		},
		onReachBottom(){
			if(this.timer){
				clearInterval(this.timer)
			}
			if(this.page <= this.last_page){
				this.page++
				this.timer = setTimeout(()=>{
					this.getNorms()
				},1000)
			}
			uni.showNavigationBarLoading()
		},
		methods: {
			getNorms(){ //加载标准
				this.$req.request({
					url:'/api/xcx/norm/norm',
					data:{page:this.page}
				}).then(res=> {
					this.normList = this.normList.concat(res.data.data.data) 
					this.last_page = res.data.data.last_page
				}).catch(err=>{
					this.$msg('获取用户标准失败')
				})
			}
		}
	}
</script>

<style>
	page{
		background: #fff;
	}
	.my-stand{
		width: 100%;
		padding: 15upx 40upx;
		display: flex;
		border-bottom: 2upx solid #dddddd;
	}
	.my-stand-info{
		width: 70%;
	}
	.my-stand-down{
		width: 30%;
		margin: auto;
		text-align: center;
	}
	.my-stand-down view{
		width: 96upx;
		height: 48upx;
		line-height: 40upx;
		text-align: center;
		color: #FFFFFF;
		font-size: 24upx;
		padding: 6upx 24upx;
		background: #00a0ea;
		margin-left: 40%;
	}
	.load-more{
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		color: #777777;
	}
</style>