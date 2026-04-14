---
title: Module 8 — System Startup, Shutdown & Configuration
nav_order: 8
parent: Modules
---

# Module 8 — System Startup, Shutdown & Configuration

## Overview
This module covers the OpenVMS startup and shutdown sequence, system parameter management, layered product startup, cluster boot behavior, and troubleshooting boot‑time failures. You’ll work with SYSMAN, SYSGEN, startup logs, and system configuration files.

---

## Exam: Multiple‑Choice Questions

<div class="quiz-question">
  <p><strong>1. Which file controls the system startup sequence on OpenVMS?</strong></p>
  <label><input type="radio" name="m8q1" value="A"> SYS$SYSTEM:STARTUP.COM</label><br>
  <label><input type="radio" name="m8q1" value="B"> SYS$MANAGER:SYSTARTUP_VMS.COM</label><br>
  <label><input type="radio" name="m8q1" value="C"> SYS$STARTUP:BOOTSTRAP.COM</label><br>
  <label><input type="radio" name="m8q1" value="D"> SYS$SYSTEM:INIT.COM</label><br>
  <button class="check-answer" data-question="m8q1" data-correct="B">Check Answer</button>
  <p id="m8q1-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>2. Which command cleanly shuts down an OpenVMS system?</strong></p>
  <label><input type="radio" name="m8q2" value="A"> STOP/ID=0</label><br>
  <label><input type="radio" name="m8q2" value="B"> SHUTDOWN</label><br>
  <label><input type="radio" name="m8q2" value="C"> SYS$SYSTEM:HALT</label><br>
  <label><input type="radio" name="m8q2" value="D"> SYSMAN SHUTDOWN</label><br>
  <button class="check-answer" data-question="m8q2" data-correct="B">Check Answer</button>
  <p id="m8q2-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>3. Which utility is used to modify system parameters such as memory, quotas, and I/O settings?</strong></p>
  <label><input type="radio" name="m8q3" value="A"> SYSMAN</label><br>
  <label><input type="radio" name="m8q3" value="B"> SYSGEN</label><br>
  <label><input type="radio" name="m8q3" value="C"> AUTHORIZE</label><br>
  <label><input type="radio" name="m8q3" value="D"> STARTUP</label><br>
  <button class="check-answer" data-question="m8q3" data-correct="B">Check Answer</button>
  <p id="m8q3-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>4. Which command displays the current system parameters?</strong></p>
  <label><input type="radio" name="m8q4" value="A"> SHOW PARAMETER</label><br>
  <label><input type="radio" name="m8q4" value="B"> SYSGEN SHOW</label><br>
  <label><input type="radio" name="m8q4" value="C"> SYSMAN SHOW PARAMETER</label><br>
  <label><input type="radio" name="m8q4" value="D"> SYSGEN&gt; SHOW</label><br>
  <button class="check-answer" data-question="m8q4" data-correct="D">Check Answer</button>
  <p id="m8q4-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>5. Which file contains layered product startup procedures?</strong></p>
  <label><input type="radio" name="m8q5" value="A"> SYS$STARTUP:PRODUCTS.COM</label><br>
  <label><input type="radio" name="m8q5" value="B"> SYS$MANAGER:SYCONFIG.COM</label><br>
  <label><input type="radio" name="m8q5" value="C"> SYS$MANAGER:SYSTARTUP_VMS.COM</label><br>
  <label><input type="radio" name="m8q5" value="D"> SYS$STARTUP:VMS$LAYERED.COM</label><br>
  <button class="check-answer" data-question="m8q5" data-correct="B">Check Answer</button>
  <p id="m8q5-feedback" class="quiz-feedback"></p>
</div>

---

## Hands‑On Exercises

### **Exercise 1 — Inspect Startup Files**
1. Display the main startup file:  
   `TYPE SYS$MANAGER:SYSTARTUP_VMS.COM`
2. Display layered product startup file:  
   `TYPE SYS$MANAGER:SYCONFIG.COM`
3. Identify:  
   - Custom startup commands  
   - Layered product initialization  
   - Cluster‑specific logic  

---

### **Exercise 2 — Review Startup Logs**
1. Display the startup log:  
   `TYPE SYS$MANAGER:STARTUP.LOG`
2. Identify:  
   - Errors  
   - Missing logical names  
   - Failed product startups  

---

### **Exercise 3 — Modify System Parameters**
1. Enter SYSGEN:  
   `RUN SYS$SYSTEM:SYSGEN`
2. Display parameters:  
   `SHOW`
3. Modify a parameter (lab only):  
   `SET/STARTUP WSMAX 204800`
4. Exit SYSGEN:  
   `EXIT`

---

### **Exercise 4 — Perform a Controlled Shutdown**
1. Run the shutdown procedure:  
   `@SYS$SYSTEM:SHUTDOWN`
2. Choose:  
   - Reason  
   - Reboot or halt  
   - Cluster‑wide or local  

---

### **Exercise 5 — Diagnose Boot Failures**
1. Review `OPERATOR.LOG`  
2. Review `STARTUP.LOG`  
3. Boot conversationally (lab only):  
   `BOOT -FL 0,1`  
4. Inspect startup sequence manually.

---

## Scenario‑Based Troubleshooting Challenges

### **Scenario 1 — System Hangs During Startup**
The system stops after a layered product loads.

**Expected approach:**  
- Review `STARTUP.LOG`  
- Temporarily disable product in `SYCONFIG.COM`  
- Boot conversationally  
- Re‑enable step‑by‑step  

---

### **Scenario 2 — Parameter Change Prevents Boot**
A parameter change causes boot failure.

**Expected approach:**  
- Boot conversationally  
- Use SYSGEN to revert parameter  
- Check `ALPHAVMSSYS.PAR` or `VAXVMSSYS.PAR`  
- Reboot normally  

---

### **Scenario 3 — Shutdown Does Not Complete**
Shutdown hangs waiting for processes.

**Expected approach:**  
- Identify stuck processes  
- Check batch queues  
- Check network services  
- Force stop only if safe  

---

## Answer Key
The answer key for this module is located at:  
`answers/module8-answers.md`
