<template>
    <view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">我的发票</block>
		</cu-custom>
		<view class="py-4 backBlue pl-3 font-md iconWhite">
			<view >可开发票总金额</view>
			<view class="font-lg font-weight" >￥{{fpval}}</view>
		</view>
		<view class="fpMid d-flex j-sb">
			<view class="w-50 text-center py-2  lt" @tap="mynavigate('fpsq')">
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAe1BMVEUAAAAAn+oAoOoAoOsAoOoAoOoAoOoAoOsAoOsAoOsAoOoAn+sAn+sAoOsAoOoAn+oAn+sAoOsAoOoAoOsAoOoAn+sAoOsAoOoAn+kAoOsAoOoAn+sAn+wAoOsAoOsAoOsAoOsAn+sAoOoAn+wAoOsAoOoAn+sAn+kAoOpZfJxNAAAAKHRSTlMACRXU8+nbD+Nu731YBcR5dF2+qGdNRPtSSbs/HbNhz8yXZjskm5uUbIN8UgAAAgZJREFUSMetl+uyoyAMgLEqKFbr5dCu2mN7brt5/yfc0XWKIbEydb9/Fb+BShKC4DmYU1PLWOtY1s3JHIQ332kXASLq0m8v1bwDy7vZVNsaVqnbp+q1gac013W3imCDqFpzP8CDD1YNavCiDqirQvAkVGRe3uVtd+4CEJGOEIAosPuDBpP+4NAn6IWfpXsERCkIJSCOizS4AKKicgWIi00VN5o/qfzpRrqY+QKHNyq/gcPXPHAD8Fk25i4mzuAyUHkAl16MdOBySWKH5AIu3ZSG9nec/CNi0mkeiu2jK9rBNMiDDfIgRdFQwIwUXkgbpIsAufnJt0WgGJss05actsqsTT8jMiRXNuG25Uw0SP4DAMpXbkSB5Otdp97LLoRcyCNKeMtSxI4s/OVYRK/Lep9Ml30uQkkIizOzbEnkAVgG5oMVRD5CqQglHJmtaqjMFwMqNyJj5JTKKSNnwvByXmYPypyXDU5JKytYoKyMU5IWAzPN3LfnmbafZjakGOAypPKx0lT8f66mQWVfL5kCKPVY9JW2j7Uai76WpABypXeUgzB+EAajzJZe0TMygcq9mLgzct7+etDmjHxfPejoVtGD7skRm6fZaSZLc+aI3XW472krdjQ0v5+2Uhq1UloDot7VxL3ePt7U641rF+xumSmDX7O+/5qw/4JC9bWrUft/L2W7roN/Ad6GFCpBsMjiAAAAAElFTkSuQmCC" alt=""
				>
				<view class="py-1">发票申请</view>
			</view >
			<view class="w-50 text-center py-2 lt" @tap="mynavigate('ttgl')">
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAsVBMVEUIoOgAAAAAoOoAoOsBn+sEn+oCn+oAoOoAoOoCn+sBoOsHoOkAoOoEoOoHoOkJoOgAoOsDoOoFnOQAoOsAoOoDoOoAoOoAoOoAoOoAoOsAoOoJoOgAmN4BoOsAmN4AoOwAoOsAn+sBoOsCoesCoOsAmN4BoO0BoOsCoOoDoOoFoOkAmN4AoOoBoO4CpfAAoeoAn+gBoOoBoOoAmN4Boe0Dn+sBou4AmN4AoOoJoOgAoOnF9AHkAAAAN3RSTlMaAOrPfzJktblekzD7vR/w340G88k19u/m2LiXkXLt0sGwfFdJtqSDW0Ql7sZoT9CqnImJa0B2vL8y3wAAAdNJREFUSMfV12lvqkAUxvFT3IosokJZ1AJi61K1y22vj+f7f7ALpGkbwsAISeP9vyU/GJKBnKHJ/P7UqKf5hOYPdNMoevhD96ltVkpPN407/ed4MhudJRvNJgU8MzSSTDPGBTxKrbQeFfCZLuh8ZXgReUpV9psYPzKjOrZFuM+8f1t2xa1jxlCALQ6ppphdAdb5bx1OWBfgOyzrsIo7AZ6iS9pLR9Rz4FC/EqsMYXyowebSAKLgtlAQuAjXuwxXvvMKoJJsrIloA12A9Rz3Aa0EdzDOtqAQP8Pa5U/uleIhmYnCHQFOGN7rOC7HPqaeAuaVeG8jSy/DU2Qph4qvyvB9D5zhjfrVxswujdMWZs33rAK9fBHfWdI/g02Oh/hRJI37OSbN6X1Fl+Ji24XZHIe8bo59vErj44sx+CwYHD53mCy2GT+6EB/j2+8nv1+GC/0adtpgswSHkljpRVa+8l0U5osw9zbFktizAEUj2lqA+0Hk+MDelsQAA94uQZbufLjIksU8VBkKgNUq1TqQdCXxO2ATdZlhbYlUgKESDRiPEthxfZNSPTVMSju66T3SjKl6tTOJLG41xDUfH3vGuNXgejXz9u/jVkejdoeyyfyp8XHwHzUeqAg1hF3OAAAAAElFTkSuQmCC" alt="">
				<view class="py-1">抬头管理</view>
			</view>
		</view>
		<view style="height: 40rpx;background: #F1F1F1;"></view>
		<view class="fpBot bg-light-secondary w-100 mt-3 text-center" style="height: 400upx;" v-if="!fpdata">
			<img class="mt-5 pt-5"  src="/static/img/norecord.png" alt="" style="width: 440upx;height: 186upx;">
			<view class="my-3 text-black">抱歉 未查到您有开票历史记录</view>
		</view>
		<view v-else class="font-md" style="color: #656565;">
			<view class="border-bottom px-3 py-2">发票申请记录</view>
			<view class="fp-c-v px-3 py-2 border-bottom"  v-for="(item,index) in fpdata" :key="index">
				<view>申请人:{{item.inv_title}}</view>
				<view>申请金额:<text style="color: red;">{{item.money}}</text>元</view>
				<view>申请时间:{{item.created_at}}</view>
				<text class="fp-state" v-if="item.state == 2">已开票</text>
				<text class="fp-state" v-if="item.state == 1" style="background: #37ae4d;">处理中</text>
			</view>
		</view>
	</view>
</template>

<script>
	import $req from '@/common/req/request.js'
	export default {
		data () {
			return {
				fpdata:[],
				fpval: ''
			}
		},
		onLoad() {
			$req.request({
				url:'/api/xcx/myorders/invoice',
			}).then((res)=> {
				 this.fpval = res.data[0].sum
				 this.fpdata = res.data[1]
			}).catch((err)=>{
				console.log('获取用户发票失败',err)
			})
		},
		methods: {
			mynavigate(path){
				if(!path) return
				this.navigateTo({
					url: `/pages/PersonalCenter/${path}`
				})
			},
		}
	}
</script>

<style scoped>
	page{
		background: #FFFFFF;
	}  
	.fpMid{
		width: 100%;
	}
	.w-50 img{width:66upx;height: 66upx; text-align: center;}
	.fp-c-v {
		width: 100%;
		position: relative;
	}
	.fp-c-v view {
		width: 100%;
		line-height: 50upx;
	}
	.fp-state {
		position: absolute;
		top: 10upx;
		right: 0;
		padding: 10upx;
		display: block;
		background: #00A0E0;
		color: #fff;
	}
</style>
