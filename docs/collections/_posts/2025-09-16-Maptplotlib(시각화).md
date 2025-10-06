---
layout : post
title : "Maptplotlib 시각화"
categories: ["Data / AI","python_data"]
date : 2025-09-16 09:10:00 +0900
description: >-
  Maptplotlib를 활용하여 데이터 시각화를 학습
tags:
  - Numpy
  - python
  - Pandas
image: /images/postImg/dataAi_landspace.png
---

## 시각화
### 🧠 이미지 데이터 시각화

| 포맷 | 설명 | 시각화 방법 |
| --- | --- | --- |
| **2D 이미지** | 일반적인 이미지 (jpg, png 등) | `imshow()` |
| **3D 이미지** | CT, MRI 등 (2D 이미지 여러 장) | 슬라이스로 시각화 |
| **DICOM** | 의료 영상 포맷, 송수신용 | `pydicom` + `imshow()` |
| **Nifti (.nii)** | 3D 의료 이미지 분석용 | `nibabel` + 넘파이 + `imshow()` |

> 대부분의 이미지 데이터는 넘파이 배열(ndarray)로 변환 후 시각화

### 🧰 시각화 도구별 특징

| 도구 | 설명 | 장점 |
| --- | --- | --- |
| **Matplotlib** | 가장 기본적인 시각화 라이브러리 | 커스터마이징 자유도 높음 |
| **Pandas `.plot()`** | 간단한 시각화용 래퍼 | 빠르게 시각화 가능 |
| **Seaborn** | 통계적 시각화에 특화 | 자동 스타일, 관계 시각화에 강함 |

## 시각화 목적
### 🎨 무엇을 표현하고 싶은가?

| 목적 | 설명 | 대표 시각화 |
| --- | --- | --- |
| **Correlation (상관관계)** | 변수 간 관계 확인 | 산점도, 히트맵 |
| **Deviation (편차)** | 기준값과의 차이 | 선 그래프, 박스플롯 |
| **Ranking (순위)** | 값의 크기 비교 | 막대그래프 |
| **Distribution (분포)** | 데이터가 어디에 몰려 있는지 | 히스토그램, 커널밀도 |
| **Composition (구성비율)** | 전체 중 각 항목의 비율 | 파이차트, 도넛차트 |
| **Change (변화)** | 시간에 따른 변화 | 시계열 그래프, 선 그래프 |
| **Groups (그룹 비교)** | 그룹 간 차이 | 박스플롯, 그룹 막대그래프 |

### 🕰️ 시각화 방법 정리

| 목적 | 시각화 방법 | 예시 함수 |
| --- | --- | --- |
| **시간 변화** | 선 그래프, 누적 그래프, 막대 그래프,  점/선 그래프 - 변화 구성 | `plot()`, `bar()` |
| **분포** | 히스토그램, 트리맵, 파이토치, 도넛차트, 누적 연속 그래프 - 구성, 형태 | `hist()`, `seaborn.kdeplot()` |
| **관계** | 산점도, 히트맵, 버블차트 - 상관구성 | `scatter()`, `seaborn.heatmap()` |
| **비교** | 그룹 막대, MDS(다차원 척도법), 히트맵, 스타차트 | `bar()`, `seaborn.boxplot()` |
| **공간** | CIS, contour | `contour()`, `imshow()` |

### 📁 범주형 데이터

- `bar()`: 막대그래프
- `pie()`: 파이차트
- `stem()`, `step()`: 계단형 그래프

### 📈 연속형 데이터

- `plot()`: 선 그래프
- `hist()`: 히스토그램
- `scatter()`: 산점도
- `boxplot()`: 박스플롯
- `contour()`, `imshow()`: 이미지/등고선

### 🧬 3D 시각화

- `scatter3D()`: 3D 산점도
- `plot_surface()`: 면 시각화
- `plot_wireframe()`: 선만 출력

### 🎞️ 애니메이션

- `FuncAnimation`으로 동적 시각화 가능

---

## 🖼️ Matplotlib의 구조 이해

Matplotlib은 두 가지 방식으로 시각화

### 1. 상태기반 (Stateful)

- `matplotlib.pyplot` 사용
- 내부적으로 현재 figure와 axes를 기억
- 간단한 코드로 빠르게 시각화

```python
import matplotlib.pyplot as plt
plt.plot([1, 2, 3], [4, 5, 6])
plt.show()

```

### 2. 무상태기반 (Stateless, OOP 방식)

- 객체를 직접 생성하고 관리 (객체 = figure와 axes 등)
- 복잡한 시각화에 적합

```python
fig, ax = plt.subplots()
ax.plot([1, 2, 3], [4, 5, 6])
plt.show()

```

### 3. 그래픽 구성 요소

| 구성 요소 | 설명 |
| --- | --- |
| **Figure** | 전체 도화지, 화면분할, 사이즈 |
| **Axes** | 실제 그래프가 그려지는 공간 (축/점/선/마커/레이블/범례가 그려지는 곳) |
| **Axis** | x축, y축 |
| **Spines** | 축의 테두리 |
| **그래픽 객체** | 점, 선, 마커 등 |
| **속성** | 색상, 폰트, 선 스타일 등 |

---

### 🔗 Matplotlib와 넘파이&판다스의 연결

- **넘파이**: 이미지, 수치 데이터 → `ndarray`로 저장
- **판다스**: 표 형태 데이터 → `DataFrame`으로 저장
- **Matplotlib**: 넘파이/판다스 데이터를 시각화
- **Seaborn**: 판다스 데이터프레임 기반 고급 시각화
