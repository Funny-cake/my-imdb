import User from "../models/user.model.js";
import { getHash, getSaltedHash } from "../../helpers/hash.helper.js";

const seedUsersAsync = async () => {
	await User.bulkCreate([
		{
			//id: 1,
			name: "Bruce Almighty",
			email: "admin@my-imdb.com",
			salt: getHash("12345"),
			hash: getSaltedHash("12345", getHash("12345")),
			roles: "admin,user"
		},
		{
			//id: 2,
			name: "Anton Dolin",
			email: "anton_dolin@my-imdb.com",
			salt: getHash("123"),
			hash: getSaltedHash("123", getHash("123")),
			roles: "user"
		},
		{
			//id: 3,
			name: "[Badcomedian]",
			email: "eugene_bajenov@my-imdb.com",
			salt: getHash("1234"),
			hash: getSaltedHash("1234", getHash("1234")),
			roles: "user"
		},
	]);
};

export default seedUsersAsync;