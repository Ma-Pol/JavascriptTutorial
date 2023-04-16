// 1 ~ 10의 숫자 중 3으로 나누었을 때 나머지가 0인 숫자를 출력하기
// while
let i = 1;
while (i <= 10) {
  if (i % 3 === 0) {
    console.log(i);
  }
  i++;
}
console.log('\n');

// for
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
