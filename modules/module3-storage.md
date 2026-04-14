---
title: Module 3 — Disk, Volume & Storage Management
nav_order: 3
parent: Modules
---

# Module 3 — Disk, Volume & Storage Management

## Overview
This module covers essential OpenVMS disk and volume management tasks, including mounting and dismounting volumes, inspecting device characteristics, managing quotas, performing image backups, and diagnosing storage-related issues.

---

## Exam: Multiple‑Choice Questions

<div class="quiz-question">
  <p><strong>1. Which command displays detailed information about a disk device?</strong></p>
  <label><input type="radio" name="m3q1" value="A"> SHOW DEVICE</label><br>
  <label><input type="radio" name="m3q1" value="B"> SHOW DEVICE/FULL</label><br>
  <label><input type="radio" name="m3q1" value="C"> SHOW VOLUME</label><br>
  <label><input type="radio" name="m3q1" value="D"> ANALYZE/DISK</label><br>
  <button class="check-answer" data-question="m3q1" data-correct="B">Check Answer</button>
  <p id="m3q1-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>2. Which command mounts a disk with the label DATA?</strong></p>
  <label><input type="radio" name="m3q2" value="A"> MOUNT DATA DKA200:</label><br>
  <label><input type="radio" name="m3q2" value="B"> MOUNT/FOREIGN DKA200:</label><br>
  <label><input type="radio" name="m3q2" value="C"> MOUNT DKA200: DATA</label><br>
  <label><input type="radio" name="m3q2" value="D"> MOUNT/LABEL=DATA</label><br>
  <button class="check-answer" data-question="m3q2" data-correct="C">Check Answer</button>
  <p id="m3q2-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>3. Which command performs a full image backup of a disk?</strong></p>
  <label><input type="radio" name="m3q3" value="A"> BACKUP/PHYSICAL</label><br>
  <label><input type="radio" name="m3q3" value="B"> BACKUP/IMAGE</label><br>
  <label><input type="radio" name="m3q3" value="C"> BACKUP/LOG</label><br>
  <label><input type="radio" name="m3q3" value="D"> BACKUP/VERIFY</label><br>
  <button class="check-answer" data-question="m3q3" data-correct="B">Check Answer</button>
  <p id="m3q3-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>4. Which command displays disk quota information?</strong></p>
  <label><input type="radio" name="m3q4" value="A"> SHOW QUOTA</label><br>
  <label><input type="radio" name="m3q4" value="B"> SHOW DEVICE/QUOTA</label><br>
  <label><input type="radio" name="m3q4" value="C"> SHOW VOLUME/QUOTA</label><br>
  <label><input type="radio" name="m3q4" value="D"> ANALYZE/QUOTA</label><br>
  <button class="check-answer" data-question="m3q4" data-correct="A">Check Answer</button>
  <p id="m3q4-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>5. Which command safely removes a mounted disk?</strong></p>
  <label><input type="radio" name="m3q5" value="A"> REMOVE DKA200:</label><br>
  <label><input type="radio" name="m3q5" value="B"> DISMOUNT</label><br>
  <label><input type="radio" name="m3q5" value="C"> UNMOUNT DKA200:</label><br>
  <label><input type="radio" name="m3q5" value="D"> DISK/REMOVE</label><br>
  <button class="check-answer" data-question="m3q5" data-correct="B">Check Answer</button>
  <p id="m3q5-feedback" class="quiz-feedback"></p>
</div>
---

## Hands‑On Exercises

### **Exercise 1 — Inspect Disk Characteristics**
1. Display all disks:  
   `SHOW DEVICE D*`
2. Display full details for a specific disk:  
   `SHOW DEVICE/FULL DKA200:`
3. Identify:  
   - Volume label  
   - Allocation class  
   - Mount status  
   - Error counts  

---

### **Exercise 2 — Mount and Dismount Volumes**
1. Mount a test volume:  
   `MOUNT DKA200: TESTVOL`
2. Verify the mount:  
   `SHOW DEVICE DKA200:`
3. Dismount the volume:  
   `DISMOUNT DKA200:`

---

### **Exercise 3 — Perform an Image Backup**
1. Create a full disk image backup:  
   `BACKUP/IMAGE DKA200: TESTVOL.BCK/SAVE/LOG`
2. Restore the image to another disk (lab environment only):  
   `BACKUP/IMAGE TESTVOL.BCK DKA300:/LOG`

---

### **Exercise 4 — Manage Disk Quotas**
1. Display quotas for all users:  
   `SHOW QUOTA`
2. Display quotas for a specific user:  
   `SHOW QUOTA/USER=<username>`
3. Modify a quota (requires privileges):  
   `SET QUOTA/OVERDRAFT=5000 <username>`

---

### **Exercise 5 — Diagnose Disk Issues**
1. Check for disk errors:  
   `SHOW ERROR`
2. Inspect device error counters:  
   `SHOW DEVICE/FULL DKA200:`
3. Analyze error log:  
   `ANALYZE/ERROR`

---

## Scenario‑Based Troubleshooting Challenges

### **Scenario 1 — Volume Will Not Mount**
A disk refuses to mount and reports a structure level mismatch.

**Expected approach:**  
- `SHOW DEVICE/FULL`  
- Try `MOUNT/OVERRIDE=IDENTIFICATION`  
- Check error log  
- Consider disk corruption or wrong volume label  

---

### **Scenario 2 — Disk Performance Degradation**
Users report slow I/O on a shared volume.

**Expected approach:**  
- `MONITOR DISK`  
- Check error counts  
- Check for ACP bottlenecks  
- Inspect fragmentation  
- Consider moving hot files  

---

### **Scenario 3 — User Out of Disk Space**
A user cannot create files despite having quota.

**Expected approach:**  
- Check disk free space  
- Check user quota  
- Check volume quota limits  
- Check for file version buildup  

---

## Answer Key
The answer key for this module is located at:  
`answers/module3-answers.md`
