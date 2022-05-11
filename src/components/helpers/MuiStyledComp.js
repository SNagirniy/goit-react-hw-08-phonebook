import { Container, styled, Typography, Button, Link } from '@mui/material';

export const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '50px',
});

export const MainTitle = styled(Typography)({
  marginBottom: '20px',
});

export const StyledButton = styled(Button)({
  marginTop: '15px',
  fontSize: 'large',
  padding: '10px 30px',
  border: '1px solid rgb(190, 195, 197)',
  backgroundColor: 'white',
  boxShadow:
    'rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset',
  borderRadius: '8px',
  transition: 'box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1)',

  '&:hover': {
    backgroundColor: 'white',
    boxShadow: 'rgb(209 211 211) 0px 10px 10px -5px;',
  },
});

export const StyledLink = styled(Link)({
  textDecoration: 'none',
  marginTop: '25px',
  fontSize: 'large',
  padding: '10px 30px',
  border: '1px solid rgb(190, 195, 197)',
  backgroundColor: 'white',
  boxShadow:
    'rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset',
  borderRadius: '8px',
  transition: 'box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1)',

  '&:hover': {
    boxShadow: 'rgb(209 211 211) 0px 10px 10px -5px;',
  },
  '&:last-child': { marginLeft: '10px' },
});

export const MenuButton = styled(Button)({
  marginLeft: '10px',
  fontSize: 'medium',
  padding: '5px 15px',
  border: '1px solid rgb(190, 195, 197)',
  backgroundColor: 'white',
  boxShadow:
    'rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset',
  borderRadius: '8px',
  transition: 'box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1)',

  '&:hover': {
    backgroundColor: 'white',
    boxShadow: 'rgb(209 211 211) 0px 10px 10px -5px;',
  },
});
