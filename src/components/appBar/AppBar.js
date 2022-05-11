import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from 'components/userMenu/userMenu';
import AuthNav from './authNav';
import { authSelectors } from '../../Redux/auth/auth-selectors';
import { AppBar, Container, Toolbar, styled } from '@mui/material';

const StyledToolBar = styled(Toolbar)({
  dispaly: 'flex',
  justifyContent: 'space-between',
});

export default function NavBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar position="static">
      <Container>
        <StyledToolBar>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </StyledToolBar>
      </Container>
    </AppBar>
  );
}
