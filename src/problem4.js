function problem4(word) {
  var answer = [];
  var arrWord = word.split('');

  let charCode_A = 'A'.charCodeAt(0);
  let charCode_Z = 'Z'.charCodeAt(0);
  let charCode_a = 'a'.charCodeAt(0);
  let charCode_z = 'z'.charCodeAt(0);

  for(let i = 0; i < word.length; i++) {
    let charCode_i = word[i].charCodeAt(0);

    if(charCode_A <= charCode_i && charCode_i <= charCode_Z){
      answer.push(String.fromCodePoint(charCode_A + charCode_Z - charCode_i));
    }
    else if(charCode_a <= charCode_i && charCode_i <= charCode_z){
      answer.push(String.fromCodePoint(charCode_a + charCode_z - charCode_i));
    }
    else answer.push(word[i]);
  } 



  return answer.join('');
}

module.exports = problem4;
