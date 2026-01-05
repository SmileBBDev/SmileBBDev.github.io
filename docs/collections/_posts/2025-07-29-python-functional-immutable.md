---
layout: post
title: "Python 함수형 프로그래밍 시리즈 3"
categories: ["Programming","python_prog"]
date: 2025-07-29 11:10:00 +0900
description: >-
  불변객체가 중요한 이유 - 함수형 프로그래밍과 실무 코드 관점
tags:
  - python
image: /images/postImg/programming_landspace.png
---

## 1. 불변 객체란?

불변 객체(Immutable Object)는  
**한 번 생성되면 내부 값을 변경할 수 없는 객체**다.

```python
x = 10
x = 20 # 값이 바뀌는 것처럼 보이지만, 새로운 객체가 생성됨
```

Python 대표 불변 타입:
- int
- float
- str
- tuple
- frozenset


> 값이 바뀌는 게 아니라
> **참조가 바뀌는 것**이다

---

## 2. 가변 객체의 문제

리스트는 **가변 객체(mutable)** 다.

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


* 함수 호출만 했을 뿐인데 원본 데이터가 변경됨
* 사이드 이펙트 발생

👉 디버깅이 어려워지는 대표적인 패턴

---

## 3. 불변 객체 사용

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

## 4. 실무 예제 - API 파라미터 처리

### 리스트 기반

```python
def build_params(params):
    params.append("status=ACTIVE")
    return params
```

* 여러 함수에서 같은 리스트를 공유하면
* 어디서 값이 바뀌었는지 추적 불가

### 튜플 기반

```python
def build_params(params):
    return params + ("status=ACTIVE",)
```

* 항상 새로운 파라미터 생성
* 요청별 데이터 안전

---

## 5. 실무 예제 - 데이터 파이프라인

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


## 마무리

불변 객체는 **안정성과 예측 가능성**을 만든다.

**불변 객체를 써야 할 때 : 바뀌면 안 되는 데이터인 경우**
* 여러 함수가 데이터를 공유할 때
* 데이터 흐름이 길 때
* API / DB / 파일 처리 전 후
* 병렬 처리 가능성이 있을 때