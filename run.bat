@echo off

echo Running automated tests...
call npx cypress run -b chrome --headed

echo Opening report...
start "" "cypress\reports\report.html"