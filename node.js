const validateCred = (arr) => {
    let digitCheck = 0;
    let popped = arr.pop();
    let newArr = [];
    let sum = 0;
   
   for (let i = arr.length; i >= 0; i--) {
          digitCheck++;
   
          if(digitCheck % 2 === 0) {
              if((arr[i] * 2) > 9) {
                  newArr.push((arr[i] * 2) - 9);
              } else {
                  newArr.push(arr[i] * 2);
              };
          } else {
              newArr.push(arr[i]);
          }
      }
    for(let j = 0; j < newArr.length; j++){
      sum += (newArr[j] + popped)
    }
   
      if(sum % 10 === 0) {
          return true;
      } else {
          return false;
      }
   
  }