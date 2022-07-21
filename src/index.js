module.exports = function check(str, bracketsConfig) {
  const config = bracketsConfig.reduce((cur, next) => ({...cur, [next[0]]: next[1] }) ,{});
  
  let stack = [];
  let arr = [...str];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    if (current !== stack[stack.length - 1]) {
      stack.push(config[current])
    } else if (current === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }
  
  return stack.length === 0;
}
