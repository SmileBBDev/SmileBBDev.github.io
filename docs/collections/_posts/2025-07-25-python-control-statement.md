---
layout: post
title: "연산자와 제어문"
categories: ["Programming","python_prog"]
date: 2025-07-25 09:10:00 +0900
description: >-
  파이썬의 연산자와 제어문
tags:
  - python
image: /images/postImg/programming_landspace.png
---
## 연산자
### 연산자 종류

1. 산술연산자 (+,-,*,/)
2. 관계연산자 (>, >, =)
3. 논리연산자 (and,or,not,xor)
4. 대입연산자 (=, +=)

## 제어문

제어문 종류 : if / for

### 1. if문

- if문에 조건을 추가하고 싶을 때: elif를 추가하기

```python
# 사용법 
if 판별식(True, False로 구분되는 조건문) :
  print(”조건판별식이 True 입니다”)
elif 판별식~~ : 
  print(”새로운 조건1 입니다”)
elif 판별식~~ :
  print(”새로운 조건2 입니다”)
else :
  print(”위의 조건에 모두 해당되지 않았습니다.”)
```


  **조건이 거짓으로 나오는 경우** : 조건문에서 자동으로 False로 인식

  1) List가 값 없이 초기화된 경우 <br>
  2) 딕셔너리가 값 없이 초기화된 경우 <br>
  3) 문자가 값 없이(””) 빈문자열로 초기화된 경우 <br>
  4) 숫자 0, 0.0을 받은 경우 <br>
  5) None타입 - null 값이 들어온 경우 <br>
  6) Bool 값이 False인 경우 <br>

### 2.for문

C/Java에서 for문 사용 시, indexError가 많이 발생하여, 파이썬에서는 **for in** 문을 사용

```java
for(int i = 0; i < 10; i++){} // C와 java 구문
for in // 파이썬 구문
```

→ for in

in문에 가능한 것 - 순회 가능한 객체:

- collections : 리스트, 튜플, 문자열, 딕셔너리 등 반복 가능한 자료형
- range : 인덱스를 통해서 접근하고 싶을 때, range 사용
- iterator : next()로 반복, 직접 다루는 경우는 드묾
    
    - 반복자: 위치를 가르키는 애(포인터가 값이 없으면 시스템 성능저하), 이터레이터가 없으면 데이터 끝이다 라는 개념
    
    
- generator(생성기) : 메모리 낭비를 줄이고, 실시간으로 데이터를 발생시킴, 대용량 데이터 처리에 효과적
- enumerate : 순서와 값을 리턴, 값 + 인덱스 동시에 필요할 때
    
    - 데이터와 더불어서 순서(인덱스)까지 같이 리턴해줘서 데이터와 인덱스 모두 사용가능
    
    ```python
    for idx, val in enumerate(['a', 'b', 'c']):
        print(idx, val)
    ```
    
- zip: 다중 리스트 조합 리턴, 하나로 묶을 때 사용
    
    - 두 개의 데이터가 나눠져 있을 때, 두 개의 데이터를 합쳐서 리턴해 줌.
    
    - zip(list1, list2)로 반환? 리스트를 조합해서 사용할 때 사용
    

```python
names = ['Kim', 'Lee']
scores = [85, 92]
for name, score in zip(names, scores):
    print(name, score)
```

### for in 문에 올 수 있는 자료구조

반복문에서 사용할 수 있는 자료구조 종류

- list
- tuple
- dictionary
- set
- string

파이썬은 반복문에서 데이터를 추출

데이터도 써야 되고, 인덱스도 써야 할 땐, enumerate 사용

무한루프 필요할 때: while문 사용

### 3. while 문

- 변수는 while문 위에 선언 해야함
- 계속 초기화 되면 무한 루프에 빠져서 시스템이 스택 오버플로우 되서 멈춤(stack overflow)
- 초기값, 한계값, 증감값을 배치하는 위치가 for문과 다름

---

**예외 사항**

for else / while else

( break, continue )

break : 어떤 조건에 걸리면, 어떤 상황이 되면 멈춰라 (영구종료)

continue : 계속 반복되다가 어떤 조건을 처리하고 싶지 않을 때 사용 (원하는 것만 제외)

=> 넘파이로 넘어가면 if문과 for문 없이 가능 




리스트 내포 : 데이터를 만드는 애

리스트 안에서 반복하면 데이터를 빠르게 만들 수 있고, 리스트 내포는 리스트 안에 for와 if문이 들어감

```python
list comprehension: [ num*num for num in range(11) if num%2==0)] 
# num: 변수, %: 나머지 연산자, //:몫 연산자

# 중괄호를 사용해서도 리스트 내포를 생성할 수 있음.
{ num*num for num in range(11) if num%2==0) }
```

경우의 수를 처리할 때 나머지 연산자가 필요

어떤 경우의 수가 있는지 살펴야 함