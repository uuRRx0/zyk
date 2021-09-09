function getBdvId(){
  let bdv_id = window.location.search.split('&').find(item => item.includes('bdv_id=')).split('bdv_id=').pop()
  const result = /\d+/.test(bdv_id) ? saveBdvId(bdv_id) : hasBdvId()
  console.log('zyk', result)
  return result
}

function saveBdvId(bdv_id){
  window.localStorage.setItem('bdv_id', bdv_id)
  return bdv_id
}

function hasBdvId(){
  return window.localStorage.getItem('bdv_id')
}

document.onload = getBdvId
