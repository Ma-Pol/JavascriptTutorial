// if
const shoesPrice = 40000;
if (shoesPrice < 50000) {
  console.log('이 신발을 사겠습니다.');
}

const capPrice = 10000;
if (capPrice < 10000) {
  console.log('이 모자를 사겠습니다.');
}
console.log();

// else
if (shoesPrice < 30000) {
  console.log('이 신발을 사겠습니다.');
} else {
  console.log('너무 비싸요!!');
}
console.log();

// else if
if (shoesPrice < 30000) {
  console.log('이 신발을 사겠습니다.');
} else if (shoesPrice < 50000) {
  console.log('고민 좀 해볼게요..');
} else {
  console.log('너무 비싸요. 사지 않겠습니다.');
}
