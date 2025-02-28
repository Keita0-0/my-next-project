import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/news">blog</Link>
          </li>
          <li className={styles.item}>
            <Link href="/members">work</Link>
          </li>
          <li className={styles.item}>
            <Link href="/contact">contact(未実装)</Link>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>©︎ Keita0-0. All Rights Reserved 2025</p>
    </footer>
  );
}
