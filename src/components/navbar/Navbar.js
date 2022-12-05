import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <Link to='/' className={`${styles.navbarTitle} ${styles.navbarItem}`}>
        Hello World
      </Link>
      <Link to='/contact' className={`${styles.navbarItem}`}>
        Contact
      </Link>
      <Link to='/about' className={`${styles.navbarItem}`}>
        About Us
      </Link>
    </header>
  );
};
export default NavBar;
