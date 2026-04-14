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

1. **Which file controls the system startup sequence on OpenVMS?**  
   - A. SYS$SYSTEM:STARTUP.COM  
   - B. SYS$MANAGER:SYSTARTUP_VMS.COM  
   - C. SYS$STARTUP:BOOTSTRAP.COM  
   - D. SYS$SYSTEM:INIT.COM  

2. **Which command cleanly shuts down an OpenVMS system?**  
   - A. STOP/ID=0  
   - B. SHUTDOWN  
   - C. SYS$SYSTEM:HALT  
   - D. SYSMAN SHUTDOWN  

3. **Which utility is used to modify system parameters such as memory, quotas, and I/O settings?**  
   - A. SYSMAN  
   - B. SYSGEN  
   - C. AUTHORIZE  
   - D. STARTUP  

4. **Which command displays the current system parameters?**  
   - A. SHOW PARAMETER  
   - B. SYSGEN SHOW  
   - C. SYSMAN SHOW PARAMETER  
   - D. SYSGEN> SHOW  

5. **Which file contains layered product startup procedures?**  
   - A. SYS$STARTUP:PRODUCTS.COM  
   - B. SYS$MANAGER:SYCONFIG.COM  
   - C. SYS$MANAGER:SYSTARTUP_VMS.COM  
   - D. SYS$STARTUP:VMS$LAYERED.COM  

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
