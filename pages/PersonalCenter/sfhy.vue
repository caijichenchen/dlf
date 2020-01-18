<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
		    <block slot="content">省份会员</block>
		</cu-custom>
		<view>
			<view class="font-bs iconBLue px-4">1、快速选择省份计算器:</view>
			<view class="px-4 font-md mt-2">
				<view class="pro-title">华南 :</view>
				<view class="p-box">
					<view v-for="(item,index) in hnlist" :key="index" :class="{'active-choice':proList.includes(item)}" @tap="getCal(item)" class="p-item">
						{{item}}
					</view>
				</view>
			</view>
			<view class="px-4 font-md mt-2">
				<view class="pro-title">华北 :</view>
				<view class="p-box">
					<view v-for="(item,index) in hblist" :key="index" :class="{'active-choice':proList.includes(item)}" @tap="getCal(item)" class="p-item">
						{{item}}
					</view>
				</view>
			</view>
			<view class="px-4 font-md mt-2">
				<view class="pro-title">华东 :</view>
				<view class="p-box">
					<view v-for="(item,index) in hdlist" :key="index" :class="{'active-choice':proList.includes(item)}" @tap="getCal(item)" class="p-item">
						{{item}}
					</view>
				</view>
			</view>
			<view class="px-4 font-md mt-2">
				<view class="pro-title">华中 :</view>
				<view class="p-box">
					<view v-for="(item,index) in hzlist" :key="index" :class="{'active-choice':proList.includes(item)}" @tap="getCal(item)" class="p-item">
						{{item}}
					</view>
				</view>
			</view>
			<view class="px-4 font-md mt-2">
				<view class="pro-title">西部 :</view>
				<view class="p-box">
					<view v-for="(item,index) in xblist" :key="index" :class="{'active-choice':proList.includes(item)}" @tap="getCal(item)" class="p-item">
						{{item}}
					</view>
				</view>
			</view>
		</view>
		<view class="font-bs ">
			<view class="iconBLue px-4">包含的计算器:</view>
			<view class="c-box px-4">
				<view v-if="proList.length == 0" class="nochoose">您还没有选择计算器哦</view>
				<view class="c-item" v-for="(item,key) in allCalArr" :key="key">
					{{item}}
				</view>
			</view>
		</view>
		<view class="font-bs iconBLue px-4 mt-3">
			<view class="iconBLue">2、选择的省份:</view>
			<view class="p-box" >
				<view v-for="(item,index) in calList" :key="index" class="p-list">
					{{item.name}}{{item.price[0]}}元/月
				</view>
			</view>
		</view>
		<view class="font-bs iconBLue px-4 mt-3">
			<view class="iconBLue">3、选择时长:</view>
			<view class="time" style="margin-top: 0.7rem;">
				<view class="timeOne" :class="{vipon:shows==1}" :data-show="1" :data-money="monthOne" @tap="getVal">
					<text>{{monthOne}}/1月</text>
				</view>
				<view class="timeOne" :class="{vipon:shows==3}" :data-show="3" :data-money="monthThr" @tap="getVal">
					<view>8.5折</view>
					<text class="lineThr">原价:￥{{Math.ceil(monthThr*100/85)}}</text>
					<text>{{monthThr}}/3月</text>
				</view>
				<view class="timeOne" :class="{vipon:shows==6}" :data-show="6" :data-money="monthSix" @tap="getVal">
					<view>5.9折</view>
					<text class="lineThr">原价:￥{{Math.ceil(monthSix*100/59)}}</text>
					<text>{{monthSix}}/6月</text>
				</view>
				<view class="timeOne" :class="{vipon:shows==12}" :data-show="12" :data-money="monthTwe" @tap="getVal">
					<view>4.3折</view>
					<text class="lineThr">原价:￥{{Math.ceil(monthTwe*100/43)}}</text>
					<text>{{monthTwe}}/12月</text>
				</view>
			</view>
		</view>
		<view class="mt-4 font-md  ">
			<view class="row px-4 border-bottom" @tap="showyhj" style="height: 80rpx;">
				<view style="line-height: 80rpx;">优惠码</view>
				<view style="line-height: 80rpx;margin-left: auto;">领取优惠券</view>
				<image class="toimg" src="/static/HM-PersonalCenter/to.png"></image>
			</view>
			<view >
				<view class="row px-4 border-bottom" style="height: 80rpx;">
					<view style="line-height: 80rpx;">原价</view>
					<view style="line-height: 80rpx;margin-left: auto;">¥{{money}}</view>
				</view>
				<view class="tip px-4"
					v-if="userInfo.vipInfo.type == '企业会员' || userInfo.vipInfo.type == '省份会员'"
				>
					您好,尊贵的企业会员,您已享有网站全部特权,无需购买自选会员或VIP会员,若转变会员,请企业会员过期后再来购买
				</view>
			</view>
		</view>
		<radio-group class="uni-flex con-bot" name="gender">
			<!-- <view class="wx">
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAMAAAArDjJDAAAAjVBMVEUAAAAimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEgimEg2MoZLAAAALnRSTlMA+gT16gjlz/Ij7uERP7ehcjjcvYtqKqcxF6sM18iclXlf1GRQS1ZEw7Eehn9bjbVPuAAAA2pJREFUWMOtV+e6qkAMzNJ7kSrSEbu8/+Pdc0Q5gAFhvfPP1W9MZjPJBmag3a+mIQoc2zREEmInuFYyUEC3TFFQJJY0TxBWUoQyyI/reHzPLAW2QcAKpen5i4lsy9mQZhJk41jhwogcjjSzIJyxIDJtHyFECFlUa/NMsoulhqd5nbtOXj8rzWIokc1MMTGe2KxCUkxw8bnarMTG41HBc6lZDc5C4trlpKGAUvHvOrENFZRizLXnGkpw9pApjGmZ2HI/FOpMSUSE7LIbCJUTOiIpsrej9AQ6ptPBb0P54zOpmERLfxq3SF9J6jR1oGY1wzxKWzcVcngqRaG5EBU7pg3pFv8I7bQf7NWas4mn8a1vj470kK0trnS1ifNXAWg39RlHCj/YCiudkvnaawhESpfx7yVW6wrA1Lubr5KeNMXPQbCGyTjI3Ti5DtpbAMCro/hnWvKpN7SOZzIUkAd7bPRsSjvR1Tui7T0ZZ25DPj6qvBK9trTme4Pp/f/yd9MEsE+Qkrxrf0PADhB/mOCMj6QthGd2mLThyb0hUCUNAgdiJFLwTanHnVgh89eQLjd8MMXAvcvL/IrxOmfFq95vbbo54TMO3rMm+mOUbchjnJv74ZPiNGlMQA7TtpYNVVGNajDnZIub9gFGtdm1EViupw3GtzzrDMAyvwMG/lA2s1TYdD+jTK4yb3TAbCIh78OP7yUOROz4NiZiLJH91BDBwI5LfhRS+rk/nvB2TA59om1xWjCTArDQc6eXm52pSwbJFUKChtWZ5eIhIWGogY/xzss8jRIICyfjDiDDq2QPwPB1tvixFP02afyrRN4eXHFKJNwh/IQdIjNe84R4jLRbQwG8m/jc90zs88azhgJ4A/g+LLZbXV3yJZXJdCYTv2NSfehwl75hIt6gQ35DFewGfcSgZ0r80RYvUgt1ZEYdt1Ypt6X3TZW5U60UksdjY44iLsV6Sj7OsVy9CVQ7wHFcu9HXPEwhWCVTqsM0nDWLV76dYWKWC6+mXTmh8MlC06lRpcEsit6vyfSWG5uFzMA8OlOzcWSUCiEIz8ZwjzJ8RPAkErO9H9ZW4MScxJIXJG5zim6HUIMFSFoid98W3sU+WLfMMBzn5BhGerUKXYZlYLgfd4pZPTy9yGFoh/IF1kAmiuja8D9QiO4F6PEPK7CSjTfoBuIAAAAASUVORK5CYII=" alt="微信支付">
				<text>微信支付</text>
				<label><radio value="微信" checked="true" /></label>
			</view>
			<view class="zfb">
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAMAAAArDjJDAAAAn1BMVEUAAAABn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+gBn+jJZnQ1AAAANHRSTlMA4+nQcGz0gviQRA3DJAbGSN6eCu6VKsipiT4gHObMVtm9rqRnXDOzhWFNLxZ4EQJSOZl0zNrw/wAAAtZJREFUWMPtmNmWojAQQAvRiII2KPuioIAL7p3//7bhCFFkEkMLZ04/zH30hJukqCpLoUBWDUsTPkCzRuocnpyTELcgXAJBtnFL1nJpUnBrlLvrbOMOsM+5aok7IY+XLHSj0mQY444Yg9GVagQLzEUq4L1E0LhBcCcFnE0XwI36DEo46Sf+V/1SlU1Ui5+qvvo1VKJa9utE71UGNMf5Z6rN+BXVhIJpfzusYf0w7OtSNdc7S4a59ptUjwv2PlD1vqocSdiHoyo3iaNqng9po1ONmqiMRiplwCYms4bIUfERpoXJR61VWyj4xm1VyCtVm9YqqzSZqKFKQjkSTbUrVSPcQCXMkqvp+b43Sd1kuApftg/mpIi4KjS7yvDC3HOPkVAPep9bOJEJVOS9fT+GfiprSOSptsBmrq6ERxnEnHImpkN2da+p6cl/n+1ADsVRre+bJyu9fIlC5OzSM1Doc5pM4OeLXKs+6QzVad00tTmq73xRItGWfGc11/nqKAwVqYgLpiOt9lAnizeIobIB5AAziXYy1Jns1jpN1SfRZNDzgIK/NISqikzwK8wGucBATo/hq0oFiN7/VmAzNWNFwiFRjSstiN0QYKAydJPEIao9GSYoSDE8Kya6yMBAeOxrSoyIl6lAsiWMD0wV+e670Rvno124iFTG0Xuj0v08fJRooe2jcFS98vHNZarwEHKXUTfZKRCWtfuvLlOGCt3vsd9UHghmla1jytV3J6oKi0UwzbyhW6JorY/7ykJ5hmloowlNhZXno9Pa2VURM9BnLkWFFylQ8Q0Jv2FzIaqX13Wg5LEjYA7K4ERUT4Jb9nK3QxIh3ADB8YmqQrjqq5nnTzJ1sF7ouCm6wZgZEEL4hyCiak8PtK5UAYhdqTRYd6VawLIrlQMH1JEqIwNqJ39gzRddmHT/XmRCe5OkluOu2PpMKpScHNQuTl61kxyVMOh9QKBZo7LN/QHf5SDCzUz2PQAAAABJRU5ErkJggg==" alt="支付宝">
				<text>支付宝支付</text>
					<label><radio value="支付宝" /></label>
			</view> -->
			<view class="zhifu">
				<view class="zhifu-lf">应付金额:￥{{price}}</view>
				<view class="zhifu-rt" >确认购买</view>
			</view>
		</radio-group>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				hnlist:['广东','广西','海南'],
				hblist:['北京','天津','河北','山西','辽宁','吉林','黑龙江','内蒙古'],
				hdlist:['上海','浙江','江苏','山东','安徽','福建'],
				hzlist:['湖南','湖北','河南','江西'],
				xblist:['四川','重庆','贵州','云南','西藏','陕西','甘肃','宁夏','青海','新疆'],
				allCalList: [],
				calList: [],
				proList:[],
				money: 0,
				shows:1,
				couponId:'',
				prompt:'',
				price: 0,
				payStatus: false,
				timer:null,
				orderData: {}
			};
		},
		created() {
			// uni.$on('chooseCoupon',(data)=>{
			// 	if(data.id){
			// 		this.couponId = data.id
			// 		this.getJudgePay()
			// 	}
			// })
			// this.getOrderStatus()
			// this.getJudgePay()
		},
		methods: {
			getCal(province){
				const index = this.proList.indexOf(province)
				if(this.proList.includes(province)){//如果包含了当前点击省份，移除
					this.proList.splice(index,1)
					this.calList = this.calList.filter(item=>{
						return item.name != province
					})
					this.getMoney()
				}else {//没有包含，放进数组,发送请求
					this.proList.push(province)
					$req.request({
					 	url: '/api/xcx/getCalculatorByProvince?state=1&province='+province
					}).then((res)=>{
						console.log(res)
						this.calList.push({
							name:province,
							price:res.data.price,
							cal:res.data.province_role,
							id:res.data.role_id
						})
						this.getMoney()
						this.getJudgePay()
					}).catch(()=>{
					 	uni.showToast({
					 		icon:'none',
							title:'获取数据失败,请稍后重试'
					 	})
					})
				}
				
			},
			getOrderStatus(){ //查询是否订单状态
				$req.request({
					url:'/api/xcx/pay/query_valid_order'
				}).then(res=>{
					// console.log(res)
					if(res.data.msg == '暂无订单'){
						this.payStatus = true
						clearInterval(this.timer)
					}else{
						// this.price
						this.orderData = res.data.msg
						this.price = res.data.msg.sum
						clearInterval(this.timer)
						this.timer = setInterval(()=>{
							this.getOrderStatus()
						},1000)
					}
				}).catch(err=>{
					this.getOrderStatus()
				})
			},
			getJudgePay(){ //获取价格抵扣
				let strArr = []
				console.log(this.calList)
				this.calList.forEach(item=>{
					console.log(11)
					console.log(item.id)
					strArr.push(item.id)
				})
				console.log(strArr)
				const str = strArr.join(',')
				console.log(str)
				$req.request({
					url:'/api/xcx/pay/judge_pay',
					method:'POST',
					data:{
						goods_type:4,
						number: this.shows,
						coupon_id: this.couponId || '',
						province_id: str
					}
				}).then(res=>{
					this.prompt = res.data.message
					this.price = res.data.price
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
			},
			payMent(){ //支付
				if(!this.price){
					return
				}
				let num = this.tab
				uni.login({
					provider: 'weixin',
					success:(loginRes)=> {
						const code = loginRes.code
						$req.request({
							url:'/api/xcx/pay/goods',
							method:'POST',
							data:{
								goods_type:2,
								number: num==3?5:num+1,
								coupon_id:this.couponId,
								pay_type:1,
								channel:'lite',
								ee_people: this.pre,
								code:code
							}
						}).then(res=>{
							console.log(res)
							if(res.errMsg == 'request:ok'){
								uni.requestPayment({
									provider:'wxpay',
									timeStamp: res.data.timeStamp,
									nonceStr: res.data.nonceStr,
									package: res.data.package,
									signType: res.data.signType,
									paySign: res.data.paySign,
									appId:res.data.appId,
									success: function (res) {
										console.log('success:' + JSON.stringify(res));
									},
									fail: function (err) {
										console.log('fail:' + JSON.stringify(err));
									}
								})
							}
						}).catch(err=>{
							console.log(err)
						})
					}
				});
			},
			getVal(e){
				this.shows = e.currentTarget.dataset.show
				this.money = e.currentTarget.dataset.money
			},
			getMoney(){
				if(this.shows == 1){
					this.money = this.monthOne
				}else if(this.shows == 3){
					this.money = this.monthThr
				}else if(this.shows == 6){
					this.money = this.monthSix
				}else if(this.shows == 12){
					this.money = this.monthTwe
				}
			}
		},
		computed:{
			...mapState({
				userInfo:state=>state.user.userInfo
			}),
			allCalArr(){
				let arr = []
				this.calList.forEach(item=>{
					item.cal.forEach(i=>{
						arr.push(i)
					})
				})
				return [...new Set(arr)]
			},
			monthOne:function(){
				let money = 0
				this.calList.map(item=>{
					money+=item.price[0]
				})
				return money
			},
			monthThr:function(){
				let money = 0
				this.calList.map(item=>{
					money+=item.price[1]
				})
				return money
			},
			monthSix:function(){
				let money = 0
				this.calList.map(item=>{
					money+=item.price[2]
				})
				return money
			},
			monthTwe:function(){
				let money = 0
				this.calList.map(item=>{
					money+=item.price[3]
				})
				return money
			},
		}
	};
</script>

<style>
	page{
		background: #fff;
	}
	.nochoose{
		font-size: 28rpx;
		margin-left: auto;
		margin-right: auto;
		line-height: 120px;
		height: 120px;
	}
	.titleOn {
		border: 1upx solid #00a0ea;
		border-radius: 5upx;
		background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAMAAAD32Kf8AAAAP1BMVEUAAAAAoOoAoOoAoOoAoOoAoOr///8nr+7z+/6c2veP1vbk9f3Q7fu65fmC0PV3zPRCue84te8Sp+sDoeoBoOpVGAzAAAAABXRSTlMA6alUFQy/ElcAAABRSURBVBjTbc03EsAwCAVROSwKzuH+Z7WGSp6vbaB4A6HTPAZtGuhAoANrAj2BnkBP4LNkaOAVgTulOhq420m09QXai8WKbb79Xh+W8RxKDqUPVvADbKCslAcAAAAASUVORK5CYII=')
			100% 100% no-repeat;
	}
	.p-box {
		display: flex;
		flex-wrap: wrap;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
	.pro-title {
		color: #00A0E0;
		font-weight: 800;
	}
	.p-item {
		height: 60rpx;
		line-height: 60rpx;
		margin-bottom: 20rpx;
		text-align: center;
		width: 23%;
		margin-right: 2%;
		border: 2rpx solid #ddd;
		color: #656565;
	}
	.c-box {
		background: #f9f9f9;
		display: flex;
		flex-wrap: wrap;
		color: #656565;
		min-height: 120rpx;
		margin-top: 24rpx;
		padding-bottom: 30rpx;
	}
	.c-item {
		border: 2rpx solid #ccc;
		font-size: 26rpx;
		padding: 12rpx;
		margin-top: 20rpx;
		margin-right: 20rpx;
	}
	.p-list {
		padding: 12rpx;
		border: 2upx solid #00A0E0;
		color: #00A0E0;
		margin-right: 14rpx;
		font-size: 28rpx;
	}
	.active-choice {
		border: 2upx solid #00A0E0;
		color: #00A0E0;
	}
	.time{
		font-size: 36rpx;
		color: #656565;
		width: 96%;
		display: flex;
		margin-left: 2%;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.time .timeOne{
		width: 48%;
		text-align: center;
		line-height: 140rpx;
		height: 140rpx;
		position: relative;
		border: 2upx solid #ececec;
		margin-bottom: 40rpx;
	}
	.time .timeOne .lineThr{
		font-size: 24upx;
		position: absolute;
		line-height: 50upx;
		top: 6upx;
		left: 112upx;
		text-decoration: line-through;
	}
	.time .timeOne view{
		padding: 4rpx 8rpx;
		text-align: center;
		line-height: 50upx;
		font-size: 28upx;
		color: #fff;
		position: absolute;
		left: 0;
		top: 0;
		font-weight: 550;
		border-top-left-radius: 10upx;
		border-bottom-right-radius: 20upx;
		background-color: #e4393c;
	}
	.vipon{
		border: 2upx solid #00a0ea;
		border-radius: 1.2upx;
		box-shadow: 2upx 2upx 5px #00a0ea;
		background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAmCAMAAABnA+JrAAAAilBMVEUAAAAArv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv/////G7f+v5v8Utf8Jsf8DsP/h9f/S8f/M7//a9P/x+//q+P++6v+j4v9nz/8nuv8aV5l0AAAAHXRSTlMA+t7RIQ/vFsOnh3ltWE08B/TnurKeMiyVkWNGYTInvJYAAAD/SURBVDjLjdPLcoJAEIXhEy6ioiiKGpMMBExiru//ehkpkYF2TvW/6c236qqDxYPRB2S5GucA9hutnsAWhUq9waV4q9MB2tY7tW5LNTpE15J+8rU8DzRWE4bLyp4p+qKA4Pd6pJFMHfH3O8CNsW3htp71+qv8OI2wKTBsftPfpeVDbGYY9dS9pqksb1r8dsVS47l7zcnyqv6xuDbXdhAdAod/utg8QpaEPW8x1YiLnp8dbOa429GIiPbsL4WnLNdrz/4W8BaFWu3Z3wvRcn9L0FK9lvvLiBT7o1rub0Wc2B/Vcn97ouT+DsTI/UWEiP1RLfeXECD3F0NdXAhNO+IfWtVg7E1guKEAAAAASUVORK5CYII=") 101% 0% no-repeat;
	}
	.toimg {
		height: 40rpx;
		width: 40rpx;
		margin-top: 20rpx;
	}
	.tip{
		width: 100%;
		font-size: 24rpx;
		color: #e4393c;
	} 
	.con-bot{
		width: 100%;
		height: 310upx;
		margin-top: 40upx;
		background: #fff;
		position: relative;
	}
	.con-bot .wx,.con-bot .zfb{
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		border-bottom: 1upx solid #ccc;
	}
	.con-bot img{width: 60upx;height: 54upx;margin-top: 10upx;float: left;margin-left: 30upx;padding-right: 10upx}
	.con-bot .wx label,.con-bot .zfb label{float: right;margin-right: 30upx}
	.zhifu{
		text-align: center;
		line-height: 100upx;
		position: fixed;
		width: 100%;
		height: 100upx;
		bottom: 0
	}
	.zhifu .zhifu-lf{
		width: 80%;height: 100%;float: left;
		background: #00a0ea;color: #fff; 
	}
	.zhifu .zhifu-rt{
		width: 20%;height: 100%;float: left;
		background: #f8b551;color: #fff; 
	}
</style>
