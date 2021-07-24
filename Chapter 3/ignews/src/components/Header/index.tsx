import SignIn from './SignIn';
import styles from './styles.module.scss';
export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="logo ignews"/>
        <nav>
          <a href="" className={styles.active}>Home</a>
          <a href="">Posts</a>
        </nav>
        <SignIn/>
      </div>
    </header>
  );
}