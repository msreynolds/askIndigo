cd src
npm install
zip -r askIndigo.zip . -x package.json
rm -fr ../dist
mkdir ../dist
mv ./askIndigo.zip ../dist/askIndigo.zip
