module.exports = function getSeason(inputDate) {
  if (!inputDate) {
    return 'Unable to determine the time of year!';
  }
  if (inputDate.hasOwnProperty('getMonth')) throw Error;
  let month=inputDate.getMonth();
  if(0<=month&&month<=1) {
    return 'winter';
}
  if(2<=month&&month<=4) {
    return 'spring';
  }
  if(5<=month&&month<=7) {
    return 'summer'
  }
  if(8<=month&&month<=10) {
    return 'autumn'
  }
  if(month==11) {
    return 'winter'
  }
  
}
