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

1. **Which command displays the User Authorization File (UAF) entry for a specific user?**  
   - A. SHOW USER  
   - B. SHOW ACCOUNT  
   - C. SHOW SECURITY  
   - D. SHOW SYSTEM/USER  

2. **Which utility is used to create, modify, or delete user accounts?**  
   - A. AUTHORIZE  
   - B. SYSMAN  
   - C. SET SECURITY  
   - D. SET RIGHTS  

3. **Which privilege allows a user to change system parameters using SYSGEN?**  
   - A. SYSPRV  
   - B. CMKRNL  
   - C. OPER  
   - D. SYSNAM  

4. **Which command displays all rights identifiers granted to the current process?**  
   - A. SHOW RIGHTS  
   - B. SHOW IDENTIFIER  
   - C. SHOW PROCESS/RIGHTS  
   - D. SHOW SECURITY/IDENTIFIER  

5. **Which command displays the Access Control List (ACL) for a file?**  
   - A. SHOW FILE/ACL  
   - B. SHOW SECURITY/ACL  
   - C. DIRECTORY/ACL  
   - D. SHOW RIGHTS/ACL  

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
