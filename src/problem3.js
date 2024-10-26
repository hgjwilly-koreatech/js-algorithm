function problem3(number) {
  var answer = 0;

  for(let i = 1; i <= number; i++){
    const temp = i.toString().split(""); // 숫자를 배열로 바꿈
    for(let value of temp){ // 각 자릿수 확인
      if(value === "3" || value === "6" || value === "9") answer++; 
    }
  }
  return answer;
}

module.exports = problem3;
