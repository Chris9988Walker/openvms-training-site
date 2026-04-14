---
title: Module 5 — DCL Scripting & Automation
nav_order: 5
parent: Modules
---

# Module 5 — DCL Scripting & Automation

## Overview
This module covers DCL scripting fundamentals, including symbols, lexical functions, command procedures, flow control, batch processing, and error handling. You’ll learn how to automate routine tasks and build reliable operational scripts.

---

## Exam: Multiple‑Choice Questions

<div class="quiz-question">
  <p><strong>1. Which symbol type is local to a command procedure?</strong></p>
  <label><input type="radio" name="m5q1" value="A"> Global symbol</label><br>
  <label><input type="radio" name="m5q1" value="B"> Local symbol</label><br>
  <label><input type="radio" name="m5q1" value="C"> System symbol</label><br>
  <label><input type="radio" name="m5q1" value="D"> Process symbol</label><br>
  <button class="check-answer" data-question="m5q1" data-correct="B">Check Answer</button>
  <p id="m5q1-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>2. Which command executes a DCL command procedure?</strong></p>
  <label><input type="radio" name="m5q2" value="A"> @filename</label><br>
  <label><input type="radio" name="m5q2" value="B"> RUN filename</label><br>
  <label><input type="radio" name="m5q2" value="C"> EXEC filename</label><br>
  <label><input type="radio" name="m5q2" value="D"> DO filename</label><br>
  <button class="check-answer" data-question="m5q2" data-correct="A">Check Answer</button>
  <p id="m5q2-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>3. Which lexical function returns the current process name?</strong></p>
  <label><input type="radio" name="m5q3" value="A"> F$PROCESS</label><br>
  <label><input type="radio" name="m5q3" value="B"> F$GETJPI</label><br>
  <label><input type="radio" name="m5q3" value="C"> F$IDENTIFIER</label><br>
  <label><input type="radio" name="m5q3" value="D"> F$STRING</label><br>
  <button class="check-answer" data-question="m5q3" data-correct="A">Check Answer</button>
  <p id="m5q3-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>4. Which command submits a command procedure to a batch queue?</strong></p>
  <label><input type="radio" name="m5q4" value="A"> RUN/BATCH</label><br>
  <label><input type="radio" name="m5q4" value="B"> SUBMIT</label><br>
  <label><input type="radio" name="m5q4" value="C"> QUEUE/EXECUTE</label><br>
  <label><input type="radio" name="m5q4" value="D"> START/BATCH</label><br>
  <button class="check-answer" data-question="m5q4" data-correct="B">Check Answer</button>
  <p id="m5q4-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>5. Which DCL feature allows you to detect and handle errors within a script?</strong></p>
  <label><input type="radio" name="m5q5" value="A"> SET CONTROL</label><br>
  <label><input type="radio" name="m5q5" value="B"> ON ERROR THEN</label><br>
  <label><input type="radio" name="m5q5" value="C"> IF $STATUS</label><br>
  <label><input type="radio" name="m5q5" value="D"> WHEN FAILURE DO</label><br>
  <button class="check-answer" data-question="m5q5" data-correct="C">Check Answer</button>
  <p id="m5q5-feedback" class="quiz-feedback"></p>
</div>

---

## Hands‑On Exercises

### **Exercise 1 — Create Basic Symbols**
1. Create a local symbol:  
   `MYVAR = "Hello"`  
2. Display it:  
   `SHOW SYMBOL MYVAR`  
3. Create a global symbol:  
   `MYGLOBAL == "World"`  
4. Display it:  
   `SHOW SYMBOL/GLOBAL MYGLOBAL`

---

### **Exercise 2 — Write a Simple Command Procedure**
1. Create a file named `HELLO.COM` containing:  
$ WRITE SYS$OUTPUT "Hello from DCL!"
$ EXIT

Code
2. Execute it:  
`@HELLO`

---

### **Exercise 3 — Use Lexical Functions**
1. Display the current process name:  
`WRITE SYS$OUTPUT F$PROCESS()`  
2. Display the current default directory:  
`WRITE SYS$OUTPUT F$ENVIRONMENT("DEFAULT")`

---

### **Exercise 4 — Add Flow Control**
Create a script:

$ IF F$SEARCH("TEST.DAT") .EQS. "" THEN GOTO NOTFOUND
$ WRITE SYS$OUTPUT "File exists."
$ EXIT
$ NOTFOUND:
$ WRITE SYS$OUTPUT "File not found."
$ EXIT

Code

Run it and test both conditions.

---

### **Exercise 5 — Submit a Batch Job**
1. Create a batch script:  
$ WRITE SYS$OUTPUT "Batch job running..."
$ EXIT

Code
2. Submit it:  
`SUBMIT BATCHJOB.COM`  
3. Check queue status:  
`SHOW QUEUE/BATCH`

---

## Scenario‑Based Troubleshooting Challenges

### **Scenario 1 — Script Fails Silently**
A DCL script exits without printing expected output.

**Expected approach:**  
- Check `$STATUS`  
- Add `SET VERIFY`  
- Add `SET NOON`  
- Check symbol scoping  

---

### **Scenario 2 — Batch Job Never Starts**
A submitted batch job remains in “Holding” state.

**Expected approach:**  
- Check queue status  
- Check queue limits  
- Check job quotas  
- Check batch queue startup  

---

### **Scenario 3 — Lexical Function Returns Unexpected Value**
A script using `F$GETJPI` returns blanks.

**Expected approach:**  
- Verify correct item code  
- Check privileges  
- Check quoting and syntax  

---

## Answer Key
The answer key for this module is located at:  
`answers/module5-answers.md`
<script src="/assets/js/quiz.js"></script>
