import { useDispatch, useSelector } from 'react-redux';
import operations from '../../Redux/auth/auth-operations';
import { authSelectors } from '../../Redux/auth/auth-selectors';
import { Typography, styled, Container, Avatar } from '@mui/material';
import { MenuButton } from 'components/helpers';

const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'baseline',
});

const StyledAvatar = styled(Avatar)({
  marginRight: '20px',
  backgroundColor: 'rgb(190, 195, 197)',
  boxShadow:
    'rgb(71 71 75 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(104 105 107 / 35%) 0px -2px 6px 0px inset',
});

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <StyledContainer>
      <StyledAvatar>{name[0]}</StyledAvatar>
      <Typography variant="h6">Wellcome, {name}</Typography>
      <MenuButton onClick={() => dispatch(operations.logOut())}>
        LogOut
      </MenuButton>
    </StyledContainer>
  );
}
