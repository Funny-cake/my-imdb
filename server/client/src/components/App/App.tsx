import * as React from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./App.scss";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import Home from "../../pages/Home/Home";
import LoginPage from "../../pages/LoginPage/LoginPage";

const App = () => {
    return (
        <div className={styles.app}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;