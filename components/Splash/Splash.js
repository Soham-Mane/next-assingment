import React from 'react'
import styles from "./Splash.module.css";
import StatusBar from '../StatusBar/StatusBar';
import Image from 'next/image';
const Splash = () => {
  return (
    <>
        <StatusBar />
    <div className={styles.container}>
      <Image src="/images/MOkx logo 1.png" width={172} height={172} />
      <div className={styles.text}>
      <span>Back to Vedas 🕉️</span>
      </div>
    
    </div>
    </>

  )
}

export default Splash