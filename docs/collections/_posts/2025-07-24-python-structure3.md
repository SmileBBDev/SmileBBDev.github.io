---
layout: post
title: "파이썬 자료구조 - 분류 기준"
categories: ["Programming","python_prog"]
date: 2025-07-24 11:00:00 +0900
description: >-
  파이썬의 자료구조의 2가지 분류 기준 학습
tags:
  - python
image: /images/postImg/programming_landspace.png
---
## 파이썬 자료구조 2가지 분류 기준
1. 순서가 있는가?
2. 수정이 가능한가?

### 분류기준 1 - 순서가 있는가?

#### 순서가 있는 자료형
- list, tuple, string
- 배열처럼 인덱싱 가능(0부터 시작)
```
abc = [1, 2, "3"]
print(abc[0])   # 1
print(abc[1:-1]) # [2]
```

**순서형 자료구조 공통 연산 (list, tuple, str)**
- Indexing
  
  인덱싱으로 특정 위치 요소 접근
  ```
  abc = [1, 2, "3"]
  print(abc[0])  # 1
  ```
- Slicing

  범위 지정하여 일정 부분 추출
  ```
  print(abc[1:-1])  # [2]
  print(abc[::2])   # [1, "3"]
  ```
- Concatenation (+)

  자료구조 단위 결합
  ```
  print([1,2] + [3,4])  # [1,2,3,4]
  ```
- Repetition (*)

  자료구조 반복
  ```
  print([1,2] * 3)  # [1,2,1,2,1,2]
  ```

- Membership Test (in)

  포함 여부 확인 (True/False 반환)
  ```
  print(2 in [1,2,3])  # True
  ```

- len()

  길이 확인
  ```
  print(len("Python"))  # 6
  ```


#### 순서가 없는 자료형
- dict, set
- 인덱스 사용 불가, key값으로 접근
- python 3.7 이상 버전부터는 dict도 입력 순서 보장

### 분류기준 2 - 수정이 가능한가?
**수정 가능한 자료형 (Mutable)**
- list, dict, set

**수정 불가능한 자료형 (Immutable)**
- str, tuple
- 문자열은 replace() 같은 함수 사용 시, 원본을 수정하지 않고 새로운 객체를 생성(문자열을 복사한 후 수정하여 새로운 주소에 저장)

```Python
text = "hello"
new_text = text.replace("h", "H")
print(new_text)  # Hello
```


다차원 데이터 구조 생성
파이썬에서는 리스트 안에 리스트를 넣어 2차원 구조를 자주 사용합니다.
- append() : 요소 추가
- extend() : 여러 요소 확장
matrix = []
matrix.append([1,2,3])
matrix.append([4,5,6])

print(matrix)
# [[1,2,3], [4,5,6]]



✨ 정리
- 순서 여부: Ordered vs Unordered
- 수정 여부: Mutable vs Immutable
- 공통 연산: Indexing, Slicing, Concatenation, Repetition, Membership Test, len()
- 다차원 구조: 리스트 안에 리스트로 구현
👉 이렇게 정리하면 파이썬 자료구조의 큰 그림을 한눈에 볼 수 있습니다!

혹시 이걸 인포그래픽 이미지로도 만들어드리면 블로그에 더 시각적으로 예쁘게 올릴 수 있는데, 원하시나요?
