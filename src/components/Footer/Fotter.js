import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <small className={s.text}>
        &copy; {new Date().getFullYear()} Developed by
        <a
          href="https://github.com/SNagirniy"
          target="_blank"
          rel="noopener noreferrer"
          title="Github profile"
          aria-label="Link to Github profile"
          className={s.link}
        >
          <span className={s.name}>SNagirnii</span>
        </a>
      </small>
    </footer>
  );
};

export default Footer;
