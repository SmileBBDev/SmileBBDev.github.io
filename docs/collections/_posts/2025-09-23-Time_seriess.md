---
layout : post
title : "시계열 분석"
categories: ["Data / AI","pandas"]
date : 2025-09-23 09:00:00 +0900
description: >-
  비지도 학습 : 시계열 분석(Time Series)에 대해 학습
tags:
  - Numpy
  - Pandas
  
image: /images/postImg/dataAi_landspace.png
---

## 시계열 예측 모델 개요

### 1. ARMA(p, q)

- **AR (AutoRegressive)**: 자기회귀 모델. 과거 값이 현재 값에 영향을 줌.
- **MA (Moving Average)**: 이동 평균 모델. 과거 오차가 현재 값에 영향을 줌.
- **p**: AR의 차수 (몇 시점 전까지의 데이터를 사용할지)
- **q**: MA의 차수 (몇 시점 전까지의 오차를 사용할지)


  ❓ 차수 결정 방법
  - **ACF (자기상관함수)**: MA 모델의 차수 결정에 도움
  - **PACF (부분자기상관함수)**: AR 모델의 차수 결정에 도움

### 2. ARIMA(p, d, q)

- **ARMA 모델에 차분(d)을 추가한 것**
- **d**: 비정상 시계열을 정상 시계열로 만들기 위한 차분 횟수
    - `d=0`: 차분 없음 (정상 시계열)
    - `d=1`: 1차 차분
    - `d=2`: 2차 차분

> 예시 > &nbsp;
> 아이스크림 판매량이 매년 증가하는 추세라면, 차분을 통해 추세를 <br> 제거하고 정상성을 확보해야 ARMA 모델에 적용 가능
<br>

### 3. SARIMA(p, d, q)(P, D, Q, s)
```
SARIMA(endog, order=(p, d, q), seasonal_order=(P, D, Q, s))
```
- **Seasonal ARIMA**: 계절성을 고려한 ARIMA 모델(=계절적 요소를 추가한 모델)
- **(p, d, q)**: 일반(비계절) ARIMA 파라미터
- **(P, D, Q, s)**:  **계절성**을 반영한 ARIMA 파라미터
- **s**: 계절 주기 (예: 월별 데이터면 `s=12`, 분기면 `s=4`)


🔍 **두 파라미터의 역할 차이**

| 파라미터 | 설명 | 언제 사용? |
|----------|------|----------------|
| `(p, d, q)` | 일반 ARIMA 파라미터 | **비계절적** 패턴을 설명할 때 |
| `(P, D, Q, s)` | 계절 ARIMA 파라미터 | **계절적** 패턴을 설명할 때 |

> 예시 > &nbsp; 
> 아이스크림 판매량이 여름에 급증한다면, 계절성을 반영한 SARIMA 모델이 적합

```python
# 계절적 요소를 추가한 SARIMA 모델
# ARIMA파라미터 + 계절성 파라미터 둘 다 함께 써야 SARIMA 모델 완성

from statsmodels.tsa.statespace.sarimax import SARIMAX

model = SARIMAX(endog=sales_data, order=(1,1,1), seasonal_order=(1,1,1,12))
results = model.fit()
# endog=sales_data : 예측 대상 시계열 데이터
# 비계절적 ARIMA = (1, 1, 2) : AR=1, 차분=1, MA=2
# 계절적 ARIMA = (0, 1, 1, 12) : AR=0, 차분=1, MA=1, 주기=12 (월별)
```
  - `p`: 과거 값에 대한 AR(자기회귀) 차수
  - `d`: 차분 횟수 (비정상성을 제거하기 위해)
  - `q`: 과거 오차에 대한 MA(이동평균) 차수

  - `P`: 계절적 AR(자기회귀) 차수
  - `D`: 계절적 차분 횟수
  - `Q`: 계절적 MA(이동평균) 차수
  - `s`: 계절 주기 (예: 월별 데이터면 `s=12`, 분기면 `s=4`)

<br>

### 4. SARIMAX
```
SARIMAX(endog, exog, order=(p, d, q), seasonal_order=(P, D, Q, s))
```
- **SARIMA + 외생변수(exogenous variables)** <br>
→ SARIMAX 모델도 SARIMA와 동일한 7개의 파라미터를 그대로 사용하되 **외생변수**를 추가할 수 있음
- `endog`: 예측하고 싶은 분석 대상 (내생변수)
- `exog`: 예측(분석)에 도움을 주는 변수 (외생변수) (예: 기온, 습도 등)
- `order=(p, d, q)`: 비계절 ARIMA 파라미터
- `seasonal_order=(P, D, Q, s)`: 계절 ARIMA 파라미터 <br>
→ 외생변수는 예측력을 높이는 데 매우 유용함

> 예시 > &nbsp;
> **내생변수**: 아이스크림 판매량
**외생변수**: 기온, 습도, 휴일 여부 등
>
> 기온이 높을수록 판매량이 증가한다면, SARIMAX 모델에 기온을 외생변수로 추가하면 예측력이 향상됨.

```python
# 외생변수를 추가한 SARIMAX 모델

from statsmodels.tsa.statespace.sarimax import SARIMAX

model = SARIMAX(
    endog=sales_data,              # 아이스크림 판매량
    exog=temperature_data,         # 기온 데이터
    order=(1, 1, 1),
    seasonal_order=(1, 1, 1, 12)
)
results = model.fit()
```

---

## 시계열 클러스터링 & DTW

### 1. 클러스터링

- 시계열 데이터를 유사한 패턴끼리 묶는 작업
- 파형의 모양을 기준으로 그룹화

> 예시 > &nbsp;
> TV 리모콘 신호를 여러 번 측정해 유사한 신호끼리 묶어 분류 


### 2. DTW (Dynamic Time Warping)

- **시간축이 다르더라도 유사한 패턴을 정렬해 비교하는 알고리즘**
- 시계열 간의 "거리"를 계산해 유사도를 측정

> 예시 > &nbsp; 
> A 사람의 걸음걸이와 B 사람의 걸음걸이가 시간 간격은 다르지만 <br> 유사한 패턴이라면 DTW로 비교 가능
> 


### 3. 세그멘테이션

- 시계열 데이터를 일정 간격으로 나누는 작업
- DTW와 함께 사용하면 특정 구간의 패턴 비교에 유용

---

## 시계열 분석 도구

### 🔹 Statsmodels

- R에서 사용하던 통계 기법들을 Python에서 구현한 패키지
- 주요 기능:
    - 카이제곱 검정
    - 평균/분산 분석 (ANOVA)
    - 상관/회귀 분석
    - 시계열 분석 (ARIMA, SARIMA 등)

### 🔹 Pandas

- 시계열 데이터의 전처리 및 처리에 강력한 기능 제공
    - `resample()`, `rolling()`, `shift()` 등

---

**센서 데이터와 시계열**

- 예측뿐 아니라 **클러스터링, 분류, 이상 탐지, 진단**에도 활용 가능
- 스마트워치로 수면 패턴 분석
- 스마트폰으로 걸음걸이 분류
- 공장 센서로 기계 고장 예측
