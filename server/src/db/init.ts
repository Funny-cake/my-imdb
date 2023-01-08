import User from "./models/user.model.js";
//const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
    User.sync({ alter: false })
}

export default dbInit;