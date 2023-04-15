// 문자열 붙이기
console.log('문자열 붙이기');
console.log('my' + ' car'); // my car
console.log('1' + 2); // 12
console.log(1 + 2); // 3
// 템플릿 리터럴 (백틱 사용)
console.log(`템플릿 리터럴1: 1 + 2 = ${1 + 2}`); // 템플릿 리터럴1: 1 + 2 = 3
const shoesPrice = 10000;
console.log(`템플릿 리터럴2: 이 신발의 가격은 ${shoesPrice}원입니다.\n`); // 템플릿 리터럴2: 이 신발의 가격은 10000원입니다.

// 산술 연산자
console.log('산술 연산자');
console.log(5 + 7); // 13 (덧셈)
console.log(7 - 2); // 5 (뺄셈)
console.log(10 * 5); // 50 (곱셈)
console.log(10 / 2); // 5 (몫)
console.log(10 % 2); // 0 (나머지)
console.log(10 ** 10); // 10000000000 (10의 10제곱)
console.log();

// 증감 연산자
console.log('증감 연산자');
let count = 2;
const preIncrement = ++count; // count = count + 1; -> preIncrement = count;
count = 2;
const postIncrement = count++; // postIncrement = count; -> count = count + 1;
console.log(`preIncrement: ${preIncrement}, postIncrement: ${postIncrement}\n`); // preIncrement: 3, postIncrement: 2

// 대입 연산자
console.log('대입 연산자');
const shirtsPrice = 20000;
const pantsPrice = 80000;
let totalPrice = 0;

totalPrice += shirtsPrice; // totalPrice = totalPrice + shirtsPrice;
console.log(`totalPrice: ${totalPrice}`); // totalPrice: 20000

totalPrice += pantsPrice; // totalPrice = totalPrice + pantsPrice;
console.log(`totalPrice: ${totalPrice}`); // totalPrice: 100000

totalPrice -= shirtsPrice; // totalPrice = totalPrice - shirtsPrice;
console.log(`totalPrice: ${totalPrice}\n`); // totalPrice: 80000

// 비교 연산자
console.log('비교 연산자');
console.log(`10 < 6 = ${10 < 6}`); // false
console.log(`10 <= 6 = ${10 <= 6}`); // false
console.log(`10 > 6 = ${10 > 6}`); // true
console.log(`10 >= 6 = ${10 >= 6}`); // true
console.log();

// 논리 연산자
console.log('논리 연산자');
let isOnSale = true;
let isDiscountItem = true;

console.log(`isOnSale && isDiscountItem = ${isOnSale && isDiscountItem}`); // true && true -> true
console.log(`isOnSale || isDiscountItem = ${isOnSale || isDiscountItem}`); // true || true -> true

isOnSale = false;
console.log(`isOnSale && isDiscountItem = ${isOnSale && isDiscountItem}`); // false && true -> false
console.log(`isOnSale || isDiscountItem = ${isOnSale || isDiscountItem}`); // false || true -> true

isDiscountItem = false;
console.log(`isOnSale && isDiscountItem = ${isOnSale && isDiscountItem}`); // false && false -> false
console.log(`isOnSale || isDiscountItem = ${isOnSale || isDiscountItem}`); // false || false -> false

console.log(`!isOnSale = ${!isOnSale}`); // !false -> true
console.log();

// 일치 연산자
console.log('일치 연산자');
console.log(`1 === 1 = ${1 === 1}`); // true
console.log(`1 === 2 = ${1 === 2}`); // false
console.log(`1 === '1' = ${1 === '1'}`); // false
console.log(`1 == '1' = ${1 == '1'}`); // true
console.log(`1 !== 1 = ${1 !== 1}`); // false
console.log(`1 !== '1' = ${1 !== '1'}`); // true
console.log(`1 != '1' = ${1 != '1'}`); // false
