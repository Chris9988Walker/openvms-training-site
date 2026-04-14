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

<div class="quiz-question">
  <p><strong>1. Which command displays I/O, CPU, and process information for devices?</strong></p>
  <label><input type="radio" name="m2q1" value="A"> SHOW SYSTEM</label><br>
  <label><input type="radio" name="m2q1" value="B"> SHOW PROCESS/ALL</label><br>
  <label><input type="radio" name="m2q1" value="C"> SHOW DEVICE</label><br>
  <label><input type="radio" name="m2q1" value="D"> MONITOR IO</label><br>
  <button class="check-answer" data-question="m2q1" data-correct="C">Check Answer</button>
  <p id="m2q1-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>2. Which utility provides low-level system analysis and crash dump examination?</strong></p>
  <label><input type="radio" name="m2q2" value="A"> ANALYZE/SYSTEM</label><br>
  <label><input type="radio" name="m2q2" value="B"> MONITOR SYSTEM</label><br>
  <label><input type="radio" name="m2q2" value="C"> SHOW ERROR</label><br>
  <label><input type="radio" name="m2q2" value="D"> SDA/CRASH</label><br>
  <button class="check-answer" data-question="m2q2" data-correct="A">Check Answer</button>
  <p id="m2q2-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>3. Which command provides a rolling view of system performance metrics?</strong></p>
  <label><input type="radio" name="m2q3" value="A"> SHOW SYSTEM</label><br>
  <label><input type="radio" name="m2q3" value="B"> MONITOR SYSTEM</label><br>
  <label><input type="radio" name="m2q3" value="C"> ANALYZE/SYSTEM</label><br>
  <label><input type="radio" name="m2q3" value="D"> SHOW MEMORY</label><br>
  <button class="check-answer" data-question="m2q3" data-correct="B">Check Answer</button>
  <p id="m2q3-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>4. Which command displays recent hardware and system error log entries?</strong></p>
  <label><input type="radio" name="m2q4" value="A"> SHOW LOG</label><br>
  <label><input type="radio" name="m2q4" value="B"> ANALYZE/ERROR</label><br>
  <label><input type="radio" name="m2q4" value="C"> SHOW ERROR</label><br>
  <label><input type="radio" name="m2q4" value="D"> MONITOR ERROR</label><br>
  <button class="check-answer" data-question="m2q4" data-correct="C">Check Answer</button>
  <p id="m2q4-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>5. Which type of image is typically used for performance monitoring tools?</strong></p>
  <label><input type="radio" name="m2q5" value="A"> EXE</label><br>
  <label><input type="radio" name="m2q5" value="B"> LEF</label><br>
  <label><input type="radio" name="m2q5" value="C"> SYS</label><br>
  <label><input type="radio" name="m2q5" value="D"> DMP</label><br>
  <button class="check-answer" data-question="m2q5" data-correct="B">Check Answer</button>
  <p id="m2q5-feedback" class="quiz-feedback"></p>
</div>
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
<script src="/assets/js/quiz.js"></script>
