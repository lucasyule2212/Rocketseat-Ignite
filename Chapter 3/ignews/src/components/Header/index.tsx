/* eslint-disable @next/next/no-img-element */
import Link from "next/Link";
import SignIn from "./SignIn";
import styles from "./styles.module.scss";
import { ActiveLink } from "./ActiveLink";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="logo ignews" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a className={styles.active}>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignIn />
      </div>
    </header>
  );
}
