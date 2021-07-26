const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

//Retrieve data
router.get('/contacts', (req, res, next)=>{
    Contact.find((err, contacts)=>{
        if(err){
            res.status(500).json({msg:'Something Went Wrong'})
        } else {
            res.status(200).json(contacts);
        }
    });
});

//add data
router.post('/contacts', (req, res, next)=>{
    const newContact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber
    });

    newContact.save((err,result)=>{
        if(err){
            res.status(500).json({msg:'Something Went Wrong'});
        } else{
            res.status(200).json(result);
        }
    });
});

router.delete('/contact/:id', (req, res, next)=>{
    //Logic to delete a contact
    Contact.remove({_id: req.params.id}, (err,result)=>{
        if(err){
            res.status(500).json({msg:'Something Went Wrong'})
        } else{
            res.status(200).send(result);
        }
    });
});

module.exports = router;