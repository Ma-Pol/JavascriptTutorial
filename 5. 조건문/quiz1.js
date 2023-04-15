// 거리를 의미하는 변수를 선언하고, 원하는 숫자값을 할당한다. (단위는 km라 가정한다)
// 2km 미만이면 '걸어가자', 2km 이상 5km 미만이면 '택시를 타자', 그 외에는 '기차를 타자'를 출력한다.
const distance1 = 1;
const distance2 = 3;
const distance3 = 7;

const howToGo = (dtc) => {
  if (dtc < 2) {
    console.log('걸어가자');
  } else if (dtc < 5 /*또는 dtc >= 2 && dtc < 5*/) {
    console.log('택시를 타자');
  } else {
    console.log('기차를 타자');
  }
};

howToGo(distance1);
howToGo(distance2);
howToGo(distance3);
