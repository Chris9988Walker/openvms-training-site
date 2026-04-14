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

<div class="quiz-question">
  <p><strong>1. Which command recursively searches all subdirectories for a file named DATA.LOG?</strong></p>
  <label><input type="radio" name="m1q1" value="A"> DIRECTORY [...]DATA.LOG</label><br>
  <label><input type="radio" name="m1q1" value="B"> SHOW FILE DATA.LOG</label><br>
  <label><input type="radio" name="m1q1" value="C"> DIRECTORY DATA.LOG</label><br>
  <label><input type="radio" name="m1q1" value="D"> SEARCH DATA.LOG</label><br>
  <button class="check-answer" data-question="m1q1" data-correct="A">Check Answer</button>
  <p id="m1q1-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>2. Which command displays all versions of a file named REPORT.TXT?</strong></p>
  <label><input type="radio" name="m1q2" value="A"> SEARCH REPORT.TXT;*</label><br>
  <label><input type="radio" name="m1q2" value="B"> DIRECTORY/ALL REPORT.TXT</label><br>
  <label><input type="radio" name="m1q2" value="C"> DIRECTORY REPORT.TXT;*</label><br>
  <label><input type="radio" name="m1q2" value="D"> SHOW FILE REPORT.TXT</label><br>
  <button class="check-answer" data-question="m1q2" data-correct="C">Check Answer</button>
  <p id="m1q2-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>3. Which command shows detailed file attributes such as record format and allocation?</strong></p>
  <label><input type="radio" name="m1q3" value="A"> SHOW DEFAULT</label><br>
  <label><input type="radio" name="m1q3" value="B"> SHOW FILE/FULL filename</label><br>
  <label><input type="radio" name="m1q3" value="C"> DIRECTORY/DATE filename</label><br>
  <label><input type="radio" name="m1q3" value="D"> SHOW STATUS filename</label><br>
  <button class="check-answer" data-question="m1q3" data-correct="B">Check Answer</button>
  <p id="m1q3-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>4. Which wildcard pattern lists all files beginning with LOG and ending in .DAT?</strong></p>
  <label><input type="radio" name="m1q4" value="A"> LOG*.DAT</label><br>
  <label><input type="radio" name="m1q4" value="B"> [LOG]*.DAT</label><br>
  <label><input type="radio" name="m1q4" value="C"> *LOG.DAT</label><br>
  <label><input type="radio" name="m1q4" value="D"> LOG?.DAT</label><br>
  <button class="check-answer" data-question="m1q4" data-correct="A">Check Answer</button>
  <p id="m1q4-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>5. Which BACKUP command creates a saveset of the entire DISK$DATA volume?</strong></p>
  <label><input type="radio" name="m1q5" value="A"> BACKUP/LOG DISK$DATA:. DATA.BCK</label><br>
  <label><input type="radio" name="m1q5" value="B"> BACKUP/VERIFY DISK$DATA: DATA.BCK</label><br>
  <label><input type="radio" name="m1q5" value="C"> BACKUP/IMAGE DISK$DATA: DATA.BCK</label><br>
  <label><input type="radio" name="m1q5" value="D"> BACKUP DISK$DATA:. DATA.BCK/SAVE</label><br>
  <button class="check-answer" data-question="m1q5" data-correct="C">Check Answer</button>
  <p id="m1q5-feedback" class="quiz-feedback"></p>
</div>
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
<script src="/assets/js/quiz.js"></script>
