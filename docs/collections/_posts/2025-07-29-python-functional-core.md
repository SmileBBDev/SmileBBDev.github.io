---
layout: post
title: "Python 함수형 프로그래밍 시리즈"
categories: ["Programming","python_prog"]
date: 2025-07-29 09:10:00 +0900
description: >-
  Python Core & Data Structure 정리 - 함수형 프로그래밍으로 가기 위한 기초 개념
tags:
  - python
image: /images/postImg/programming_landspace.png
---

## 1. 변수와 메모리 구조

Python에서 변수는 **값 자체가 아니라 메모리 주소를 참조**한다.  
모든 데이터는 메모리에 로딩되며, 내부적으로는 이진수 형태로 저장된다.

- 데이터는 **타입(Type)** 을 통해 해석된다.
- 타입이 있어야 메모리의 값이 어떤 의미인지 알 수 있다.
- 변수는 메모리 주소를 참조하는 이름이다.

### 메모리 영역 개념
- **Code 영역**: 작성한 Python 코드
- **Stack**: 함수 실행 시 필요한 지역 데이터
- **Heap**: 동적 메모리 할당 영역 (객체, 컬렉션 등)

> Python은 명시적인 포인터를 사용하지 않지만  
> 내부적으로는 객체 참조(reference) 구조로 동작한다.

---

## 2. 데이터 구조 (Data Structure)

데이터 구조는 **메모리를 효율적으로 사용하고, 접근 방식을 정의**하기 위한 방법이다.

### 배열 vs 리스트
- 배열  
  - 연속된 메모리 공간  
  - 인덱스 접근 빠름  
  - 삽입/삭제 비효율적
- 리스트(Python list)  
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
```

* 조건에 따라 로직 분기
* 명령형 프로그래밍의 핵심 요소

### 반복문
```python
for item in iterable:
```

* iterable: list, tuple, dict, set, generator 등
* range(): 숫자 시퀀스 생성

### Iterator & Generator

```python
def gen():
    yield 1
    yield 2
```

* **Iterator**: 다음 값을 가리키는 객체
* **Generator**:

  * 데이터를 한 번에 만들지 않고
  * `yield`로 하나씩 생성
  * 메모리 효율적

---

## 4. 함수(Function)

함수는 **반복되는 로직을 추상화**한 단위

```python
def func(a, b):
    return a + b
```

### 함수의 기본 구조

* 입력(Input)
* 처리(Process)
* 출력(Output)

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
> **데이터 흐름 중심으로 처리**


## 마무리

Python은 함수형 프로그래밍을 **완전히 강제하지 않지만**,  
자연스럽게 함수형 사고를 확장할 수 있는 언어다.
