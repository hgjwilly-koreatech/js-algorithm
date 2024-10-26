function problem3(number) {
  var answer = 0;

  for(let i = 1; i <= number; i++){
    let temp = i.toString().split("");
    for(let value of temp){
      if(value === "3" || value === "6" || value === "9") answer++;
    }
  }



  return answer;
}

module.exports = problem3;
