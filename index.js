const express = require('express')
const app = express()
const path = require('path')


//app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.use('/css', express.static('/public/css'))
app.use('/js', express.static('/public/js'))
app.use('/img', express.static('/public/img'))
app.use('/neighborhood-map', express.static('/public/neighborhood-map'))
app.use('/myreads', express.static('/public/myreads'))
app.use('/restaurant-reviews', express.static('/public/restaurant-reviews'))
app.use('/memory-game', express.static('/public/memory-game'))
app.use('/arcade-game', express.static('/public/arcade-game'))
app.use('/feedreader-testing', express.static('/public/feedreader-testing'))

/*homepage route*/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'))
})

/*about page route*/
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/about.html'))
})

/*projects page route*/
app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/projects.html'))
})
/*routes for individual projects*/
app.get('/neighborhood-map', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/img/coming-soon.png'))
})
app.get('/myreads', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/img/coming-soon.png'))
})
app.get('/restaurant-reviews', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/img/coming-soon.png'))
})
app.get('/memory-game', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/memory-game/mg-index.html'))
})
app.get('/arcade-game', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/arcade-game/ag-index.html'))
})
app.get('/feedreader-testing', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/feedreader-testing/ft-index.html'))
})

/*error route*/
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/img/error-img.png'))
    //res.send('Error')
})

app.listen(3000, () => {
    console.log('Listening on: http://localhost:3000')    
})

/*
app.get('/', (req, res) => {
    res.send('Hello World')
})
*/

