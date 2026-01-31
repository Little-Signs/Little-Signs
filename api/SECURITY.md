---

# **Little Signs Security Policy**  

## **Reporting a Vulnerability**  
If you discover a security vulnerability in any **Little Signs repository, website, or application**, please report it responsibly:  

1. **Do not** create a public issue or discuss it openly.  
2. **Email our security team** at:  
   `security@littlesigns.org` *(or your designated contact)*  
3. Include:  
   - **Description** of the vulnerability.  
   - **Steps to reproduce** (if applicable).  
   - **Impact assessment** (e.g., data exposure, service disruption).  
   - **Your contact info** (optional, for follow-up).  

We will:  
- Acknowledge receipt within **48 hours**.  
- Provide a timeline for fixes and updates.  
- Credit you (if desired) after resolution.  

---

## **Scope**  
This policy applies to:  
- All codebases under the `LittleSigns` GitHub/GitLab organization.  
- Public-facing services (e.g., websites, APIs, mobile apps).  

*Exclusions*:  
- Third-party services (e.g., hosted video platforms).  
- Non-technical risks (e.g., phishing emails—forward to `abuse@littlesigns.org`).  

---

## **Our Security Practices**  
### **For Developers**  
- **Dependencies**: Regularly update with `npm audit`/`dependabot`.  
- **Secrets**: Never hardcode API keys; use environment variables or vaults.  
- **Access Control**: Least-privilege principle for repositories.  

### **For Users**  
- **Data Protection**: We minimize data collection; stored data is encrypted.  
- **Reporting**: Phishing/spoofing? Email `abuse@littlesigns.org`.  

---

## **Security Updates**  
- Critical fixes: Patched within **72 hours** of confirmation.  
- Public disclosures: Posted in [RELEASES.md](link) with mitigation guidance.  

---

## **Acknowledgments**  
We thank security researchers who follow responsible disclosure. Contributors will be credited (unless requested otherwise).  

**Hall of Fame**:  
- [2023-10-05] @safeResearcher: Fixed XSS in sign-language tutorial tool.  

---

*Last Updated: {{DATE}}*  

---

### **Notes for Little Signs**  
- Replace `security@littlesigns.org` with your actual contact.  
- For compliance (e.g., GDPR), link to your **Privacy Policy**.  
- Add a **PGP key** if accepting encrypted reports.
