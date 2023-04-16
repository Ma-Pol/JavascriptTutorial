// 일반 함수
function calculateAvg1(price1, price2) {
  const sum = price1 + price2;
  console.log(`두 상품의 가격 총합은 ${sum}원입니다.`);
  const avg = sum / 2;
  return avg;
}

// 화살표 함수
const calculateAvg2 = (price1, price2) => {
  const sum = price1 + price2;
  console.log(`두 상품의 가격 총합은 ${sum}원입니다.`);
  const avg = sum / 2;
  return avg;
};

// 함수의 활용
const priceA = 1000;
const priceB = 2000;
const priceC = 78000;
const priceD = 52000;

const avg1 = calculateAvg1(priceA, priceB);
console.log(`상품 A와 B의 평균 가격은 ${avg1}원입니다.\n`);

const avg2 = calculateAvg2(priceC, priceD);
console.log(`상품 C와 D의 평균 가격은 ${avg2}원입니다.`);
