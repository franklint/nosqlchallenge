const express = require('express'); 
const mongoose = require('mongoose'); 

const app = express(); 
const PORT = process.env.PORT || 3001;  

app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 
app.use(express.static('public')); 

//this links to the routes 
app.use(require('./routes')); 


//this tells mongoose which database we want to connect to 
mongoose.connect(process.env.MONGOD_URI || 'mongodb://localhost:27017/thoughts', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}); 

//use this to log mongo queries 
mongoose.set('debug', true); 

app.listen(PORT, () => console.log(`connected to localhost: ${PORT}`)); 