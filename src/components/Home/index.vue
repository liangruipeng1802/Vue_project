<template>
	<div class='home'>
		<div class="h_content">
			<mt-swipe :auto="4000">
				<mt-swipe-item v-for="(banner,index) in homeBanner" :key="index">
			  		<img :src="banner"/>
			  </mt-swipe-item>
			</mt-swipe>
			<div class="h_main">
					<ul>
						<router-link :to="{path:'/detail',query:{id:item.goodsID}}" tag="li" v-for="(item,index) in homeList" :key="index">
						<!--<li v-for="(item,index) in homeList">-->
							<img :src="item.goodsListImg"/>
							<span>
								{{item.goodsName}}
								<span class="price">价格: ${{item.price}}</span>
							</span>
							
						<!--</li>-->
						</router-link>
					</ul>
			</div>
		</div>
	</div>
</template>

<script src='./script.js'></script>

<style lang="scss" src="./style.scss">
</style>