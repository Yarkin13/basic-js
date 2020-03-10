module.exports = function transform(arr) {
    if (!(arr instanceof Array)) throw new Error();
    let newArr=[];
    for (let i=0; i<arr.length; i++) {
            if (arr[i] === "--double-prev")
            arr[i - 1] !== undefined ? newArr.push(arr[i - 1]) : null
            else if (arr[i] === "--double-next")
                arr[i + 1] !== undefined ? newArr.push(arr[i + 1]) : null
            else if (arr[i] === "--discard-prev")
                arr[i - 1] !== undefined ? newArr.pop() : null
            else if (arr[i] === "--discard-next") i++
            else newArr.push(arr[i]);
      } return newArr;
      }
    
    