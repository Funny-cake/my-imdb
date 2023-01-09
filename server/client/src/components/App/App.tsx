import * as React from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./App.scss";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import Home from "../../pages/Home/Home";
import LoginPage from "../../pages/LoginPage/LoginPage";
import AdminPage from "../../pages/AdminPage/AdminPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import { ProtectedRoute, ProtectedRouteProps } from "../ProtectedRoute/ProtectedRoute";

import { Provider } from 'react-redux';
import store from '../../store';


const App = () => {
	const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
		authenticationPath: '/login',
		role: "admin"
	};

	return (
		<Provider store={store}>
			<div className={styles.app}>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/registration" element={<RegistrationPage />} />
					<Route path='/admin' element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<AdminPage />} />}>
					</Route>
				</Routes>
				<Footer />
			</div>
		</Provider>
	)
}

export default App;