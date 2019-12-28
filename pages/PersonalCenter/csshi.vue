<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">我的计算</block>
		</cu-custom>
		<view class="suggst_title">
			<view class="suggst_title_calculation">
				计算名称
			</view>
			<view class="suggst_title_calculation">
				计算时间
			</view>
			<view class="suggst_title_calculation">
				浏览报告
			</view>
		</view>
		<view class="list_all" v-for="(item,index) in countdata.data" :key="index">
			<view class="list_alls py-3">
				<view class="list_all_title">
					{{JSON.parse(item.data).name}}
				</view>
				<view class="list_all_title">
					{{JSON.parse(item.data).date}}
				</view>
				<view class="list_all_title">
					<view @tap="viewProcess(item.id)" class="jsbtn" style="background-color: #5cb85c;border-color: #4cae4c;">查看计算过程</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data() {
			return {
				countdata:{},
				templateId: ''
			}
		},
		mounted(){
			$req.request({
				url:'/api/xcx/mycount/mycount'
			}).then((res)=> {
				this.countdata = res.data.bigdata
				this.templateId = res.data.templateId.id
			}).catch((err)=>{
				uni.showToast({
					icon:'none',
					title:'获取信息失败,请稍后重试'
				})
			})
		},
		methods: {
			viewProcess(id){
				const temId = this.templateId
				uni.navigateTo({
					url:`./jsym?id=${id}&temId=${temId}`
				})
			}
		}
	}
</script>

<style>
	page{
		background: #fff;
	}
	.suggst_title{
		display: flex;
		flex-wrap: wrap;
	}
	.suggst_title_calculation{
		width: 33.333%;
		height: 74upx;
		padding: 16upx;
		float: left;
		background-color: #00a0e0;
		color: #FFFFFF;
		text-align: center;
		font-size: 30rpx;
	}
	.list_alls{
		display: flex;
		flex-wrap: wrap;
		border-bottom: 2upx solid #ccc;
		font-size: 28rpx;
	}
	.list_all_title{
		width: 33.3333333%;
		text-align: center;
	}
	.jsbtn {
		width: 200upx;
		height: 58upx;
		padding: 10upx 20upx;
		color: #FFFFFF;
		font-size: 26upx;
		border-radius: 4upx;
		display: inline-block;
	}
</style>
