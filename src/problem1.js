function problem1(pobi, crong) {
  if(!(pobi[0]+1 === pobi[1]) || !(crong[0]+1) === crong[1]) return -1; //checked
  
  let val_pobi = Math.max(bigger(pobi[0]), bigger(pobi[1]));
  let val_crong = Math.max(bigger(crong[0]), bigger(crong[1]));

  if(val_crong < val_pobi) return 1;
  else if(val_pobi < val_crong) return 2;
  else if(val_crong === val_pobi) return 0;
  else return -1; //unchecked
}

function bigger(page){

  const strPageArr = page.toString().split('');

  let val_add = 0;
  let val_mul = 1;

  for(let value of strPageArr) {
    val_add += parseInt(value);
    val_mul *= parseInt(value);
  }

  return Math.max(val_add, val_mul);
}

module.exports = problem1;
