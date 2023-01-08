
import { Dialect, Sequelize } from 'sequelize'
import { getConstantsAsync } from "../services/constants.service";

const sequelizeConnection = new Sequelize('04_admin_tool_bd', 'root', '1234', {
    dialect: 'mysql'
});
Sequelize.beforeConnect(async (config) => {
    const c = await getConstantsAsync();

    config.database = c.dbName;
    config.username = c.dbUser;
    config.password = c.dbPassword;
    config.host = c.dbHost;

    console.log(c);
});

export default sequelizeConnection;