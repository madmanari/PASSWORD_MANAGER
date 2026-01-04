 # Password Manager

**Version:** 2.4.3 (Stable)  
**Platform:** Google Apps Script + Google Sheets  
**Deployment:** Web App

## Overview
Password Manager is a lightweight internal credential manager built on Google Sheets and Apps Script.  
This repository represents the **locked stable baseline**.

## SCREENSHOOTS
![image alt](https://github.com/madmanari/PASSWORD_MANAGER/blob/79e64e3a60eebe4468ba10c773dbf3ad5eec8f48/IMG_0418.png)
![image atl](https://github.com/madmanari/PASSWORD_MANAGER/blob/79e64e3a60eebe4468ba10c773dbf3ad5eec8f48/IMG_0419.png)
![image alt](https://github.com/madmanari/PASSWORD_MANAGER/blob/79e64e3a60eebe4468ba10c773dbf3ad5eec8f48/IMG_0424.png)
![image alt](https://github.com/madmanari/PASSWORD_MANAGER/blob/79e64e3a60eebe4468ba10c773dbf3ad5eec8f48/IMG_0420.png)
![image alt](https://github.com/madmanari/PASSWORD_MANAGER/blob/79e64e3a60eebe4468ba10c773dbf3ad5eec8f48/IMG_0423.png)
![image alt](https://github.com/madmanari/PASSWORD_MANAGER/blob/79e64e3a60eebe4468ba10c773dbf3ad5eec8f48/IMG_0422.png)


## Features
- Role-based access (admin / user)
- Credential grid view (alphabetical by Name)
- Search by name, link, or username
- Copy-to-clipboard with visual highlight
- Full audit logging (login, view, copy, add)
- Session timeout (100 seconds, auto logout)
- Admin-only credential creation

# Deployment Guide

## Prerequisites
- Google account
- Google Sheet created with access permissions
- Apps Script editor access

## Steps
1. Open Google Apps Script
2. Create a new project
3. Copy `Code.gs`
4. Create HTML file → paste `index.html`
5. Update `SHEET_ID` in Code.gs
6. Deploy → New Deployment → Web App
7. Execute as: Me
8. Access: Anyone with link (or restricted as needed)

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
