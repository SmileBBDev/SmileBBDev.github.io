---
layout: post
title:  "자바스크립트 프로그래밍"
categories: ["Frontend","javascript_front"]
date: 2025-08-12 16:12:30 +0900
description: >-
  자바스크립트 프로그래밍
tags:
  - python
image: /images/postImg/programming_landspace.png
---

## 웹 개발과 자바스크립트 개요

자바스크립트(JavaScript)는 웹 개발에서 가장 중요한 언어 중 하나입니다.                   
단순히 브라우저에서 동작하는 스크립트 언어를 넘어, 서버 개발까지 확장되며 **프론트엔드와 백엔드 모두를 아우르는 범용 언어**로 자리 잡았습니다.  

---

## 자바스크립트의 활용 영역
- **가장 널리 사용되는 프로그래밍 언어 중 하나**
- **Client(브라우저)**와 **Server(Node.js)** 모두에서 사용 가능
- **서버 개발 프레임워크 및 라이브러리**
  - Node.js → Express
  - 프론트엔드: AngularJS, ReactJS, Vue.js
- **모든 기능이 자바스크립트로 통합되는 추세**

---

## 자바스크립트의 기본 구조

### 데이터 타입
- **동적 타입 언어**: 변수 선언 시 타입 지정 불필요  
- **느슨한 타입 언어**: 타입 간 변환이 자유로움  

**Primitive Type**  
`number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`  

**Reference Type**  
`object`, `array`, `function`, `class` 등  


### 데이터 저장 형태

| 언어        | 주요 구조                  |
|-------------|---------------------------|
| JavaScript  | `Object`(딕셔너리), `Array` |
| Python      | `List`, `Dict`            |
| Java        | `Array`, `Map`            |

- **JSON**: 텍스트 기반 데이터 표현 방식 (Array에 Object를 넣는 구조)

---

## 제어 흐름과 함수

### 제어문
- 조건문: `if`, `else if`, `else`
- 분기문: `switch` / `case`
- 반복문: `for`, `while`, `do while`

### 함수
- **1급 객체**: 변수에 할당, 인자로 전달, 반환 가능  
- **비동기 처리**: `callback`, `Promise`, `async/await`

---

## 자바스크립트의 특징
- **단일 쓰레드 기반**  
- **Blocking vs Non-blocking**
  - Blocking: 함수 실행 완료까지 대기
  - Non-blocking: 다음 작업을 병렬로 처리
- **Callback Function**: 이벤트 핸들링에 사용  
- **Promise**: 비동기 작업을 처리하는 객체  
- **async/await**: 비동기 함수 작성 및 결과 대기  

---

## HTML, CSS, JavaScript 연동

### HTML 태그
- 문서 구조 및 데이터 표현  
- `id`: DOM 조작용  
- `name`: 서버 전송 시 사용  

### CSS
- **내부 스타일**: `<style>` 태그 안에 작성  
- **외부 스타일**: `.css` 파일을 `<link>`로 연결  

### JavaScript
- HTML 문서에 `<script>` 태그로 삽입  
- 외부 `.js` 파일을 불러와서 관리 가능  

---

## 추가 개념

- **jQuery**: 복잡한 DOM 조작을 간단하게 해주는 라이브러리  
  ```js
  // 예시
  $("#id명").action();
  ```
- **HTTP**: Request와 Response로 클라이언트-서버 간 데이터 교환  
- **Web APIs**: 캔버스, 로컬 스토리지 등 브라우저 기능 활용 가능  

---

## 마무리
자바스크립트는 웹 개발의 핵심 언어로, **프론트엔드와 백엔드 모두에서 사용 가능한 범용성**을 가지고 있습니다. HTML과 CSS와 함께 사용되며, 웹 애플리케이션의 구조, 디자인, 기능을 모두 담당합니다.  