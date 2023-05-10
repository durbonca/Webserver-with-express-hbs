const http = require('http');


const server = http.createServer((req, res) => {
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, { 'Content-Type': 'application/csv' });
    const persona = {
        id: 1,
        nombre: 'Fernando'
    }

    res.write(JSON.stringify(persona));
    res.end();
});

server.listen(3000);
console.log('Escuchando el puerto', 3000);