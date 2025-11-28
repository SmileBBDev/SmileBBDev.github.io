---
layout : post
title : "데이터 요약"
categories: ["Data / AI","pandas"]
date : 2025-09-19 09:10:00 +0900
description: >-
  Pandas기반 데이터 요약에 대해 학습
tags:
  - Numpy
  - Pandas
  
image: /images/postImg/dataAi_landspace.png
---

## 데이터 요약(Data Summarization)
### 데이터 요약이란?
데이터를 간단히 집계/정리해서 한눈에 보기 쉽게 만드는 과정

### 데이터 분석 프로세스

> ndarray → visualization → Series, DataFrame → preprocessing → 
>
> **Data Summarization** → Visualization

1. ndarray: 넘파이 배열 형태로 데이터가 들어옴
2. Series / DataFrame: 판다스 객체로 변환하여 다루기 편한 형태로 구조화
3. 전처리(preprocessing): 결측치 처리, 이상치 제거, 범주화, 정규화, 가중치 적용 등
4. **데이터 요약(Data Summarization)**: 데이터를 집계, 통계 요약, 분포 확인, 교차표(crosstab) 등으로 정리
5. 시각화(Visualization): 요약된 내용을 그래프로 표현하여 인사이트 도출

### 데이터 요약 기법 종류
- Descriptive Statistics (기술통계): 평균, 분산 등 기초 통계값
- Frequency Distributions (도수분포): value_counts 같은 빈도표
- Graphical Representations (시각화): 히스토그램, 박스플롯 등
- Data Aggregation (데이터 집계): groupby, pivot_table 같은 집계

---

## Pandas를 활용한 데이터 요약
### 데이터 요약 방법
**value_counts()**
- 도수분포표를 만듦 (Series 전용, DataFrame 직접 적용 불가)
- 범주형 데이터의 값이 각각 몇 번 등장했는지 확인

**groupby()**
- 범주별 기준으로 데이터를 묶어 집계
- 여러 컬럼 기준으로 그룹화 가능 (멀티 인덱스 지원)
- 예: 학생별, 과목별 평균 성적

**crosstab()**
- 범주형 데이터 간의 관계를 교차표(인접행렬, contingency table)로 요약
- 카이제곱 검정(χ² test)에 활용 가능
- 예: “과목별 vs 합격/불합격” 분포표

**pivot()**
- 데이터를 long → wide 형태로 변환
- 행/열로 데이터를 재배치 (집계함수는 지원하지 않음)

**pivot_table()**
- pivot과 유사하지만, 집계함수 지원 (엑셀 pivot table과 동일)
- 평균, 합계, 분산 등 다양한 통계 가능

---

### 집계 함수(Aggregation Functions)
집계함수는 중복 데이터 처리 및 데이터 특징 요약에도 사용

- 수학적 집계 함수: 합계(`sum`)
- 통계적 집계 함수: 평균(`mean`), 중위수(`median`), 최빈값(`mode`)
- 위치 지표: 분위수(`quantile`, 예: 사분위수)
- 산포 지표: 분산(`var`), 표준편차(`std`)
- 변동성 지표: 변화율(`pct_change`), 차이(`diff`)

---

### 인접행렬(Contingency Table)

**인접행렬(Contingency Table) = 교차표(crosstab)**

**교차표**는 두 개 이상의 **범주형 변수** 간의 관계를 요약하여 **행과 열로 구성된 표 형태**

빈도(횟수)를 나타내며, 각 셀(cell)은 해당 범주 조합의 **빈도 수**를 보여줌

(범주형 데이터 간 관계를 분석할 때 중요)



### 📊 예시

과목(행)과 합격여부(열) → 카이제곱 검정에 활용

| 과목     | 합격 | 불합격 |
|----------|------|--------|
| 수학     | 30   | 20     |
| 영어     | 25   | 25     |
| 과학     | 35   | 15     |

- 이 표는 과목별로 합격/불합격 인원을 보여주는 교차표
- 이 데이터를 바탕으로 **카이제곱 검정**을 통해 과목과 합격 여부 간의 관계 분석 가능

