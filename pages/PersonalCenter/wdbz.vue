<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">我的标准</block>
		</cu-custom>
		<view class="my-stand" v-for="(item,index) in normList" :key="index">
			<view class="my-stand-info">
				<view >
					标准名:{{item.counter.name}}
				</view>
				<view >
					文件名:{{item.counter.title}}
				</view>
			</view>
			<view class="my-stand-down" :data-countId="item.counter_id" @tap="downup">
				<view>下载</view>
			</view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data() {
			return {
				normList:[],
				serverUrl:this.$serverUrl
			}
		},
		onLoad() {
			$req.request({
				url:'/api/xcx/norm/norm',
				data:{page:1}
			}).then((res)=> {
				this.normList = res.data.data.data
				console.log('获取用户标准成功',res)
			}).catch((err)=>{
				console.log('获取用户标准失败',err)
			})
		},
		methods: {
			downup(e){
				console.log(e)
				console.log(e.currentTarget.dataset.countid)
				uni.downloadFile({
				    url: this.serverUrl+'/api/xcx/standard/download'+'?id='+e.currentTarget.dataset.countid, 
					header:{
						"Authorization": "Bearer " +uni.getStorageSync('loginToken'),
						"Accept":"application/prs.dlf.v1+json",
					},
				    success: (res) => {
				        if (res.statusCode === 200) {
				            uni.showToast({
				            	icon:'none',
								title:'下载成功'
				            })
				        }
				    }
				});
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
</style>
