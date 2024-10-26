function problem2(cryptogram) {
  let answer = cryptogram.split(""); // 배열로 바꿈

  while(true){
    let isDone = true;

    for(let i =0; i<answer.length-1; i++){ // 각 자릿수 확인
      if(answer[i] === answer[i+1]){ // 연속 발견하면
        answer.splice(i, 2); // 삭제
        isDone = false;
        break; // 처음 요소부터 다시 확인
      }
    }
    if(isDone) break; // 위에서 완료해서 break 이뤄지지 않았으면, while문 종료
  }

  return answer.join(''); // string 으로 바꿈
}


module.exports = problem2;
