function problem7(user, friends, visitors) {
  let friendsSet = new Set();
  let scoresMap = new Map();

  // case1 : user - friend
  // STEP1 : 친구 관계를 배열로 정리
  for(let [A, B] of friends){
    if(A == user){
      friendsSet.add(B)
      scoresMap.set(B, 0);
    }
    else if(B == user){
      friendsSet.add(A);
      scoresMap.set(A, 0);
    }
  }
  
  // case2 : friend - newPerson (둘중 하나만 친구)
  // STEP2 : 친구의 친구에 대해 점수 부여
  for(let [A, B] of friends){
    if(friendsSet.has(A) && !friendsSet.has(B) && B!=user){ // B가 newPerson
      let value = scoresMap.get(B);
      if(value === undefined) scoresMap.set(B, 10);
      else scoresMap.set(B, value+10);
    }
    else if(!friendsSet.has(A) && friendsSet.has(B) && A!=user){ // A가 newPerson
      let value = scoresMap.get(A);
      if(value === undefined) scoresMap.set(A, 10);
      else scoresMap.set(A, value+10);
    }
  }
  
  // STEP3 : 방문한 사람에 대해 점수 부여
  for(let visitor of visitors){
    if(!friendsSet.has(visitor)){ // 친구가 아닌 사람만 점수 부여하면 됨
      let value = scoresMap.get(visitor);
      if(value === undefined) scoresMap.set(visitor, 1);
      else scoresMap.set(visitor, value + 1);
      }  
    }
  
  // STEP4 : 점수로 sort하고, 이름만 추출해서 배열 만들고, 반환
  let max_val = -1;
  let scoresArr = Array.from(scoresMap.entries());
  for(let [, B] of scoresArr){
    if(max_val < B) max_val = B;
  }

  let answer = [];

  for(let i = max_val; 0 < i; i--){
    for(let [A, B] of scoresArr) if(B == i) answer.push(A);
  }
  return answer;
  
}


module.exports = problem7;


/*
frinedsArr = [donut, shake]
notFriendsSet = [andole, jun]

frinedsOfFriendArr = [ [ donut , [andole, jun]],
                       [ shake , [andole, jun]],
                     ]


*/