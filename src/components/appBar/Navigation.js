import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../Redux/auth/auth-selectors';
import { StyledLink } from 'components/helpers';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <StyledLink underline="hover" variant="h6" to="/" component={NavLink}>
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink variant="h6" to="/contacts" component={NavLink}>
          Contacts
        </StyledLink>
      )}
    </nav>
  );
};

export default Navigation;
