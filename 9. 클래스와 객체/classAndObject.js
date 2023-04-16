// 노트북의 이름, 가격, 제조사를 저장할 수 있는 클래스
class Notebook {
  constructor(name, price, company) {
    this.name = name;
    this.price = price;
    this.company = company;
  }
}

// 노트북 객체 생성
const notebook1 = new Notebook('gram', 1500000, 'LG');

// 노트북 객체의 값 출력
console.log(notebook1.name); // gram
console.log(notebook1.price); // 1500000
console.log(notebook1.company); // LG

// 노트북 객체의 값 수정
notebook1.name = 'galaxyBook';
notebook1.price = 2000000;
notebook1.company = 'Samsung';

// 노트북 객체의 값 출력
console.log(notebook1); // Notebook { name: 'galaxyBook', price: 2000000, company: 'Samsung' }
console.log('\n');

// 상품의 이름, 가격을 저장할 수 있고, 상품명과 가격을 출력하는 메서드를 가진 클래스
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  printInfo() {
    console.log(`상품명: ${this.name}, 가격: ${this.price}원`);
  }
}

// 상품 객체 생성
const product1 = new Product('galaxyBook', 2000000);

// 상품 객체의 메서드 호출
product1.printInfo(); // 상품명: galaxyBook, 가격: 2000000원
console.log('\n');

// 객체 리터럴을 활용해 즉시 객체 만들기 (일회용 객체 생성)
const computer = {
  name: 'Apple Macbook Pro',
  price: 3000000,
  // 화살표 함수 x
  printInfo: function () {
    console.log(`상품명: ${this.name}, 가격: ${this.price}원`);
  },
};

// 객체의 메서드 호출
computer.printInfo(); // 상품명: Apple Macbook Pro, 가격: 3000000원
