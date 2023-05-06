// import ConnectionDB from "../../DB/Connection.js"
import userModel from "../../DB/models/user.model.js";
import productModel from "../../DB/models/product.model.js";
import { Sequelize } from "sequelize";



export const addUser = async (req, res) =>
{
    const{ name , email , age }= req.body

    const user = await userModel.create(req.body);
    if (user.dataValues)
    {
        res.json({ message: "User Added" });
    } else
    {
        res.json({ message: "Fail" });
    }
};

//==========================updateUser==================================================

export const updateUser = async (req, res) =>
{
    const { id, name } = req.body;
    const user = await userModel.update(
        { name },
        {
            where: {
                id
            }
        }
    );
    // []
    if (user[0])
    {
        res.json({ message: "Done" });
    } else
    {
        res.json({ message: "Fail" });
    }
};

//==========================deleteUser================================================

export const deleteUser = async (req, res) =>
{
    const { id, name } = req.body;
    const user = await userModel.destroy({
        where: {
            id
        }
    });
    // []
    if (user[0])
    {
        res.json({ message: "Done" });
    } else
    {
        res.json({ message: "Fail" });
    }
};
//==================================searchUser============================================

export const searchUser = async (req, res) =>
{
    try
    {
        const users = await userModel.findAll({
            where: {
                name: {
                    [Sequelize.Op.like]: 'a%',
                },
                age: {
                    [Sequelize.Op.lt]: 30,
                },
            },
        });
        if (users)
        {
            res.json({message : 'User Found :',  users : users });
        } else
        {
            console.log({ message: 'Cant find user' });
        }
    } catch (error)
    {
        res.json({ message: 'Catch Error', error });
       
    }
};
//=================================searchByIds=======================================================

export const searchByIds = async (req, res) =>
{
    try
    {
        const ids = req.body.ids;
        const users = await userModel.findAll({
            where: {
                id: {
                    [Sequelize.Op.in]: ids , // send in []
                },
            },
        });
        if (users)
        {
            res.json({message : "Here's your request" ,  users });
        } else
        {
            console.log({ message: 'Cannot find User ' });
        }
    } catch (error)
    {
        res.json({ message: 'Catch Error ', err: error });
        console.log(error);
    }
};

//=================================getallUser=================================================================

export const getallUser = async (req, res) =>
{
    const users = await userModel.findAll(); {
        try
        {
            if (users)
            {
                res.json({ Message: 'Thats All Users In Data Base', users });
            }
            else
            {
                res.json('cant find the user');
            }
        }
        catch (error)
        {
           res.json({message:'Catch error' , error:error});
        }
    };
};

//===================================getAllUsersWithProducts====================================


export const getAllUsersWithProducts = async (req, res) =>
{
    try
    {
        const users = await userModel.findAll({
            include: [{
                model: productModel,
                as: 'tblUserId'
            }]
        });
        if (users)
        {
            res.json({message : 'These all Users With Products' , users:users });
        } else
        {
            res.json('NOT FOUND USER WITH PRODUCTS')
        }
    } catch (error)
    {
        res.json({ message: 'CATCH ERROR ', err: error });
        console.log(error);
    }
};

