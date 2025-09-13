import styles from './styles.module.css'

function Header() {
    return (
      <header className={styles.Header}> 
          <h1>Larica</h1>
          <ul className={styles.Header_list}>
            <li className={styles.Header_list_item}><a>Portifolio</a></li>
            <li className={styles.Header_list_item}><a>Entrar</a></li>
          </ul>
      </header>
    )
  }
  export default Header
  