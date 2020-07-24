var 테이블 =document.getElementById('table');
var 데이터 = [];

function 초기화(){
  var fragment = document.createDocumentFragment();
    
  [1, 2, 3, 4].forEach(function() {
    var 열데이터 = [];
      
    데이터.push(열데이터);
    var tr = document.createElement('tr');
    [1, 2, 3, 4].forEach(function() {
      열데이터.push(0);
      var td = document.createElement('td');
      tr.appendChild(td);
    });
    fragment.appendChild(tr);
  });
  테이블.appendChild(fragment);
}

function 랜덤생성(){
    var 빈칸배열 = [];
    데이터.forEach(function(열데이터, i){
        열데이터.forEach(function(행데이터, j){
            if(!행데이터){
                빈칸배열.push([i,j]);
            }
        });
    });
    console.log(빈칸배열);
    var 랜덤칸 = 빈칸배열[Math.floor(Math.random()*빈칸배열.length)];
    데이터[랜덤칸[0]][랜덤칸[1]] = 2;
    그리기();
}

function 그리기() {
  데이터.forEach(function(열데이터, i) {
    열데이터.forEach(function(행데이터, j) {
      if (행데이터 > 0) {
        테이블.children[i].children[j].textContent = 행데이터;
      } else {
        테이블.children[i].children[j].textContent = '';
      }
    });
  });
}

초기화();
랜덤생성();
그리기();



/* 
마우스 이벤트 정리
mousedown = 마우스 누를때
mousmove = 마우스 움직일때
mouseup = 마우스 뗄때

screenX = 모니터 기준 좌표
pageX= 페이지(스크롤 포함)
clientX = 브라우저 화면 기준
offsetX = 이벤트 타겟 기준

*/

var 드래그시작 = false;
var 드래그중 = false;
var 시작좌표;
var 끝좌표;


window.addEventListener('mousedown', function(이벤트){
    드래그시작 = true;
    시작좌표 = [이벤트.clientX, 이벤트.clientY];
});
window.addEventListener('mousemove', function(이벤트){
    if(드래그시작){
        드래그중 = true;
    }
});
window.addEventListener('mouseup', function(이벤트){
    드래그시작 = false;
    끝좌표 = [이벤트.clientX, 이벤트.clientY];
    
    if(드래그중){
    //방향 판단 2차평면에서 45도를 그었을경우 위 아래 오른쪽 아래쪽 각도와 기울기로 판단.
    /*
      기울기 공식 -> y = ax+b 인데 a가 기울기 역할을 한다
      기울기는 y증가량분의 x증가량이기에
      이 a를 구하는 공식은 y2-y1/x2-x1이다
      
      */
    var 방향;
    var x차이 = 끝좌표[0] - 시작좌표[0];
    var y차이 = 끝좌표[1] - 시작좌표[1];
      
    //Math.abs() 함수 abs()함수는 인자값에 대한 절대값을 반환하는 함수입니다.
     //Math는 클래스의 함수중 하나로 static 함수입니다.
    if ( x차이 <0 && Math.abs(x차이) / Math.abs(y차이)>1){
        방향 = '왼쪽';
    }
    else if(x차이 >0 && Math.abs(x차이) / Math.abs(y차이)>1){
             방향 = '오른쪽';
    }
    else if(y차이 >0 && Math.abs(x차이) / Math.abs(y차이)<1){
        방향 = '아래';
    }
    else if(y차이 <0 && Math.abs(x차이) / Math.abs(y차이)<1){
                 방향 = '위';
    }
    console.log(x차이, y차이, 방향);
    }
    드래그시작 =false;
    드래그중 = false;
});

















