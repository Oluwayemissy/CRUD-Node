const usersQueries = require("../queries/users.queries");
const db = require('../config/config');

const createUsers = async (req, res) => {
    let { first_name, last_name, email_address, phone_number, password, confirm_password } = req.body

    try {
        const users = await db.any(usersQueries.createUsers, [first_name, last_name, email_address, phone_number, password, confirm_password])
    
        return res.status(200).json({
            status: 'success',
            message: 'user created successfully',
            data: users
        })

    } catch (error) {
        console.log(error)
    }
}

const fetchAllUsers = async (req, res) => {
    try {
        const users = await db.any(usersQueries.getAllUsers)
        return res.status(200).json({
            status: 'Success',
            message: 'Users Fetched Succesfully',
            data: users
        });
    } catch (error) {
        console.log(error)
        return error;
    }
}

const getOneUser = async (req, res) => {
    let { id } = req.params
    try {
        const user = await db.oneOrNone(usersQueries.getOneUser, [id])
        if(!user){
            return res.status(400).json({
                status: 'failed',
                message: 'User does not exit'
            });
        }
        return res.status(200).json({
            status: 'Success',
            message: 'User Fetched Succesfully',
            data: user
        });
    } catch (error) {
        console.log(error)
        return error;
    }
}


const updateUser = async (req, res) => {
    let { id } = req.params;
    let { first_name, phone_number, } = req.body;
    
    try {
        const user = await db.oneOrNone(usersQueries.updateUser, [first_name, phone_number, id])
        return res.status(200).json({
            status: 'Success',
            message: 'User Updated',
            data: user
        })
    } catch (error) {
        if (error) {
            console.log(error)
            return error;
        }
    }
}

const deleteUser = async (req, res) => {
    try {
        let { id } = req.params;
        const existingId = await db.oneOrNone(usersQueries.getOneUser, [id]);
        if (!existingId) {
            return res.status(400).json({
                status: 'Failed',
                message: `User with id:${id} does not exist`
            })
        } await db.none(usersQueries.deleteUser, [id])
        return res.status(200).json({
            status: 'Success',
            message: `User with id:${id} deleted`,
        })

    } catch (err) {
        console.log(err)
        return err;
    }
}


module.exports = {
    createUsers,
    fetchAllUsers,
    getOneUser,
    updateUser,
    deleteUser
}