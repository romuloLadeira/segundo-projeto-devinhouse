export const filterSearch = (termo, lista)=>{
    if(termo !== ''){
      const novaLista = lista.filter((item)=>{
       return item.title.toLowerCase().includes(termo.toLowerCase())
      })
      return novaLista
      
    }else{
      return lista
    }
    
  }