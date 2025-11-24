---
layout: post
title: "파이썬 자료구조 - 선형/비선형 자료구조"
categories: ["Programming","python_prog"]
date: 2025-07-24 10:00:00 +0900
description: >-
  파이썬의 list기반 선형/비선형 자료구조에 대해 학습
tags:
  - python
image: /images/postImg/programming_landspace.png
---

## 선형/비선형 자료구조
리스트는 스택, 큐, 트리, 그래프 같은 자료구조의 기반이 될 수 있음

**선형 - stack, queue** : 순서대로 처리하는 것

**비선형 - trees, graphs**

### 선형 구조 - 데이터가 순차적으로 연결되어 있는 구조

**Stack(스택) - 후입선출(LIFO)** last in first out 구조

- Stack에 데이터를 넣어 - 데이터를 제일 먼저 넣은 애가 나중에 나옴
- 리스트 기반으로 구현가능
- 시스템에서 stack용도로 사용하고, 계산기를 사용할 때 많이 사용

**Queue(큐)** - **선입선출(FIFO)** first in frist out구조

- 대기열이라고 부름
- 속도 불균형을 맞추기 위해서 사용

**<stack(스택)과 queue(큐)를 한번에 정리하기>**

- 똑같은 메모리형 자료구조이고, 리스트로 데이터를 저장하는데

- 규칙을 정해 놓은 거, 맨 먼저 들어간 게 맨 마지막에 나온다 - Stack

- 맨 마지막에 들어간 게 맨 마지막에 나온다 - Queue

### 비선형 구조 - 데이터가 복잡한 관계로 연결된 구조

**Tree -** 계층적 구조, 단 방향으로 확장

- 부모-자식으로 데이터 확장
- 이진 트리(Binary Tree) : 노드당 자식 최대 2개
- B Tree: 가지가 너무 많아지니까 범위를 지정해서 사용, 데이터 베이스에서 많이 사용
- 고속 검색을 위해 사용

**graphs** (그래프): 딥러닝에서 나오는 개념, 양방향으로 확장

- 노드 간의 복잡한 연결 관계
- 데이터 연산의 구조를 복잡하게 만들었을 때, 데이터 흐름이 연결되기 전 까지 연산 정지 (분산한 데이터를 하나의 노드에 연결하기 전까진 멈춰있어, 연결이 되고 나면 다음 단계로 넘어 감)
    
    자세한 개념은 나중에 배울 예정
    
- 딥러닝, 네트워크 분석 등에서 핵심 구조로 단방향, 양방향 모두 가능

<!-- <코드 예시로 살펴보기>

🧮 1. Stack (스택) - LIFO 구조

```python

stack = []

# 데이터 넣기 (Push)
stack.append("A")
stack.append("B")
stack.append("C")

# 데이터 꺼내기 (Pop)
print(stack.pop())  # C
print(stack.pop())  # B
print(stack.pop())  # A
```

마지막에 넣은 게 가장 먼저 빠지는 구조

🚌 2. Queue (큐) - FIFO 구조

```python

from collections import deque

queue = deque()

# 데이터 넣기 (Enqueue)
queue.append("A")
queue.append("B")
queue.append("C")

# 데이터 꺼내기 (Dequeue)
print(queue.popleft())  # A
print(queue.popleft())  # B
print(queue.popleft())  # C
```

`deque`는 큐의 동작에 적합한 자료형이에요. 리스트보다 효율적!

🌳 3. Tree - 이진 트리 예제

```python

class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

# 트리 구성
root = Node("A")
root.left = Node("B")
root.right = Node("C")
root.left.left = Node("D")
root.left.right = Node("E")

# 중위 순회(In-order)
def inorder(node):
    if node:
        inorder(node.left)
        print(node.data)
        inorder(node.right)

inorder(root)
```

🔗 4. Graph - 인접 리스트 방식

```python

graph = {
    "A": ["B", "C"],
    "B": ["D"],
    "C": ["E"],
    "D": [],
    "E": []
}

# DFS 탐색
def dfs(node, visited=set()):
    if node not in visited:
        print(node)
        visited.add(node)
        for neighbor in graph[node]:
            dfs(neighbor, visited)

dfs("A")
``` -->