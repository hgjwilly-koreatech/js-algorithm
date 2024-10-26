function problem6(forms) {

  // STEP1 : 두글자의 모든 경우에 수에 대해 확인한다. 확인 결과를 countArr에 저장한다
  // countArr[i][0] : 두글자
  // countArr[i][1] : index들을 요소로 갖는 배열
  //                  index : 특정 두글자를 이름에 갖고있는 사람들이 forms 에서 몇번째인지

  let countArr = []; // 빈상태
  
  for(let i = 0; i < forms.length; i++){ // forms에서 각 사람들에 대해 확인

    let arrName = forms[i][1].split(''); // 이름으로부터

    for(let j = 0; j < arrName.length-1; j++){ 
      let twoStr = arrName[j] + arrName[j+1]; // 두글자 추출해서

      addToCountArr(twoStr, i, countArr); // 확인 후 countArr에 반영
    }
  }

  
  // STEP2 : countArr 에서 두글자가 중복된 case를 확인, 그 사람들의 email을 배열로 만들어서 반환

  let answer = []; // 반환할 email을 담을 배열
  let answerIdxArr;
  
  for(let i = 0; i < countArr.length; i++){
    if(1 < countArr[i][1].length){ // 여러사람이 갖는 두글자를 발견하면 (index가 2개이상 있으면)
      answerIdxArr = countArr[i][1]; // 그 사람들의 index를 담은 배열을 추출하고
      break;
    }
  }

  for(let j = 0; j < answerIdxArr.length; j++){
    answer.push(forms[answerIdxArr[j]][0]); // forms에서 그 사람들의 email을 찾아서, answer 배열에 추가
  }
  answer.sort();
  return answer;
}

function addToCountArr(twoStr, idxPerson, countArr){

  let isDone = false;

  for(let i = 0; i < countArr.length; i++){ /// countArr를 순회한다
    if(countArr[i][0] == twoStr) { // 이미 확인된 두글자라면
      countArr[i][1].push(idxPerson); // 해당 두글자를 갖는 0번으로 갖는 배열의 1번인 index 배열에 index를 추가
      isDone = true;
      break;
    }
  }
  if(!isDone){ // 새로운 두글자라면
    countArr.push([twoStr,[idxPerson]]); // countArr에 새로운 두글자와 index를 추가
  }
}
module.exports = problem6;
