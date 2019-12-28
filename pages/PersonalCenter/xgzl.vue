<template>
	<view >
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">修改个人资料</block>
		</cu-custom>
		<view class="font-md">
			<view class="p-3 row border-bottom">
				<view style="line-height: 80rpx;">修改头像:</view>
				<view style="margin-left: auto;">
					<image style="width: 80rpx;height: 80rpx;border-radius: 50%;" @tap="changeImg" :src="serverUrl+'/upload'+userInfo.userInfo.head_img"></image>
				</view>
			</view>
			<view class="p-3 row border-bottom">
				<view >用&nbsp;&nbsp;户&nbsp;&nbsp;名:</view>
				<view style="margin-left: auto;">{{userInfo.userInfo.user.name}}</view>
			</view>
			<view class="p-3 row border-bottom">
				<view >姓&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;名:</view>
				<input style="text-align: right;margin-left: auto;" class="nameinput" type="text" v-model="uname">
			</view>
			<view class="p-3 row border-bottom">
				<view >绑定手机:</view>
				<view style="margin-left: auto;">{{userInfo.userInfo.user.tel}}</view>
				<navigator url="grxx" style="color: #00A0E0;">解绑</navigator>
			</view>
			<view class="p-3 row border-bottom">
				<view >验证邮箱:</view>
				<view style="margin-left: auto;"></view>
			</view>
			<view class="mt-4 iconWhite backBlue text-center mx-3 p-2" style="border-radius: 6rpx;" @tap="setUser">
				保存
			</view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	import {mapState} from 'vuex';
	export default {
		data() {
			return {
				uname:'',
				uavatar:'',
				uName:'',
				uphone:'',
				uemail:'dulifei@163.com',
				modalName: null,
				serverUrl:this.$serverimgUrl,
				imgSrc:''
			}
		},
		onLoad(){
			if(this.userInfo){
				this.uname = this.userInfo.userInfo.user_name
			}
		},
		computed: {
			...mapState({
				userInfo:state=>state.user.userInfo
			})
		},
		methods: {
			changeImg(){
				uni.chooseImage({
					count: 1, //默认9
					sourceType:['album','camera'],
					success: function (res) {
						console.log(res)
						console.log(JSON.stringify(res.tempFilePaths));
						this.imgSrc = res.tempFilePaths
						console.log(this.imgSrc)
						// uni.previewImage({
						// 	urls: res.tempFilePaths,
						// 	longPressActions: {
						// 		itemList: ['发送给朋友', '保存图片', '收藏'],
						// 		success: function(data) {
						// 			console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						// 		},
						// 		fail: function(err) {
						// 			console.log(err.errMsg);
						// 		}
						// 	}
						// });
					}
				});
			},
			setUser() {
				$req.request({
					url:'/api/xcx/account/amendset',
					method:'POST',
					data:{
						user_name:this.uname,
						man:this.userInfo.userInfo.sex,
						tel:this.userInfo.userInfo.user.tel,
						avatar:this.imgSrc[0]
					},
				}).then((res)=>{
					console.log(res.data)
					uni.showToast({
						icon:'none',
						title:res.data.message
					})
				}).catch((err)=>{
					uni.showToast({
						icon:'none',
						title:err.data.message
					})
				})
			},
			xgxm(e){
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			xguname(){
				let that = this
				uni.getStorage({ 
					key:"uerInfo",
					success:(res) => {
						uni.request({
						    url: this.$serverUrl + '/altername',
							  header: {
									"Authorization": "Bearer " + res.data.token,
									"Accept":"application/prs.dlf.v1+json",
									},
						    data: {
									name:this.uname
								},
								method: 'POST',
								dataType:'json',
						    success: (res) => {
										console.log(res)
										that.hideModal()
										
									}
							});
							
						},
					}) 
			}
		}
	}
</script>

<style scoped>
	page{
		background: #FFFFFF;
	}
</style>
