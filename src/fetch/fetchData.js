
const fetchData= (url,cb)=>{
	 return fetch(url)
	.then(response=>response.json())
	.then(data=>{
		console.log(data);
		cb(null,data.photos.photo)
	})
	.catch(cb)
}

export default fetchData;