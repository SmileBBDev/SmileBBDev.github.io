---
layout: post
title: "CNN모델 발전과 Transfer learning"
categories: ["Data / AI","tensorflow"]
date: 2025-11-21 09:10:00 +0900
description: >-
  CNN모델 발전과 Transfer learning에 대해 학습
tags:
  - CNN
  - Data
  - AI
image: /images/postImg/dataAi_landspace.png
---

## 1. CNN 기본 구조
- **Convolution → Pooling → Dense Layer**
- 이미지 인식·분류에서 가장 널리 쓰이는 딥러닝 구조
- 특징 추출 → 요약 → 분류의 흐름으로 진행

---

## 2. Transfer Learning (전이학습)
- **이미 학습된 모델의 가중치를 재사용**해 새로운 데이터셋에 적용
- **데이터가 적을 때**: 특징 추출 부분은 freeze, 마지막 Dense Layer만 학습 → 빠르고 효율적
- **데이터가 많을 때**: 전체 네트워크를 trainable=True로 풀어 fine-tuning → 더 정밀한 결과
- **장점**: 학습 속도 ↑, 필요한 데이터 ↓, 성능 ↑

### 실무 전략
- **Feature extractor**: 대부분 freeze, head만 학습
- **Fine-tuning**: 일부 또는 전체 레이어 unfreeze, 작은 학습률로 재학습
- **Linear probe**: 사전학습 표현의 일반성 확인

### PyTorch 예시 코드
```python
import torch, torch.nn as nn, torchvision.models as models

model = models.resnet50(pretrained=True)
num_ftrs = model.fc.in_features
model.fc = nn.Linear(num_ftrs, num_classes)

# 대부분 freeze
for name, param in model.named_parameters():
    if "fc" not in name:
        param.requires_grad = False

# 옵티마이저: head는 큰 lr, backbone은 작게
optimizer = torch.optim.AdamW([
    {"params": model.fc.parameters(), "lr": 1e-3},
    {"params": [p for n,p in model.named_parameters() if "fc" not in n and p.requires_grad], "lr": 1e-4}
], weight_decay=1e-4)
```

---

## 3. 성능 개선 기법
- **Batch Normalization**: 각 채널 평균·분산 정규화 → 학습 안정화, 기울기 소실 완화.
- **ReLU**: 음수=0, 양수=그대로 → 계산 단순, 기울기 소실 문제 완화.
- **Optimizer 선택**:
  - Adam: 빠르고 안정적.
  - AdamW: weight decay 적용으로 성능 개선.
  - RAdam: 안정적 수렴.
  - 실무 팁: 작은 데이터 → AdamW, 큰 배치 → LARS/LAMB 고려.
- **Mixed Precision 학습**: FP16으로 연산 → 속도·메모리 효율 ↑.
- **Data Augmentation**: Random crop, flip, MixUp, CutMix 등.
- **Regularization**: Dropout, weight decay, label smoothing.

---

## 4. 네트워크 구조 발전

### VGG-16
- 3×3 작은 필터 반복.
- 큰 필터보다 작은 필터 여러 번 → 파라미터 효율성 ↑, 비선형성 ↑.
- 단순하고 해석 쉬워 연구 기준 모델로 활용.

### ResNet
- **Residual Block (skip connection)**: 출력 = F(x) + x.
- 기울기 소실 문제 해결 → 152층 이상도 학습 가능.
- 너무 깊으면 성능 저하 가능.

### Inception v4
- 다양한 크기 필터(1×1, 3×3, 5×5) 병렬 적용.
- 1×1 conv로 채널 수 줄여 연산량 감소.
- 여러 스케일의 특징을 동시에 추출.

### EfficientNet
- **Depth, Width, Resolution**을 균형 있게 조정.
- 단순히 깊게/넓게만 하는 게 아니라 최적 비율을 찾음.
- B0~B7 모델로 확장.

---

## 5. 실무 체크리스트 (Transfer Learning 적용 시)
- 데이터 양: 적으면 head만, 많으면 fine-tune.
- 도메인 차이: 크면 더 많이 fine-tune.
- 배치 사이즈/하드웨어: BN 대신 GroupNorm 고려.
- 학습률 스케줄러: Cosine annealing, OneCycle 권장.
- 평가 지표: Accuracy, F1, AUC 등 미리 설정.
- 버전 관리: 사전학습 가중치와 하이퍼파라미터 기록 필수.

---

## 6. 핵심 요약
- **전이학습**: 기존 학습된 모델 활용 → 빠르고 효율적 학습.
- **성능 개선 기법**: BatchNorm, ReLU, Optimizer 선택.
- **네트워크 발전 흐름**:
  - VGG → 작은 필터 반복
  - ResNet → Residual Block으로 깊은 네트워크 가능
  - Inception → 다양한 필터 병렬 적용
  - EfficientNet → 깊이·너비·해상도의 균형 최적화

---

👉 이렇게 정리하면 CNN 발전 흐름과 전이학습의 의미가 한눈에 들어옵니다.  
원하시면 제가 이 내용을 **도식화(예: CNN 발전 계보도)**로 시각화해서 추가해드릴 수도 있어요.  

혹시 블로그 포스팅에 **계보도/구조 다이어그램**을 넣는 게 좋을까요, 아니면 텍스트 중심으로만 정리하는 게 더 원하시는 방향일까요?
