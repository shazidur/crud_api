const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('we are from posts new page ')
})


// POST 
router.post('/', (req, res) => {
    console.log('this is the Body part ---- >  ', req.body)
    // const post = new Post ({ 
    //     title : req.body.title,
    //     description : req.body.description
    // });
    // post.save()
    // .then( data => {
    //     res.json(data);
    // })
    // .catch(err => {
    //     res.json({ message: err})
    // })
})


module.exports = router;