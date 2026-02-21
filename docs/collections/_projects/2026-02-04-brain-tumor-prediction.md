---
title: MRI 기반 뇌종양 예측 시스템
subtitle: MRI와 유전체 데이터를 통합한 멀티모달 AI CDSS
image: '/images/project-neuronova.png'
date: 2026-02-04 17:00:00 +0900
---

## « 프로젝트 개요 »

**MRI 기반 뇌종양 예측 시스템** 프로젝트는 **성인 확산성 신경교종(Diffuse Glioma)**의 진단 효율성을 높이기 위해 MRI 영상과 유전체(RNA, Protein) 데이터를 통합 분석하여 개발된 **멀티모달 AI 기반 임상 의사결정 지원 시스템(CDSS)**입니다.      
바이오메디컬 인공지능(AI) 교육과정의 최종 프로젝트로, **GCP 실서버에 배포하여 동작 가능한 웹 애플리케이션 수준**까지 완성하였습니다.

### ❓ 문제 해결 (Problem & Solution)
- **Problem**: 
    - MRI 판독에 전문 인력이 부족하여 판독이 최대 1주일까지 지연됨.
    - 영상 정보와 유전체(RNA/Protein) 정보가 파편화되어 있어 종합적인 판단이 어렵고 비일관적임.
- **Solution**: 
    - **One-Pipeline Integration**: 파편화된 병원 시스템(OCS, PACS, LIS)을 하나의 워크플로우로 통합.
    - **Multi-modal AI**: MRI(형태학적 분석)와 유전체(분자 생물학적 예후)를 통합 분석하여 의료진의 의사결정을 실시간으로 지원.

---

## « 프로젝트 정보 »

- **📅 기간**: 2025.12.08 ~ 2026.02.04 (약 2개월)
- **👥 팀명**: NeuroNova (총 4명)
- **🖥️ 프로젝트 성격**: 의료 AI 기반 임상 의사결정 지원 시스템(CDSS) · GCP 실서버 배포 완료
- **📄 산출물**: MRI·유전체 데이터 통합 분석 AI 모델(M1, MG, MM) 및 웹 기반 CDSS 프로토타입 완성 (실서버 배포·테스트 완료)
- **🔗 GitHub**: [brain\_tumor\_dev (프로젝트 저장소)](https://github.com/SmileBBDev/brain_tumor_dev)
- **🛠️ 기술 스택 요약**: Frontend(React+TypeScript), Backend(Django REST Framework, FastAPI), Infra(Docker, Redis, GCP)
- **👨‍💻 내 역할**: **Full Stack Developer (Backend & Frontend)** – 시스템 구조 설계, JWT 인증·권한 관리, 사용자 관리 UI/백엔드 연동 담당

### 팀 구성 및 역할 분담

| 구분 | 담당 영역 |
|:---|:---|
| **팀장** | 데이터 수집·전처리, AI 모델 아키텍처 설계 |
| **팀원1** | GCP 배포, 백엔드/프론트엔드 (영상 관리·환자 관리) |
| **팀원2** | AI 모델 엔지니어링, 백엔드, 일정 관리, 시스템 상세 설계 |
| **팀원3 (본인)** | **백엔드/프론트엔드 - 시스템 구조 설계, JWT 인증·권한 기반 메뉴 제어** |

---

## « 담당 역할 »

### 의료 도메인 기술 조사 및 시스템 설계

낯선 의료 시스템을 팀 전체가 빠르게 이해하고 개발을 시작할 수 있도록, 초기 기술 조사와 문서화를 전담했습니다.

- **OpenEMR & Orthanc(PACS) 연동 가이드 작성**: Docker 기반 실행 환경 구성부터 REST API 사용법까지 정리하여 팀 온보딩 비용 절감.
- **데이터베이스 설계**: OpenEMR 기반으로 시스템 전반의 데이터 구조 설계. 이후 사용자 모델, 권한 체계, 의료 데이터 관계의 기준이 됨.
- **서비스 스토리보드 설계**: 주요 화면 흐름과 사용자 경험을 정의하여 팀 개발 방향 통일.

---

### 프론트엔드 구조 설계 및 핵심 UI 구현

팀 공통 프론트엔드 기반을 구축하고, 서비스의 핵심 인터페이스를 직접 구현했습니다.

- **React + TypeScript 프로젝트 초기 세팅**: 팀 전체가 사용할 폴더 구조, 라우팅 전략, 공통 컴포넌트 설계.
- **역할 기반 동적 사이드바 구현**: 로그인한 사용자의 역할(Role)에 따라 서로 다른 메뉴가 표시되는 사이드바. 권한 관리 시스템의 시각적 진입점.
- **인증 흐름 구현**: 로그인 페이지, 세션 유지/만료 처리, 로그아웃 기능 전담 구현.
- **환자 관련 UI**: 환자 목록(검색·페이징 포함), 환자 상세 페이지 구현.

---

### 사용자 관리 기능 (프론트엔드 ↔ 백엔드 연결)

Django REST Framework(DRF)와 연동하여 사용자 관리 기능 전체를 독립적으로 구현했습니다.

- 사용자 조회 / 검색 / 페이징 / 생성 / 수정 / 비활성화(소프트 삭제) 전 과정 구현
- Account와 Profile을 별도 컴포넌트로 분리하여 관심사 분리 및 재사용성 확보
- 상세 조회를 모달에서 **독립 페이지로 전환** — UX 개선 및 URL 기반 접근 가능
- **프론트엔드 타입 ↔ DRF Serializer 구조 정합성 맞춤**: 타입 불일치로 인한 런타임 오류를 배포 전에 사전 차단

---

### 기술 이슈 해결

개발 과정에서 직접 버그를 발견하고 원인을 분석하여 해결했습니다.

| 이슈 | 원인 | 해결 |
|:---|:---|:---|
| Toast 메시지 중복 노출 | 동일 이벤트 핸들러에서 다중 호출 | 이벤트 흐름 분석 후 호출 시점 단일화 |
| Docker 환경에서 AI 추론 경로 오류 | `BASE_DIR`이 팀원 로컬 절대경로로 하드코딩 | 공통 상대경로로 교체하여 환경 독립적으로 수정 |
| GCP 배포 시 MySQL 포트 충돌 | 로컬 MySQL(3306)과 Docker MySQL(3306) 포트 중복 | Docker 컨테이너 포트를 `3307`로 변경하여 충돌 해결 |
| 전체 페이지 스타일 불일치 | 개발 초기 CSS 기준 부재 | 공통 스타일 기준 정의 후 페이지별 통일 적용 |

---

## « 기술 스택 (Tech Stack) »

| 구분 | 상세 기술 |
| :--- | :--- |
| **Backend** | Python, **Django 5.2**, **FastAPI**, MySQL 8.0 |
| **Frontend** | **React 19**, TypeScript, **Vite**, Material-UI 7 |
| **Visualization** | **Cornerstone.js** (DICOM 뷰어), **Three.js** (3D 볼륨 렌더링) |
| **Infra/Binding** | **Docker**, **Redis 7**, **Celery**, Nginx, **GCP (VM 배포)** |
| **AI/Data** | Orthanc (PACS), NumPy, Pandas, PyTorch |

---

## « 시스템 아키텍처 및 구현 (Engineering) »

![시스템 전체 아키텍처 구조도](/images/project/system.png){: width="1200" height="900"}

### 1. MSA & Docker 기반 인프라
- 기존 모놀리식 구조의 한계를 극복하기 위해 **MSA(Micro-Service Architecture)**를 도입.
- **Docker Container**로 각 서비스(Main Backend, AI Server, PACS, Redis)를 격리 배포하여 확장성(Scale-out)과 안정성 확보.

### 2. 고성능 의료 영상 렌더링 (Offscreen Rendering)
- 웹에서 고용량 DICOM 및 3D 모델을 다룰 때 발생하는 화면 깜빡임(Flickering) 문제 해결.
- **Memory Buffer**에서 영상을 미리 합성한 후 화면에 단일 Swap하는 **Offscreen Rendering** 기법 적용.

### 3. 하이브리드 통신 & 비동기 큐 (Redis Multi-Tasking)
- **Hybrid Communication**: 요청은 REST API로, 상태 알림 및 결과 전송은 **WebSocket**으로 처리하여 실시간성 확보.
- **Task Queue Isolation**: AI 모델별(M1, MG, MM)로 **Redis Queue**를 분리하여 특정 모델의 부하가 전체 시스템에 영향을 주지 않도록 로드 밸런싱 구현.

---

## « 핵심 AI 기술 (Core AI Technology) »

*AI 모델 설계 및 학습은 AI 엔지니어 팀원이 담당했으며, 본인은 해당 모델을 시스템에 통합하고 추론 파이프라인을 연결하는 역할을 맡았습니다.

본 프로젝트는 3가지 관점의 AI 모델을 유기적으로 결합하여 최적의 예후 예측을 수행합니다.

### 1. M1 모델 (MRI 기반 형태 분석)
- **기능**: MRI 4채널(T1, T2, T1CE, FLAIR)을 입력받아 종양 분할(Segmentation) 및 등급/예후 예측.
- **기술**: **Voxel Token 기반 Transformer Encoder**와 Shifted Window Attention을 사용하여 3D 볼륨의 국소/전역 특징을 동시에 학습.

![M1 모델 아키텍처 - MRI 기반 형태 분석](/images/project/M1-1.png){: width="1200" height="900"}

![M1 모델 아키텍처 - Voxel Token 기반 Transformer](/images/project/M1-2.png){: width="1200" height="900"}

### 2. MG 모델 (유전체 기반 예후 예측)
- **기능**: RNA-seq 데이터를 분석하여 생존 및 재발 가능성 예측.
- **기술**: **Dual-Track Feature Extraction**.
    - **Gene2Vec Encoder**: 유전자의 의미론적 특징 학습 (SVD로 노이즈 제거).
    - **DEG Pipeline**: 환자 군집별 차등 발현 유전자(DEG)를 분석하여 임상적 맥락 반영.

![MG 모델 아키텍처 - 유전체 기반 예후 예측](/images/project/MG-1.png){: width="1200" height="900"}

### 3. MM 모델 (Cross-Modal 통합 분석)
- **기능**: 영상과 유전체 정보를 결합하여 종합 예후 예측.
- **기술**: **One-Way Cross-Modal Attention**
    - MRI Feature를 Query(Q)로, RNA/Protein을 Key(K) & Value(V)로 사용하여, **"영상의 특정 병변이 어떤 유전자 변이와 연관되는지"**를 참조하는 구조 설계.

![MM 모델 아키텍처 - Cross-Modal 통합 분석](/images/project/MM-1.png){: width="1200" height="900"}

---

## « 성과 및 회고 »

### ✅ 본인 구현 성과
- **사용자 관리 시스템 단독 설계·구현**: 조회/검색/페이징/생성/수정/비활성화 전 과정을 프론트엔드(React)부터 백엔드(DRF) 연동까지 독립적으로 완성.
- **JWT 인증 + 역할 기반 메뉴 제어 구현**: 사용자 Role에 따라 접근 가능한 메뉴가 동적으로 변경되는 보안 접근 제어 시스템 구축.
- **Docker 환경 AI 추론 파이프라인 정상화**: `BASE_DIR` 하드코딩 문제를 발견·분석하여 공통 상대경로로 수정, 팀원 환경 관계없이 AI 추론이 정상 동작하도록 해결.
- **GCP 배포 환경 이슈 지원**: 로컬 MySQL과 Docker MySQL 간 포트 3306 충돌 문제를 분석하고 Docker 포트를 3307로 변경하여 GCP 서버 배포 정상화에 기여.

### 📊 프로젝트 전체 성과 (팀)
- **실서버 배포 완료**: GCP VM 환경에 Docker 기반 컨테이너로 배포하여 실제 동작 가능한 웹 애플리케이션 완성.
- **M1 모델**: Dice Score 0.77, IDH 변이 예측 AUC 0.88 달성 _(공개 데이터셋 기준)_.
- **MG 모델**: 재발 예측 AUC 0.85 달성 _(공개 데이터셋 기준)_.
- **시스템**: 비동기 처리 도입으로 AI 추론 대기 시간 체감 최소화.

### 💡 배운 점
- **의료 도메인 이해**: EMR, PACS처럼 낯선 시스템도 직접 문서화하고 팀에 공유하며 도메인 지식을 빠르게 내재화하는 경험.
- **프론트-백 정합성의 중요성**: TypeScript 타입과 DRF Serializer 구조를 맞추는 과정에서 런타임 오류를 사전에 차단하는 습관 형성.
- **팀 환경 차이에서 오는 버그**: 로컬에선 동작하지만 Docker에선 깨지는 경로 문제를 직접 해결하며 환경 독립적인 코드 작성의 중요성을 체득.

---

> "처음 의료 도메인 시스템(EMR, PACS)을 접했을 때는 낯설었지만, 빠르게 이해하고 문서화와 설계를 통해 팀의 온보딩을 이끌었습니다. 
>           
> 이에 더해 기존 역량을 의료 AI 시스템이라는 새로운 도메인에 적용하며, 기술이 실제 임상 문제를 해결하는 과정을 직접 경험할 수 있었습니다."

---
