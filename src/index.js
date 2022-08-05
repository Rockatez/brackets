module.exports = function check(str, bracketsConfig) {
  const clearBrackets = bracketsConfig.map(item => item.join(''));
  for (let i = 0; i < clearBrackets.length; i++) {
              if(str.includes(clearBrackets[i])) {
              str = str.replace(clearBrackets[i], '')
              i = -1
              }
  }
  if (str.length % 2 !== 0 ) {
    return false;
  }
    return str = !str
  }
