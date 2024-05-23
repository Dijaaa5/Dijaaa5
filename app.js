const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/app_restorani').then(() => {
  console.log('Uspješno povezan s bazom podataka');
}).catch((err) => {
  console.error('Greška prilikom povezivanja s bazom podataka', err);
});

const Restoran = mongoose.model('Restoran', new mongoose.Schema({
  naziv: String,
  adresa: String,
  broj_telefona: String,
  vrsta: String
}, {collection:'restorani'}));



app.get('/restorani', async (req, res) => {
  try {
    const restorani = await Restoran.find();
    res.json(restorani);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.post('/restorani', async (req, res) => {
  try {
      const{naziv, adresa, broj_telefona, vrsta} = req.body;
      const noviRestoran = new Restoran ({naziv, adresa, broj_telefona, vrsta}) ;
      const spremiRestoran = await noviRestoran.save();
      res.status(201).json(spremiRestoran);
  } catch (err){
      res.status(400).json({err: err.message});
  }
});


app.put('/restorani/:id', async (req, res)=>{
  try {
      const {id} = req.params;
      const{naziv, adresa, broj_telefona, vrsta} = req.body;
      const azurirajRestoran = await Restoran.findByIdAndUpdate(id, {naziv, adresa, broj_telefona, vrsta}, {new: true});
      res.json(azurirajRestoran);
  } catch (err) {
      res.status (400).json ({error:err.message});
  }
});


app.delete('/restorani/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Restoran.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server sluša na portu ${port}`);
});

