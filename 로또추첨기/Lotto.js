//로또 공은 빨, 주, 노, 파, 초록색의 색깔이다.
//보통은 []를 써서 만드는데 값이 많으면 Array함수를 사용한다.
//empty 특징 반복문 불가
//필 메서드 추가
//Mapping 맵
//배열에 뽑아서 매칭하는거
var 후보군 = Arayy(45).fill().map(function(요소, 인덱스){
          return 인덱스+1;
          });
console.log(후보군);

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

console.log(셔플);

var 보너스 = 셔플[셔플.length -1];
//0~6까지 순서대로 뽑는거
//sort 순서정렬
//sort만 할경우 1, 12, 42, 5이렇게되는데 이걸 함수로 1,5,12,42순으로 바꿔짐 어떻게 이렇게 되는거냐면 뺸결과가 0보다 크면 순서를 바꾸는것이다.
//내림차순으로 정렬하고싶다. c-p로 하면된다.
var 당첨숫자들 = 셔플.slice(0,6).sort(function(p,c){return p-c;});

console.log('당첨숫자들', 당첨숫자들, '보너스', 보너스);
//html tag를 element라고 부른다 결국 html id를 찾는것
//html tag를 element를 태그이름으로 찾을수도있다. ex) getElementsByTagName
var 결과창 =document.getElementById('결과창');

for(var i=0; i<당첨숫자들.length; i+=1){
    //몇초뒤에 동작이 나왔으면 할때 쓰는 메소드(비동기!!!)
    setTimeout(function 콜백함수(){
        //클로저(closure)문제 발생해결 (비동기사용시 나타나는 js에 나타남)
        
         var 공 = document.createElement('div');
    공.textContent = 당첨숫자들[i];
    결과창.appendChild(공);
}, 1000); //밀리초
        
}
    
   
//클래스 이름으로 tag를 선택하는것 클래스네임은 여러개 쓸수있어서 배열로 선택해줘야한다.
var 보너스칸 = document.getElementsByClassName('보너스')[0];
var 보너스공 = document.createElement('div');
    보너스공.textContent = 보너스;
    보너스칸.appendChild(보너스공);

