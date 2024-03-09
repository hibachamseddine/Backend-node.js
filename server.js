const express=require('express');
//but mte3i nestamel l express, endilha l bibliotheque bel required
const mongoose = require('mongoose')
const dotenv =require('dotenv')
const cors = require('cors') 
//je vait cree une instance
const app=express(); //app. ki nheb enedeilha
//config dotenv
dotenv.config()
//Les cors
app.use(cors())
//BodyParser Middleware
app.use(express.json()); 

mongoose.connect(process.env.DATABASE) 
.then(() => {console.log("DataBase Successfully Connected");})
 .catch(err => { console.log("Unable to connect to database", err);
process.exit(); }); 

//app.get : atini 
// '/' : blaset el root , bch nebda m localhost:3001/ e slash maneha matzid chay
// '/' : localhost:3001
//req: requete eli tba3thet
//res: reponse 
app.get('/',(req,res)=>{
   res.send("Bonjour");
   //res.json({message :"Bonjour"});
    //si res.json le message s'affiche avec format json :  "Bonjour"
});


const categorieRouter =require("./routes/categorie.route")
app.use('/api/categories', categorieRouter); 


const scategorieRouter =require("./routes/scategorie.route")
app.use('/api/scategories', scategorieRouter); 


const articleRouter =require("./routes/article.route")
app.use('/api/articles', articleRouter); 
//cree un serveur:avec methide listen
//fonction anonyme flecher : {}
const PORT=3001;
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`); });
    module.exports = app; 
    


