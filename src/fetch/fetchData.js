
export const fetchPhotos= (url,cb)=>{
	 return fetch(url)
	.then(response=>response.json())
	.then(data=>{
		cb(null,data.photos.photo)
	})
	.catch(cb)
}

export const fetchGroup= (url,cb)=>{
	return fetch(url)
   .then(response=>response.json())
   .then(data=>{
	   cb(null,data.groups.group)
   })
   .catch(cb)
}
