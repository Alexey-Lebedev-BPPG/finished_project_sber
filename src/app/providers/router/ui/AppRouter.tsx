import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { MainLayout } from 'pages/layouts/MainLayout';
import { RequireAuth } from './RequireAuth';
import { useMemo, type FC } from 'react';

export const AppRouter: FC = () => {
  const routes: RouteObject[] = useMemo(
    () =>
      Object.values(routeConfig).map(route => {
        const { children, element, path } = route;

        const routeObject: RouteObject = {
          element: route.authOnly ? (
            <RequireAuth>{element}</RequireAuth>
          ) : (
            route.element
          ),
          path,
        };

        if (Array.isArray(children))
          routeObject.children = children.map(child => ({
            element: child.authOnly ? (
              <RequireAuth>{child.element}</RequireAuth>
            ) : (
              child.element
            ),
            path: child.path,
          }));

        return routeObject;
      }),
    [],
  );

  const router = createBrowserRouter(
    [{ children: routes, element: <MainLayout /> }],
    { basename: '/' },
  );

  return <RouterProvider router={router} />;
};
