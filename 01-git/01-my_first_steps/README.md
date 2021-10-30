https://github.com/SamuelHVRodrigues/my_first_steps

mkdir my_first_steps
cd my_first_steps
git init
git remote add origin https://github.com/SamuelHVRodrigues/my_first_steps.git

echo Olá Mundo! > ola_mundo.txt
git add ola_mundo.txt
git commit -m "add ola_mundo.txt"
git push -u origin main

echo > .gitignore
echo Lorem ipsum > serei_ignorado.txt
echo serei_ignorado.txt > .gitignore

vim README.md
git add .
git commit -m "add .gitignore and README.md"
git push -u origin main

