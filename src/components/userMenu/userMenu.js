import { useDispatch, useSelector } from 'react-redux';
import operations from '../../Redux/auth/auth-operations';
import { authSelectors } from '../../Redux/auth/auth-selectors';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => dispatch(operations.logOut())}>
        Выйти
      </button>
    </div>
  );
}
