---
layout: post
title: "Tensorflow"
categories: ["Data / AI","tensorflow"]
date: 2025-11-18 09:10:00 +0900
description: >-
  TensorFlow 2.x와 Keras에 대해 학습
tags:
  - tensorflow
  - Data
  - AI
image: /images/postImg/dataAi_landspace.png
---

## 1️. TensorFlow와 Keras의 관계

- **Keras**: 모델을 만드는 도구 (Frontend)  
  → 레이어를 쌓고, 활성화 함수를 붙이고, 손실함수·옵티마이저를 지정하는 등 **모델 구조를 설계**하는 역할  

- **TensorFlow**: 연산을 처리하는 엔진 (Backend)  
  → GPU/CPU/TPU에서 실제로 **행렬곱, 역전파, 최적화 연산**을 수행하는 역할  

👉 쉽게 말해:  
- **Keras = 설계도 작성**  
- **TensorFlow = 설계도를 실제로 실행하는 엔진**

---

## 2️. TensorFlow 2.x의 주요 구성 요소

- **tf.data**: 대규모 데이터를 효율적으로 다루는 파이프라인 (numpy/pandas 문법과 유사)  
- **Keras**: 모델 설계의 중심 인터페이스 (Estimator 방식은 사라지고 Keras로 통합)  
- **Distribution Strategy**: CPU, GPU, TPU에서 분산 학습 지원  
- **TensorBoard**: 학습 과정(loss, accuracy 등)을 시각화하는 도구  

---

## 3️. 배포(Deployment) 도구

- **TensorFlow Serving**: 서버 환경에서 여러 모델을 동시에 배포 가능  
- **TensorFlow Lite**: 모바일·엣지 장치(Android, iOS, Raspberry Pi 등)용 경량화 모델  
- **TensorFlow.js**: 웹 브라우저·Node.js에서 실행 가능한 버전  

👉 **배포 측면에서는 TensorFlow가 PyTorch보다 훨씬 강력**

---

## 4️. Keras 모델 구성 5단계

1. **Define Network (정의)**  
   - Dense, Conv, RNN 레이어를 쌓아 모델 구조 설계  
   - 입력, 행렬곱(Dense), 활성화 함수(ReLU, Sigmoid, Softmax 등) 포함  

2. **Compile Network (컴파일)**  
   - Keras 모델을 TensorFlow 연산으로 변환  
   - 필수 요소: 손실함수(loss), 옵티마이저(Adam, SGD), 평가 지표(metrics)  

3. **Fit Network (학습)**  
   - 데이터를 넣고 학습 진행  
   - Epoch, Batch, Learning rate 등 설정  
   - 반환값: **History 객체** (loss, accuracy, epoch별 결과 기록)  

4. **Evaluate Network (평가)**  
   - 학습되지 않은 test 데이터로 성능 확인  

5. **Make Predictions (예측)**  
   - `.predict()`로 새로운 입력값에 대한 결과 도출  

---

## 5️. Callback 함수

- **EarlyStopping**: 성능이 더 이상 개선되지 않으면 학습 자동 중단 → 과적합 방지  
- **ModelCheckpoint**: 가장 좋은 성능일 때 모델 자동 저장  

👉 Callback은 학습을 더 똑똑하게 관리하는 도구

---

## 6️. 모델 만드는 3가지 방식

1. **Sequential 모델**: 레이어를 순차적으로 연결 (간단한 FFNN에 적합)  
2. **Functional API**: 입력·출력이 여러 개 가능, 복잡한 구조(CNN, RNN 등) 제작 가능  
3. **Subclassing (클래스 상속)**: 완전 커스터마이징, PyTorch 스타일 구현 가능  

---

## 7️. FFNN·CNN·RNN 구조 개요

- **FFNN (Feed-Forward Neural Network)**: 가장 기본적인 전진 신경망, 모든 모델 뒤에는 Dense layer가 붙음  
- **CNN**: 이미지 특징 추출에 특화 (Conv → Pooling → Dense)  
- **RNN**: 시계열·문장 데이터 처리 (LSTM, GRU 등으로 발전)  

👉 결국 CNN/RNN도 마지막에는 FFNN(Dense layer)로 연결해 최종 예측을 수행

---

## 8️. TensorFlow vs PyTorch 비교

| 항목 | TensorFlow(Keras) | PyTorch |
| --- | --- | --- |
| 사용성 | 초보자 친화적, 구조가 눈에 보임 | 자유도 높음, 직접 구현 많음 |
| 모델 표현 | Keras API로 직관적 | Class 상속으로 유연 |
| 배포 | **Serving/Lite/JS 지원 → 강점** | 상대적으로 약함 |
| 연구/실험 | 안정적 | 연구용으로 매우 인기 |

---

## 전체 요약

- TensorFlow 2.x = **Keras 기반**  
- **Keras**: 모델 설계 (Frontend)  
- **TensorFlow**: 연산 처리 (Backend)  
- 모델 구성 단계: Define → Compile → Fit → Evaluate → Predict  
- Callback: EarlyStopping, Checkpoint 등  
- 모델 방식: Sequential / Functional / Subclassing  
- CNN/RNN도 결국 FFNN(Dense layer)로 연결  
- **배포는 TensorFlow가 PyTorch보다 훨씬 강력**  
