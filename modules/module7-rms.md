---
title: Module 7 — RMS & File Structure
nav_order: 7
parent: Modules
---

# Module 7 — RMS & File Structure

## Overview
This module introduces the Record Management Services (RMS) architecture used by OpenVMS for file access. You’ll learn about record formats, file organizations, key structures, indexing, bucket allocation, and how applications interact with RMS-managed files.

---

## Exam: Multiple‑Choice Questions

1. **Which RMS file organization stores records sequentially in the order they are written?**  
   - A. Indexed  
   - B. Relative  
   - C. Sequential  
   - D. Stream  

2. **Which record format uses fixed-length records?**  
   - A. VFC  
   - B. FIX  
   - C. VAR  
   - D. VARYING  

3. **Which RMS structure contains metadata such as record size, bucket size, and file organization?**  
   - A. FAB  
   - B. RAB  
   - C. XAB  
   - D. UCB  

4. **Which file organization supports multiple keys and indexed access?**  
   - A. Sequential  
   - B. Relative  
   - C. Stream  
   - D. Indexed  

5. **Which command displays RMS attributes for a file?**  
   - A. SHOW FILE/FULL  
   - B. DIRECTORY/ATTRIBUTES  
   - C. SHOW RMS  
   - D. ANALYZE/RMS  

---

## Hands‑On Exercises

### **Exercise 1 — Inspect RMS Attributes**
1. Choose a file and run:  
   `SHOW FILE/FULL filename.ext`
2. Identify:  
   - File organization  
   - Record format  
   - Maximum record size  
   - Bucket size  

---

### **Exercise 2 — Create a Sequential File**
1. Create a file using EDIT/TPU or EVE.  
2. Save multiple lines of text.  
3. Inspect RMS attributes again to confirm sequential organization.

---

### **Exercise 3 — Create a Relative File**
1. Use the CREATE command:  
   `CREATE/FDL=RELATIVE.FDL RELFILE.DAT`
2. Populate it with test records using a simple DCL script.  
3. Inspect record numbers and fixed slots.

---

### **Exercise 4 — Create an Indexed File**
1. Build an FDL file defining:  
   - Primary key  
   - Optional alternate keys  
   - Bucket size  
2. Create the file:  
   `CREATE/FDL=INDEXED.FDL INDEXFILE.DAT`
3. Insert records using a DCL loop or application tool.

---

### **Exercise 5 — Analyze RMS Structures**
1. Run:  
   `ANALYZE/RMS INDEXFILE.DAT`
2. Review:  
   - Key definitions  
   - Bucket layout  
   - Record distribution  

---

## Scenario‑Based Troubleshooting Challenges

### **Scenario 1 — Indexed File Corruption**
An application reports “key not found” even though the record exists.

**Expected approach:**  
- `ANALYZE/RMS`  
- Check bucket splits  
- Check index corruption  
- Rebuild using CONVERT/FDL  

---

### **Scenario 2 — Performance Degradation**
Indexed file access becomes slow over time.

**Expected approach:**  
- Check bucket fill levels  
- Check for excessive splits  
- Rebuild file with optimized FDL  
- Consider larger bucket size  

---

### **Scenario 3 — Application Cannot Write to Relative File**
Writes fail with “record slot unavailable.”

**Expected approach:**  
- Check relative record numbers  
- Check file allocation  
- Check for full slot table  
- Rebuild or extend file  

---

## Answer Key
The answer key for this module is located at:  
`answers/module7-answers.md`
