import e from "express";
import path from 'path';
import { requestTime, logger } from './middlewares.js';
import serverRoutes from './routes/servers.js'

const __dirname = path.resolve();
const app = e();
const PORT = process.env.PORT ?? 3000;

console.log(app.get('view engine'));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'ejs'));
console.log(app.get('views'));

app.use(e.static(path.resolve(__dirname, 'static')))
app.use(e.json())
app.use(e.urlencoded({ extended: false }))
app.use(requestTime);
app.use(logger);

app.use('/*', (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
})

app.use(serverRoutes);

app.get('/', (req, res) => {
    res.render('index', { title: "Main Page", active: "main" });
    console.log(path.resolve(__dirname, 'static'));
})

app.get('/features', (req, res) => {
    res.render('features', { title: "Features Page", active: "features" })
})

app.get('/download', (req, res) => {
    res.download(path.resolve(__dirname, 'ejs', 'index.ejs'));
});

//Запуск собак
app.listen(PORT, () => {
    console.log(`Что - то запустилось на ${PORT}...`);
});