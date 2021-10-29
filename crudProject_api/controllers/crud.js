const Crud = require('../models/Crud');


// @desc | Get all USERS
// @access  | public 

exports.getUsers = async(req, res, next) => {
    try {
        const cruds = await Crud.find();
        res.status(200).json({
            success: true,
            count: cruds.length,
            data: cruds
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// @desc | Get single user by ID
// @access | public

exports.getUser = async(req, res, next) => {
    try {
        const crudById = await Crud.findById(req.params.id);

        if (!crudById) {
            return res.status(400).json({
                success: false,
                message: 'No Data Found'
            })
        }
        res.status(200).json({
            success: true,
            data: crudById
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// @desc | add user
// access | public

exports.createUser = async(req, res, next) => {
    const crud = new Crud({
        name: req.body.name,
        email: req.body.email,
        contactNo: req.body.contactNo,
        position: req.body.position,
        date: req.body.date
    });
    try {
        const addCrud = await crud.save();
        res.status(201).json({
            success: true,
            data: addCrud
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// @desc | delete User 
// access | public

exports.deleteUser = async(req, res, next) => {
    try {
        const deleteCrud = await Crud.findByIdAndDelete(req.params.id);
        if (!deleteCrud) {
            res.status(400).json({
                success: false,
                message: 'No data found'
            })
        }
        res.status(200).json({
            success: true,
            data: deleteCrud
        });

    } catch (error) {
        res.res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

// @desc | update user
// access | public

exports.updateUser = async(req, res, next) => {
    try {
        const updateCrud = await Crud.findByIdAndUpdate(req.params.id,
            req.body, {
                new: true, //returns the updated value
                // runValidators = true
            });

        if (!updateCrud) {
            res.status(400).json({
                success: false,
                message: 'No data found'
            })
        }
        res.status(200).json({
            success: true,
            data: deleteCrud
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}