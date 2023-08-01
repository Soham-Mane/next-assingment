import React from 'react'
import styles from "./Message2.module.css";
import Header from '../Header/Header';
import Image from 'next/image';
const Message2 = () => {
  return (
    <div className={styles.container} >
        <Header/>
    <div className={styles.today}>Today</div>
    <div className={styles.text1}>
        <div>Hello! How are you?</div>
       <span>09:25 AM</span> 
    </div>

        <Image src="/images/Rectangle 1092.png" width={44} height={44} className={styles.logo2} />
        <div className={styles.txt}>Hello ! Nazrul How are you? </div>
        <span className={styles.time1}>09:25 AM</span> 
    <div className={styles.text3}>
        <div>You did your job well</div>
        <span>09:25 AM</span> 
    </div>
   
        <Image src="/images/Rectangle 1092.png" width={44} height={44} className={styles.rec4} />

    
        <span className={styles.t1} >Have a great working week!!</span>
        <span className={styles.t2}>Hope you like it</span>
        <span className={styles.time4}>09:25 AM</span>
    <div className={styles.Frame}>
    <span>Write your message</span>
    <Image src="/images/send.png" className={styles.img1} width={24} height={24} />
    <Image src="/images/microphone-2.png" className={styles.img2} width={24} height={24} />
  </div>
    </div>
  )
}

export default Message2
