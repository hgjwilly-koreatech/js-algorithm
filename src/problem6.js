function problem6(forms) {
  let twoCharArr = [];
  let nameArr = [];

  for(let [,name] of forms){ // 각 이름에 대해
    let nameChars = name.split('');

    for(let i = 0; i < name.length-1; i++){
      let twoChar = nameChars[i] + nameChars[i+1]; // 두글자씩 뽑아서
      let isDone = false;

      for(let idx in twoCharArr){
        if(twoCharArr[idx] == twoChar){ // 두글자 배열에 있으면
          nameArr[idx].push(name); // 이름 이중배열의 같은 인덱스에 이름을 추가
          isDone = true;
          break;
        }
      }
      if(!isDone){ // 두글자 배열에 없으면
        twoCharArr.push(twoChar); // 두글자 배열에 추가
        nameArr.push([name]); // 이름 이중배열에 이름이 담긴 배열 추가
      }
    }
  }

  answerArr = [];

  for(let names of nameArr){ // 이름 배열의 값에 대해
    if(1 < names.length){ // 이름 여러명이 담긴 배열을 발견하면
      for(let name of names){ // 해당 이름들에 대해
        for(let [email, name2] of forms){
          if(name == name2 && !answerArr.includes(email)) answerArr.push(email); // 이메일을 찾아서 추가
        }
      }
      break;
    }
  }
  answerArr.sort();
  return answerArr;
}

module.exports = problem6;
