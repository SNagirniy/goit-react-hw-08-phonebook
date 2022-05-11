import NavBar from 'components/appBar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <NavBar />

      <Outlet />
    </>
  );
};
