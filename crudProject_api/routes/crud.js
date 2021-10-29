const express = require('express');
const router = express.Router();
const Crud = require('../models/Crud');

//first 
// router.get('/', (req, res) => {
//     res.send('You are in posts');
// });

// router.post('/', (req, res) => {
//     const crud = new Crud({
//         name: req.body.name,
//         email: req.body.email,
//         contactNo: req.body.contactNo,
//         position: req.body.position,
//         date: req.body.data
//     });

//     crud.save()
//         // .exec()
//         .then(data => {
//             res.json(data);
//         })
//         .catch(err => {
//             res.json({ message: err })
//         })
// });
//second

// // GETS BACK ALL THE POST
router.get('/', async(req, res) => {
    try {
        const crud = await Crud.find().limit(5);
        res.json(crud);
    } catch (err) {
        res.json({ message: err });
    }
});

// // SUBMIT THE POSTS
router.post('/', async(req, res) => {
    const crud = new Crud({
        name: req.body.name,
        email: req.body.email,
        contactNo: req.body.contactNo,
        position: req.body.position,
        date: req.body.date
    });
    try {
        const savedCrud = await crud.save();
        res.json(savedCrud);
    } catch (err) {
        res.json({ message: err });
    }
});

// SPECIFIC POST

router.get('/:id', async(req, res) => {
    try {
        const crud = await Crud.findById(req.params.id);
        res.json(crud);
    } catch (err) {
        res.json({ message: err });
    }
});

// DELETE Post

router.delete('/:id', async(req, res) => {
    try {
        const removedCrud = await Crud.remove({ _id: req.params.id });
        res.json(removedCrud);
    } catch (err) {
        res.json({ message: err });
    }
});

// PATH post

router.patch('/:id', async(req, res) => {
    try {
        const updateCrud = await Crud.updateOne({ _id: req.params.id }, { $set: { name: req.body.name } });
        res.json(updateCrud);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;