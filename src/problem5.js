function problem5(money) {
  let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let arr_money = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for(let i = 0; i < arr_money.length; i++){
    let num = Math.floor(money / arr_money[i]);

    answer[i] = num;
    money -= arr_money[i] * num;
  }  


  return answer;
}

module.exports = problem5;
