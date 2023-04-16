// 1 ~ 20 사이의 숫자 중 홀수는 '숫자 ...은 홀수입니다.'를, 짝수는 '숫자 ...은 짝수입니다.'를 출력하기
// while
let number = 1;
while (number <= 20) {
  if (number % 2 === 0) {
    console.log(`숫자 ${number}은 짝수입니다.`);
  } else {
    console.log(`숫자 ${number}은 홀수입니다.`);
  }
  number++;
}
console.log('\n');

// for
for (let number = 1; number <= 20; number++) {
  if (number % 2 === 0) {
    console.log(`숫자 ${number}은 짝수입니다.`);
  } else {
    console.log(`숫자 ${number}은 홀수입니다.`);
  }
}
