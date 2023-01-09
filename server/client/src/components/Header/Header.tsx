import * as React from 'react';
import { Link } from "react-router-dom";

import styles from "./Header.scss";

const Header = () => {
	return (
		<div className={styles.header}>
			<ul style={{ listStyleType: "", padding: 0 }}>
				<li>
					<Link to="/home">[Home]</Link>
				</li>
				<li>
					<Link to="/login">[Login]</Link>
				</li>
				<li>
					<Link to="/registration">[Registration]</Link>
				</li>
				<li>
					<Link to="/admin">[Admin]</Link>
				</li>
			</ul>
		</div>
	)
}

export default Header;