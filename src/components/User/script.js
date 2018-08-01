export default {
	beforeRouteEnter (to, from, next) {
		var islogin=confirm("你登陆了吗")
		if(islogin=='1'){
			alert(123)
			next()
		}else{
			alert(4567)
			next()
		}

		console.log(islogin)
	},
	data(){
		return {
			str:'',
			flag:true
		}
	},
	methods:{
		login(){
			alert(124)
		},
		register(){
			alert('qwr')
		}
	},
	mounted(){
		if(sessionStorage.getItem('isLogin')==1){
			this.flag=false;
			this.str="欢迎你***"
		}else{
			this.str=''
			this.flag= true
		}
	}
}