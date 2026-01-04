 # Password Manager

**Version:** 2.4.3 (Stable)  
**Platform:** Google Apps Script + Google Sheets  
**Deployment:** Web App

## Overview
Password Manager is a lightweight internal credential manager built on Google Sheets and Apps Script.  
This repository represents the **locked stable baseline**.

## Features
- Role-based access (admin / user)
- Credential grid view (alphabetical by Name)
- Search by name, link, or username
- Copy-to-clipboard with visual highlight
- Full audit logging (login, view, copy, add)
- Session timeout (100 seconds, auto logout)
- Admin-only credential creation

## Security Model
- Plaintext credentials (internal use only)
- Full audit trail in `Logsheet`
- No encryption in this version (by design)

## Version Policy
- `v2.4.3` is frozen and stable
- New features must be introduced in a new version
- Rollbacks should reference this tag

## License
Internal use only.
