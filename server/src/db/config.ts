
import { Dialect, Sequelize } from "sequelize";
import { getConstantsAsync } from "../services/constants.service.js";

const c = await getConstantsAsync();

console.log(c);

const sequelizeConnection = new Sequelize(c.dbName, c.dbUser, c.dbPassword, {
	dialect: c.dbDriver as Dialect,
	host: c.dbHost
});

// const sequelizeConnection = new Sequelize('04_admin_tool_bd', 'root', '1234', {
//     dialect: 'mysql'
// });
// Sequelize.beforeConnect(async (config) => {
//     const c = await getConstantsAsync();

//     config.database = c.dbName;
//     config.username = c.dbUser;
//     config.password = c.dbPassword;
//     config.host = c.dbHost;

//     console.log(c);
// });

export default sequelizeConnection;