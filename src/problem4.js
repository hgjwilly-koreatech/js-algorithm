function problem4(word) {
  var answer = [];
  var arrWord = word.split('');

  let charCode_A = 'A'.charCodeAt(0);
  let charCode_Z = 'Z'.charCodeAt(0);
  let charCode_a = 'a'.charCodeAt(0);
  let charCode_z = 'z'.charCodeAt(0); // 아스키코드를 구해둔다

  
  for(let i of arrWord) { 
    let charCode_i = i.charCodeAt(0);

    if(charCode_A <= charCode_i && charCode_i <= charCode_Z){
      answer.push(String.fromCodePoint(charCode_A + charCode_Z - charCode_i));
    }
    else if(charCode_a <= charCode_i && charCode_i <= charCode_z){
      answer.push(String.fromCodePoint(charCode_a + charCode_z - charCode_i));
    }
    else answer.push(i);
  } 
  




  return answer.join('');
}

module.exports = problem4;
