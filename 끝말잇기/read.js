//자바스크립트 바디는 html바디를 선택하게된다.
var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = '제로초';

//바디에 기억만하지말고 추가도해준다.
document.body.append(단어);

//폼안에 집어넣기
var 폼 = document.createElement('form');
document.body.append(폼);

//폼안에 있어서 document대신 폼으로 씀.
var 입력창 = document.createElement('input');
폼.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
폼.append(버튼);

var 결과창 = document.createElement('div');
document.body.append(결과창);

//반복문을 이벤트리스너로 대체
폼.addEventListener('submit', function 콜백함수(e){
    e.preventDefault();
    if (단어.textContent[단어.textContent.length - 1] == 입력창.value[0]) {
        //입력창.value == 초밥 이런식으로
        //console.dir(document.body) 확인하면 여러가지 볼수있음
        결과창.textContent = '딩동댕';
        단어.textContent = 입력창.value;
        입력창.value = '';
        입력창.focus();
        
        
    }else{
        결과창.textContent = '땡';
        입력창.value = '';
        입력창.focus();
    }
    
}); //function이 콜백함수 자바스크립트는 함수 이름 안붙여도되긴함

//
//var word = '제로초'
// while (true) {
  //   var answer = prompt(word);
    // if (word[word.length - 1] === answer[0]) {
 //    alert('딩동댕');
 //    word = answer;
 //  } else {    alert('땡');
// }
//}