import styles from "./AdminPage.scss";
import background from "../../assets/images/backgroundAdminPage.png";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { retrieveUsers, updateUser, deleteAllUsers, blockUser, blockAllUsers, deleteUser, unblockUser, unblockAllUsers } from "../../actions/users";
import AuthService from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { IUser, IUsersPageProps, IUsersPageState } from "../../core/interfaces"

const AdminPage = (props: any) => {
	const biStyle = {
		backgroundImage: `url(${background})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover'
	};

	const { users } = props;

	const [checked, setChecked] = useState([]);
	const [checkedAll, setCheckedAll] = useState(false);
	const navigate = useNavigate();


	useEffect(() => {
		props.retrieveUsers();
	}, []);

	const refreshData = () => {
		setChecked([]);
		setCheckedAll(false);
	}

	const onBlockClick = async () => {
		if (checkedAll) {
			await props.blockAllUsers()
				.then((response: any) => {
					props.retrieveUsers();
					refreshData();
				})
				.catch((e: any) => {
					console.error(e);
				});
		} else {
			const promises = checked.map((id) => props.blockUser(id));
			Promise
				.all(promises)
				.then((response: any) => {
					props.retrieveUsers();
					refreshData();
				})
				.catch((e: any) => {
					console.error(e);
				});
		}

		const currentUser = AuthService.currentUser();
		if (checkedAll || (currentUser && checked.indexOf(currentUser.id) != -1)) {
			AuthService.logout();
			navigate("/login");
		}
	};

	const onUnblockClick = async () => {
		if (checkedAll) {
			await props.unblockAllUsers()
				.then((response: any) => {
					props.retrieveUsers();
					refreshData();
				})
				.catch((e: any) => {
					console.error(e);
				});
		} else {
			const promises = checked.map((id) => props.unblockUser(id));

			Promise
				.all(promises)
				.then((response: any) => {
					props.retrieveUsers();
					refreshData();
				})
				.catch((e: any) => {
					console.error(e);
				});
		}
	};

	const onDeleteClick = () => {
		if (checkedAll) {
			props.deleteAllUsers()
				.then((response: any) => {
					props.retrieveUsers();
					refreshData();
				})
				.catch((e: any) => {
					console.error(e);
				});
		} else {
			const promises = checked.map((id) => props.deleteUser(id));
			Promise
				.all(promises)
				.then((response: any) => {
					props.retrieveUsers();
					refreshData();
				})
				.catch((e: any) => {
					console.error(e);
				});
		}

		const currentUser = AuthService.currentUser();
		if (checkedAll || (currentUser && checked.indexOf(currentUser.id) != -1)) {
			AuthService.logout();
			navigate("/login");
		}
	};

	const checkUser = (event: any) => {
		var updatedList = [...checked];
		var value = parseInt(event.target.value);
		if (event.target.checked) {
			updatedList = [...checked, value];
		} else {
			updatedList.splice(checked.indexOf(value), 1);
		}
		setChecked(updatedList);
	};

	const checkAll = (event: any) => {
		if (event.target.checked) {
			setCheckedAll(true);
		} else {
			setCheckedAll(false);
		}
	}

	const getStatus = (user: IUser) => {
		const blocked = !!user.blockedAt;
		const deleted = !!user.deletedAt;

		switch (true) {
			case !blocked && !deleted:
				return "ACTIVE";
			case blocked && !deleted:
				return "BLOCKED";
			case !blocked && deleted:
			case blocked && deleted:
				return "DELETED";
		}
	}

	return (
		<div className={styles.adminPage} style={biStyle}>
			<div className={"container"}>
				<div className={"toolbar"}>
					<button name="block" onClick={onBlockClick}>block</button>
					<button name="unblock" onClick={onUnblockClick}>unblock</button>
					<button name="delete" onClick={onDeleteClick}>delete</button>
				</div>
				<table className={"table"}>
					<thead className="thead-light">
						<tr>
							<th scope="col">
								<input
									type="checkbox"
									checked={checkedAll}
									onChange={checkAll} />
							</th>
							<th scope="col">id</th>
							<th scope="col">name</th>
							<th scope="col">mail</th>
							<th scope="col">registered</th>
							<th scope="col">last login</th>
							<th scope="col">status</th>
						</tr>
					</thead>
					<tbody>
						{users &&
							users.map((user: IUser, index: number) => (
								<tr key={index}>
									<th><input type="checkbox" value={user.id} checked={checked.indexOf(user.id) != -1} onChange={checkUser} /></th>
									<th scope="row">{user.id}</th>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.createdAt?.toString()}</td>
									<td>{user.lastLoginAt?.toString()}</td>
									<td>{getStatus(user)}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
const mapStateToProps = (state: IUsersPageState) => {
	return {
		users: state.users,
	};
};

export default connect(mapStateToProps, { retrieveUsers, updateUser, deleteAllUsers, blockUser, blockAllUsers, deleteUser, unblockUser, unblockAllUsers })(AdminPage);