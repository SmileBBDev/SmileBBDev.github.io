---
layout : post
title : "Pandas 기초"
categories: ["Data / AI","pandas"]
date : 2025-09-17 09:10:00 +0900
description: >-
  Pandas의 핵심 기능에 대해 학습
tags:
  - Pandas
  - python
image: /images/postImg/dataAi_landspace.png
---

## Pandas
### **정의**
 NumPy 기반의 고수준(high-level) 데이터 분석 도구
### **핵심 자료구조**

**Series**: 1차원, 인덱스(index) + 값(value)
  - 내부적으로는 **dict와 ndarray를 합친 구조**
  - dict처럼 key(=index)와 value가 있고,
  - ndarray처럼 빠른 연산 가능

**DataFrame**: 여러 개의 Series가 모인 **2차원 구조**
- 행(Row Index), 열(Column Index) 존재
- 열(Column)마다 다른 자료형 허용 (**열내 동질, 열간 이질**)
- column 이름 중복 허용
- row/column index로 빠른 접근
- DB와 엑셀 기능 결합:
    - `groupby` (SQL GROUP BY)
    - `pivot_table` (Excel Pivot Table)
    
👉 Pandas = **NumPy(ndarray) + dict + DB + Excel 기능 결합 → 데이터 분석 플랫폼**
    
### **특징**
  - dict와 달리 **중복된 index/column 이름 허용**
  - 데이터 검색 시 **Row Index + Column Index**로 빠르게 접근
  - 데이터베이스의 인덱스와 같은 개념 → 검색 속도 향상

---

## Pandas가 "분석도구"라 불리는 이유

Pandas는 단순히 자료구조 제공을 넘어서 **데이터 분석에 필요한 기능**을 포함하기 때문이에요.

### 🛠 주요 기능

1. **데이터 변환(Data transformation)**
    - 데이터 전처리 (결측치 처리, 형 변환 등)
    - 시계열 처리 (datetime 다루기)
    - 문자열 처리 (벡터화된 string 함수)
    - 직렬화/역직렬화 (CSV, Excel, SQL, JSON 등 입출력)
2. **통계 & 요약**
    - 기초 통계 함수 (`mean`, `sum`, `describe` 등)
    - 상관분석(`corr`)
3. **데이터베이스 기능**
    - `groupby`: SQL의 `GROUP BY`와 동일
    - `merge`, `join`: SQL 조인
    - `query`: SQL 스타일 질의
4. **엑셀과 유사한 기능**
    - `pivot_table`: 엑셀 피벗테이블과 동일

---

## 전체 구조 요약

### **NumPy**
  > "빠른 계산기"
  >
  >  → 빠른 수치연산을 위한 `ndarray` 제공
    
### **Pandas**

  >  "데이터 분석용 엑셀+SQL+NumPy" 툴
  >
  >  → NumPy + dict 개념을 확장 → `Series`, `DataFrame` 제공
  >  
  >  → 데이터 분석을 위한 기능 내장 (DB, Excel, 통계, 전처리 등)

---

### 🧠 **Python** vs **R** vs **NumPy** vs **Pandas**  자료구조 비교

| 범주       | 자료구조       | 설명 및 특징                                                                 |
|------------|----------------|------------------------------------------------------------------------------|
| **Python** | `list`         | 가변, 순서 있음, 중복 가능                                                  |
|            | `tuple`        | 불변, 순서 있음, 중복 가능                                                  |
|            | `dict`         | `{key: value}` 구조, 빠른 검색, 빠른 속도                                   |
|            | `set`          | 중복 불가, 순서 없음, 집합 연산                                             |
| **R**      | `vector`       | 동일 타입 원소들의 집합                                                     |
|            | `matrix`       | 2차원 벡터, 동일 타입만 가능                                                |
|            | `dataframe`    | 열(column)마다 다른 자료형 가능, Pandas DataFrame과 유사                            |
|            | `list`         | 서로 다른 타입을 하나의 객체에 저장 가능                                    |
| **NumPy**  | `ndarray`      | 다차원 배열, 연속 메모리, 빠른 수치 연산, 벡터화 연산 지원                  |
|            | 기능           | 선형대수, 푸리에 변환, 난수, 통계 함수 등                                   |
| **Pandas** | `Series`       | 1차원, 인덱스 + 값, dict + ndarray 구조                                     |
|            | `DataFrame`    | 2차원, 여러 Series의 집합, 열마다 다른 자료형 가능, DB + Excel 기능 결합     |
|            | 기능           | `groupby`, `pivot_table`, 빠른 인덱스 접근, 중복된 index/column 허용        |

