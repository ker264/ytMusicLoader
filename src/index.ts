import e from "express";
import path from 'path';
import { logger } from './middlewares.js';
import serverRoutes from './routes/servers.js'

const __dirname = path.resolve();
const app = e();
const PORT = process.env.PORT ?? 3000;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'ejs'));

console.log('ViewEngine:', app.get('view engine'));
console.log('Views:', app.get('views'));

app.use(e.static(path.resolve(__dirname, 'static')))
app.use(e.json())
app.use(e.urlencoded({ extended: false }))
app.use(logger);

app.use(serverRoutes);

app.get('/', (req, res) => {        
    res.render('index', { title: "Main Page", active: "main" });        
})

app.get('/features', (req, res) => {
    res.render('features', { title: "Features Page", active: "features" })
})


// app.get('/test', (req, res) => {
//     res.download(path.resolve(__dirname, 'ejs', 'index.ejs'));
// });

//Запуск сервера
app.listen(PORT, () => {
    console.log(`Что - то запустилось на ${PORT}...`);
});