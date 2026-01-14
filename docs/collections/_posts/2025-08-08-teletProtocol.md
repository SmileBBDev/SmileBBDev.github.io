---
layout: post
title: "가상머신과 talnet 프로토콜"
categories: ["Backend","python_backend"]
date: 2025-08-08 09:10:00 +0900
description: >-
  가상머신과 telnet 프로토콜
tags:
  - database
  - sql
image: /images/postImg/backend_landspace.png
---

## OSI 7계층과 클라우드 기반 DB 실습 (PyMySQL)

**네트워크 기본 구조(OSI 7 Layer)**와 **클라우드 환경에서 MySQL 설치 및 PyMySQL 활용**을 정리합니다.  
네트워크 이해 → DB 설치 → PyMySQL 연결 → 클래스 기반 프로그램으로 확장하는 흐름입니다.  

---

## OSI 7 Layer

| 계층 | 역할 |
| --- | --- |
| 물리 계층 | 전기적·기계적·기능적 특성을 이용해 실제 데이터 전송 |
| 데이터 링크 계층 | 프레임 단위(1500byte)로 나눠 전송, MAC 주소 관리 |
| 네트워크 계층 | IP 주소 관리, 패킷 단위 전송 |
| 전송 계층 | TCP/UDP, 데이터 신뢰성 보장 |
| 세션 계층 | 연결 상태 유지 및 해제 |
| 표현 계층 | 데이터 압축, 암호화, 형식 변환 |
| 응용 계층 | 사용자와 직접 상호작용 (HTTP, FTP, SMTP, DNS 등) |

```text
┌──────────────┐
│ 응용 계층    │ ← 사용자와 직접 상호작용 (HTTP, FTP 등)
├──────────────┤
│ 표현 계층    │ ← 데이터 압축, 암호화, 형식 변환
├──────────────┤
│ 세션 계층    │ ← 연결 설정, 유지, 종료
├──────────────┤
│ 전송 계층    │ ← TCP/UDP, 데이터 신뢰성 보장
├──────────────┤
│ 네트워크 계층│ ← IP 주소, 라우팅, 패킷 전달
├──────────────┤
│ 데이터 링크 계층│ ← MAC 주소, 프레임 전송, 오류 제어
├──────────────┤
│ 물리 계층    │ ← 전기 신호, 케이블, 실제 전송
└──────────────┘
```

OSI 7계층은 TCP/IP 4계층으로 단순화되기도 함.

---

## 클라우드와 네트워크

### 클라우드
- **쿠버네티스(Kubernetes)**: 시스템을 연결해 네트워크 통신 가능, 스케일링 및 로드밸런싱 지원  
- **클라우드 서비스 종류**  
  - IaaS: OS, DB 직접 설치 (예: Ubuntu + MySQL)  
  - PaaS: 플랫폼 제공 (예: App Engine)  
  - SaaS: 소프트웨어 서비스 제공 (예: Firebase)  
- 주요 클라우드: **GCP, Azure, AWS**  

### 네트워크 접속
- **Telnet/Putty**: 원격 접속 도구  
- **SSH (Secure Shell)**: 공개키/개인키 기반 보안 접속  
- **방화벽 규칙**: 외부 접속 허용을 위해 설정 필요  

---

## GCP에서 MySQL 설치 실습

1. **인스턴스 생성**  
   - 외부 IP 할당 → SSH 접속  

2. **리눅스 기본 명령어**  
   - `ls`, `ls -al` : 파일 목록 확인  
   - `cd`, `cd ..` : 디렉토리 이동  
   - `pwd` : 현재 위치 확인  
   - 주요 디렉토리: `/home`, `/bin`, `/etc`, `/lib`, `/var`  

3. **MySQL 설치 및 관리**  
   ```bash
   sudo apt upgrade -y
   sudo apt install mysql-server -y
   sudo systemctl status mysql
   sudo systemctl stop mysql
   sudo systemctl start mysql
   sudo systemctl restart mysql
   ```

4. **MySQL 초기화**  
   ```bash
   sudo mysql_secure_installation
   ```
   - 비밀번호 정책 설정  
   - 익명 사용자 삭제  
   - 원격 root 접속 허용 여부  
   - test DB 삭제  
   - 권한 테이블 리로드  

5. **사용자 생성 및 권한 부여**  
   ```sql
   CREATE USER 'acorn'@'%' IDENTIFIED BY 'acorn1234';
   GRANT ALL PRIVILEGES ON *.* TO 'acorn'@'%';
   FLUSH PRIVILEGES;
   ```

6. **설정 파일 수정**  
   ```bash
   cd /etc/mysql/mysql.conf.d/
   sudo vi mysqld.cnf
   sudo systemctl restart mysql
   ```

---

## PyMySQL 연결 구조

- **Connection 객체**  
  - `commit()`, `rollback()`, `cursor()`  

- **Cursor 객체**  
  - `execute()`, `fetchone()`, `fetchmany(n)`, `fetchall()`  
  - 결과 반환: 튜플(기본), 리스트(수정 가능), 딕셔너리(검색 유리)  
  - `cursor.description`으로 컬럼 구조 확인  

- **트랜잭션 처리**  
  - Auto Commit ON → 즉시 반영, 취소 불가  
  - Auto Commit OFF → `commit()`/`rollback()`으로 제어  

---

## 정리

- OSI 7계층은 네트워크 데이터 흐름을 이해하는 기본 구조  
- 클라우드(GCP)에서 MySQL 설치 → 사용자 생성 → 방화벽 설정 → 외부 접속 가능  
- PyMySQL은 **Connection + Cursor 객체**로 DB와 상호작용  
- 클래스 기반 프로그램으로 DB 데이터를 가져와 출력하는 실습 진행  
