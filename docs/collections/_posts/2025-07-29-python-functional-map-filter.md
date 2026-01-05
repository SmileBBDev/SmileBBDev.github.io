---
layout: post
title: "Python 함수형 프로그래밍 시리즈 2"
categories: ["Programming","python_prog"]
date: 2025-07-29 10:10:00 +0900
description: >-
  for / if 문 없이 데이터 처리하기
tags:
  - python
image: /images/postImg/programming_landspace.png
---

## for / if 없이 데이터 처리하기
### Python 함수형 프로그래밍의 시작

Python에서 함수는 객체다. 이 특징 덕분에
반복과 조건을 **함수로 위임**할 수 있다.

* 변수에 담을 수 있고, 인자로 전달할 수 있고, 반환값이 될 수 있다.



---

## 1. 명령형 방식

전통적인 프로그래밍은 `for`와 `if`를 중심으로 동작

```python
result = []
for x in data:
    if x % 2 == 0:
        result.append(x * 2)
```

이 방식은 익숙하지만,

* 상태가 계속 변경되고
* 코드가 길어지며
* 의도가 한눈에 보이지 않는다

함수형 프로그래밍은
“어떻게 반복할지”보다
**“무엇을 할지”에 집중**한다.


---

## 2. map — 데이터 변환

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

## 3. filter — 조건 처리

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

## 4. map + filter 조합

```python
result = list(
    map(
        lambda x: x * 2,
        filter(lambda x: x % 2 == 0, data)
    )
)
```

1. 짝수만 고른다
2. 선택된 값에 2를 곱한다

**데이터 흐름이 위에서 아래로 자연스럽다.**



## 마무리

| 명령형(for/if) | 함수형(map/filter) |
| ----------- | --------------- |
| 반복 제어 직접    | 반복 제어 위임        |
| 상태 변경 잦음    | 상태 변경 최소        |
| 과정 중심       | 데이터 흐름 중심       |
| 코드 길어짐      | 의도 명확           |

* map과 filter는 **반복과 조건을 추상화하는 도구**다.
* for / if를 **없애는 게 목적이 아니다**
* 반복과 조건을 **추상화**하는 것이 목적이다
* 데이터가 “어떻게”가 아니라
  “어떤 변환을 거치는지”에 집중한다.
