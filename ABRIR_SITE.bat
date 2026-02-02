@echo off
REM ==========================================
REM   ABRIR O SITE (Servidor + Browser)
REM ==========================================

echo.
echo A preparar tudo...
echo.

REM Garante que estamos na pasta correta
cd /d "%~dp0"

REM Abre o browser imediatamente (pode dar erro de conexao nos primeiros segundos)
start http://localhost:3000

REM Inicia o servidor e mantem a janela aberta
echo A iniciar o servidor...
echo (Nao feche esta janela enquanto quiser usar o site)
echo.
npm run dev
