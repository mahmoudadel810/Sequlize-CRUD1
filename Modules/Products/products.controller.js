import productModel from "../../DB/models/product.model.js";
import { Sequelize } from "sequelize";



export const addproduct = async (req, res) =>
{
    try
    {
        const Product = await productModel.create(req.body);
        if (Product)
        {
            res.json({ message: "Done" });
        } else
        {
            res.json({ message: "Fail" });
        }
    } catch (error)
    {
        res.json({ message: "catch error" });
        console.log(error);

    }
};
//=============================deleteproduct======================================

export const deleteproduct = async (req, res) =>
{
    try
    {
        const {productid , userid} = req.body;
        
        const product = await productModel.findOne({
            where: {
                id: productid,
                tblUserId: userid
            }
        });
        if (product)
        {
            await product.destroy();
            res.json({ message: "Product deleted successfully" });
        } else
        {
            res.json({ message: "Unauthorized" });
        }
    } catch (error)
    {
        res.json({ message: 'Catch error ', err: error });
        console.log(error);
    }
};

//==================================updateProduct=======================================================

export const updateProduct = async (req, res) =>
{
    try
    {
        const{ productid , userid,name} = req.body;
        
        const product = await productModel.findOne({
            where: {
                id: productid,
                tblUserId: userid
            }
        });
        if (product)
        {
            await product.update(req.body);//product model.update
            productModel.update({ name:name}, {
                where: {
                    id: productid,
                }
            })
            res.json({ message: "Product updated successfully" });
        } else
        {
            res.json({ message: "Unauthorized" });
        }
    } catch (error)
    {
        res.json({ error });
        // console.log(error);
    }
};

//===============================getallproduct=====================================

export const getallproduct = async (req, res) =>
{
    const users = await productModel.findAll(); {
        try
        {
            if (users)
            {
                res.json({ Message: 'Thats All products In Data Base', users });
            }
            else
            {
                res.json('cant find the product');
            }
        }
        catch (error)
        {
            res.json({ message: 'Catch error', error: error });
        }
    };
};

//====================================greaterthan3000==============================

export const greaterthan3000 = async (req, res) =>
{
    try
    {
        const users = await productModel.findAll({
            where: {
                price: {
                    [Sequelize.Op.gt]: '3000'
                },
                
            },
        });
        if (users.length)
        {
            res.json({ message: 'These greater than 3K :', users: users });
        } else
        {
            res.json({ message: 'No Rows greater than 3K ..' });
        }
    } catch (error)
    {
        res.json({ message: 'Catch Error', error });
        console.log(error);
    }
};



