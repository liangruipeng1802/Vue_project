import fetchJsonp from 'fetch-jsonp'
import {HOME_LIST_URL,HOME_BANNER_LIST_URL} from '@/server/index.js'
export default {
	getHomelist(cb){   //cb---->回调函数
		fetchJsonp(HOME_LIST_URL)
			.then(res=>res.json())
			.then(data=>{
				cb(data)})
			.catch(err=>console.log(err))
	},
	getHomebannerlist(cb){   //cb---->回调函数
		fetchJsonp(HOME_BANNER_LIST_URL)
			.then(res=>res.json())
			.then(data=>{
				cb(data)})
			.catch(err=>console.log(err))
	}
}
