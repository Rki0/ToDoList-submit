# π To-Do-List λ§λ€κΈ°!

---

## π₯³ Version (μ½λ λ³κ²½μ κ° ννΈ κ°μ₯ μλμ μ€λͺ μΆκ°)

### try2(now)

- UI κ°μ 
- μμλ€μ ν¬κΈ°λ₯Ό μΆμμμΌμ To-Do-List λΆλΆμ λνκ³ , λμμΈμ΄ λ μλ»λ³΄μ΄κ² ν¨.
- CSSμ μ½κ°μ λ³ν. JSλ λ³μλͺ, ν¨μλͺμ΄ λ¬λΌμ§ κ² μΈμλ ν° λ³ν μμ.

---

## π νμ© μ¬μ΄νΈ

μμ΄μ½ : https://fontawesome.com/  
κΈ°μ μν© : https://openweathermap.org/

---

## π€ ν¬ν¨λ κΈ°λ₯

### JSλ λ°λλΌ JSκ° μ¬μ©λμμ΅λλ€!

- λ μ§ νμ, μκ° νμ
- λ‘κ·ΈμΈ(μ΄λ¦ μλ ₯)μ°½ + μκ°μ λ°λ₯Έ μΈμ¬π
- ν  μΌ λͺ©λ‘ μλ ₯ μ°½ + ν  μΌ λ¦¬μ€νΈ
- λͺμΈ
- λ μ¨μ κΈ°μ¨, μμΉ νμ
- λ¬΄μμ λ°°κ²½νλ©΄

---

## π μ΄ μ½λ!

### 1. λ μ§ νμ, μκ° νμ

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

> μκ°μ κ΄λ ¨λ λ°μ΄ν°λ₯Ό κ°μ Έμ€κΈ° μν΄μλ **_Date_**()λ₯Ό μ¬μ©ν΄μΌνλ€.  
> λ³μμ μ΄λ₯Ό ν λΉνκ³ , Date κ°μ²΄μ λ΄μ₯ ν¨μλ€μ μ¬μ©νμλ€.  
> λλ 1λΆμ 1λ‘ νννλκ² μλλΌ 01λΆμΌλ‘ νννκ³  μΆμλ€.  
> κ°λ¨νκ² μ΄λ₯Ό ν΄κ²°ν  μ μλ κ²μ΄ **_padStart_**()μ΄λ€. μ μ½λμ μλ ₯ν κ²μ 2κ°μ λ¬Έμλ₯Ό κ°μ§λλ‘ λ³΄μ΄κ² νκ³ , λΉ μλ¦¬μλ 0μ μλ ₯νλΌλ κ²μ΄λ€.  
> λ¬Έμ λ **_get_**~μ ν΅ν΄ μ»μ κ°λ€μ΄ μ«μνμ΄λΌλ κ²μ΄λ€. **_padStart_**()λ₯Ό μ¬μ©νλ €λ©΄ λ¬Έμνμ΄μ΄μΌ νλ―λ‘ **_String_**()μ ν΅ν΄ λ¬ΈμνμΌλ‘ μ νν΄μ£Όμλ€.  
> μ΄λ₯Ό ν΅ν΄ 1λ‘ μΆλ ₯λλ κ²μ΄ 01λ‘ μΆλ ₯λκ² λλ€.

```javascript
function dateUpdate() {
  const date = new Date();
  const year = date.getFullYear();
  /**getmonth()λ 1μμ΄ 0μΌλ‘ νμλκΈ° λλ¬Έμ +1μ ν΄μ£Όλκ² λ§μ§λ§, monthListμμλ 1μ(Jan)μ indexκ° 0λ²μ΄λ―λ‘ +1μ μν΄λ λλ€. */
  const month = monthList[date.getMonth()];
  const day = String(date.getDate()).padStart(2, 0);
  calendar.innerText = `${month}.${day}, ${year}`;
}
```

> μ£Όμμ μ μ΄ λμλλ‘ **_getMonth_**()λ 1μμ΄λΌλ©΄ 0μ΄ μΆλ ₯μ΄ λλ€. λ°λΌμ +1μ ν΄μ€μΌ μ€μ  λ¬μ΄ λμ€κ² λλ€.  
> λλ μμ΄ μ½μλ‘ λ¬μ νννκ³  μΆμκΈ° λλ¬Έμ **monthList**λ°°μ΄μ μμ΄ μ½μλ€μ λ£μ΄λκ³ , μ»μ΄μ¨ λ¬μ μΈλ±μ€λ‘ μΌμμ λ¬Έμλ€μ κΊΌλ΄μΌλ€.

### 2. λ‘κ·ΈμΈ(μ΄λ¦ μλ ₯)μ°½ + μκ°μ λ°λ₯Έ μΈμ¬π

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

> formμΌλ‘ μΈν΄μ submitμ΄ λ°μν  κ²½μ° μλμΌλ‘ νμ΄μ§κ° μλ‘κ³ μΉ¨μ΄ λλ€. μ΄λ₯Ό λ§κΈ° μν΄ **_preventDefault_**()λ₯Ό μ¬μ©νμλ€.  
> inputμ μλ ₯ν valueλ₯Ό λ³μμ ν λΉνκ³  μ΄λ₯Ό localStorageμ μ μ₯νλ€.
> μ¬κΈ°μ μ htmlμμ loginFormμ hiddenμ λ―Έλ¦¬ μ€¬λμ§λ λμ€μ λμ¬ κ²μ΄λ€
> μλ¬΄νΌ μ¬κΈ°μλ loginFormμ HIDDEN ν΄λμ€λ₯Ό μΆκ°ν΄μ λ³΄μ΄μ§ μκ² ν΄μ€¬λ€λ κ²!
> HIDDEN ν΄λμ€λ CSSμμ display : noneμΌλ‘ μ€μ ν΄μ€¬λ€.

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

> λ‘κ·ΈμΈ ν μΈμ¬λ₯Ό νλ μ°½μ λ³΄μ¬μ£ΌκΈ° μν΄μ HIDDEN ν΄λμ€λ₯Ό μ§μμ€¬κ³ , **_Date_**()λ₯Ό μ΄μ©ν΄ μκ°μ λ°λΌ μ‘°κ±΄λ¬Έμ μ€μ νμ¬ λ€λ₯Έ μΈμ¬λ§μ λ³΄μ¬μ£Όλλ‘ νλ€.  
> νμ€νΈμ νμ€νΈ μ¬μ΄μ μμ΄μ½μ λ£κ³  μΆμ΄μ spanμ iλ₯Ό μ¬μ΄μ λκ³  λ λ² λ§λ€μ΄μ κ°μΈμ£Όμλ€. μ΄λ‘ μΈν΄μ μ½λκ° μλΉν κΈΈμ΄μ§ μ μ΄ μμ½λ€. λͺ¨λ  μ‘°κ±΄μμ κ°μ λ§μ λ°λ³΅νλ λΆλΆμ΄ λ§μΌλ―λ‘ μ΄λ μΆν μμ νμ¬ μ½λλ₯Ό μ€μΌ μ μμ κ²μΌλ‘ λ³΄μΈλ€.

```javascript
if (getId === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", login);
} else {
  sayHello(getId);
}
```

> μμμ μ loginFormμ HIDDEN ν΄λμ€κ° μΆκ°κ° λλμ§μ λν μλ¬Έμ΄ μ¬κΈ°μ νλ¦°λ€.  
> getIdμλ localStorageμμ userIdλ₯Ό λ½μμ€λλ°, λ§μ½ μ¬μ©μκ° μ΄λ¦μ μλ ₯νμ§ μμ μ΄κΈ° μνλΌλ©΄ μ΄ μ‘°κ±΄λ¬Έμ ν΅ν΄μ htmlμ μ‘΄μ¬νλ HIDDEN ν΄λμ€λ₯Ό μ§μλ²λ¦¬λ―λ‘ μ¬μ©μκ° loginFormμ λ³Ό μ μλ κ²μ΄λ€.

### 3. ν  μΌ λͺ©λ‘ μλ ₯ μ°½ + ν  μΌ λ¦¬μ€νΈ

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

> λ¦¬μ€νΈμ κ°λ€μ΄ λ€μ΄κ° λΉ λ°°μ΄μ λ§λ€μ΄μ£Όκ³ , λ¦¬μ€νΈμ valueμ idλ₯Ό objectλ‘ λ§λ€μ΄ ν λΉνλ€.  
> μ΄ ννΈλ λ°μ΄ν°μ ννλ₯Ό λ§λ€μ΄μ£Όλ μ­ν μ νλ€.

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

> μ΄ ννΈλ λ°°μ΄μ λ£μλ λ°μ΄ν°λ₯Ό νμ©νμ¬ λ¦¬μ€νΈλ₯Ό κ·Έλ €λ΄λ μ­ν μ νλ€.  
> μ΄λ―Έ μ‘΄μ¬νλ ul μμ li, span, input, label, buttonμ΄ λ€μ΄κ°λ€.  
> spanμλ λ΄κ° μ μ ν  μΌμ΄ λ€μ΄κ°λ€.
> inputμ checkboxλ₯Ό νννκΈ° μν μ¬μ  μμμΌλ‘ labelμ ν΅ν΄ κΎΈλ©°μ€ κ²μ΄λ―λ‘ νλ©΄ μμμλ **display:none**μ ν΄μ€λ€.  
> buttonμ λ¦¬μ€νΈλ₯Ό μ§μμ£Όλ κΈ°λ₯(**_removeList_**())μ ν  κ²μ΄λ€.  
> μ΄λ€μ **_appendChild_**()λ₯Ό ν΅ν΄ κ° μμμ μμμΌλ‘ λ£μ΄μ€λ€.  
> inputNumμ μ¬λ¬ κ°μ checkbox μ€μμ μ΄λ€ κ²μ΄ μ νλμλμ§ νμΈνκΈ° μν΄ κ°κ° id μ€μ μ ν΄μ£ΌκΈ° μν λ³μμ΄λ€. **_paintList_**()λ ν  μΌ μλ ₯λ§λ€ νΈμΆλλ ν¨μμ΄λ―λ‘, inputNumμ ν¨μ μΈλΆμ μ μΈν΄μ 0μΌλ‘ λ¦¬μλμ§μλλ‘ λ§μμ£Όμλ€.

```javascript
function removeList(event) {
  const remo = event.target.parentElement;
  remo.remove();
  todoList = todoList.filter((todo) => todo.id != parseInt(remo.id));
  storageList();
}
```

> μ΄ ννΈλ νΉμ  λ¦¬μ€νΈλ₯Ό λͺ©λ‘μμ μ­μ νλ κΈ°λ₯μ λ΄λΉνλ€.  
> clickν buttonμΈ **X**μ ν΄λΉνλ **parentElement**λ₯Ό μ§μ΄λ€.  
> μ¬κΈ°μ **parentElement**λ liμ΄λ€.  
> λ°λΌμ liμ **_appendChild_**()λ₯Ό ν΅ν΄ ν©μ³μ§ μμλ€λ μ λΆ ν¬ν¨λμ΄ μ­μ λλ€.  
> λ¨, νλ©΄ μμμλ§ μ§μμ§ κ²μ΄μ§ todoList λ°°μ΄μμ μ§μμ§κ² μλλΌμ μλ‘κ³ μΉ¨μ νλ€λ©΄ λ€μ λνλλ€.  
> **_filter_**()λ **true**μΈ κ°λ€λ§ λ¨κ²¨λκ³  **false**μΈ κ²λ€μ μ λΆ μμ μ£Όλ ν¨μλ‘, **_paintList_**()μμ μ€μ νλ liμ idμ remoμμ μ§μ λ liμ idμ μΌμΉ μ¬λΆλ₯Ό νλ¨νμ¬ μ­μ νλ€.  
> μ¬κΈ°μλ μΌμΉνλ©΄ **false**μ΄λ―λ‘ μ­μ νλ €κ³  λλ λ λ΄μ©μ΄ μ¬λΌμ§ κ²μ΄λ€. μ΄λ₯Ό ν΅ν΄ μμ ν todoList λ°°μ΄μμ μ­μ λκ³ , μ΄λ κ² λ³κ²½μ΄ μκΈ΄ κ°μ **_storageList_**()λ₯Ό ν΅ν΄ μ μ₯νλ€.  
> **_parseInt_**()λ remoμ idκ° stringνμ΄λ―λ‘ μ΄λ₯Ό μ«μνμΌλ‘ λ°κΏμ€ κ²μ΄λ€. μ΄ μ½λμμλ ν° μλ―Έκ° μκ² μ§λ§ μ‘°κΈμ΄λΌλ ν° κ·λͺ¨μ νλ‘μ νΈλ₯Ό νλ€λ©΄ νμλ λ§€μ° μ€μν  κ²μ΄λ―λ‘ μκ³  λμ΄κ°λκ² μ’μ κ² κ°λ€.

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

> **_storageList_**()λ λ¦¬μ€νΈμ κ°λ€μ localStorageμ μ μ₯νλ κΈ°λ₯μ νλ€.  
> μμ  μ½λμμ λ¦¬μ€νΈμ λ€μ΄κ° κ°λ€μ objectλ‘ λ§λ€μ΄μ€¬λ€. μ΄λ₯Ό localStorageμ μ μ₯νλ©΄ μ λλ‘ λ³΄μ΄μ§μκ³  [object, object] μ²λΌ μ μ₯λλ€.  
> objectμ keyμ valueκ° λ³΄μ΄λλ‘ μ μ₯λμ΄μΌνλ―λ‘, **_JSON.stringify_**()λ₯Ό ν΅ν΄ JS κ°μ JSON λ¬Έμμ΄λ‘ λ³νν΄μ μ μ₯ν΄μ£Όμλ€.  
> μ΄λ κ² μ μ₯λ κ°λ€μ **_getItem_**()μ ν΅ν΄ λ€μ μ»μ΄μ£Όκ³ , μ»μ΄μ¨ κ°μ΄ **null**μ΄ μλλΌλ©΄(λΉμ΄μμ§ μλ€λ©΄) λ€μ νλ©΄μ μλ ₯ν΄μ€λ€. μ΄λ μλ‘κ³ μΉ¨μ νλλΌλ λ΄κ° μλ ₯ν κ²λ€μ΄ κ·Έλλ‘ μΆλ ₯λλλ‘ ν΄μ€λ€.  
> μ¬κΈ°μλ **_JSON.parse_**()λ₯Ό ν΅ν΄ JSONμΌλ‘ λ³νλμ΄ μ μ₯ν λ¦¬μ€νΈλ₯Ό λ€μ JSμ objectλ‘ λ³ννκ³ , **_forEach_**()λ₯Ό μ¬μ©ν΄ **_paintList_**()λ₯Ό κ°κ°μ λ¦¬μ€νΈ μμμ λνμ¬ λ°λ³΅ μ€νν΄μ€λ€.  
> **_JSON.stringify_**()μ **_JSON.parse_**()λ μλ‘ λ°λμ κΈ°λ₯μ΄λ€!

### 4. λͺμΈ

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

> λͺμΈμ λλ€μΌλ‘ λ½μμ μΆλ ₯νλ κΈ°λ₯μ νλ λΆλΆμ΄λ€.  
> λͺμΈκ³Ό authorλ₯Ό keyλ‘ μ¬μ©νμ¬ νλμ λ°°μ΄ κ°μΌλ‘ λ¬Άμ΄μ μ¬μ©νλ€.  
> μ μ½λμλ νλμ λ¬Άμλ§ μ‘΄μ¬νμ§λ§ μ€μ  μ½λμμλ 10κ°μ λ¬Άμμ λ£μ΄λ¨λ€.

```javascript
const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];

quotes.innerText = `${randomQuote.quote}`;
author.innerText = `${randomQuote.author}`;
```

> **_Math.random_**()μ ν΅ν΄ μ»μ 0~1 μ¬μ΄μ κ°(1μ λ―Έν¬ν¨)μ λ¦¬μ€νΈμ κΈΈμ΄λ₯Ό κ³±ν΄μ 0~10 μ¬μ΄μ κ°(10μ λ―Έν¬ν¨)μ΄ λμ€κ² λ§λ€μλ€.  
> μ΄λ₯Ό **_Math.floor_**()λ₯Ό μ¬μ©νμ¬ 0~9 μ¬μ΄μ μ μκ° λμ€λλ‘ λ§λ€μ΄μ€¬κ³ , μ΄λ₯Ό μΈλ±μ€λ‘ μ¬μ©νμ¬ λ¦¬μ€νΈμ λͺμΈλ€μ λλ€μΌλ‘ μ§μ νλ€.  
> νμ΄μ§λ₯Ό μλ‘κ³ μΉ¨ ν  λ λ§λ€ JSνμΌμ΄ λ€μ λ€μ΄λ‘λλλ―λ‘, κ·Έμ λ§μΆ° κ³μν΄μ λλ€ μ«μκ° λ°μν  κ²μ΄λ€.

### 5. λ μ¨μ κΈ°μ¨, μμΉ νμ

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

> μ΄ ννΈμ htmlμμ λ³Όλ§ν κ²μ **&dec;C** μ΄λ€.  
> html λ΄μμ κ°μ’ κΈ°νΈλ€μ μ λ°μμ μ ν΄μ§ λ¬Έμλ₯Ό μλ ₯νλ κ²μΌλ‘ ννν  μ μλ€.  
> λλ κΈ°μ¨μ νμνκ³  μΆμμΌλ―λ‘ degree λ¨μλ₯Ό νννλ **&dec;** λ₯Ό μ¬μ©νλ€.  
> κ·Έ μΈμλ fontAwesomeμμ μ§μνλ μμ΄μ½μ νμ  μ λλ©μ΄μμ μ£ΌκΈ°μν΄ fa-spin ν΄λμ€λ₯Ό μμ΄μ½μ μΆκ°ν΄μ€¬λ€λ μ μ λμ¬κ²¨ λ³Όλ§νλ€. μ΄ μΈμλ λ€μν μ λλ©μ΄μμ΄ μμΌλ―λ‘ μ°Έκ³ νμ.

- JS

```javascript
navigator.geolocation.getCurrentPosition(forecast, sorry);
```

> μ¬μ©μμ νμ¬ μμΉλ₯Ό λ°λ λμμ νλ λΆλΆμ΄λ€.  
> λ§μ½ μ¬μ©μμ μμΉλ₯Ό λ°λ λ° μ±κ³΅νμΌλ©΄ **forecast**κ° μ€νλκ³ , μ€ν¨νλ©΄ **sorry**κ° μ€νλλ€.

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

> **_position.coords_** λ₯Ό μ¬μ©ν΄μ μ¬μ©μμ μλμ κ²½λλ₯Ό μ μ₯νλ€.  
> κΈ°μ APIλ₯Ό λ°°ν¬νλ μ¬μ΄νΈμμ ν΄λΉ μλ,κ²½λμ κ°μ ν΅ν΄ κΈ°μ μνλ₯Ό μλ €μ£Όλ APIλ₯Ό μ¬μ©νμ¬, λ΄κ° λ°μ κ°μΈ APIμ μ¬μ©μμ μλ, κ²½λλ₯Ό μλ ₯ν΄μ λ°μ΄ν°λ₯Ό λ°μμ¨λ€.  
> **_fetch_**()λ HTTP μμ²­ μ μ‘ κΈ°λ₯μ μ κ³΅νλ JS λ΄μ₯ λΌμ΄λΈλ¬λ¦¬μ΄λ€.  
> urlμ μ μ₯ν κΈ°μ APIλ₯Ό ν΅ν΄ λ°μ΄ν°λ₯Ό μ»μ΄μμ **json**()μ ν΅ν΄ JSONμΌλ‘ λμ΄μλ λ°μ΄ν°λ₯Ό JS κ°μ²΄λ‘ λ³νμν¨λ€.  
> κ·Έλ κ² μ»μ λ°μ΄ν°λ€ μ€ λ΄κ° μ¬μ©νκ³ μ νλ λ°μ΄ν°λ€λ§ μΆμΆν΄μ htmlμ νμνλ€.

### 6. λ¬΄μμ λ°°κ²½νλ©΄

- JS

```javascript
const images = ["1.jpeg", "2.jpg", "3.jpeg", "4.jpeg"];

const randImg = images[Math.floor(Math.random() * images.length)];

const img = document.createElement("img");
img.src = `images/${randImg}`;

document.body.appendChild(img);
```

> μ΄ λΆλΆμ μλ‘κ³ μΉ¨ ν  λλ§λ€ λ°°κ²½νλ©΄μ λ¬΄μμλ‘ μ ννλ κΈ°λ₯μ νλ€.  
> λͺμΈμ λλ€μΌλ‘ λ½μλ κ²κ³Ό μ ν λ€λ₯Ό κ²μ΄ μλ μ½λμ΄λ€.  
> λ³Όλ§ν κ²μ **img** νκ·Έλ₯Ό λ§λ€μ΄μ **src**μ νμΌ κ²½λ‘λ₯Ό μλ ₯ν΄μ€ κ²,  
> κ·Έλ κ² λ§λ  **img** νκ·Έλ₯Ό **body** νκ·Έμ μμ μμλ‘ λ£μ΄μ€μ htmlμ νμλ  μ μκ² λ§λ  κ²μ΄ μλ€.  
> κ°λμ© νκ·Έλ₯Ό λ§λ€μ΄ λκ³  μ μ λΆλͺ¨ μμμ μ°κ²°νμ§ μμμ±λ‘ μ μλλμ§ μ΄ν΄λ₯Ό λͺ»νμλλ°,  
> λ€μλΆν°λ μ‘°μ¬ν΄μΌκ² λ€.

## π¨ CSS (Ver.try2 update)

> CSS ννΈμμλ ν¬κ² μ£Όλͺ©ν  κ²μ μλ€. block μμ±μ κ°μ§λ νκ·Έλ₯Ό νμ©νμ¬ μμμ μλλ‘ μ°¨λ‘λλ‘ μμλκ°κΈ° λλ¬Έμ΄λ€.  
> λ€λ§ λλ¦λλ‘ μ μ΄ν΄κ° μλλ κ²λ€ μ€ κΈ°μ΅ν΄μΌν  κ²λ€μ μμλ€.

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

> λλ To-Do-Listμμ μ²΄ν¬λ₯Ό ν΅ν΄ μν μλ£ν λͺ©λ‘μ νμΈνκ³ μ νλ€.  
> λ¬Έμ λ checkboxλ₯Ό λ§λλ **inputμ κ²½μ° CSSλ‘ κΎΈλ―Έλ κ²μ΄ λΆκ°λ₯νλ€λ κ²μ΄μλ€.** κ·Έλμ **labelμ΄λΌλ νκ·Έλ₯Ό μ¬μ©**νλ€.  
> inputμ μ§μ°κ³ , forλ₯Ό ν΅ν΄ inputμ idμ labelμ μ°κ²°ν΄μ€λ€. κ°μ₯ μλμ CSS μ½λλ labelκ³Ό inputμ΄ μ°κ²°λμ΄μμΌλ―λ‘ checkboxλ₯Ό ν΄λ¦­νλ©΄ μ  μ½λλ₯Ό μ€ννλ€λ λ»μ΄λ€.

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

> λ°°κ²½νλ©΄μ κ²½μ° κ°μ₯ λ§μ§λ§μ μΆκ°ν΄μ€¬κΈ° λλ¬Έμ μ΄μ μ μμ±λ λͺ¨λ  μμλ€μ΄ κ°λ €μ Έλ²λ Έλ€.  
> μ΄λ₯Ό ν΄κ²°νκΈ° μν΄μ κ°λ¨νκ² **z-index**λ₯Ό μ¬μ©ν΄μ κ°μ₯ λ€ μͺ½μΌλ‘ λ³΄λ΄μ£Όμλ€.

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

> λ§μ§λ§μΌλ‘λ νλ©΄ ν¬κΈ°μ λ°λ₯Έ λ―Έλμ΄ μΏΌλ¦¬λ₯Ό μ μ©ν΄μ€¬λ€.  
> μ²μ μ΄ μΉμ λ§λ€μμ λ μΉκ΅¬λ€μκ² νκ°λ₯Ό λΆννλλ°, μλ¬΄λλ λ€λ€ μ€λ§νΈν°μΌλ‘ νμΈνλ€λ³΄λ νλ©΄μ΄ κΉ¨μ§κ±°λ λ΄κ° μλν κ³³μ μμκ° λ°°μΉλμ§μλ νμμ΄ λ°μν΄μ μΆκ°νλ€.  
> κΈ°λ³Έ μΉμ΄ λ¨μνκΈ° λλ¬Έμ ν¬κ² μμ ν  κ²μ μμκ³ , font-size μ λλ₯Ό μμ νλ κ²μΌλ‘ νλ©΄ μ΅μ νλ₯Ό ν΄μ€¬λ€.  
> μ μ©λ νλ©΄μ μλμ κ°λ€.

<img width="426" alt="αα³αα³αα΅α«αα£αΊ 2022-02-02 αα©αα? 8 53 33" src="https://user-images.githubusercontent.com/86224851/152628242-9ce8bacd-0017-4067-8b7c-50c503d510d8.png">

### try2μμ λ³Όλ§ ν λΆλΆ

```css
display: flex;
flex-direction: column;
align-items: center;
```

> try1μμλ μμλ₯Ό κ°μ΄λ° μ λ ¬νκΈ° μν΄μ **display: flex** μ **justify-content: center** λ₯Ό νμ©νλ€.  
> κ·Έλ¬λ try2μμλ **flex-direction: column** μΌλ‘ μ€μ ν΄μ, λ©μΈ μΆμ λ°©ν₯μ λ°κΎΌ λ€ **align-items: center** λ₯Ό μ¬μ©ν΄μ κ°μ΄λ° μ λ ¬μ ν΄μ€¬λ€.
