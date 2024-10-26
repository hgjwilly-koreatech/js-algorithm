function problem7(user, friends, visitors) {
  let myfrineds = [];
  let newPersonMap = new Map();
  
  for(let [A,B] of friends){
    if(A==user && B!=user) myfrineds.push(B);
    else if(A!=user && B==user) myfrineds.push(A);
  }

  for(let [A,B] of friends){
    if(myfrineds.includes(A) && !myfrineds.includes(B) && B!=user) newPersonMap.set(B, newPersonMap.get(B)+10 || 10);
    else if(myfrineds.includes(B) && !myfrineds.includes(A) && A!=user) newPersonMap.set(A, newPersonMap.get(A) || 10);
  }

  for(let name of visitors){
    if(name != user && !myfrineds.includes(name)){
      newPersonMap.set(name, newPersonMap.get(name)+1 || 1);
    }
  }

  let scoreArr = Array.from(newPersonMap.entries());
  let max_val = 0;
  for(let [, B] of scoreArr){
    if(max_val < B) max_val = B;
  }

  let answer = [];
  for(let i = max_val; 1 <= i; i--){
    for(let [A,B] of scoreArr){
      if(B == i) answer.push(A);
    }
  }
  return answer;
}
module.exports = problem7;