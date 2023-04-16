// 10개의 상품 가격 데이터를 가진 배열을 만든다.
// 반복문을 활용해 상품들의 가격 합계와 평균을 구한다.
const productsPrice = [
  1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
];
let sum = 0;

for (let i = 0; i < productsPrice.length; i++) {
  sum += productsPrice[i];
}

console.log(`상품 가격의 합계: ${sum}`);
console.log(`상품 가격의 평균: ${sum / productsPrice.length}`);
