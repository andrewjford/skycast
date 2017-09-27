export function setLocalStorage(json) {
  if(json.location){
    if(localStorage.getItem('recent') === null){
      localStorage.setItem('recent', JSON.stringify([json.location]));
    }
    else {
      let array = JSON.parse(localStorage.getItem('recent'));
      array.unshift(json.location);

      //remove duplicates
      array = array.filter((el, index, self) => {
        return index === self.indexOf(el);
      })

      //limit to 5 most recent
      if(array.length > 5){ array.pop() }
      
      localStorage.setItem('recent', JSON.stringify(array));
    }
  }
}
