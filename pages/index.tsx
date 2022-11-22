import styles from "../styles/Home.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <li><Link href="user/login">Login</Link></li>
        <li><Link href="user/create">Create Account</Link></li>
      </ul>
    </div>
  );
}
