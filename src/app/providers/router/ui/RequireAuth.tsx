import { getAccessTokenSelector } from 'entities/User';
import { type JSX } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getRouteSignIn } from 'shared/consts/router';
import { useAppSelector } from 'shared/lib/hooks/redux';

interface RequireAuthProps {
	children: JSX.Element;
}

export const RequireAuth = (props: RequireAuthProps) => {
	const { children } = props;

	const accessToken = useAppSelector(getAccessTokenSelector);
	const location = useLocation();

	if (!accessToken)
		return (
			<Navigate replace to={getRouteSignIn()} state={{ from: location }} />
		);

	return children;
};
