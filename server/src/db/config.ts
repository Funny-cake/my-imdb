
import { Dialect, Sequelize } from 'sequelize'
import { getConstantsAsync } from "../services/constants.service";

const sequelizeConnection = new Sequelize('', '', '', {
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