---
layout: post
title: "차원축소와 변수선택 그리고 모델 정리"
categories: ["Data / AI","scikit"]
date: 2025-10-17 09:10:00 +0900
description: >-
  거리와 방향을 이용하는 모델들에 대해 학습하기
tags:
  - scikit
image: /images/postImg/dataAi_landspace.png
---

## 1. 모델 관점 : RandomForest & GradientBoosting

### 🌲 RandomForest
- 여러 개의 **의사결정나무(Decision Tree)**를 만들어 평균(회귀) 또는 투표(분류)를 통해 결과를 냄
- **분산(Variance)을 줄이는 효과** → 모델 안정화
- 각 트리는 일부 데이터와 일부 변수만 사용 → 과적합 방지

### 🚀 Gradient Boosting
- 이전 모델의 **오차를 보완**하면서 트리를 순차적으로 학습
- RandomForest보다 **편향(Bias)을 줄이는 데 강함**
- 하지만 과적합 위험이 높아 **규제(Regularization)** 필요

📘 **요약**

| 모델 | 장점 | 약점 | 목적 |
| --- | --- | --- | --- |
| RandomForest | 분산 감소 → 안정된 예측 | 편향이 클 수 있음 | 앙상블 평균화 |
| GradientBoosting | 편향 감소 → 정밀한 예측 | 과적합 위험 | 순차적 개선 |


## RandomForest vs GradientBoosting

| 항목 | RandomForest 🌲 | GradientBoosting 🚀 |
| --- | --- | --- |
| 방법 | 여러 트리를 랜덤하게 만들어 평균냄 | 이전 트리의 오차를 보완하며 순차적 학습 |
| 목표 | 분산 ↓ 안정된 예측 | 편향 ↓ 정교한 예측 |
| 장점 | 과적합 적고 안정적 | 정확도 높음 |
| 단점 | 세밀한 조정 어려움 | 과적합 위험 |
| 비유 | 여러 명이 투표 | 한 명이 계속 수정하며 발전 |

---

## 2️. 변수 선택(Feature Selection)과 차원

### 과적합 vs 과소적합
- **과소적합(Underfitting)**: 모델이 너무 단순 → 변수를 **늘려야 함**
- **과적합(Overfitting)**: 모델이 너무 복잡 → 변수를 **줄여야 함**

### 변수 선택 방법
- **통계적 접근**
  - 상관분석 → 변수 간 상관성 확인
  - 다중공선성(VIF) → 중복된 정보 제거
  - 자기상관성(Autocorrelation) → 시계열 모델로 접근 필요
- **모델 기반 접근**
  - `SelectKBest`, `RFE`(Recursive Feature Elimination)
  - **L1 규제(Lasso)** → 중요 변수만 자동 선택

📘 **정리**

| 구분 | 원인 | 해결방법 |
| --- | --- | --- |
| 과소적합 | 모델 단순 | 변수 늘리기, 복잡도 ↑ |
| 과적합 | 모델 복잡 | 변수 줄이기, 규제 적용 |

---

## 3️. 차원축소(Dimension Reduction)

### 기본 개념
- **차원 = 변수(열)**  
- **행 = 각 변수의 측정값(데이터 포인트)**  
- 차원축소는 단순히 버리는 게 아니라 **정보를 압축**하는 과정
- 목적:
  - 모델 복잡도 ↓
  - 시각화 & 해석 ↑
  - 노이즈 제거


### 🧩 대표 방법

| 방법 | 특징 | 한 줄 요약 |
| --- | --- | --- |
| PCA | 분산이 큰 방향으로 새 축 생성 (선형) | “데이터 방향 새로 잡기” |
| SVD | 비정방 행렬용 PCA | “PCA의 일반형” |
| Random Projection | 임의의 축으로 투영 (빠름) | “아무 축에 던져서 줄이기” |
| UMAP | 지역+전역 구조 모두 보존 | “시각화+학습 모두 유용” |
| t-SNE | 가까운 건 가깝게, 먼 건 더 멀게 | “클러스터 모양 보기용” |



💡 **PCA + UMAP 조합**  
PCA로 전체 구조, UMAP으로 세부 구조 → 시각화와 특징 추출에 모두 강점

---


### PCA (Principal Component Analysis)
- 데이터의 분산이 가장 큰 방향(주성분)을 찾아 새로운 축으로 재표현
- 모든 데이터가 변환에 참여 → 정보 손실 최소화
- **상관계수 행렬(m×m, 정방행렬)** 기반 → 변수 간 관계 파악
- 선형 데이터에 적합

### SVD (Singular Value Decomposition)
- **비정방행렬(m×n)**에도 적용 가능 → 이미지, 텍스트 데이터에 유용
- PCA의 일반화된 형태
- 데이터의 **잠재 요인(latent factors)** 추출

### Random Projection
- 임의의 방향으로 데이터를 투영해 차원 축소
- 빠르고 간단하지만 정보 손실 가능
- 데이터의 거리 구조를 대략 유지

### UMAP vs t-SNE

| 알고리즘 | 특징 | 장단점 |
| --- | --- | --- |
| t-SNE | 가까운 점은 가깝게, 먼 점은 더 멀게 → 지역 구조 보존 | 전역 구조 파악 어려움 |
| UMAP | 지역+전역 구조 모두 보존 | 시각화+학습 모두 유용 |

### 변형된 PCA

| 종류 | 특징 | 비유 |
| --- | --- | --- |
| Kernel PCA | 비선형 데이터용 (커널 트릭) | “곡선 데이터도 가능” |
| Sparse PCA | 일부 주성분만 사용 | “중요한 축만 남기기” |
| Incremental PCA | 데이터를 조금씩 로딩 (대용량 데이터) | “RAM 절약형 PCA (Mmap)” |
| Randomized PCA | 랜덤 샘플링으로 빠르게 계산 | “빠른 근사형 PCA” |
| Truncated SVD | 복원 불가, 크기 맞추기용 | “압축 버전 PCA” |

---

## 4️. 데이터 형태와 적용 방식

| 데이터 형태 | 적합 방법 | 이유 |
| --- | --- | --- |
| 수치형 | PCA, SVD | 선형 관계 파악 |
| 이미지/텍스트 | SVD, UMAP | 비정방행렬 구조 |
| 고차원·대용량 | Incremental PCA | 메모리 절약 |
| 복잡한 구조 | Kernel PCA, UMAP | 비선형 구조 파악 |

---

## 5️. 전체 흐름

```
데이터 준비
   ↓
변수선택 (L1, RFE, 상관분석)
   ↓
차원축소 (PCA, UMAP 등)
   ↓
모델학습 (RandomForest, GradientBoost 등)
   ↓
평가 & 튜닝
```

---

## 핵심 정리

| 구분 | 내용 | 비고 |
| --- | --- | --- |
| 모델 | RandomForest → 분산 감소 / GradientBoost → 편향 감소 | 앙상블 |
| 변수선택 | L1 규제, RFE, 상관분석 | 과대/과소적합 제어 |
| 차원축소 | PCA, SVD, Random Projection | 정보 압축 |
| 비선형 축소 | UMAP, t-SNE | 시각화 강점 |
| PCA 변형 | Kernel, Sparse, Incremental, Randomized, Truncated | 데이터 형태/크기에 맞게 |

---

| 기법/모델 | 핵심 역할 | 특징/설명 |
|-----------|-----------|-----------|
| **RandomForest** | 분산(Variance) 감소 | 여러 트리를 평균·투표로 결합 → 안정된 예측 |
| **GradientBoosting** | 편향(Bias) 감소 | 이전 모델의 오차를 보완하며 순차적 학습 → 정밀한 예측 |
| **L1 규제 (Lasso)** | 변수 선택 | 중요 변수만 남기고 불필요한 변수 제거 |
| **PCA 계열** | 선형 차원축소 | 분산이 큰 방향으로 축 생성 → 선형 데이터에 적합 |
| **UMAP / t-SNE** | 비선형 차원축소 | 시각화에 강점, 데이터 구조 파악에 유용 |
| **Incremental PCA** | 대용량 데이터 처리 | 데이터를 조금씩 로딩 → 메모리 절약형 |
| **PCA + UMAP** | 전체+세부 구조 표현 | PCA로 전체 방향성, UMAP으로 세부 클러스터 표현 |
