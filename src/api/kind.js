import fetchJsonp from 'fetch-jsonp'
import {KIND_LIST_URL} from '@/server/index.js'
export default {
	getMenullist(cb){   //cb---->回调函数
		fetch(KIND_LIST_URL)
			.then(res=>res.json())
			.then(data=>{
				cb(data)})
			.catch(err=>console.log(err))
	}
}