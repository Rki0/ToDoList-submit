# 🗓 To-Do-List 만들기!

---

## 👉 활용 사이트

아이콘 : https://fontawesome.com/  
기상 상황 : https://openweathermap.org/

---

## 🤔 포함된 기능

### JS는 바닐라 JS가 사용되었습니다!

- 날짜 표시, 시간 표시
- 로그인(이름 입력)창 + 시간에 따른 인사👋
- 할 일 목록 입력 창 + 할 일 리스트
- 명언
- 날씨와 기온, 위치 표시
- 무작위 배경화면

---

## 👀 이 코드!

### 1. 날짜 표시, 시간 표시

- JS

```javascript
function timeUpdate() {
  const today = new Date();
  const hour = String(today.getHours()).padStart(2, 0);
  const min = String(today.getMinutes()).padStart(2, 0);
  const sec = String(today.getSeconds()).padStart(2, 0);
  clock.innerText = `${hour}:${min}:${sec}`;
}

timeUpdate();
setInterval(timeUpdate, 1000);
```

> 시간에 관련된 데이터를 가져오기 위해서는 **_Date_**()를 사용해야한다.  
> 변수에 이를 할당하고, Date 객체의 내장 함수들을 사용하였다.  
> 나는 1분을 1로 표현하는게 아니라 01분으로 표현하고 싶었다.  
> 간단하게 이를 해결할 수 있는 것이 **_padStart_**()이다. 위 코드에 입력한 것은 2개의 문자를 가지도록 보이게 하고, 빈 자리에는 0을 입력하라는 것이다.  
> 문제는 **_get_**~을 통해 얻은 값들이 숫자형이라는 것이다. **_padStart_**()를 사용하려면 문자형이어야 하므로 **_String_**()을 통해 문자형으로 전환해주었다.  
> 이를 통해 1로 출력되던 것이 01로 출력되게 된다.

```javascript
function dateUpdate() {
  const date = new Date();
  const year = date.getFullYear();
  /**getmonth()는 1월이 0으로 표시되기 때문에 +1을 해주는게 맞지만, monthList에서는 1월(Jan)의 index가 0번이므로 +1을 안해도 된다. */
  const month = monthList[date.getMonth()];
  const day = String(date.getDate()).padStart(2, 0);
  calendar.innerText = `${month}.${day}, ${year}`;
}
```

> 주석에 적어 놓은대로 **_getMonth_**()는 1월이라면 0이 출력이 된다. 따라서 +1을 해줘야 실제 달이 나오게 된다.  
> 나는 영어 약자로 달을 표현하고 싶었기 때문에 **monthList**배열에 영어 약자들을 넣어놓고, 얻어온 달을 인덱스로 삼아서 문자들을 꺼내썼다.

### 2. 로그인(이름 입력)창 + 시간에 따른 인사👋

- html

```html
<form class="loginForm hidden">
  <input
    type="text"
    class="userId"
    autofocus
    required
    placeholder="Please Write Your Name"
  />
  <button>Login</button>
</form>
<h2 class="helloUser hidden"></h2>
```

- JS

```javascript
function login(event) {
  event.preventDefault();
  const userId = document.querySelector(".userId").value;
  localStorage.setItem(USER_ID, userId);
  loginForm.classList.add(HIDDEN);
  sayHello(userId);
}
```

> form으로 인해서 submit이 발생할 경우 자동으로 페이지가 새로고침이 된다. 이를 막기 위해 **_preventDefault_**()를 사용하였다.  
> input에 입력한 value를 변수에 할당하고 이를 localStorage에 저장했다.
> 여기서 왜 html에서 loginForm에 hidden을 미리 줬는지는 나중에 나올 것이다
> 아무튼 여기서는 loginForm에 HIDDEN 클래스를 추가해서 보이지 않게 해줬다는 것!
> HIDDEN 클래스는 CSS에서 display : none으로 설정해줬다.

```javascript
function sayHello(userId) {
  hello.classList.remove(HIDDEN);
  const date = new Date();
  const hour = date.getHours();
  if (hour >= 5 && hour < 9) {
    const span = document.createElement("span");
    span.innerText = "Good Morning";

    const icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-coffee");

    const who = document.createElement("span");
    who.innerText = `, ${userId}`;

    hello.appendChild(span);
    hello.appendChild(icon);
    hello.appendChild(who);
  } else if (hour >= 9 && hour < 17) {
    const span = document.createElement("span");
    span.innerText = "Good Afternoon";

    const icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-sun");

    const who = document.createElement("span");
    who.innerText = `, ${userId}`;

    hello.appendChild(span);
    hello.appendChild(icon);
    hello.appendChild(who);
  } else if (hour >= 17 && hour < 21) {
    const span = document.createElement("span");
    span.innerText = "Good Evening";

    const icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-utensils");

    const who = document.createElement("span");
    who.innerText = `, ${userId}`;

    hello.appendChild(span);
    hello.appendChild(icon);
    hello.appendChild(who);
  } else {
    const span = document.createElement("span");
    span.innerText = "Good Night";

    const icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-moon");

    const who = document.createElement("span");
    who.innerText = `, ${userId}`;

    hello.appendChild(span);
    hello.appendChild(icon);
    hello.appendChild(who);
  }
}
```

> 로그인 후 인사를 하는 창을 보여주기 위해서 HIDDEN 클래스를 지워줬고, **_Date_**()를 이용해 시간에 따라 조건문을 설정하여 다른 인사말을 보여주도록 했다.  
> 텍스트와 텍스트 사이에 아이콘을 넣고 싶어서 span을 i를 사이에 두고 두 번 만들어서 감싸주었다. 이로 인해서 코드가 상당히 길어진 점이 아쉽다. 모든 조건에서 같은 말을 반복하는 부분이 많으므로 이는 추후 수정하여 코드를 줄일 수 있을 것으로 보인다.

```javascript
if (getId === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", login);
} else {
  sayHello(getId);
}
```

> 위에서 왜 loginForm에 HIDDEN 클래스가 추가가 되는지에 대한 의문이 여기서 풀린다.  
> getId에는 localStorage에서 userId를 뽑아오는데, 만약 사용자가 이름을 입력하지 않은 초기 상태라면 이 조건문을 통해서 html에 존재했던 HIDDEN 클래스를 지워버리므로 사용자가 loginForm을 볼 수 있는 것이다.

### 3. 할 일 목록 입력 창 + 할 일 리스트

- html

```html
<form class="todoForm">
  <input type="text" class="writeTodo" placeholder="What do you want to do?" />
</form>
<!--Display To-Do-List-->
<ul class="todoList"></ul>
```

- JS

```javascript
let todoList = [];

function addList(event) {
  event.preventDefault();
  const what = todoInput.value;
  const localObject = {
    todo: what,
    id: Date.now(),
  };
  todoList.push(localObject);
  todoInput.value = "";
  paintList(localObject);
  storageList();
}

todoForm.addEventListener("submit", addList);
```

> 리스트의 값들이 들어갈 빈 배열을 만들어주고, 리스트의 value와 id를 object로 만들어 할당했다.  
> 이 파트는 데이터의 형태를 만들어주는 역할을 한다.

```javascript
let inputNum = 0;

function paintList(object) {
  const li = document.createElement("li");
  li.id = object.id;

  const span = document.createElement("span");
  span.innerText = object.todo;

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.id = `inputId${inputNum}`;

  if (input.id.checked) {
    span.style.textDecoration = "line-through";
  }

  inputNum += 1;

  const label = document.createElement("label");
  label.setAttribute("for", input.id);

  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", removeList);

  li.appendChild(span);
  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(btn);
  ul.appendChild(li);
}
```

> 이 파트는 배열에 넣었던 데이터를 활용하여 리스트를 그려내는 역할을 한다.  
> 이미 존재하는 ul 안에 li, span, input, label, button이 들어간다.  
> span에는 내가 적은 할 일이 들어간다.
> input은 checkbox를 표현하기 위한 사전 작업으로 label을 통해 꾸며줄 것이므로 화면 상에서는 **display:none**을 해준다.  
> button은 리스트를 지워주는 기능(**_removeList_**())을 할 것이다.  
> 이들은 **_appendChild_**()를 통해 각 요소에 자식으로 넣어준다.  
> inputNum은 여러 개의 checkbox 중에서 어떤 것이 선택되었는지 확인하기 위해 각각 id 설정을 해주기 위한 변수이다. **_paintList_**()는 할 일 입력마다 호출되는 함수이므로, inputNum은 함수 외부에 선언해서 0으로 리셋되지않도록 막아주었다.

```javascript
function removeList(event) {
  const remo = event.target.parentElement;
  remo.remove();
  todoList = todoList.filter((todo) => todo.id != parseInt(remo.id));
  storageList();
}
```

> 이 파트는 특정 리스트를 목록에서 삭제하는 기능을 담당한다.  
> click한 button인 **X**에 해당하는 **parentElement**를 지운다.  
> 여기서 **parentElement**는 li이다.  
> 따라서 li에 **_appendChild_**()를 통해 합쳐진 요소들도 전부 포함되어 삭제된다.  
> 단, 화면 상에서만 지워진 것이지 todoList 배열에서 지워진게 아니라서 새로고침을 한다면 다시 나타난다.  
> **_filter_**()는 **true**인 값들만 남겨놓고 **false**인 것들을 전부 없애주는 함수로, **_paintList_**()에서 설정했던 li의 id와 remo에서 지정된 li의 id의 일치 여부를 판단하여 삭제한다.  
> 여기서는 일치하면 **false**이므로 삭제하려고 눌렀던 내용이 사라질 것이다. 이를 통해 완전히 todoList 배열에서 삭제되고, 이렇게 변경이 생긴 값을 **_storageList_**()를 통해 저장한다.  
> **_parseInt_**()는 remo의 id가 string형이므로 이를 숫자형으로 바꿔준 것이다. 이 코드에서는 큰 의미가 없겠지만 조금이라도 큰 규모의 프로젝트를 한다면 타입도 매우 중요할 것이므로 알고 넘어가는게 좋을 것 같다.

```javascript
function storageList() {
  localStorage.setItem(TODO_OBJECT, JSON.stringify(todoList));
}

const getList = localStorage.getItem(TODO_OBJECT);

if (getList != null) {
  const parsedList = JSON.parse(getList);
  todoList = parsedList;
  parsedList.forEach(paintList);
}
```

> **_storageList_**()는 리스트의 값들을 localStorage에 저장하는 기능을 한다.  
> 앞선 코드에서 리스트에 들어갈 값들을 object로 만들어줬다. 이를 localStorage에 저장하면 제대로 보이지않고 [object, object] 처럼 저장된다.  
> object의 key와 value가 보이도록 저장되어야하므로, **_JSON.stringify_**()를 통해 JS 값을 JSON 문자열로 변환해서 저장해주었다.  
> 이렇게 저장된 값들을 **_getItem_**()을 통해 다시 얻어주고, 얻어온 값이 **null**이 아니라면(비어있지 않다면) 다시 화면에 입력해준다. 이는 새로고침을 하더라도 내가 입력한 것들이 그대로 출력되도록 해준다.  
> 여기서는 **_JSON.parse_**()를 통해 JSON으로 변환되어 저장한 리스트를 다시 JS의 object로 변환하고, **_forEach_**()를 사용해 **_paintList_**()를 각각의 리스트 요소에 대하여 반복 실행해준다.  
> **_JSON.stringify_**()와 **_JSON.parse_**()는 서로 반대의 기능이다!

### 4. 명언

- JS

```javascript
const quoteList = [
  {
    quote:
      "Without continuous personal development, you are now all that you will ever become and hell starts when the person you are meets the person you could have been.",
    author: "-Eli cohen-",
  },
];
```

> 명언을 랜덤으로 뽑아서 출력하는 기능을 하는 부분이다.  
> 명언과 author를 key로 사용하여 하나의 배열 값으로 묶어서 사용한다.  
> 위 코드에는 하나의 묶음만 존재하지만 실제 코드에서는 10개의 묶음을 넣어놨다.

```javascript
const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];

quotes.innerText = `${randomQuote.quote}`;
author.innerText = `${randomQuote.author}`;
```

> **_Math.random_**()을 통해 얻은 0~1 사이의 값(1은 미포함)에 리스트의 길이를 곱해서 0~10 사이의 값(10은 미포함)이 나오게 만들었다.  
> 이를 **_Math.floor_**()를 사용하여 0~9 사이의 정수가 나오도록 만들어줬고, 이를 인덱스로 사용하여 리스트의 명언들을 랜덤으로 지정했다.  
> 페이지를 새로고침 할 때 마다 JS파일이 다시 다운로드되므로, 그에 맞춰 계속해서 랜덤 숫자가 발생할 것이다.

### 5. 날씨와 기온, 위치 표시

- html

```html
<div class="weather">
  <div class="first">
    <i class="fas fa-temperature-high"></i>
    <span class="temp"></span>&deg;C
  </div>
  <div class="second">
    <i class="far fa-compass fa-spin"></i>
    <span class="location"></span>
  </div>
</div>
```

> 이 파트의 html에서 볼만한 것은 **&dec;C** 이다.  
> html 내에서 각종 기호들을 저런식의 정해진 문자를 입력하는 것으로 표현할 수 있다.  
> 나는 기온을 표시하고 싶었으므로 degree 단위를 표현하는 **&dec;** 를 사용했다.  
> 그 외에는 fontAwesome에서 지원하는 아이콘에 회전 애니메이션을 주기위해 fa-spin 클래스를 아이콘에 추가해줬다는 점을 눈여겨 볼만하다. 이 외에도 다양한 애니메이션이 있으므로 참고하자.

- JS

```javascript
navigator.geolocation.getCurrentPosition(forecast, sorry);
```

> 사용자의 현재 위치를 받는 동작을 하는 부분이다.  
> 만약 사용자의 위치를 받는 데 성공했으면 **forecast**가 실행되고, 실패하면 **sorry**가 실행된다.

```javascript
function forecast(position) {
  const temp = document.querySelector(".temp");
  const loc = document.querySelector(".location");
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      temp.innerText = `${data.weather[0].main}, ${data.main.temp}`;
      loc.innerText = `${data.name}, ${data.sys.country}`;
    });
}
```

> **_position.coords_** 를 사용해서 사용자의 위도와 경도를 저장했다.  
> 기상 API를 배포하는 사이트에서 해당 위도,경도의 값을 통해 기상 상태를 알려주는 API를 사용하여, 내가 받은 개인 API와 사용자의 위도, 경도를 입력해서 데이터를 받아온다.  
> **_fetch_**()는 HTTP 요청 전송 기능을 제공하는 JS 내장 라이브러리이다.  
> url에 저장한 기상 API를 통해 데이터를 얻어와서 **json**()을 통해 JSON으로 되어있는 데이터를 JS 객체로 변화시킨다.  
> 그렇게 얻은 데이터들 중 내가 사용하고자 하는 데이터들만 추출해서 html에 표시했다.

### 6. 무작위 배경화면

- JS

```javascript
const images = ["1.jpeg", "2.jpg", "3.jpeg", "4.jpeg"];

const randImg = images[Math.floor(Math.random() * images.length)];

const img = document.createElement("img");
img.src = `images/${randImg}`;

document.body.appendChild(img);
```

> 이 부분은 새로고침 할 때마다 배경화면을 무작위로 선택하는 기능을 한다.  
> 명언을 랜덤으로 뽑았던 것과 전혀 다를 것이 없는 코드이다.  
> 볼만한 것은 **img** 태그를 만들어서 **src**에 파일 경로를 입력해준 것,  
> 그렇게 만든 **img** 태그를 **body** 태그에 자식 요소로 넣어줘서 html에 표시될 수 있게 만든 것이 있다.  
> 가끔씩 태그를 만들어 놓고 정작 부모 요소에 연결하지 않은채로 왜 안되는지 이해를 못했었는데,  
> 다음부터는 조심해야겠다.

## 🎨 CSS

> CSS 파트에서는 크게 주목할 것은 없다. block 속성을 가지는 태그를 활용하여 위에서 아래로 차례대로 쌓아나갔기 때문이다.  
> 다만 나름대로 잘 이해가 안됐던 것들 중 기억해야할 것들은 있었다.

```css
.todoList input {
  display: none;
}

.todoList label {
  width: 11px;
  height: 11px;
  border-style: solid;
  border-color: black;
  border-width: 2px;
}

.todoList label:hover {
  cursor: pointer;
}

input[type="checkbox"]:checked + label {
  background: linear-gradient(
    45deg,
    black 25%,
    transparent 0,
    transparent 50%,
    black 0,
    black 75%,
    transparent 0
  );
}
```

> 나는 To-Do-List에서 체크를 통해 수행 완료한 목록을 확인하고자 했다.  
> 문제는 checkbox를 만드는 **input의 경우 CSS로 꾸미는 것이 불가능하다는 것이었다.** 그래서 **label이라는 태그를 사용**한다.  
> input을 지우고, for를 통해 input의 id와 label을 연결해준다. 가장 아래의 CSS 코드는 label과 input이 연결되어있으므로 checkbox를 클릭하면 저 코드를 실행한다는 뜻이다.

```css
img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: center no-repeat;
  z-index: -1;
}
```

> 배경화면의 경우 가장 마지막에 추가해줬기 때문에 이전에 생성된 모든 요소들이 가려져버렸다.  
> 이를 해결하기 위해서 간단하게 **z-index**를 사용해서 가장 뒤 쪽으로 보내주었다.

```css
@media screen and (max-width: 425px) {
  body {
    margin: 0;
    padding: 0;
  }

  .calendar {
    font-size: 1em;
  }
  .clock {
    font-size: 3em;
  }

  .helloUser {
    font-size: 2em;
  }
}
```

> 마지막으로는 화면 크기에 따른 미디어 쿼리를 적용해줬다.  
> 처음 이 웹을 만들었을 때 친구들에게 평가를 부탁했는데, 아무래도 다들 스마트폰으로 확인하다보니 화면이 깨지거나 내가 의도한 곳에 요소가 배치되지않는 현상이 발생해서 추가했다.  
> 기본 웹이 단순하기 때문에 크게 수정할 것은 없었고, font-size 정도를 수정하는 것으로 화면 최적화를 해줬다.
