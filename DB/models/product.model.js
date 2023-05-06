import { DataTypes } from "sequelize";
import { sequelizeconn } from "../Connection.js";
import userModel from "./user.model.js";

const productModel = sequelizeconn.define(
    "tbl_product",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull : false
        },
        price: {
            type : DataTypes.INTEGER
        }
    },
    {
        timestamps: true
    }
);


userModel.hasMany(productModel, {
    foreignKey:'CreatedBy',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
productModel.belongsTo(userModel);

export default productModel;