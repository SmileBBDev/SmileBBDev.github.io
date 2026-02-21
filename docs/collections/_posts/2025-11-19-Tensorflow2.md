---
layout: post
title: "Tensorflow2"
categories: ["Data / AI","tensorflow"]
date: 2025-11-19 09:10:00 +0900
description: >-
  딥러닝 모델 핵심 개념에 대해 학습
tags:
  - tensorflow
  - Data
  - AI
image: /images/postImg/dataAi_landspace.png
---

## 딥러닝 모델 학습 핵심 개념 정리

딥러닝을 공부할 때 꼭 알아야 하는 **핵심 키워드**들을 한눈에 정리했습니다.  
모델을 안정적으로 학습시키고, 과적합을 막으며, 학습 과정을 모니터링하는 데 필수적인 개념들입니다.

---

## 주요 레이어와 규제 기법
- **Dense Layer (완전 연결층)**  
  입력과 출력이 모두 연결된 기본 레이어. 가장 흔히 사용되는 층.
- **Regularization (규제)**  
  - **L1**: 가중치 절댓값 합 최소화 → 희소성(sparsity) 유도  
  - **L2**: 가중치 제곱합 최소화 → 가중치 폭발 방지  
  → 둘 다 **과적합(overfitting)** 완화에 효과적
- **Dropout**  
  학습 중 일부 뉴런을 랜덤하게 꺼서 특정 뉴런 의존을 줄임 → 과적합 방지

---

## 학습 안정성과 발산 문제
- **값 범위 조정**  
  입력값/가중치가 너무 크면 출력 발산 → 정규화(normalization)로 -1~1 범위 맞추기
- **Vanishing Gradient (기울기 소실)**  
  역전파 과정에서 기울기가 작아져 학습 정체  
  → ReLU, Batch Normalization, 적절한 초기화로 해결
- **발산/소실 원리**  
  - 1보다 큰 수를 반복 곱 → 지수적 발산  
  - 0~1 사이 수를 반복 곱 → 점점 소실

---

- **Early Stopping**  
  검증 성능이 더 이상 개선되지 않으면 학습 중단 → 과적합 방지
- **TensorBoard**  
  손실, 정확도, 그래프 등 학습 과정을 시각화 → 직관적 모니터링
- **Callback (콜백 함수)**  
  학습 중 특정 이벤트 발생 시 동작 수행  
  → 예: `EarlyStopping`, `ModelCheckpoint`

---

## 🤔 하이퍼파라미터와 옵티마이제이션
- **Learning Rate (학습률)**  
  - 너무 크면 발산, 너무 작으면 학습 지연  
  - 해결: Learning Rate Scheduler, Adam, RMSProp 등 adaptive optimizer
- **Optimizer (최적화 알고리즘)**  
  SGD, Adam, RMSProp 등 → 학습 속도와 안정성에 큰 영향

---

## ✅ 핵심 정리
- **레이어**: Dense, Dropout, Regularization  
- **학습 안정성**: Normalization, ReLU, BatchNorm  
- **학습 제어**: EarlyStopping, Callback, TensorBoard  
- **하이퍼파라미터**: Learning Rate, Optimizer  

---

👉 이 구조로 포스팅하면, 독자들이 딥러닝 학습의 필수 개념을 빠르게 이해할 수 있습니다.  
혹시 이걸 **SNS용 짧은 카드뉴스 스타일 요약본**으로도 만들어드릴까요?
