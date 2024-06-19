//Простое приложение на Express

const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello, World!');
});
//Обработчик для корневого маршрута

app.use(express.static(__dirname + '/public'));
//Настройка Express для обслуживания статических файлов из директории public

app.get('/about', (req, res) =>
{
    res.send("Это простое приложение на Express.js");
});
 //Обработчик для маршрута /about
    
app.get( '/*', (req, res) =>
{
    res.send("Страница не найдена");
});
//Обработчик для несуществующих маршрутов

app.listen(port);
