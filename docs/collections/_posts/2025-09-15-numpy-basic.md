---
layout : post
title : "Numpy 기초"
categories: ["Data / AI","numpy"]
date : 2025-09-15 09:00:00 +0900
description: >-
  Numpy의 핵심 기능에 대해 학습
tags:
  - Numpy
  - python
  
image: /images/postImg/dataAi_landspace.png
---
## Numpy(넘파이)란?

- 넘파이는 파이썬에서 **과학적 계산**과 **수치 연산**을 빠르고 효율적으로 처리하기 위한 기초 라이브러리

- 다차원 배열(ndarray)을 중심으로 작동
- 수학/통계/선형대수 등 다양한 기능을 제공
- 많은 데이터 분석과 머신러닝 라이브러리들 제작의 기반
  예) Scipy(사이파이), Pandas, Scikit-learn, TensorFlow 등

---

## 넘파이 핵심 : ndarry(N차원 배열)
- ndarry는 넘파이의 가장 중요한 구조
- ndarry는 **다차원 배열 객체**
- ndarry를 이용하여 벡터/행렬/텐서 같은 수학구조를 쉽게 사용

| 구조 | 설명 | 예시 |
| --- | --- | --- |
| 1차원 | 벡터 | [1, 2, 3] |
| 2차원 | 행렬 | [[1, 2], [3, 4]] |
| 3차원 이상 | 텐서 | [[[1], [2]], [[3], [4]]] |