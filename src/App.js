import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import PublicRoute from 'components/Routes/PublicRoute';
import PrivateRoute from 'components/Routes/PrivateRoute';
import { authSelectors } from './Redux/auth/auth-selectors';
import operations from 'Redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from 'components/Layout/Layout';

const HomePage = lazy(() => import('Views/HomePage'));
const RegisterView = lazy(() => import('Views/RegisterView'));
const LoginView = lazy(() => import('Views/LoginView'));
const PhonebookView = lazy(() => import('Views/PhonebookView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <Suspense fallback={<p>Загружаем...</p>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />

              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <PhonebookView />
                  </PrivateRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute>
                    <RegisterView />
                  </PublicRoute>
                }
              />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
}
