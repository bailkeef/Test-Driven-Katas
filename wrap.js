const wrap = (line, maxLen) => {
let strArr = '';

if(line.length<=maxLen){
  return line;
}
if(line.length>maxLen){
  strArr = 'hello';
  console.log(strArr);
}

};
module.exports = wrap;
