import fetchJsonp from 'fetch-jsonp'
import {DETAIL_LIST_URL} from '@/server/index.js'
export default {
	getDetaillist(goodsID,cb){   //cb---->回调函数
		fetchJsonp(DETAIL_LIST_URL+'?goodsID='+goodsID)
			.then(res=>res.json())
			.then(data=>{
				cb(data)})
			.catch(err=>console.log(err))
	}
}