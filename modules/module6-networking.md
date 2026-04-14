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

1. **Which command displays the current TCP/IP network interfaces and their status?**  
   - A. SHOW NETWORK  
   - B. TCPIP SHOW INTERFACE  
   - C. SHOW DEVICE/NETWORK  
   - D. NETSTAT/SHOW  

2. **Which utility is used to manage cluster‑wide parameters and operations?**  
   - A. SYSGEN  
   - B. SYSMAN  
   - C. AUTHORIZE  
   - D. CLUSTER_CONFIG  

3. **Which command displays the current node’s cluster membership status?**  
   - A. SHOW CLUSTER  
   - B. SHOW SYSTEM/CLUSTER  
   - C. SHOW NODE  
   - D. SHOW MEMBERSHIP  

4. **Which protocol is responsible for lock management in an OpenVMS cluster?**  
   - A. TCP/IP  
   - B. DECnet  
   - C. Distributed Lock Manager (DLM)  
   - D. LAT  

5. **Which command displays active DECnet circuits?**  
   - A. NCP SHOW CIRCUIT  
   - B. DECNET SHOW LINKS  
   - C. NET SHOW DECNET  
   - D. SHOW NETWORK/DECNET  

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
