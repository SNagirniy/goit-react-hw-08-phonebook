import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link, styled, Container } from '@mui/material';


const StyledLink = styled(Link)({
  textAlign: 'none',
  color: 'inherit',
  padding: '5px',
  marginRight: '10px',
});

const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'flex-end',
});

export default function AuthNav() {
  return (
    <StyledContainer>
      <StyledLink variant="h6" to="/register" component={NavLink}>
        Register
      </StyledLink>
      <StyledLink variant="h6" to="/login" component={NavLink}>
        Login
      </StyledLink>
    </StyledContainer>
  );
}
