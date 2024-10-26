function problem7(user, friends, visitors) {
  let myfrineds = []; // user의 친구를 요소로 갖는 배열
  let newPersonMap = new Map(); // 친구가 아닌 사람의 점수를 기록하는 map
  
  for(let [A,B] of friends){
    if(A==user && B!=user) myfrineds.push(B);
    else if(A!=user && B==user) myfrineds.push(A); // user의 친구를 myfriends 배열의 요소로 추가한다
  }

  for(let [A,B] of friends){
    if(myfrineds.includes(A) && !myfrineds.includes(B) && B!=user) newPersonMap.set(B, newPersonMap.get(B)+10 || 10); // 친구의 친구를 key로 갖고, 점수를 value로 갖는다
    else if(myfrineds.includes(B) && !myfrineds.includes(A) && A!=user) newPersonMap.set(A, newPersonMap.get(A) || 10); // key가 이미 존재하면 증가, 없으면 새로 추가한다
  }

  for(let name of visitors){
    if(name != user && !myfrineds.includes(name)){ // 나도 친구도 아닌 사람이 방문했을 경우
      newPersonMap.set(name, newPersonMap.get(name)+1 || 1); // 점수 증가한다. 친구의 친구가 아닌 사람이면 새로 추가한다
    }
  }

  let scoreArr = Array.from(newPersonMap.entries()); // map을 이중배열로 바꾸고
  let max_val = 0;
  for(let [, B] of scoreArr){
    if(max_val < B) max_val = B; // 가장 큰 value를 확인
  }

  let answer = [];
  for(let i = max_val; 1 <= i; i--){ // 큰 value를 갖는 key부터
    for(let [A,B] of scoreArr){
      if(B == i) answer.push(A); // answer 배열에 추가
    }
  }
  return answer;
}
module.exports = problem7;