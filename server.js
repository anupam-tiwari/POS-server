const express = require("express")
const bodyParser = require('body-parser');
const posRouter = require('./routes/pos'); 
const authRouter = require('./routes/auth');
//const cors



const app = express(); 
app.use(bodyParser.json())
//app.use(cors())

app.use('/pos', posRouter)
app.use('/auth', authRouter)



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send('hello world')
})

app.listen(process.env.PORT || 4000, () => console.log(`Started server`));
