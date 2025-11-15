import { getAccessTokenSelector } from 'entities/User';
import { type FC, type ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getRouteSignIn } from 'shared/consts/router';
import { useAppSelector } from 'shared/lib/hooks/redux';

interface RequireAuthProps {
  children: ReactNode;
}

export const RequireAuth: FC<RequireAuthProps> = props => {
  const { children } = props;

  const accessToken = useAppSelector(getAccessTokenSelector);
  const location = useLocation();

  if (!accessToken)
    return (
      <Navigate replace to={getRouteSignIn()} state={{ from: location }} />
    );

  return children;
};
