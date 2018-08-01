import Vue from 'vue'
import { Toast } from 'mint-ui'
import detailApi from'@/api/detail.js'
export default {
	data(){
		return {
			detail:[]
		}
	},
	methods:{
		addCart(){
			Toast('已成功加入购物车')
		}
	},
	mounted(){
		var that=this;
		var goodsID=this.$route.query.id
		detailApi.getDetaillist(goodsID,(data)=>{
			console.log('258',data)
			that.detail=data
		})
	}
}