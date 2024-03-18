function solution(n) {
  const fibonacci = new Array(n).fill(0);
  fibonacci[0] = 1;
  fibonacci[1] = 1;
  
  for(let i = 2; i <= n; i++) {
    fibonacci[i] = (fibonacci[i - 2] + fibonacci[i - 1]) % 1000000007;
  }
  
  return fibonacci[n];
}