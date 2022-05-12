import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import PhoneBookImage from '../images/PhoneBookImage.jpg';
import { StyledContainer, MainTitle, StyledLink } from 'components/helpers';

export default function HomePage() {
  return (
    <>
      <StyledContainer>
        <MainTitle variant="h2">Phonebook</MainTitle>
        <Box
          sx={{
            width: 200,
            height: 200,
          }}
        >
          <img src={PhoneBookImage} width="200px" alt="tittle" />
        </Box>
        <Typography textAlign={'center'} variant="subtitle1">
          Fast and Secure Friendly React Application
        </Typography>
        <StyledLink
          variant="button"
          to="/contacts"
          title="Try it now!"
          component={NavLink}
        >
          Try it now!
        </StyledLink>
      </StyledContainer>
    </>
  );
}
