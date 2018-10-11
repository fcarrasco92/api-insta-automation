const express = require('express');
const apiRoutes = express.Router();
const Instagram = require('../model/instagram');
//const jwt = require('jsonwebtoken');

apiRoutes.post('/insta', (req, res) => {
    const insta = new Instagram(req.body);
    Instagram.findOne({
        image: req.body.image
    }, (err, publication)=>{
        if (err){
            if(err){
                res.json({
                    success: false,
                    message: err.errors            
                });
                
            }
        }
        if(!publication){
            insta.save((err)=>{
                if(err){
                    res.json({
                        success: false,
                        message: err.errors            
                    });
                    
                }else{
                    res.json({
                        success: true,
                        message: "OK"            
                    });
                }        
            });    
        }else{
            res.json({
                success: false,
                message: "publicación ya ingresada"            
            });
        }
        
    });
    
});

apiRoutes.get('/insta', (req, res) => {
    Instagram.find({}, (err, insta)=>{
        if (err) throw err;
        res.json({
            success: true,
            message: "OK",
            insta
        });
    });
});

module.exports = apiRoutes;