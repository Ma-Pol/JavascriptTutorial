// 세 개의 물건 가격을 매개변수로 전달받아 평균값을 리턴하는 함수를 정의한다.
// 정의한 함수를 호출해서 평균값을 출력한다.

const priceAvg = (priceA, priceB, priceC) => (priceA + priceB + priceC) / 3;

const priceA = 1000;
const priceB = 2000;
const priceC = 78000;

console.log(
  `상품 A, B, C의 평균 가격은 ${priceAvg(priceA, priceB, priceC)}원입니다.`
);
