---
layout: post
title: "Python 함수형 프로그래밍 시리즈 4"
categories: ["Programming","python_prog"]
date: 2025-07-29 12:10:00 +0900
description: >-
  같은 코드, 다른 사고방식(명령형 → 함수형 리팩토링)
tags:
  - python
image: /images/postImg/programming_landspace.png
---

## 1. 리팩토링의 목적

### 리팩토링은
- 코드를 “짧게” 만드는 작업이 아니다.
- **의도를 드러내고**
- **변경에 강하게 만드는 작업**이다.

함수형 프로그래밍에서의 리팩토링은  
상태 변경과 제어 흐름을 줄이는 방향으로 진행된다.

---

## 2. 리팩토링 대상 코드

### 요구사항
- 사용자 목록에서
- 활성화된 사용자만 선택
- ID만 추출
- 정렬 후 반환

---

## 명령형 코드

```python
result = []
for user in users:
    if user["active"]:
        result.append(user["id"])

result.sort()
```

문제점:

* 중간 상태(`result`)가 계속 변경됨
* 로직이 분산되어 한눈에 의도 파악이 어려움


---

## 함수형 리팩토링

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

```python
result = tuple(
    sorted(
        u["id"]
        for u in users
        if u["active"]
    )
)
```

* 입력 데이터 변경 없음
* 출력은 새로운 객체
* 예측 가능한 함수 동작

---

##  리팩토링 전 / 후 비교

| 항목    | 리팩토링 전 | 리팩토링 후 |
| ----- | ------ | ------ |
| 상태 변경 | 많음     | 없음     |
| 반복 제어 | 직접     | 위임     |
| 의도 파악 | 어려움    | 명확     |
| 테스트   | 복잡     | 쉬움     |

---

## 마무리

리팩토링은 **사고 방식을 바꾸는 작업**이다.

리팩토링이 필요할 때 : 
* 데이터 처리 로직이 길어질 때
* for / if 중첩이 늘어날 때
* 버그 원인이 추적되지 않을 때
* 병렬 처리 가능성을 열어두고 싶을 때
