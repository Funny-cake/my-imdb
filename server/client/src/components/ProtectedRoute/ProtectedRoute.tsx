import React from "react";
import { Navigate } from 'react-router-dom';
import authService from '../../services/auth.service';

export type ProtectedRouteProps = {
	isAuthenticated?: boolean;
	authenticationPath: string;
	outlet: JSX.Element;
	role: "user" | "admin"
};

export function ProtectedRoute({ authenticationPath, outlet, role }: ProtectedRouteProps) {
	const isAuthenticated = authService.currentUser();
	const isAuthorized = authService.isInRole(role);

	if (isAuthenticated && isAuthorized) {
		return outlet;
	} else {
		return <Navigate to={{ pathname: authenticationPath }} />;
	}
};
