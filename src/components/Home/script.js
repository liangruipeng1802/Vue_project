import Vue from 'vue'
import { Swipe, SwipeItem,Loadmore } from 'mint-ui';
import homeApi from '@/api/home.js'
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Loadmore)

export default {
	data() {
		return {
			homeList:[],
			homeBanner:[]
		}
	},
	mounted(){
		var that=this
		homeApi.getHomelist((data) =>{
		  	that.homeList=data
		})
		homeApi.getHomebannerlist((data) =>{
			console.log('123',data)
			var data=data
			var arr=[];
	        data.map((item, index) => {
	          arr.push(JSON.parse(item.goodsBenUrl)[0])
	          
	        })
	        that.homeBanner=arr
		})
	}
}