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

<div class="quiz-question">
  <p><strong>1. Which RMS file organization stores records sequentially in the order they are written?</strong></p>
  <label><input type="radio" name="m7q1" value="A"> Indexed</label><br>
  <label><input type="radio" name="m7q1" value="B"> Relative</label><br>
  <label><input type="radio" name="m7q1" value="C"> Sequential</label><br>
  <label><input type="radio" name="m7q1" value="D"> Stream</label><br>
  <button class="check-answer" data-question="m7q1" data-correct="C">Check Answer</button>
  <p id="m7q1-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>2. Which record format uses fixed-length records?</strong></p>
  <label><input type="radio" name="m7q2" value="A"> VFC</label><br>
  <label><input type="radio" name="m7q2" value="B"> FIX</label><br>
  <label><input type="radio" name="m7q2" value="C"> VAR</label><br>
  <label><input type="radio" name="m7q2" value="D"> VARYING</label><br>
  <button class="check-answer" data-question="m7q2" data-correct="B">Check Answer</button>
  <p id="m7q2-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>3. Which RMS structure contains metadata such as record size, bucket size, and file organization?</strong></p>
  <label><input type="radio" name="m7q3" value="A"> FAB</label><br>
  <label><input type="radio" name="m7q3" value="B"> RAB</label><br>
  <label><input type="radio" name="m7q3" value="C"> XAB</label><br>
  <label><input type="radio" name="m7q3" value="D"> UCB</label><br>
  <button class="check-answer" data-question="m7q3" data-correct="A">Check Answer</button>
  <p id="m7q3-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>4. Which file organization supports multiple keys and indexed access?</strong></p>
  <label><input type="radio" name="m7q4" value="A"> Sequential</label><br>
  <label><input type="radio" name="m7q4" value="B"> Relative</label><br>
  <label><input type="radio" name="m7q4" value="C"> Stream</label><br>
  <label><input type="radio" name="m7q4" value="D"> Indexed</label><br>
  <button class="check-answer" data-question="m7q4" data-correct="D">Check Answer</button>
  <p id="m7q4-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>5. Which command displays RMS attributes for a file?</strong></p>
  <label><input type="radio" name="m7q5" value="A"> SHOW FILE/FULL</label><br>
  <label><input type="radio" name="m7q5" value="B"> DIRECTORY/ATTRIBUTES</label><br>
  <label><input type="radio" name="m7q5" value="C"> SHOW RMS</label><br>
  <label><input type="radio" name="m7q5" value="D"> ANALYZE/RMS</label><br>
  <button class="check-answer" data-question="m7q5" data-correct="A">Check Answer</button>
  <p id="m7q5-feedback" class="quiz-feedback"></p>
</div>

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
