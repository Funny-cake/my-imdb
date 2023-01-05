import React, { useState } from 'react';
import styles from "./RegistrationPage.scss";
import AuthService from "../../services/auth.service";
import background from "../../assets/images/backgroundRegistration.png";
import { useNavigate } from "react-router-dom";
import { ILoginResult } from '../../core/interfaces';

const RegistrationPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [remeber, setRemember] = useState(false);
	const navigate = useNavigate();

	function onSubmit(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		if (email && password) {
			AuthService.login(email, password, remeber)
				.then((data: ILoginResult) => {
					if (data) {
						navigate("/");
					} else {
						console.error("Something went wrong!");
					}
				})
				.catch((err) => {
					console.error(err);
				});
		} else {
			console.error("Please provide full data.")
		}
	}	

	const biStyle = {
		backgroundImage: `url(${background})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	};

	return (
		<div className={styles.registrationPage} style={biStyle}>
			<div className={styles.container}>
				<form>
					<div className={"mb-3"}>
						<label htmlFor={"exampleInputEmail1"} className={"form-label"}>Email address</label>
						<input
							type="email"
							className={"form-control"}
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							value={email}
							onChange={e => setEmail(e.target.value)} />
					</div>
					<div className={"mb-3"}>
						<label htmlFor={"exampleInputPassword1"} className={"form-label"}>Password</label>
						<input
							type="password"
							className={"form-control"}
							id="exampleInputPassword1"
							value={password}
							onChange={e => setPassword(e.target.value)} />
					</div>
					{/* <div className={"mb-3 form-check"}>
						<input type="checkbox" className={"form-check-input"} id="exampleCheck1" />
						<label
							className={"form-check-label"}
							htmlFor={"exampleCheck1"}
							value={remeber}
							onChange={e => setRemember(e.target.value)}>Remember me</label>
					</div> */}
					<button type="submit" className={"btn btn-primary"} onClick={(e) => onSubmit(e)}>Sing in</button>
				</form>
			</div>
		</div>
	)
}

export default RegistrationPage;