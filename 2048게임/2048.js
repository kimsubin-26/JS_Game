var 테이블 =document.getElementById('table');
var 데이터 = [];
var 점수표 =document.getElementById('score');

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
    if(빈칸배열.length ===0){
        alert('게임오버: ' + 점수표.textContent);
        테이블.innerHTML = '';
        초기화();
    }
    else{
        var 랜덤칸 = 빈칸배열[Math.floor(Math.random()*빈칸배열.length)];
    데이터[랜덤칸[0]][랜덤칸[1]] = 2;
    그리기();
    }
    
}

function 그리기() {
  데이터.forEach(function(열데이터, i) {
    열데이터.forEach(function(행데이터, j) {
      if (행데이터 > 0) {
        테이블.children[i].children[j].textContent = 행데이터;
      }
        else {
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
   
    끝좌표 = [이벤트.clientX, 이벤트.clientY];
    
    if(드래그중){
    //방향 판단 2차평면에서 45도를 그었을경우 위 아래 오른쪽 아래쪽 각도와 기울기로 판단.
        
        //중심이 (0,0)일때 마지막좌표의 차이를 뺄경우 x좌표가 음수인지 아닌지로 왼쪽 오른쪽
        //중심이(0,0)과 마지막표 차이를 뺄경우 y좌표로 음수이면 위, 양수이면 아래인걸 알수 있다 이걸로 차이를 본다.
        //math.abs 절대값 함수
    var 방향;
    var x차이 = 끝좌표[0] - 시작좌표[0];
    var y차이 = 끝좌표[1] - 시작좌표[1];
        
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
    
    
    switch(방향){
        case '왼쪽':
           var 새데이터 =[
                [],
                [],
                [],
                []
            ];
            데이터.forEach(function(열데이터, i) {
            열데이터.forEach(function(행데이터, j) {
          if (행데이터) {
            if (새데이터[i][새데이터[i].length - 1] && 새데이터[i][새데이터[i].length - 1] === 행데이터) {
              새데이터[i][새데이터[i].length - 1] *= 2;
              var 현점수 = parseInt(점수표.textContent, 10);
              점수표.textContent = 현점수 + 새데이터[i][새데이터[i].length - 1];
            } 
            else {
              새데이터[i].push(행데이터);
                 }
            }
                });
            });
          
            console.log(새데이터);
            [1,2,3,4].forEach(function(열데이터, i){
            [1,2,3,4].forEach(function(행데이터, j){
                 데이터[i][j] = 새데이터[i][j] || 0;
                    
                });
            });
            break;
            
        case '오른쪽' :
           var 새데이터 =[
                [],
                [],
                [],
                []
            ];
            데이터.forEach(function(열데이터, i){
            열데이터.forEach(function(행데이터, j){
                if(행데이터){
                    
                if (새데이터[i][0] && 새데이터[i][0] === 행데이터) {
              새데이터[i][0] *= 2;
              var 현점수 = parseInt(점수표.textContent, 10);
              점수표.textContent = 현점수 + 새데이터[i][0];
            } 
            else {
              새데이터[i].unshift(행데이터);
                 }
                  
                }
                });
            });
            console.log(새데이터);
            [1,2,3,4].forEach(function(열데이터, i){
            [1,2,3,4].forEach(function(행데이터, j){
                 데이터[i][3-j] = 새데이터[i][j] || 0;
                    
                });
            });
            break;
            
        case '위' :
         /*
    
        숫자 6개가 랜덤으로 만들어지면 배열 4개를 만들어두면 반복문을 돌면서 2있으면 배열1번에 넣고 4가 나오면 다른곳에 넣고 순차적으로 반복문을 돌면서 배열에 넣고 새데이터를 반복문을 돌아서 첫번째 칸에 천천히 아래로 쓰는걸로 통해서 위로 올려주는 효과를 준다.
        */
            var 새데이터 =[
                [],
                [],
                [],
                []
            ];
            데이터.forEach(function(열데이터, i){
            열데이터.forEach(function(행데이터, j){
                if(행데이터){
                    //행데이터가 내 데이터 새데이터[i][새데이터[i].length-1] = 나보다 전에 들어있던 데이터 나보다 먼저 위에 있던 데이터랑 같으면 합치고 아니면 푸쉬만 하는거.
                  
                    if (새데이터[j][새데이터[j].length-1] && 새데이터[j][새데이터[j].length-1] === 행데이터) {
              새데이터[j][새데이터[j].length-1] *= 2;
              var 현점수 = parseInt(점수표.textContent, 10);
              점수표.textContent = 현점수 +새데이터[j][새데이터[j].length-1];
            } 
            else {
                 새데이터[j].push(행데이터);
                 }
                  
                
                
                   }
                });
            });
            console.log(새데이터);
            [1,2,3,4].forEach(function(행데이터, i){
            [1,2,3,4].forEach(function(열데이터, j){
                 데이터[j][i] = 새데이터[i][j] || 0;
                    
                });
            });
            break;
        case '아래' :
            var 새데이터 =[
                [],
                [],
                [],
                []
            ];
            데이터.forEach(function(열데이터, i){
            열데이터.forEach(function(행데이터, j){
                if(행데이터){
                    if (새데이터[j][0] && 새데이터[j][0] === 행데이터) {
              새데이터[j][0] *= 2;
              var 현점수 = parseInt(점수표.textContent, 10);
              점수표.textContent = 현점수 +새데이터[j][0];
            } 
            else {
                새데이터[j].unshift(행데이터);
                 }
                  
                   
                   }
                });
            });
            console.log(새데이터);
            [1,2,3,4].forEach(function(행데이터, i){
            [1,2,3,4].forEach(function(열데이터, j){
                 데이터[3-j][i] = 새데이터[i][j] || 0;
                    
                });
            });
            break;
        
    } 
    그리기();
    랜덤생성();
});
















