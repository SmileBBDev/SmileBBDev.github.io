---
layout : post
title : "cloud와 service 구조"
categories: ["Backend","python_backend"]
date : 2025-08-14 17:29:30 +0900
description: >-
  cloud와 service 구조학습
tags:
  - cloud
  - service
  
image: /images/postImg/dataAi_landspace.png
---

## Cloud & Service 구조 정리 (Python, Flask, DB, HTML, JS)

### 1. 기본 개념
- **Client ↔ Server ↔ DB 구조**
  - Client → Request → Web Server(Flask) → DB
  - Client ← Response (HTTP) ← DB
- **WAS(Web Application Server)**  
  - Flask도 WAS 역할을 수행 (데이터를 다루는 서버)
- **Web Server 종류**  
  - Apache, Nginx, IIS  
  - 특히 **Nginx**는 클래스 기반, 멀티쓰레드 구조 → 속도가 빠름

---

### 2. 서버 3단계 구축
1. **Nginx** : 외부 요청을 받는 웹 서버  
2. **Gunicorn** : WSGI 서버, Flask와 Nginx를 연결  
3. **Flask** : 실제 애플리케이션 로직 처리  

👉 구조: **Nginx ⇄ Gunicorn ⇄ Flask**

---

### 3. 개발환경과 배포
- **개발환경(dev)**  
  - 가상환경(Virtual Environment)에서 개발  
  - `freeze requirements` → 동일한 환경을 배포 서버에 재현
- **배포(Deploy)**  
  - Gunicorn / FTP 활용  
  - VM(Virtual Machine) 위에서 실행
- **서비스환경(prod)**  
  - 실제 운영 서버에서 서비스 제공

---

### 4. 포트 번호 정리

| 서비스 | 포트번호 | 설명 |
|--------|----------|------|
| Web Server (HTTP) | 80 | 기본 웹 서비스 |
| HTTPS | 443 | 보안 통신 (SSL/TLS) |
| Telnet | 21, 22 | 원격 접속 (22는 보안 SSH) |
| Flask | 5000 | 개발용 기본 포트 |
| Gunicorn | 8000 | WSGI 서버 포트 |

🔑 서버는 특정 포트에서 **대기(listen)** 하고 있다가 연결을 받아 처리한다.  
특히 **443 포트**는 암호화된 데이터를 주고받으며, 키 등록을 통해 보안이 유지된다.

---

### 5. 통신 방식
- **Form 통신** : 기본적인 HTML form 요청/응답
- **AJAX 통신** : 비동기 요청으로 페이지 새로고침 없이 데이터 교환 가능

---

### 6. 프로젝트 과제 아이디어
- **DB 관리 페이지 제작**  
  - Flask 기반 웹 애플리케이션에 MariaDB 연결  
  - CRUD(Create, Read, Update, Delete) 기능 구현
- **자유 주제 프로젝트 → 웹 서비스 변환**  
  - 기존에 만든 프로그램/알고리즘을 웹에서 실행 가능하게 변환  
  - 도메인 연결까지 고려

---

### 7. 핵심 기술 스택
- **Python + Flask** : 서버 애플리케이션
- **HTML + JavaScript (AJAX)** : 클라이언트 UI
- **MariaDB** : 데이터베이스
- **Nginx + Gunicorn** : 배포 및 서비스 환경
- **VM + Cloud** : 운영 환경

---

### 마무리
단순히 Flask 앱을 만드는 것을 넘어,  
**Cloud 환경에서 서비스 구조를 이해하고 직접 배포하는 경험**을 목표로 한다.  

👉 핵심은 **개발환경(dev)와 서비스환경(prod)을 동일하게 맞추는 것**  
👉 **구조와 기술 선택 이유**를 강조