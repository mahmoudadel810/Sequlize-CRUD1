import { DataTypes } from "sequelize";
import { sequelizeconn } from "../Connection.js";

  const userModel = sequelizeconn.define('tbl_User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        

        
    } ,

    name: {
        type: DataTypes.STRING,
        allowNull: false, 
        
        
    }, 
    
    email: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique : true 
    }, 
    age: {
        type : DataTypes.INTEGER 
    }
},
      { timestamps: true });
    
export default userModel