
import { Sequelize } from "sequelize";

export const sequelizeconn = new Sequelize("testss", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

export const connectionDB = async () =>
{
    return await sequelizeconn
        .sync({ alter: true, force:false})
        .then((res) =>
        {
            console.log("DBConnected.........");
        })
        .catch((err) =>
        {
            console.log({ message: "DB Connection fail", err: err });
        });
};