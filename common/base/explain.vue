<template>
	<view class="cu-modal" @touchmove.stop.prevent="moveHandle" :class="showModalName=='show'?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">{{ obj.title }}</view>
				<view class="action" @tap="hideModal">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl">
				<view class="p-2 white-space font">{{ obj.text }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				obj: {},
				showModalName: null,
			}
		},
		methods: {
			hideModal(e) {
				this.showModalName = 123
			},
			show() {
				this.showModalName = 'show'
			},
			moveHandle(){
				return
			}
		},
		created() {
			this.$bus.on('modalData', (val) => {
				this.obj = val
				this.show()
			});
		}
	}
</script>

<style>
</style>
