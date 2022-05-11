import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'Redux/auth/auth-operations';
import { StyledContainer, MainTitle, StyledButton } from 'components/helpers';
import s from './Form.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <StyledContainer>
      <MainTitle variant="h2">Log in to Phonebook</MainTitle>

      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={s.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={s.input}
          />
        </label>

        <StyledButton type="submit">Log In</StyledButton>
      </form>
    </StyledContainer>
  );
}
