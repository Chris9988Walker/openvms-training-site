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

1. **Which command displays detailed information about a disk, including mount status, volume label, and allocation?**  
   - A. SHOW VOLUME  
   - B. SHOW DEVICE/FULL  
   - C. SHOW STORAGE  
   - D. SHOW DISK/ALL  

2. **Which command mounts a volume named DATA on device DKA200:?**  
   - A. MOUNT DKA200:  
   - B. MOUNT/FOREIGN DKA200: DATA  
   - C. MOUNT DKA200: DATA  
   - D. SET VOLUME DKA200: DATA  

3. **Which BACKUP operation creates a full, bootable copy of a disk?**  
   - A. BACKUP/VERIFY  
   - B. BACKUP/IMAGE  
   - C. BACKUP/SAVE  
   - D. BACKUP/PHYSICAL  

4. **Which command displays disk quota usage for a specific user?**  
   - A. SHOW QUOTA  
   - B. SHOW USER/QUOTA  
   - C. SHOW DEVICE/QUOTA  
   - D. SHOW VOLUME/QUOTA  

5. **Which command safely dismounts a volume?**  
   - A. DISK/UNLOAD  
   - B. DISMOUNT  
   - C. SET DEVICE/OFFLINE  
   - D. REMOVE VOLUME  

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
