<template>
	<div class='detail'>
		<div class="d_content">
			<div class="d_main" v-for="(item,index) in detail" :key="index">
				<img :src="item.goodsListImg" alt="" />
				<p><span>品牌名称:&nbsp;&nbsp;</span>{{item.goodsName}}</p>
				<p><span>产品类型:&nbsp;&nbsp;</span>{{item.className}}</p>
				<p class="p2"><span>产品价格:&nbsp;&nbsp;</span>${{item.price}}</p>
				<p><span>产品参数:&nbsp;&nbsp;</span>{{item.detail}}</p>
				<div class="addCart" @click="addCart">加入购物车</div>
			</div>
		</div>
	</div>
</template>

<script src='./script.js'>
</script>

<style lang="scss" src="./style.scss">
</style>