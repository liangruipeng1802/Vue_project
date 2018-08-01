import kindApi from '@/api/kind.js'
export default {
	data(){
		return {
			menuList:[],
			activeIndex:0,
			name:123
		}
	},
	mounted(){
		var that=this;
		kindApi.getMenullist((data)=>{
			that.menuList=data;
		})
	}
}