---
title: Module 4 — User & Security Administration
nav_order: 4
parent: Modules
---

# Module 4 — User & Security Administration

## Overview
This module covers OpenVMS user account management, privileges, rights identifiers, ACLs, and system security controls. You’ll work with the UAF, manage user environments, inspect privileges, and diagnose access issues.

---

## Exam: Multiple‑Choice Questions

<div class="quiz-question">
  <p><strong>1. Which command displays information about a user account?</strong></p>
  <label><input type="radio" name="m4q1" value="A"> SHOW USER</label><br>
  <label><input type="radio" name="m4q1" value="B"> SHOW ACCOUNT</label><br>
  <label><input type="radio" name="m4q1" value="C"> SHOW RIGHTS</label><br>
  <label><input type="radio" name="m4q1" value="D"> DIRECTORY/USER</label><br>
  <button class="check-answer" data-question="m4q1" data-correct="A">Check Answer</button>
  <p id="m4q1-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>2. Which utility is used to create and modify OpenVMS user accounts?</strong></p>
  <label><input type="radio" name="m4q2" value="A"> AUTHORIZE</label><br>
  <label><input type="radio" name="m4q2" value="B"> SYSMAN</label><br>
  <label><input type="radio" name="m4q2" value="C"> SYSGEN</label><br>
  <label><input type="radio" name="m4q2" value="D"> SET USER</label><br>
  <button class="check-answer" data-question="m4q2" data-correct="A">Check Answer</button>
  <p id="m4q2-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>3. Which privilege allows a user to execute code in kernel mode?</strong></p>
  <label><input type="radio" name="m4q3" value="A"> SYSPRV</label><br>
  <label><input type="radio" name="m4q3" value="B"> CMKRNL</label><br>
  <label><input type="radio" name="m4q3" value="C"> OPER</label><br>
  <label><input type="radio" name="m4q3" value="D"> GRPNAM</label><br>
  <button class="check-answer" data-question="m4q3" data-correct="B">Check Answer</button>
  <p id="m4q3-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>4. Which command displays rights identifiers for a user?</strong></p>
  <label><input type="radio" name="m4q4" value="A"> SHOW RIGHTS</label><br>
  <label><input type="radio" name="m4q4" value="B"> SHOW IDENTIFIER</label><br>
  <label><input type="radio" name="m4q4" value="C"> AUTHORIZE SHOW/RIGHTS</label><br>
  <label><input type="radio" name="m4q4" value="D"> SHOW USER/FULL</label><br>
  <button class="check-answer" data-question="m4q4" data-correct="A">Check Answer</button>
  <p id="m4q4-feedback" class="quiz-feedback"></p>
</div>

<div class="quiz-question">
  <p><strong>5. Which command displays the Access Control List (ACL) for a file?</strong></p>
  <label><input type="radio" name="m4q5" value="A"> SHOW FILE/ACL</label><br>
  <label><input type="radio" name="m4q5" value="B"> DIRECTORY/SECURITY</label><br>
  <label><input type="radio" name="m4q5" value="C"> ANALYZE/ACL</label><br>
  <label><input type="radio" name="m4q5" value="D"> SHOW SECURITY</label><br>
  <button class="check-answer" data-question="m4q5" data-correct="A">Check Answer</button>
  <p id="m4q5-feedback" class="quiz-feedback"></p>
</div>
---

## Hands‑On Exercises

### **Exercise 1 — Inspect User Accounts**
1. Display your own UAF entry:  
   `SHOW USER`
2. Display another user’s entry (requires privileges):  
   `SHOW USER <username>`
3. Identify:  
   - Default directory  
   - Privileges  
   - Login flags  
   - Password lifetime  

---

### **Exercise 2 — Create and Modify User Accounts**
1. Enter AUTHORIZE:  
   `RUN SYS$SYSTEM:AUTHORIZE`
2. Create a new user:  
   `ADD TESTUSER /PASSWORD=Test123 /DEVICE=DKA0: /DIRECTORY=[TESTUSER]`
3. Grant a privilege:  
   `MODIFY TESTUSER /PRIVILEGES=OPER`
4. Exit AUTHORIZE:  
   `EXIT`

---

### **Exercise 3 — Manage Rights Identifiers**
1. Display all identifiers:  
   `SHOW RIGHTS`
2. Grant an identifier (privileged):  
   `GRANT/IDENTIFIER ENGINEERS TESTUSER`
3. Verify:  
   `SHOW PROCESS/RIGHTS`

---

### **Exercise 4 — Work with ACLs**
1. Display ACL for a file:  
   `SHOW FILE/ACL filename.ext`
2. Add an ACL entry:  
   `SET SECURITY/ACL=(IDENTIFIER=ENGINEERS,ACCESS=READ+WRITE) filename.ext`
3. Verify the ACL again.

---

### **Exercise 5 — Diagnose Login Problems**
1. Check login flags:  
   `SHOW USER <username>`
2. Check password expiration:  
   `SHOW USER/FULL <username>`
3. Check disk quota:  
   `SHOW QUOTA/USER=<username>`

---

## Scenario‑Based Troubleshooting Challenges

### **Scenario 1 — User Cannot Log In**
A user reports: *“Login incorrect”* even though the password is correct.

**Expected approach:**  
- Check login flags (DISUSER, CAPTIVE, RESTRICTED)  
- Check password expiration  
- Check UIC and directory existence  
- Check quota  

---

### **Scenario 2 — Access Denied to a Shared File**
A user cannot access a shared file despite having READ privilege.

**Expected approach:**  
- Check ACL  
- Check file protection mask  
- Check rights identifiers  
- Check group and system protections  

---

### **Scenario 3 — Privilege Escalation Request**
A developer requests SYSPRV “to make things easier.”

**Expected approach:**  
- Evaluate least privilege  
- Consider granting a rights identifier instead  
- Review audit logs  
- Document justification  

---

## Answer Key
The answer key for this module is located at:  
`answers/module4-answers.md`
<script src="/assets/js/quiz.js"></script>
