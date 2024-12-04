## 24-2학기 Web Programming 실습 코드
### Week 1
- **week1.html**
  HTML 기본: `HTML 기본 문법`
### Week 2
- **week2.html**
  HTML 태그: `시맨틱 태그`, `폼`, `링크`
### Week 3
- **week3.html**
  스타일: `CSS`, `레이아웃`, `display`
### Week 4
- **week4-obj-gen.html**\
  객체 생성 방법: 3가지 방법으로 객체 생성하기
  `직접 객체`, `리터럴`, `프로토타입`
### Week 5
- **practice8-4.html**
  실습문제 8-4. 계산기: p 태그 내부의 계산식 텍스트의 정답을 출력하기
  keyword: `eval`, `onclick`, `innerHTML`
- **practice8-6.html**
  실습문제 8-6. 프롬프트 입력: 프롬프트를 띄워 입력된 텍스트를 DOM에 보여주기
  keyword: `prompt`, `innerHTML`, `getElement`
- **practice8-9.html**
  실습문제 8-9. DOM에 태그 추가: 프롬프트를 띄워 텍스트를 입력받고 DOM에 입력받은 텍스트를 새로운 태그로 추가하기
  keyword: `prompt`, `createElement`, `appendChild`
- **practice8-10.html**
  실습문제 8-10. 문서 작성기: 새 창으로 HTML 문서를 출력하기
  keyword: `document.open`, `document.write`, `document.close`, `window.open`, `Object.value`
### Week 6
- **ex9-1.html**
  리스너: 태그에 리스너 달아 마우스가 태그 위에 올라오고 나갈 때 스타일 변경하기
  keyword: `onmouseover`, `onmouseout`, `this.style`
- **ex9-7.html**
  디폴트 행동 취소: 이벤트의 기본 액션을 방지하기
  keyword: `e.preventDefault`, `function & return`
- **ex9-9.html**
  계산기: input 필드에 식을 입력하고 계산 버튼을 눌러 계산식의 정답 출력하기
  keyword: `eval`, `onclick`, `Object.value`
- **ex9-17.html**
  선택된 radio 출력: 버튼을 누르면 input type이 radio 중에서 선택된 태그의 값을 출력하기
  keyword: `Object.value`, `getElementsByName`, `*.checked`, `for`
- **ex9-19.html**
  select 객체에서 선택된 파일 출력: select 태그 중에서 선택된 option 태그의 value값을 출력으로 보여주기
  keyword: `<img src='/foo/bar'>`, `Object.value`, `options`, `onload`, `onchange`, `selected`
- **practice9-2.html**
  실습문제 9-2. 라디오 버튼과 이미지 출력: 라디오 버튼을 클릭하면 클릭한 input 태그의 value 이미지를 화면에 appendChild로 출력, 이때 기존 이미지가 있으면 그 이미지는 삭제하기
  keyword: `appendChild`, `setAttribute`, `Object.value`, `onclick`, `removeChild`, `Image Object`
- **practice9-3.html**
  실습문제 9-3. 계산기: 수식을 text로 입력받아 Enter 키를 누르면 수식의 계산 결과를 표시하기
  keyword: `onkeypress`, `event.key`
### Week 7
- **ex10-4.html**
  자동 회전하는 텍스트: Interval를 활용하여 시간의 흐름에 따라 회전하는 텍스트 구현하기
  keyword: `setInterval`, `substr`, `innerHTML`
- **practice9-6.html**
  실습문제 9-6. 마우스 휠을 이용한 확대/축소: 이미지 위에서 마우스 휠을 위/아래로 굴리면 이미지가 확대 및 축소되는 기능 구현하기
  keyword: `Object.width/height`, `onwheel`, `wheelDelta`
- **practie9-10.html**
  실습문제 9-10. 계산기: 실제 계산기 레이아웃으로 버튼을 구성하고, 버튼을 사용해 계산식을 입력받고 출력 보여주기
  keyword: `onclick`, `Object.value`, `eval`
- **practice10-6.html**
  실습문제 10-6. 태그에 시계 만들기: div 태그에 시계를 만들고 setTimeout 활용하여 실시간으로 현재 시간에 맞추어 보여주기.
  keyword: `window.onload`, `Date Object`, `toLocaleTimeString`, `setTimeout`, `clearTimeout`
### Week 8
중간고사 (～￣▽￣)～
### Week 9
- **ex12-1.html**
  방문 카운트 쿠키: 접속자의 username을 입력받고 쿠키로 저장한 뒤, 이 후 방문시마다 방문 수를 1씩 증가시켜 방문 때마다 누적 방문 횟수를 DOM에 보여주기
  keyword: `document.cookie`, `cookie.name&value/expires`, `document.write`
- **ex13-5.html**
  Geolocation: getCurrentPosition()으로 현재 위치 파악하여 위치 정보 출력하기.
  keyword: `geolocation`, `getCurrentPosition`, `coords`, `OpenStreetMap`
- **ex13-8.html**
  1~10까지 더하는 워크 테스크: 워커를 만들어 1부터 10까지 더해 DOM에 표시하는 기능 만들기
  keyword: `Worker Object`, `onmessage`, `innerHTML`
  - **add1to10.js**
    1~10까지의 합을 계산해 postMessage로 전달
    keyword: `for`, `postMessage`
- **ex13-9.html**
  시작~끝 숫자를 받아 합 구하기: 시작 숫자와 끝 숫자를 입력받은 뒤 워커 태스크를 활용하여 시작~끝 숫자의 합을 받아서 출력하기
  keyword: `Worker Object`, `onmessage`, `postMessage`, `innerHTML`
  - **add.js**
    onmessage를 통해 from과 to의 값을 받아서 from~to까지의 합 구해서 postmessage로 전달하기
    keyword: `parseInt`, `for`, `postMessage`
- **ex13-10.html**
  타이머를 가진 웹 워커: `timer.js`를 웹 워커로 사용해서 워커의 출력을 DOM에 표시하기
  keyword: `Worker Object`, `Worker.onmessage`, `Worker.postMessage`
  - **timer.js**
    타이머: "start" 메시지를 받으면 setInterval로 1초마다 타이머를 갱신하고 postMessage로 타이머 값 날리기. "stop" 메시지를 받으면 clearInterval로 타이머 정지 후 Worker 종료
    keyword: `setInterval`, `clearInterval`, `postMessage`, `onmessage`
- **practice12-2.html**
  실습문제 12-2. 세션 스토리지 작성: input에 저장/검색할 품목 이름과 개수를 작성하고 저장 버튼을 누르면 세션 스토리지에 해당 품목에 대한 정보를 저장, 검색 버튼을 누르면 작성한 품목의 이름을 세션 스토리지에서 검색하여 개수를 표시하기
  keyword: `sessionStorage`, `getItem, setItem`, `JSON.parse/stringify`
- **practice12-4-store.html**
  실습문제 12-4. 일기 작성: textarea에 일기를 작성 후 저장 버튼을 누르면 오늘 날짜로 local storage에 일기 내용을 저장하고, 보기 버튼을 누르면 `practice12-4-view.html` 파일을 새 윈도우로 열어서 작성했던 일기 목록 보여주기
  keyword: `window.onload`, `Date Object`, `localStorage`, `JSON`, `window.open`
- **practice12-4-view.html**
  실습문제 12-4. 일기 보기: `practice12-4-store.html`에서 작성해 local storage에 저장된 일기를 불러와 table에 appendChild로 표시하기
  keyword: `localStorage`, `forEach`, `createElement`, `textContent`, `appendChild`
- **practice13-6.html**
  실습문제 13-6. 곱셈하기: 워커 태스크를 활용하여 입력받은 두개의 숫자의 곱셉값을 보여주기
  keyword: `Worker Object`, `postMessage`, `onmessage`
  - **multiply.js**
    실습문제 13-6. 곱셈하기 워커: 전달 받은 두개의 값의 곱셈 값을 계산해 postmessage로 넘겨주기
    keyword: `postMessage`, `parseInt`
### Week 10
- **ex13-1.html**
  오디오와 비디오 내장: audio 태그, video 태그를 활용해 오디오와 비디오 보여주기
  keyword: `audio`, `video`
- **ex13-2.html**
  JS로 오디오 제어: javascript를 활용해 오디오 제어하는 버튼을 누르면 해당하는 기능(재생, 일시정지, 다시재생, 볼륨 증가/감소, 음소거 설정/해제)을 실행하기
  keyword: `audio.play/pause/replay/volume/muted`
### Week 11
- **debug.html**
  브라우저 디버깅 기능 실습
- **dg.js**
  Node를 통해 JS 실행하여 vscode를 통해 디버깅 실습

### Week 12
- **funcPr-practice.js**
  쇼핑카트 객체 배열 데이터를 활용해 다양한 방법(for문, forEach함수, reduce함수, map함수)을 활용해 total price 구하기 + map 함수 활용해 이름 목록의 대소문자 변환하기
  keyword: `for`, `forEach`, `reduce`, `map`