# 🗓 To-Do-List 만들기!

---

## 🤔 포함되는 기능

- 날짜 표시, 시간 표시
- 로그인(이름 입력)창 + 시간에 따른 인사👋
- 할 일 목록 입력 창
- 할 일 리스트
- 명언
- 날씨와 기온, 위치 표시

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

> 시간에 관련된 데이터를 가져오기 위해서는 **Date()**를 사용해야한다.  
> 변수에 이를 할당하고, Date 객체의 내장 함수들을 사용하였다.  
> 나는 1분을 1로 표현하는게 아니라 01분으로 표현하고 싶었다.  
> 간단하게 이를 해결할 수 있는 것이 **padStart()**이다. 위 코드에 입력한 것은 2개의 문자를 가지도록 보이게 하고, 빈 자리에는 0을 입력하라는 것이다.  
> 문제는 **get~()**을 통해 얻은 값들이 숫자형이라는 것이다. **padStart()**를 사용하려면 문자형이어야 하므로 **String()**을 통해 문자형으로 전환해주었다.  
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

> 주석에 적어 놓은대로 **getMonth()**는 1월이라면 0이 출력이 된다. 따라서 +1을 해줘야 실제 달이 나오게 된다.  
> 나는 영어 약자로 달을 표현하고 싶었기 때문에 **monthList**배열에 영어 약자들을 넣어놓고, 얻어온 달을 인덱스로 삼아서 문자들을 꺼내썼다.

### 2. 로그인(이름 입력)창 + 시간에 따른 인사👋

- JS

```javascript

```
