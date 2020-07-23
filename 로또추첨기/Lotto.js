//로또 공은 빨, 주, 노, 파, 초록색의 색깔이다.
//보통은 []를 써서 만드는데 값이 많으면 Array함수를 사용한다.
//empty 특징 반복문 불가
//필 메서드 추가
//Mapping 맵
//배열에 뽑아서 매칭하는거
var 후보군 = Array(45)
  .fill()
  .map(function (요소, 인덱스) {
    return 인덱스 + 1;
  });
//숫자를 랜덤하게 섞어 앞에꺼나 뒤에꺼 6개뽑기
var 셔플 = [];
while(후보군.length > 0) {
    //포문과 while문 사용처 알기
    //while 기준값이 자주바뀌면 while문이 좋다
    //math랜덤은 진짜 상용황에서는 하지말고 랜덤으로 뽑는 알고리즘을 쓰셔야한다.
    var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
    셔플.push(이동값);
    //splice 하나씩 뽑는것 이걸 while문으로 반복해줌
}


var 보너스 = 셔플[셔플.length -1];
//0~6까지 순서대로 뽑는거
//sort 순서정렬
//sort만 할경우 1, 12, 42, 5이렇게되는데 이걸 함수로 1,5,12,42순으로 바꿔짐 어떻게 이렇게 되는거냐면 뺸결과가 0보다 크면 순서를 바꾸는것이다.
//내림차순으로 정렬하고싶다. c-p로 하면된다.
var 당첨숫자들 = 셔플.slice(0,6).sort(function(p,c){return p-c;});

console.log('당첨숫자들', 당첨숫자들, '보너스', 보너스);
//html tag를 element라고 부른다 결국 html id를 찾는것
//html tag를 element를 태그이름으로 찾을수도있다. ex) getElementsByTagName


//querySelector 이걸로 id, className 다 찾을수있다.
var 결과창 = document.getElementById('결과창');

function 공색칠(숫자, 결과창){
    var 공 = document.createElement('div');
    공.textContent = 숫자;
    공.style.display = 'inline-block';
    공.style.border = '1px solid black';
     //자바스크립트는 -를 빼기로 인식해서 그 부분을 대문자로 바꿔줘야한다. 스타일이용시!
     //border-radius -> borderRadius
    공.style.borderRadius = '10px';
    공.style.width = '20px';
    공.style.height = '20px';
    공.style.marginRight = '10px';
    공.className = '공이름'+숫자;
    공.style.fontSize = '12px';
    //공 숫자색
    var 배경색;
    if (숫자 <=10) {
        배경색 = 'red';
        
    }
    else if(숫자 <=20){
        배경색 = 'orange';
    }
    else if(숫자 <=30){
            배경색 = 'yellow'
     }
    else if(숫자 <=40){
            배경색='blue';
            }
    else{
        배경색 = 'green';
    }
    공.style.background = 배경색;
    결과창.appendChild(공);
}
 //몇초뒤에 동작이 나왔으면 할때 쓰는 메소드(비동기!!!
//클로저 문제
/*for(var i=0; i<100; i++){
setTimeout(function(){
    console.log(i); // 이 아이는 실행이 될때까지 특정값으로 바뀌지 않는다.
    //비동기 문제 콜백함수 안에 있는 함수는 실행될때까지 값이 변경되지 않는다.
}, 1(i)*1000);//여기는 왜 i를 따라가지 않는가하면 비동기 콜백함수 바깥의 변수이기 때문이다. 
}

//위와 같이 i의 값이 0초, 1초 이렇게 지정해둔 시간안에 출력해야하는데 컴퓨터는 그것보다 더빠르게 계산을 하는 경우다 있다. i의 값이 함수 안의 i와 바깥의 초를 세는 i는 다른것인데 이유는 함수안의 변수는 "실행"이 될때 값이 결정되고 그전까지 특정 값으로 변하지 않는다.
//결국 이 함수는 결국 1초일때 함수가 실행되는데 그때 비동기 콜백함수 안에 있는 i가 실행되는것이다.


클로저 해결법
<------------------>
for(var i=0; i<100; i++){
function 클로저(i){
    setTimeout(function(){
    console.log(i);
    }, i*1000);
}
클로저(i);
}
*/
 for(var i=0; i<당첨숫자들.length; i++){
  (function 클로저(j){
   setTimeout(function(){
     공색칠(당첨숫자들[j], 결과창);
   }, (j+1) *1000);
  })(i);//소괄호로 묶어서 즉시 실행해준다.
 }


setTimeout(function 콜백함수(){
    //클래스 이름으로 tag를 선택하는것 클래스네임은 여러개 쓸수있어서 배열로 선택해줘야한다.
var 칸 = document.getElementsByClassName('보너스')[0];
 공색칠(보너스, 칸); 
}, 7000);
        

    
   


