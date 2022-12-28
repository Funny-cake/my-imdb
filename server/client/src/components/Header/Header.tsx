import * as React from 'react';
import { Link } from "react-router-dom";

import styles from "./Header.scss";

const Header = () => {
    return (
        <div className={styles.header}>
            <ul style={{ listStyleType: "", padding: 0 }}>
                <li>
                    <Link to="/">[Home]</Link>
                </li>
                <li>
                    <Link to="/login">[Login]</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;