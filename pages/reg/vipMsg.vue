<template>
	<view class="cu-modal" :class="showModalName == modalName ? 'show' : ''" :style="'margin-top:'+CustomBar+ 'px'">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">会员协议</view>
				<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
			</view>
			<view class="p-3 font-md text-left">
				<view>
					网站会员注册协议 在您注册成为本网站的会员之前,请您认真阅读本会员注册协议,您必须完全同意以下所有条款,方能成为本网站的会员。
				</view>
				<view>
					<view class="my-3">1.特别提示</view>
					<view>
						1.1本网站（www.dulifei.com)(下称“本网站”）同意按照本协议的规定及其不时发布的操作规则提供基于互联网信息的相关服务（以下称“服务”），为获得服务， 服务使用人（以下称“用户”）同意本协议的全部条款并按照页面上的提示完成全部的申请程序。用户在进行申请程序过程中点击“同意会员协议”复选框，即表示用户完全接受本协议项下的全部条款。 会员或者VIP用户服务协议一旦发生变动，将会在相关的页面上提示修改内容。修改后的服务协议一旦在页面上公布即有效代替原来的服务协议。用户可随时造访查阅最新服务协议。用户在使用会员或者VIP提供的各项服务之前， 应仔细阅读本服务协议。
					</view>
					<view>1.2宗旨及原则</view>
					<view>
						本网站的宗旨是向广大会员或者VIP用户提供辅助的独立费计算的互联网信息服务.
					</view>
					<view class="my-3">2.服务内容</view>
					<view>2.1只有VIP享受VIP专属特权，普通会员有些网站信息不能全部访问，具体已网站通告为准。</view>
					<view class="my-3">3.使用规则</view>
					<view>
						3.1申请：凡是符合会员认定资格的个人都可以在本网站申请成为会员或者VIP会员。
					</view>
					<view>
						3.2用户申请成功后，应当妥善保管其用户账号及相应密码，用户必须对以其用户帐号进行的所有活动和事件负法律责任。
					</view>
					<view>
						3.3用户同意接受会员或者VIP通过电子邮件或其他方式向用户发送的商品促销或其他相关商业信息。
					</view>
					<view class="my-3">4.免责声明</view>
					<view>4.1本网站不保证以下事宜：</view>
					<view>(一)本服务任何的计算结果完全正确；</view>
					<view>(二)本服务将不受干扰、及时提供、安全可靠或不会出错。</view>
					<view>4.2 用户明确同意其使用会员或者VIP各项服务所存在的风险将完全由其自己承担；因其使用会员或者VIP服务而产生的一切后果也由其自己承担，本网站对用户不承担任何责任。</view>
					<view>4.3 本网站任何计算结果仅供参考，不提供任何法律支撑和承担任何法律责任</view>
					<view class="my-3">5.服务变更、中断或终止</view>
					<view>5.1　如因系统维护或升级的需要而需暂停网络服务，本网站将尽可能事先进行通告。</view>
					<view>5.2 用户购买的付费版会员仅限购买者本人使用，独立费有权对不遵守使用协议的用户进行封停，同时不予退还已付款项.</view>
					<view>5.3　如发生下列任何一种情形，本网站有权随时中断或终止向用户提供本协议项下的网络服务或现实服务而无需通知用户：</view>
					<view>(一)用户提供的个人资料不真实；</view>
					<view>(二)用户违反本协议中规定的使用规则。</view>
					<view>5.4　除前款所述情形外，本网站保留在不事先通知用户的情况下随时中断或终止部分或全部网络服务和现实服务的权利，对于所有服务的中断或终止而造成的任何损失，本网站无需对用户或任何第三方承担任何责任。</view>
					<view class="my-3">6.违约赔偿</view>
					<view>6.1用户同意保障和维护本网站利益，如因用户违反有关法律、法规或本协议项下的任何条款而给本网站或任何其他第三人造成损失，用户同意承担由此造成的损害赔偿责任。</view>
					<view class="my-3">7.法律管辖</view>
					<view>7.1本协议的订立、执行和解释及争议的解决均应适用中国法律。</view>
					<view>7.2如双方就本协议内容或其执行发生任何争议，双方应尽量友好协商解决；协商不成时，任何一方均应向本网站域名所有者所在地的人民法院提起诉讼。</view>
					<view class="my-3">8.通知和送达</view>
					<view>8.1本协议项下所有的通知均可通过重要页面公告、电子邮件或常规的信件传送等方式进行；该等通知于发送之日视为已送达收件人。</view>
					<view class="my-3">9.其他规定</view>
					<view>9.1会员不能重复申请，填写完成申请，即表示本人同意会员或者VIP 会员的相关规定和要求,以及今后可能发生的变动和补充。</view>
					<view>9.2会员应熟知并遵守本协议，遵守各项规章制度及公告。</view>
					<view>本协议未尽事宜，将在今后制定的其他规则和管理办法中补充。</view>
					<view>9.3本协议构成双方对本协议之约定事项及其他有关事宜的完整协议，除本协议规定的之外，未赋予本协议各方其他权利。</view>
					<view>9.4如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且有约束力。 </view>
					<view>9.5本协议中的标题仅为方便而设，不具法律或契约效果 </view>
					<view>9.6与本协议有关的一切争议均应提交会员或者市会员或者区人民法院裁决。</view>
					<view>9.7如果购买会员,只允许本人使用，如有违反约定，独立费官网有权利取消您的会员权限</view>
					<view>9.8如果由于不可抗力或者其他外力因素导致独立费网停运,原支付费用不予返还 </view>
					<view>9.9以上所有最终解释权归独立费官网所有 </view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {modalMixin} from "@/common/base/modalMixin"
	export default {
		mixins: [modalMixin],
		props:{
			showModalName: {
				type: String,
				default: null
			} // 弹框可见标志
		},
		data() {
			return {
				obj: {},
				modalName: 'vip',
				CustomBar:this.CustomBar,
			}
		},
		methods: {
		}
	}
</script>

<style>
</style>
