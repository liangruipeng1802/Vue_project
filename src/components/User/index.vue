<template>
	<div class='user'>
		<div class="u_content">
			<div class="u_box" v-if="flag">
				<button class="btn login" @click="login">登录</button>
				<button class="btn register" @click="register">注册</button>
			</div>
			{{str}}
		</div>
	</div>
</template>

<script src='./script.js'>
</script>

<style lang="scss" src="./style.scss">
</style>