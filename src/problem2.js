function problem2(cryptogram) {
  let answer = cryptogram.split(""); // 배열로 바꿈

  while(true){
    let isDone = true;

    for(let i =0; i<answer.length-1; i++){
      if(answer[i] === answer[i+1]){
        answer.splice(i, 2);
        isDone = false;
        break;
      }
    }
    if(isDone) break;
  }

  return answer.join(''); // string 으로 바꿈
}


module.exports = problem2;
