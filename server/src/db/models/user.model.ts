import { DataTypes, Model, Optional, Sequelize } from "sequelize"
import sequelizeConnection from "../config.js"

interface IUser {
    id: number;
    name: string;
    email: string;
    hash: string;
    salt: string;
    lastLoginAt: Date;
    blockedAt: Date;
    deletedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    roles: string;
}

export interface IUserInput extends Optional<IUser, 'id'> { }
export interface IUserOutput extends Required<IUser> { }

class User extends Model<IUser, IUserInput> implements IUser {
    public id!: number;
    public name!: string;
    public email!: string;
    public hash!: string;
    public salt!: string;
    public lastLoginAt!: Date;
    public createdAt!: Date;
    public blockedAt!: Date;
    public updatedAt!: Date;
    public deletedAt!: Date;
    public roles: string;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(255)
    },
    email: {
        type: DataTypes.STRING(255)
    },
    hash: {
        type: DataTypes.STRING(64)
    },
    salt: {
        type: DataTypes.STRING(64)
    },
    lastLoginAt: {
        type: DataTypes.DATE
    },
    blockedAt: {
        type: DataTypes.DATE
    },
    deletedAt: {
        type: DataTypes.DATE
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    },
    roles: {
        type: DataTypes.STRING(255)
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
});

export default User;