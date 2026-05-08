@echo off
chcp 65001 >nul
title 时光回响 · 毕业纪念网页

cd /d "%~dp0"

start http://localhost:3000
npm run dev

pause
