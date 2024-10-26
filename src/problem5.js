function problem5(money) {
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let arr_money = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for(let idx in arr_money){
    answer[idx] = Math.floor(money / arr_money[idx]);
    money -= arr_money[idx]*answer[idx];
  }


  return answer;
}

module.exports = problem5;
