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

## Notes
- Redeploy after every code change
- Old deployments cache JavaScript
