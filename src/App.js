import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import PublicRoute from 'components/Routes/PublicRoute';
import PrivateRoute from 'components/Routes/PrivateRoute';
import { authSelectors } from './Redux/auth/auth-selectors';
import operations from 'Redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';

import PhonebookView from 'Views/PhonebookView';
import AppBar from 'components/appBar/AppBar';
import RegisterView from 'Views/RegisterView';
import LoginView from 'Views/LoginView';

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Routes>
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
        </Routes>
      </Suspense>
    </>
  );
}
