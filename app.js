const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.log("Error al leer el archivo:", err);
    return;
  }
  const jsonData = JSON.parse(data);

  console.log(jsonData);
  console.log("Primer persona:", jsonData.personas[0].nombre);
});
