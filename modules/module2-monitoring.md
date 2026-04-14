---
title: Module 2 — System Monitoring & Diagnostics
nav_order: 2
parent: Modules
---

# Module 2 — System Monitoring & Diagnostics

## Overview
This module covers the essential tools and commands used to monitor, diagnose, and troubleshoot OpenVMS systems. Topics include SHOW commands, MONITOR utilities, error log analysis, process states, and basic SDA usage.

---

## Exam: Multiple‑Choice Questions

1. **Which command displays all devices, including disks, tapes, and virtual devices, along with their current status?**  
   - A. SHOW VOLUME  
   - B. SHOW SYSTEM  
   - C. SHOW DEVICE  
   - D. SHOW STORAGE  

2. **Which utility is used to examine low‑level system structures such as process control blocks and locks?**  
   - A. ANALYZE/SYSTEM  
   - B. MONITOR SYSTEM  
   - C. SHOW PROCESS/FULL  
   - D. ANALYZE/ERROR  

3. **Which command displays the current CPU usage, process count, and system load?**  
   - A. SHOW PROCESS  
   - B. MONITOR SYSTEM  
   - C. SHOW CPU  
   - D. SHOW PERFORMANCE  

4. **Which command shows the most recent entries from the system error log?**  
   - A. SHOW EVENT  
   - B. SHOW LOG/ERROR  
   - C. SHOW ERROR  
   - D. SHOW MESSAGE  

5. **Which process state indicates that a process is waiting for a resource such as a lock or I/O completion?**  
   - A. COM  
   - B. LEF  
   - C. HIB  
   - D. CUR  

---

## Hands‑On Exercises

### **Exercise 1 — Inspect System Devices**
1. List all devices on the system:  
   `SHOW DEVICE`
2. Identify:  
   - Mounted volumes  
   - Tape drives  
   - Virtual devices  
   - Offline devices  

---

### **Exercise 2 — Monitor System Performance**
1. Run the system monitor:  
   `MONITOR SYSTEM`
2. Observe:  
   - CPU usage  
   - Process count  
   - Interrupt rate  
   - Balance between kernel/user mode  

---

### **Exercise 3 — Examine Processes**
1. Display all processes:  
   `SHOW SYSTEM`
2. Display full details of a specific process:  
   `SHOW PROCESS/FULL <pid or name>`
3. Identify:  
   - Current state  
   - Priority  
   - CPU time  
   - Working set size  

---

### **Exercise 4 — Review Error Logs**
1. Display recent system errors:  
   `SHOW ERROR`
2. Extract error log to a file:  
   `ANALYZE/ERROR/OUTPUT=ERR.TXT`
3. Identify:  
   - Disk errors  
   - Network errors  
   - Hardware faults  

---

### **Exercise 5 — Use SDA for Basic Inspection**
1. Enter SDA:  
   `ANALYZE/SYSTEM`
2. Run:  
   - `SHOW PROCESS`  
   - `SHOW LOCKS`  
   - `SHOW SUMMARY`  
3. Exit SDA:  
   `EXIT`

---

## Scenario‑Based Troubleshooting Challenges

### **Scenario 1 — High CPU Usage**
Users report the system is slow.  
You must identify the process consuming CPU.

**Expected approach:**  
- `MONITOR SYSTEM`  
- `SHOW SYSTEM`  
- `SHOW PROCESS/FULL`  

---

### **Scenario 2 — Disk Errors**
A volume is intermittently failing.  
You must confirm whether hardware errors are occurring.

**Expected approach:**  
- `SHOW ERROR`  
- `ANALYZE/ERROR`  
- `SHOW DEVICE/FULL`  

---

### **Scenario 3 — Hung Process**
A batch job appears stuck.  
You must determine why.

**Expected approach:**  
- Check process state (LEF, HIB, CUR)  
- Check locks via SDA  
- Check I/O wait via SHOW PROCESS/FULL  

---

## Answer Key
The answer key for this module is located at:  
`answers/module2-answers.md`
