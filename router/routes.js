const express = require('express');
const router = express.Router();

require('../db/conn');
const FormData = require("../model/formDataSchema");
const client = require('../smsService/smsService');

router.get('/', (req, res) =>{
    res.send(`hello`);
});

router.post('/submit', async (req, res) =>{
    //const { product_name, price, orderID, date, name, number, email, address, payment_details} = req.body
    try{
        const data = new FormData(req.body);
        await data.save();
        res.status(201).send(data);   
        client.messages
            .create({
                body: 'This is your token Number: ' + data.token,
                from: process.env.FROM_PHONE_NUMBER,
                to: "+91" + req.body.mobile.toString()
            })
            .then(message => console.log(message.sid)); 

    } catch(err) {
        console.log(err);
    }
    
    
})
module.exports = router;