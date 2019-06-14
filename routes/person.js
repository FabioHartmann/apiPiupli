const express = require('express');
const logger = require('../config/logger');
const mongoose = require('mongoose');

const router = express.Router();
0
mongoose.connect('mongodb://localhost:27017/ListaTelefonica', { useNewUrlParser:true });

require('../model/Person');

const Person = mongoose.model('Person');

 router.get('/', async (req, res) =>{
    const persons = await Person.find();
     res.send(persons);
});

router.get('/:name', async (req, res) =>{
    const persons = await Person.find({name:req.body.name});
     res.send(persons);
});

router.post('/', (req, res) =>{
    const reqBody = req.body;
    if (reqBody) {
        Person.create(req.body);
        res.sendStatus(201);
    }else{
        res.sendStatus(400);
    }
});


router.delete('/:name', async (req, res)=> {     
    await Person.findOneAndRemove({name:req.params.name});
    res.sendStatus(200);
});
router.delete('/:name', async (req, res)=> {     
    await Person.findOneAndUpdate({name:req.params.name});
    res.sendStatus(200);
});

router.put('/:name', async (req,res)=>{
    await Person.findOneAndUpdate(req.params.name, req.body,{new:true} );
    return res.sendStatus(200);
});
module.exports = router;

