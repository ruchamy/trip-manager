import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (

    <header className={`${styles.header} ${isHome ? styles.large : styles.small
      }`}>
    </header>
  );
}