---
title: Module 1 — File & Directory Operations
nav_order: 1
parent: Modules
---

# Module 1 — File & Directory Operations

## Overview
This module covers essential OpenVMS file and directory operations used daily by system engineers and operators. Topics include directory navigation, file versioning, wildcard usage, file attributes, and basic BACKUP operations.

---

## Exam: Multiple‑Choice Questions

1. **Which command recursively searches all subdirectories for a file named DATA.LOG?**  
   - A. DIRECTORY [...]DATA.LOG  
   - B. SHOW FILE DATA.LOG  
   - C. DIRECTORY DATA.LOG  
   - D. SEARCH DATA.LOG  
   **Answer:** A

2. **Which command displays all versions of a file named REPORT.TXT?**  
   - A. SEARCH REPORT.TXT;*  
   - B. DIRECTORY/ALL REPORT.TXT  
   - C. DIRECTORY REPORT.TXT;*  
   - D. SHOW FILE REPORT.TXT  
   **Answer:** C

3. **Which command shows detailed file attributes such as record format and allocation?**  
   - A. SHOW DEFAULT  
   - B. SHOW FILE/FULL filename  
   - C. DIRECTORY/DATE filename  
   - D. SHOW STATUS filename  
   **Answer:** B

4. **Which wildcard pattern lists all files beginning with LOG and ending in .DAT?**  
   - A. LOG*.DAT  
   - B. [LOG]*.DAT  
   - C. *LOG.DAT  
   - D. LOG?.DAT  
   **Answer:** A

5. **Which BACKUP command creates a saveset of the entire DISK$DATA volume?**  
   - A. BACKUP/LOG DISK$DATA:*.* DATA.BCK  
   - B. BACKUP/VERIFY DISK$DATA: DATA.BCK  
   - C. BACKUP/IMAGE DISK$DATA: DATA.BCK  
   - D. BACKUP DISK$DATA:*.* DATA.BCK/SAVE  
   **Answer:** C

---

## Hands‑On Exercises

### **Exercise 1 — Navigate Directories**
1. Display your current default directory.  
   `SHOW DEFAULT`
2. Change to the top‑level directory of your disk.  
   `SET DEFAULT [000000]`
3. Navigate to a nested directory of your choice.  
   `SET DEFAULT [.SYS$COMMON.SYSMGR]`

---

### **Exercise 2 — Search for Files**
1. Find all `.LOG` files under your home directory:  
   `DIRECTORY [...]*.LOG`
2. Find all versions of a specific file:  
   `DIRECTORY filename.ext;*`

---

### **Exercise 3 — Inspect File Attributes**
1. Choose a file and display its full attributes:  
   `SHOW FILE/FULL filename.ext`
2. Identify:  
   - Record format  
   - Allocation  
   - Creation date  
   - Owner  
   - Protection mask  

---

### **Exercise 4 — Work with File Versioning**
1. Create multiple versions of a file:  
   `EDIT/TPU TEST.TXT` (save several times)  
2. List all versions:  
   `DIRECTORY TEST.TXT;*`  
3. Purge old versions:  
   `PURGE TEST.TXT`

---

### **Exercise 5 — Perform a BACKUP Operation**
1. Create a test directory with files.  
2. Run a directory‑level backup:  
     `BACKUP [.TEST...]*.* TEST.BCK/SAVE/LOG`
3. Restore the saveset to a new directory.  
   `BACKUP TEST.BCK [.RESTORE]/LOG`

---

## Scenario‑Based Troubleshooting Challenges

### **Scenario 1 — Missing File**
A user claims a file named `RUN.LOG` “disappeared.”  
You must locate it.

**Expected approach:**  
- Use recursive DIRECTORY  
- Check for versioning  
- Check for accidental renames  
- Check for protection issues

---

### **Scenario 2 — Disk Filling Up**
A volume is nearly full.  
You must identify large files and old versions.

**Expected approach:**  
- `DIRECTORY/SIZE=ALL`  
- `DIRECTORY [...]*.*;*`  
- `PURGE`  
- `SHOW DEVICE/FULL`

---

### **Scenario 3 — Incorrect File Format**
An application fails because a file has the wrong record format.

**Expected approach:**  
- `SHOW FILE/FULL`  
- Identify record format mismatch  
- Use CONVERT/FDL to rebuild  

---

## Answer Key
Answers are included inline with each question.
