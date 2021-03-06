export const setLimitAndOffset = (generation: string) => {
    
    let interval
    if(generation === "1"){
       interval = { limit: 151, offset: 0 }
    }else if(generation === "2"){
      interval = { limit: 100, offset: 151 }
    }else if(generation === "3"){
      interval = { limit: 135, offset: 251 }
    }else if(generation === "4"){
      interval = { limit: 107, offset: 386 }
    }else if(generation === "5"){
      interval = { limit: 156, offset: 493 }
    }else if(generation === "6"){
      interval = { limit: 72, offset: 649 }
    }else if(generation === "7"){
      interval = { limit: 81, offset: 721 }
    }else {
      interval = { limit: 802, offset: 0 }
    }
    return interval
  }