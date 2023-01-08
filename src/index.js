module.exports = function reverse (n) {
  
  let a = n;

  a = a.toString();
  a = a.split('');
  a = a.reverse();
  a = a.join('');
  a = parseFloat(a);

  n = a;

  return n;
}
