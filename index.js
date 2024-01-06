let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

app.set('view engine','ejs')

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => { 
    res.render('home');
});

app.get('/about', (req, res) => { 
    res.render('about');
});

app.listen(port, () => {
    console.log(`Server is running on prot ${port}`);
});
