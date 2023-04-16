// 배열의 선언
const arr1 = new Array(1, 2, 3); // Array 클래스 활용
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8]; // 배열 리터럴 활용

// 배열의 출력
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);

// 배열의 길이
console.log(`arr1의 길이: ${arr1.length}\n`);

const rainbow = ['빨강', '주황', '노랑', '초록', '파랑', '남색', '보라'];
console.log(rainbow[0]);
console.log(rainbow[1]);
console.log(rainbow[2]);
console.log(rainbow[3]);
console.log(rainbow[4]);
console.log(rainbow[5]);
console.log(rainbow[6]);

console.log(`rainbow의 길이: ${rainbow.length}`);
console.log(`rainbow의 마지막 요소: ${rainbow[rainbow.length - 1]}\n`);

// 배열 요소 추가와 삭제
rainbow.push('자외선'); // 배열의 마지막에 요소 추가
console.log(rainbow); // [ '빨강', '주황', '노랑', '초록', '파랑', '남색', '보라', '자외선' ]

rainbow.pop(); // 배열의 마지막 요소 삭제
console.log(rainbow); // [ '빨강', '주황', '노랑', '초록', '파랑', '남색', '보라' ]
console.log();

// 배열과 반복문(for)
for (let i = 0; i < rainbow.length; i++) {
  console.log(rainbow[i]);
}
console.log();

// 배열과 반복문(for of) (자바의 forEach)
for (let color of rainbow) {
  console.log(color);
}
