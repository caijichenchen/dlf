<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">设置抬头</block>
		</cu-custom>
		<view class="px-3 mt-2 font-md">
			<view class="py-2 border-bottom">
				<text>开具类型</text>
				<label class="radio" v-if="showComponyBtn">
					<radio :checked="chioceCompony" @click="chioceCategoryCom"/><text>企业</text>
				</label>
				<label class="radio" v-if="showPerBtn">
					<radio :checked="chiocePer" @click="chioceCategoryPer"/><text>个人</text>
				</label>
			</view>
			<view v-if="showCompony">
				<view class="py-2 border-bottom">
					<input type="text" v-model="title" placeholder="请输入公司名称(必填项)" placeholder-style="font-size:28rpx">
				</view>
				<view class="py-2 border-bottom">
					<input type="text" v-model="ratepayer" placeholder="请填写您纳税登记证上的编号(必填项)" placeholder-style="font-size:28rpx">
				</view>
				<view class="py-2 border-bottom">
					<input type="text" v-model="user" placeholder="请填写您用来接收电子发票的手机号(必填项)" placeholder-style="font-size:28rpx">
				</view>
				<view class="c-c">
					增值税普通发票
				</view>
				<view class="py-2 border-bottom">
					<input type="text" v-model="tax" placeholder="请填写营业执照上的注册地址" placeholder-style="font-size:28rpx">
				</view>
				<view class="py-2 border-bottom">
					<input type="text" v-model="regadd" placeholder="请输入注册电话" placeholder-style="font-size:28rpx">
				</view>
				<view class="py-2 border-bottom">
					<input type="text" v-model="regPhone" placeholder="请输入开户银行" placeholder-style="font-size:28rpx">
				</view>
				<view class="py-2 border-bottom">
					<input type="text" v-model="regBank" placeholder="请输入银行卡号" placeholder-style="font-size:28rpx">
				</view>
			</view>
			<view v-if="showPer">
				<view class="py-2 border-bottom">
					<input type="text" v-model="perTitle" placeholder="请输入个人姓名(必填项)" placeholder-style="font-size:28rpx">
				</view>
				<view class="py-2 border-bottom">
					<input type="text" v-model="perPhone" placeholder="请输入个人手机号(必填项)" placeholder-style="font-size:28rpx">
				</view>
				<view class="c-c">
					增值税普通发票
				</view>
			</view>
			<view class="tt-btn py-2" v-if="showbtn" @click="changeInvMsg">提交</view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data() {
			return {
				showCompony:true,//控制显示内容
				showPer:false,
				showbtn:false,
				showComponyBtn: true,
				showPerBtn:false,
				ttid:'',
				chioceCompony:true,
				chiocePer:true,
				title:'',//数据
				ratepayer: '',
				user:'', 
				tax:'', 
				regadd:'', 
				regPhone:'',
				regBank:'', 
				perTitle:'',
				perPhone: ''
			}
		},
		onLoad(options){ //初始化判断显示页面
			if(options.id){
				this.ttid = options.id
			}
			if(options.type == 'add'){
				this.showbtn = true
				this.showPerBtn = true
				this.chiocePer = false
			}else if(options.type == 'check' && options.style == 'per'){//查看个人
				this.showComponyBtn = false
				this.showPerBtn = true
				this.showPer = true
				this.showCompony = false
				this.getInvMsg()
			}else if(options.type == 'change' && options.style == 'per'){//修改个人
				this.showComponyBtn = false
				this.showPerBtn = true
				this.showPer = true
				this.showCompony = false
				this.showbtn = true
				this.getInvMsg()
			}else if(options.type == 'check' && options.style == 'compony'){//查看企业
				this.getInvMsg()
			}else if(options.type == 'change' && options.style == 'compony'){//修改企业
				this.showbtn = true
				this.getInvMsg()
			}
		},
		methods:{
			chioceCategoryCom(){ //选择公司
				if(this.chiocePer){
					this.chiocePer = false
					this.chioceCompony = true
					this.showPer = false
					this.showCompony = true
				}
			},
			chioceCategoryPer(){ //选择个人
				if(this.chioceCompony){
					this.chiocePer = true
					this.chioceCompony = false
					this.showPer = true
					this.showCompony = false
				}
			},
			getInvMsg(){
				$req.request({
					url: '/api/xcx/myorders/firstInvoiceTitle?id='+this.ttid
				}).then(res=>{
					let invMsg = res.data.data
					console.log(invMsg)
					if(invMsg.inv_type == 0){//个人
						this.perTitle = invMsg.inv_title
						this.perPhone = invMsg.ratepayer_number
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			changeInvMsg(){
				let data = {}
				if(this.chioceCompony){//企业
					if(!this.title.trim()){
						return uni.showToast({
							icon:'none',
							title:'公司名称输入不能为空'
						})
					}
					if(!this.ratepayer.trim()){
						return uni.showToast({
							icon:'none',
							title:'纳税编号输入不能为空'
						})
					}
					if(!this.user.trim()){
						return uni.showToast({
							icon:'none',
							title:'手机号输入不能为空'
						})
					}
					data={
						inv_type : 1,
						inv_title : this.title,
						ratepayer_number: this.ratepayer,
						user_phone: this.user,
						tax_number: this.tax,
						reg_address: this.regadd,
						reg_phone : this.regPhone,
						bank_of_deposit: this.regBank
					}
				}else if(this.chiocePer){//个人
					if(!this.perPhone.trim()){
						return uni.showToast({
							icon:'none',
							title:'个人姓名输入不能为空'
						})
					}	
					if(!this.perTitle.trim()){
						return uni.showToast({
							icon:'none',
							title:'个人手机号输入不能为空'
						})
					}
					data={
						inv_type : 0,
						user_phone: this.perPhone,
						inv_title: this.perTitle
					}
				}
				console.log(data)
				// $req.request({
				// 	url:'/api/xcx/myorders/saveInvoiceTitle'
				// })
			}
		}
	}
</script>

<style scoped>
	page{
		background: #FFFFFF;
	}
	.c-c {
		height: 90upx;
		background: rgb(235, 235, 228);
		color: #333;
		line-height: 90upx;
	}
	.c-t input {
		height: 100%;
	}
	.tt-btn {
		width: 100%;
		margin-top: 30upx;
		background: #00A0E0;
		color: #fff;
		text-align: center;
		border-radius: 6rpx;
	}
</style>
