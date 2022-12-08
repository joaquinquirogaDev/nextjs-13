import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome!</h1>
      <Link href="/Post">
      <button class={styles.learnMore}>
        <span class={styles.circle} aria-hidden="true">
          <span class={styles.iconArrow}></span>
        </span>
        <span class={styles.buttonText}>Learn More</span>
      </button>
      </Link>
      </div>
  )
}
