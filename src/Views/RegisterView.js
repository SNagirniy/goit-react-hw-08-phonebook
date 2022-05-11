import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'Redux/auth/auth-operations';
import { StyledContainer, MainTitle, StyledButton } from 'components/helpers';
import s from './Form.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(operations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <StyledContainer>
      <MainTitle variant="h2">Create your account</MainTitle>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className={s.input}
          />
        </label>

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

        <StyledButton type="submit">Create account</StyledButton>
      </form>
    </StyledContainer>
  );
}
