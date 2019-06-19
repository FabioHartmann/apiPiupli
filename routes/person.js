const express = require('express');
const Sequelize = require('sequelize');
const logger = require('../config/logger');
const PersonModel = require('../model/Person');

const router = express.Router();

 router.get('/',  (req, res) =>{
     PersonModel.findAll()
    .then(people => res.json(people))
});

router.get('/:name', async (req, res) =>{
    await PersonModel.findOne({
        where:{
            name: req.params.name,
        }
    }).then(people => res.json(people))
});

router.post('/', (req, res) =>{
    const reqBody = req.body;
    if (reqBody) {
        PersonModel.create(req.body);
        res.sendStatus(201);
    }else{
        res.sendStatus(400);
    }
});


router.delete('/:id', async (req, res)=> {     
    await PersonModel.destroy({
        where: {
            id: req.params.id,
        }
    }).then(()=>{
        res.sendStatus(200);
    });   
});

router.put('/:id', async (req,res)=>{
    await PersonModel.update({
        id: req.body.id,
        // name: req.body.name,
        // email: req.body.email,
        // telefone: req.body.telefone,
        // foto: req.body.telefone
    },
        {   
         where:{
            id: req.params.id
        }
        
    }).then(()=>{
        res.sendStatus(200);
    });   
});
module.exports = router;

