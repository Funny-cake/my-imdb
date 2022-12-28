import * as React from "react";
import styles from "./Home.scss";
import background from "../../assets/images/backgroundHome.png";

const Home = () => {
    const biStyle = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };

    return (
        <div className={styles.home} style={biStyle}>
            <h2>Home</h2>
        </div>
    )
}

export default Home;