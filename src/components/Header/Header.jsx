import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.Header}>
      <h1>Larica</h1>
      <ul className={styles.Header_list}>
        <li>
          <Link className={styles.Header_list_item} to="/">Portifolio</Link>
        </li>
        <li>
          <Link className={styles.Header_list_item} to="/cadastro">Entrar</Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
