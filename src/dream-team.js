module.exports = function createDreamTeam(members) {
  let dreamTeam=[];
  if (typeof members !== 'object') {
    return false
  };
  if (members==null) {
    return false
  };
  let j=0
  while(j<members.length){
    if(typeof members[j] !== 'string'){
      members.splice(j,1);
    } else j++;
  }
  for(let i=0; i<members.length;i++) {
    members[i]=members[i].replace(/\s/g, '');
    dreamTeam[i]=members[i].charAt(0).toUpperCase();
  }
  
  return dreamTeam.sort().join('');
  };