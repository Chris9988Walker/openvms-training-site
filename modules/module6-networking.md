---
title: Module 6 — Networking & Cluster Operations
nav_order: 6
parent: Modules
---

# Module 6 — Networking & Cluster Operations

## Overview
This module covers OpenVMS networking fundamentals, including TCP/IP Services, DECnet basics, cluster membership, SYSMAN cluster operations, lock management, and shared file access behavior. You’ll learn how to inspect network configuration, diagnose connectivity issues, and understand how OpenVMS clusters coordinate resources.

---

## Exam: Multiple‑Choice Questions

<div class="quiz-question">
  <p><strong>1. Which command displays the current TCP/IP network interfaces and their status?</strong></p>
  <label><input type="radio" name="m6q1" value="A"> SHOW NETWORK</label><br>
  <label><input type="radio" name="m6q1" value="B"> TCPIP SHOW INTERFACE</label><br>
  <label><input type="radio" name="m6q1" value="C"> SHOW DEVICE/NETWORK</label><br>
  <label><input type="radio" name="m6q1" value="D"> NETSTAT/SHOW</label><br>
  <button class="check-answer" data-question="m6q1" data-correct="B">Check Answer</button>
  <p id="m6q1-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>2. Which utility is used to manage cluster‑wide parameters and operations?</strong></p>
  <label><input type="radio" name="m6q2" value="A"> SYSGEN</label><br>
  <label><input type="radio" name="m6q2" value="B"> SYSMAN</label><br>
  <label><input type="radio" name="m6q2" value="C"> AUTHORIZE</label><br>
  <label><input type="radio" name="m6q2" value="D"> CLUSTER_CONFIG</label><br>
  <button class="check-answer" data-question="m6q2" data-correct="B">Check Answer</button>
  <p id="m6q2-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>3. Which command displays the current node’s cluster membership status?</strong></p>
  <label><input type="radio" name="m6q3" value="A"> SHOW CLUSTER</label><br>
  <label><input type="radio" name="m6q3" value="B"> SHOW SYSTEM/CLUSTER</label><br>
  <label><input type="radio" name="m6q3" value="C"> SHOW NODE</label><br>
  <label><input type="radio" name="m6q3" value="D"> SHOW MEMBERSHIP</label><br>
  <button class="check-answer" data-question="m6q3" data-correct="A">Check Answer</button>
  <p id="m6q3-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>4. Which protocol is responsible for lock management in an OpenVMS cluster?</strong></p>
  <label><input type="radio" name="m6q4" value="A"> TCP/IP</label><br>
  <label><input type="radio" name="m6q4" value="B"> DECnet</label><br>
  <label><input type="radio" name="m6q4" value="C"> Distributed Lock Manager (DLM)</label><br>
  <label><input type="radio" name="m6q4" value="D"> LAT</label><br>
  <button class="check-answer" data-question="m6q4" data-correct="C">Check Answer</button>
  <p id="m6q4-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>5. Which command displays active DECnet circuits?</strong></p>
  <label><input type="radio" name="m6q5" value="A"> NCP SHOW CIRCUIT</label><br>
  <label><input type="radio" name="m6q5" value="B"> DECNET SHOW LINKS</label><br>
  <label><input type="radio" name="m6q5" value="C"> NET SHOW DECNET</label><br>
  <label><input type="radio" name="m6q5" value="D"> SHOW NETWORK/DECNET</label><br>
  <button class="check-answer" data-question="m6q5" data-correct="A">Check Answer</button>
  <p id="m6q5-feedback" class="quiz-feedback"></p>
</div>
---

## Hands‑On Exercises

### **Exercise 1 — Inspect TCP/IP Configuration**
1. Display network interfaces:  
   `TCPIP SHOW INTERFACE`
2. Display routing table:  
   `TCPIP SHOW ROUTE`
3. Display active services:  
   `TCPIP SHOW SERVICE`

---

### **Exercise 2 — Test Network Connectivity**
1. Ping another node:  
   `PING <hostname>`
2. Test TCP port connectivity:  
   `TCPIP TELNET <host> <port>`
3. Resolve a hostname:  
   `TCPIP NSLOOKUP <hostname>`

---

### **Exercise 3 — Inspect Cluster Membership**
1. Display cluster nodes:  
   `SHOW CLUSTER`
2. Display cluster state:  
   `SHOW SYSTEM/CLUSTER`
3. Identify:  
   - Node names  
   - Voting configuration  
   - Quorum status  

---

### **Exercise 4 — Use SYSMAN for Cluster Operations**
1. Enter SYSMAN:  
   `RUN SYS$SYSTEM:SYSMAN`
2. Set environment to cluster:  
   `SET ENVIRONMENT/CLUSTER`
3. Display cluster parameters:  
   `DO SHOW PARAMETER`
4. Exit SYSMAN:  
   `EXIT`

---

### **Exercise 5 — Inspect DECnet Configuration**
1. Display DECnet circuits:  
   `NCP SHOW CIRCUIT`
2. Display DECnet executor status:  
   `NCP SHOW EXECUTOR`
3. Display known nodes:  
   `NCP SHOW KNOWN NODES`

---

## Scenario‑Based Troubleshooting Challenges

### **Scenario 1 — Node Cannot Join Cluster**
A node boots but fails to join the cluster.

**Expected approach:**  
- Check cluster interconnect  
- Check `SHOW CLUSTER` from another node  
- Verify voting/quorum  
- Check DECnet or TCP/IP cluster transport  
- Inspect error log  

---

### **Scenario 2 — Network Latency Between Nodes**
Users report slow access to shared files.

**Expected approach:**  
- Check network interface errors  
- Check DECnet circuit counters  
- Check TCP/IP retransmissions  
- Check DLM lock contention  
- Monitor disk I/O on shared volumes  

---

### **Scenario 3 — DECnet Communication Failure**
A node cannot communicate with DECnet peers.

**Expected approach:**  
- `NCP SHOW EXECUTOR`  
- `NCP SHOW CIRCUIT`  
- Check line state  
- Check address conflicts  
- Check routing  

---

## Answer Key
The answer key for this module is located at:  
`answers/module6-answers.md`
<script src="/assets/js/quiz.js"></script>
