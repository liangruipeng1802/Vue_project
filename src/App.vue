<template>
  <div class="box">
    <header>
    	<router-view name="header"></router-view>
    </header>
    <div class="content">
    	<router-view name="content"></router-view>
    </div>
    <footer>
    	<router-view name="footer"></router-view>
    </footer>
  </div>
</template>

<script>
export default {
  
}
</script>
<style type="text/css">
	*{
		margin:0;
		padding:0;
	}
	html,body,.box{
		width:100%;
		height:100%;
	}
	.box{
		display: flex;
		flex-direction:column 
	}
	header{
		width:100%;
		height:45px;
		background:#f66;
		font-size:16px;
		color:#fff;
		text-align:center;
		line-height:45px;
	}
	.content{
		flex:1;
		background:#EEEEEE;
		overflow: auto;
		padding-bottom:10px;
	}
	footer{
		width:100%;
		height:50px;
		background:#ccc;
	}
</style>