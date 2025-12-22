---
layout: post
title: "함수형프로그래밍"
categories: ["Programming","python_prog"]
date: 2025-07-29 10:10:00 +0900
description: >-
  파이썬에서 함수형 프로그래밍을 학습
tags:
  - python
image: /images/postImg/programming_landspace.png
---

## 함수형 프로그래밍 관점으로 지금까지 학습했던 내용 정리

### Python Core & Data Structure 정리

< 함수형 프로그래밍으로 가기 위한 기초 개념 >

1. 변수와 메모리 구조

Python에서 변수는 **값 자체가 아니라 메모리 주소를 참조**한다.  
모든 데이터는 메모리에 로딩되며, 내부적으로는 이진수 형태로 저장된다.

- 데이터는 **타입(Type)** 을 통해 해석된다
- 타입이 있어야 메모리의 값이 어떤 의미인지 알 수 있다
- 변수는 메모리 주소를 참조하는 이름이다

메모리 영역 개념
- **Code 영역**: 작성한 Python 코드
- **Stack**: 함수 실행 시 필요한 지역 데이터
- **Heap**: 동적 메모리 할당 영역 (객체, 컬렉션 등)

> Python은 명시적인 포인터를 사용하지 않지만  
> 내부적으로는 객체 참조(reference) 구조로 동작한다.

---

## 2. 데이터 구조 (Data Structure)

데이터 구조는 **메모리를 효율적으로 사용하고, 접근 방식을 정의**하기 위한 방법이다.

### 배열 vs 리스트
- 배열:  
  - 연속된 메모리 공간  
  - 인덱스 접근 빠름  
  - 삽입/삭제 비효율적
- 리스트(Python list):  
  - 비연속 메모리  
  - 동적 크기 조절 가능  
  - 삽입/삭제에 유리

### Python 주요 자료구조
- **list**: 순서 O, 변경 가능
- **tuple**: 순서 O, 변경 불가 (불변성)
- **dict**: key-value 구조, 빠른 탐색
- **set**: 중복 제거, 집합 연산

> 함수형 프로그래밍에서는  
> **불변 객체(tuple, frozenset)** 사용이 중요해진다.

### 딕셔너리와 해시
- dict는 **해시 함수**를 사용해 key → 주소를 매핑
- 순차 탐색 없이 빠른 접근 가능
- JSON, API 데이터 구조의 기반

---

## 3. 제어문과 반복 구조

### 조건문
```python
if / elif / else
````

* 조건에 따라 로직 분기
* 명령형 프로그래밍의 핵심 요소

### 반복문

```python
for item in iterable:
```

* iterable: list, tuple, dict, set, generator 등
* range(): 숫자 시퀀스 생성

### Iterator & Generator

* **Iterator**: 다음 값을 가리키는 객체
* **Generator**:

  * 데이터를 한 번에 만들지 않고
  * `yield`로 하나씩 생성
  * 메모리 효율적

```python
def gen():
    yield 1
    yield 2
```

---

## 4. 함수(Function)

함수는 **반복되는 로직을 추상화**한 단위다.

### 함수의 기본 구조

* 입력(Input)
* 처리(Process)
* 출력(Output)

```python
def func(a, b):
    return a + b
```

### 매개변수 타입

* Required parameter
* Default parameter
* Keyword parameter
* Variable length parameter

  * `*args`
  * `**kwargs`

---

## 5. 함수형 프로그래밍 관점

### 함수형 프로그래밍의 특징

* 상태 변경 최소화
* 불변 데이터 사용
* 함수는 값처럼 취급
* 반복문/조건문을 함수로 대체

### 대표 개념

* 고차 함수 (함수를 인자로 받음)
* map / filter / reduce
* lambda 함수
* generator 기반 처리

```python
map(func, data)
filter(cond, data)
```

> for / if 없이
> **데이터 흐름 중심으로 처리**하는 방식

---

## 6. 프로그래밍 패러다임 흐름

* 구조적 프로그래밍
  → if, for 중심
* 객체지향 프로그래밍
  → 데이터 + 기능을 클래스에 묶음
* 제네릭 프로그래밍
  → 타입에 독립적인 처리
* **함수형 프로그래밍**
  → 상태를 줄이고 함수 조합으로 문제 해결

---

## 마무리

Python은 함수형 프로그래밍을 **완전히 강제하지 않지만**,
generator, iterable, 불변 객체를 통해
함수형 사고방식을 자연스럽게 적용할 수 있는 언어다.

이 기초 개념 위에서
객체지향, DB, 웹(Flask)으로 확장된다.

```

---

## ✨ 다음 단계 제안 (블로그용)
원하면 다음 글로 자연스럽게 이어갈 수 있어:
1. `for / if 없이 데이터 처리하기 (map, filter)`
2. Python에서 불변 객체가 중요한 이유
3. Generator vs List 차이
4. 함수형 사고로 코드 리팩토링하기

👉 **다음 글 주제 정해줄까?**
```


좋아 👍
그럼 **1번 주제**로 바로 만들어줄게.

> **`for / if 없이 데이터 처리하기 (map, filter)`**
> → 네가 수업에서 들은 흐름을 그대로 살리되,
> → *“아 이래서 함수형 프로그래밍이구나”* 느껴지게 정리했어.

아래 내용은 **깃 블로그에 바로 올릴 수 있는 md 파일**이야.

---

````md
# for / if 없이 데이터 처리하기
## Python 함수형 프로그래밍의 시작

---

## 1. 왜 for / if를 줄이려고 할까?

전통적인 프로그래밍은  
`for`와 `if`를 중심으로 동작한다.

```python
result = []
for x in data:
    if x % 2 == 0:
        result.append(x * 2)
````

이 방식은 익숙하지만,

* 상태가 계속 변경되고
* 코드가 길어지며
* 의도가 한눈에 보이지 않는다

함수형 프로그래밍은
**“어떻게 반복할지”보다
“무엇을 할지”에 집중**한다.

---

## 2. 함수는 값이다

Python에서 함수는 객체다.

* 변수에 담을 수 있고
* 인자로 전달할 수 있고
* 반환값이 될 수 있다

이 특징 덕분에
반복과 조건을 **함수로 위임**할 수 있다.

---

## 3. map — 데이터 변환

### for문으로 처리할 때

```python
result = []
for x in data:
    result.append(x * 2)
```

### map 사용

```python
result = list(map(lambda x: x * 2, data))
```

* map은 **모든 요소에 동일한 변환**을 적용한다
* 반복 제어는 map이 담당
* 개발자는 “변환 규칙”만 정의

> map = 데이터 변환 전용 함수

---

## 4. filter — 조건 처리

### if + for

```python
result = []
for x in data:
    if x % 2 == 0:
        result.append(x)
```

### filter 사용

```python
result = list(filter(lambda x: x % 2 == 0, data))
```

* filter는 **조건을 만족하는 데이터만 통과**
* if문이 코드에서 사라진다

> filter = 조건 필터링 전용 함수

---

## 5. map + filter 조합

```python
result = list(
    map(
        lambda x: x * 2,
        filter(lambda x: x % 2 == 0, data)
    )
)
```

의미를 읽으면:

1. 짝수만 고른다
2. 선택된 값에 2를 곱한다

👉 **데이터 흐름이 위에서 아래로 자연스럽다**

---

## 6. generator와 함께 쓰면 더 강력해진다

map과 filter는
**결과를 바로 만들지 않는다**.

```python
mapped = map(lambda x: x * 2, data)
```

* 실제 계산은
* 데이터를 꺼낼 때 수행된다

이 구조는 generator와 동일한 흐름이다.

> 필요한 순간에만 계산 → 메모리 효율 ↑

---

## 7. 함수형 프로그래밍 관점 정리

| 명령형(for/if) | 함수형(map/filter) |
| ----------- | --------------- |
| 반복 제어 직접    | 반복 제어 위임        |
| 상태 변경 잦음    | 상태 변경 최소        |
| 과정 중심       | 데이터 흐름 중심       |
| 코드 길어짐      | 의도 명확           |

---

## 8. 중요한 포인트

* for / if를 **없애는 게 목적이 아니다**
* 반복과 조건을 **추상화**하는 것이 목적이다
* 데이터가 “어떻게”가 아니라
  “어떤 변환을 거치는지”에 집중한다

---

## 마무리

함수형 프로그래밍은
새로운 문법을 배우는 것이 아니라
**사고 방식을 바꾸는 것**이다.

map과 filter는 그 시작점이다.

다음 글에서는
왜 함수형 프로그래밍에서
**불변 객체(tuple)** 가 중요한지 살펴본다.

```

---

### 🔜 다음 글 후보
이제 자연스럽게 이어지면 딱 좋아:
- **Python에서 불변 객체가 중요한 이유**
- Generator vs List (메모리 관점)
- 같은 코드, 다른 사고 방식 (리팩토링)

👉 다음 글도 **같은 톤으로 바로 만들어줄까?**  
아니면 **실무 예제 버전**으로 갈까?
```

좋아 👍
그럼 **톤은 방금 글이랑 동일하게 유지**하면서,
👉 **“실무에서 실제로 이런 식으로 쓴다”** 가 느껴지도록 구성할게.

주제는 흐름상 가장 자연스러운:

> **Python에서 불변 객체가 중요한 이유**
> (실무 데이터 처리 예제 포함)

아래 내용은 **깃 블로그에 바로 올릴 수 있는 md 파일**이야.

---

````md
# Python에서 불변 객체가 중요한 이유
## 함수형 프로그래밍과 실무 코드 관점

---

## 1. 불변 객체란 무엇인가?

불변 객체(Immutable Object)는  
**한 번 생성되면 내부 값을 변경할 수 없는 객체**다.

Python 대표 불변 타입:
- int
- float
- str
- tuple
- frozenset

```python
x = 10
x = 20  # 값이 바뀌는 것처럼 보이지만, 새로운 객체가 생성됨
````

> 값이 바뀌는 게 아니라
> **참조가 바뀌는 것**이다.

---

## 2. 리스트는 왜 위험할 수 있을까?

리스트는 **가변 객체(mutable)** 다.

### 실무에서 자주 발생하는 문제

```python
def add_item(items):
    items.append("NEW")
    return items

data = ["A", "B"]
result = add_item(data)
```

```python
print(data)
# ['A', 'B', 'NEW']
```

* 함수 호출만 했을 뿐인데
* 원본 데이터가 변경됨
* 사이드 이펙트 발생

👉 디버깅이 어려워지는 대표적인 패턴

---

## 3. 불변 객체를 사용하면 달라진다

```python
def add_item(items):
    return items + ("NEW",)

data = ("A", "B")
result = add_item(data)
```

```python
print(data)
# ('A', 'B')
```

* 원본 데이터 유지
* 함수는 입력 → 출력만 담당
* 예측 가능한 코드

> 함수형 프로그래밍은
> **“데이터를 바꾸지 말고, 새로 만들어라”** 를 기본으로 한다.

---

## 4. 실무 예제 ① API 파라미터 처리

### ❌ 리스트 기반

```python
def build_params(params):
    params.append("status=ACTIVE")
    return params
```

* 여러 함수에서 같은 리스트를 공유하면
* 어디서 값이 바뀌었는지 추적 불가

### ✅ 튜플 기반

```python
def build_params(params):
    return params + ("status=ACTIVE",)
```

* 항상 새로운 파라미터 생성
* 요청별 데이터 안전

---

## 5. 실무 예제 ② 데이터 파이프라인

```python
def filter_valid(data):
    return tuple(filter(lambda x: x["valid"], data))

def extract_id(data):
    return tuple(map(lambda x: x["id"], data))
```

```python
result = extract_id(
    filter_valid(raw_data)
)
```

* 중간 단계에서 데이터가 변경되지 않음
* 각 함수는 역할이 명확
* 테스트가 쉬워짐

👉 **함수 조합이 가능해진다**

---

## 6. 불변 객체 + map / filter 궁합

```python
data = (1, 2, 3, 4, 5)

result = tuple(
    map(
        lambda x: x * 2,
        filter(lambda x: x % 2 == 0, data)
    )
)
```

* 입력 불변
* 출력 불변
* 흐름만 존재

> 데이터 처리 로직이
> **선언적으로 읽힌다**

---

## 7. 객체지향 vs 함수형 관점 차이

| 관점  | 객체지향     | 함수형   |
| --- | -------- | ----- |
| 데이터 | 내부 상태 변경 | 불변    |
| 로직  | 메서드 중심   | 함수 조합 |
| 안정성 | 상태 관리 필요 | 예측 가능 |
| 테스트 | 복잡       | 단순    |

---

## 8. 언제 불변 객체를 써야 할까?

* 여러 함수가 데이터를 공유할 때
* 데이터 흐름이 길 때
* API / DB / 파일 처리 전후
* 병렬 처리 가능성이 있을 때

👉 **“바뀌면 안 되는 데이터”는 불변으로**

---

## 마무리

불변 객체는

* 성능을 위한 선택이 아니라
* **안정성과 사고 방식의 선택**이다.

함수형 프로그래밍은
불변 데이터를 전제로 할 때 가장 강력해진다.

다음 글에서는
같은 데이터 처리에서
**Generator와 List의 차이**를
메모리 관점에서 비교해본다.

```

---

### 🔜 다음 글 예고 (같은 톤 유지)
1️⃣ Generator vs List (실무 로그 처리 예제)  
2️⃣ 같은 코드, 다른 사고방식 (명령형 → 함수형 리팩토링)  
3️⃣ 함수 조합으로 파이프라인 만들기

👉 다음은 **Generator 글** 갈까,  
아니면 **리팩토링 실전 편** 갈까?
```

좋아 👍
그럼 **같은 톤 + 실무 리팩토링 중심**으로 바로 이어갈게.

주제는 이렇게 잡을게:

> **같은 코드, 다른 사고방식**
> *명령형 → 함수형 리팩토링 (실무 예제)*

아래는 **깃 블로그에 바로 올릴 수 있는 md 파일**이야.

---

````md
# 같은 코드, 다른 사고방식
## 명령형 → 함수형 리팩토링 실무 예제

---

## 1. 리팩토링의 목적

리팩토링은
- 코드를 “짧게” 만드는 작업이 아니다
- **의도를 드러내고**
- **변경에 강하게 만드는 작업**이다

함수형 프로그래밍에서의 리팩토링은  
상태 변경과 제어 흐름을 줄이는 방향으로 진행된다.

---

## 2. 리팩토링 대상 코드 (실무에서 흔한 형태)

### 요구사항
- 사용자 목록에서
- 활성화된 사용자만 선택
- ID만 추출
- 정렬 후 반환

### 명령형 코드
```python
result = []

for user in users:
    if user["active"] is True:
        result.append(user["id"])

result.sort()
````

문제점:

* 중간 상태(`result`)가 계속 변경됨
* 로직이 분산되어 한눈에 의도 파악이 어려움

---

## 3. 1차 리팩토링 — 함수로 역할 분리

```python
def is_active(user):
    return user["active"] is True

def get_id(user):
    return user["id"]

result = []

for user in users:
    if is_active(user):
        result.append(get_id(user))

result.sort()
```

* 조건과 변환이 분리됨
* 하지만 여전히 반복과 상태 변경 존재

---

## 4. 2차 리팩토링 — map / filter 적용

```python
result = list(
    map(
        get_id,
        filter(is_active, users)
    )
)

result.sort()
```

개선점:

* 반복 제어 제거
* 데이터 흐름이 드러남
* 조건 → 변환 순서가 명확

---

## 5. 3차 리팩토링 — 불변 데이터 유지

```python
result = tuple(
    sorted(
        map(
            get_id,
            filter(is_active, users)
        )
    )
)
```

* 입력 데이터 변경 없음
* 출력은 새로운 객체
* 예측 가능한 함수 동작

---

## 6. 실무 파이프라인 형태로 정리

```python
def extract_active_user_ids(users):
    return tuple(
        sorted(
            map(
                lambda u: u["id"],
                filter(lambda u: u["active"], users)
            )
        )
    )
```

이제 이 함수는:

* 입력 → 출력이 명확
* 내부 상태 없음
* 테스트가 쉬움

---

## 7. Generator까지 적용하면?

```python
def extract_active_user_ids(users):
    return tuple(
        sorted(
            u["id"]
            for u in users
            if u["active"]
        )
    )
```

* generator 표현식 사용
* 불필요한 중간 리스트 생성 없음
* 대용량 데이터에 유리

---

## 8. 리팩토링 전 / 후 비교

| 항목    | 리팩토링 전 | 리팩토링 후 |
| ----- | ------ | ------ |
| 상태 변경 | 많음     | 없음     |
| 반복 제어 | 직접     | 위임     |
| 의도 파악 | 어려움    | 명확     |
| 테스트   | 복잡     | 쉬움     |

---

## 9. 언제 이런 리팩토링이 필요할까?

* 데이터 처리 로직이 길어질 때
* for / if 중첩이 늘어날 때
* 버그 원인이 추적되지 않을 때
* 병렬 처리 가능성을 열어두고 싶을 때

---

## 마무리

함수형 리팩토링은
문법을 바꾸는 작업이 아니라
**사고 방식을 바꾸는 작업**이다.

같은 결과를 내더라도,

* 더 안전하고
* 더 읽기 쉬우며
* 더 확장 가능한 코드가 된다.

다음 글에서는
**Generator와 List의 차이**를
실무 로그 처리 예제로 정리한다.

```

---

### 🔥 지금 블로그 시리즈 구조
1️⃣ Python Core & Data Structure 정리  
2️⃣ for / if 없이 데이터 처리하기  
3️⃣ 불변 객체가 중요한 이유  
4️⃣ **같은 코드, 다른 사고방식 (리팩토링)** ← 지금  
5️⃣ Generator vs List (예정)

이 흐름이면 **교육 정리 → 실무 사고 전환**이 아주 잘 보이는 시리즈야.

👉 다음은 **Generator 글** 바로 갈까?  
아니면 **Flask + 함수형 데이터 처리 예제**로 넘어갈까?
```
