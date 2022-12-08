import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome!</h1>
      <Link href="/Post">
        <button className={styles.cta}>
          <span className={styles.hoverUnderlineAnimation}> Ingresar </span>
          <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
          </svg>
        </button>
      </Link>
    </div>
  )
}
