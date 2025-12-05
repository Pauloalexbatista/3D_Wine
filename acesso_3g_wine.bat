@echo off
REM Batch file para aceder ao projeto 3G Wine
echo ====================================
echo   3G Wine - E-Commerce Project
echo ====================================
echo.

cd /d "C:\Users\paulo\.gemini\antigravity\playground\core-omega\PRJT_3D_Wine"

echo Diretorio atual: %CD%
echo.
echo Comandos disponiveis:
echo   1. npm run dev    - Iniciar servidor de desenvolvimento
echo   2. npm run build  - Build de producao
echo   3. npm run start  - Iniciar servidor de producao
echo   4. code .         - Abrir no VS Code
echo.

REM Abrir diretorio automaticamente
start "" "%CD%"

cmd /k
