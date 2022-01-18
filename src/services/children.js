const listChildrensByIdParent = (idParent, cb) => {
  
  if(!idParent){
    alert('Informe o id do parente')
    return
  }
  fetch(`${BASE_URL}/childrens/${idParent}`)
  .then(async res => {
      if(res.status !== 200){
        const error = await res.json();
        alert(error.error)
        throw new Error(error)
      }else{
        return res.json()
      }
    } 
  )
  .then(data => cb && cb(data))
  .catch();
}
